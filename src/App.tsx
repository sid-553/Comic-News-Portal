import React, { useState, useEffect } from 'react';
import { Newspaper } from 'lucide-react';
import { NewsPanel } from './components/NewsPanel';
import { CategoryFilter } from './components/CategoryFilter';
import { NewsArticle, NewsCategory } from './types';
import { analyzeSentiment } from './utils/sentiment';

function App() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNews();
  }, [selectedCategory]);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = import.meta.env.VITE_NEWS_API_KEY;
      if (!apiKey) {
        throw new Error('Missing API key. Please set VITE_NEWS_API_KEY in your environment variables.');
      }

      const baseUrl = '/newsapi/v2/top-headlines';
      const params = new URLSearchParams({
        country: 'us',
        apiKey,
        ...(selectedCategory && { category: selectedCategory }),
      });

      const response = await fetch(`${baseUrl}?${params}`);

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid API key. Please check your NEWS_API_KEY environment variable.');
        } else if (response.status === 426) {
          throw new Error('API requires HTTPS. Please ensure you\'re using a secure connection.');
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data?.articles) {
        throw new Error('Invalid API response format');
      }

      if (data.articles.length === 0) {
        console.log('No articles found for the current category. Using mock data.');
        throw new Error('No articles found');
      }

      const articlesWithSentiment = await Promise.all(
        data.articles.map(async (article: NewsArticle) => ({
          ...article,
          sentiment: await analyzeSentiment(article.title + ' ' + (article.description || '')),
        }))
      );

      setArticles(articlesWithSentiment);
    } catch (error: any) {
      console.error('Error fetching news:', error.message);
      setError(error.message);
      setArticles([
        {
          title: "AI Breakthrough: Neural Networks Show Human-like Learning",
          description: "Scientists have developed a new neural network architecture that demonstrates unprecedented learning capabilities, marking a significant step forward in artificial intelligence research.",
          url: "https://example.com/ai-breakthrough",
          urlToImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
          publishedAt: "2024-03-15",
          source: { name: "Tech Daily" },
          sentiment: "positive",
        },
        {
          title: "Global Climate Summit Reaches Historic Agreement",
          description: "World leaders have unanimously agreed to ambitious new climate targets at the latest summit, setting a precedent for international cooperation on environmental issues.",
          url: "https://example.com/climate-summit",
          urlToImage: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90",
          publishedAt: "2024-03-15",
          source: { name: "World News" },
          sentiment: "positive",
        },
        {
          title: "Market Volatility Raises Economic Concerns",
          description: "Global markets experienced significant turbulence as investors react to geopolitical tensions and inflation concerns, leading to widespread uncertainty.",
          url: "https://example.com/market-volatility",
          urlToImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
          publishedAt: "2024-03-15",
          source: { name: "Financial Times" },
          sentiment: "negative",
        },
        {
          title: "Revolutionary Clean Energy Project Launches",
          description: "A groundbreaking renewable energy initiative promises to power millions of homes using innovative solar technology, marking a major milestone in sustainable development.",
          url: "https://example.com/clean-energy",
          urlToImage: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0",
          publishedAt: "2024-03-15",
          source: { name: "Energy News" },
          sentiment: "positive",
        },
      ]);
    }
    setLoading(false);
  };

  const handleSimilarClick = (selectedArticle: NewsArticle) => {
    const keywords = selectedArticle.title.toLowerCase().split(/\s+/).filter(w => w.length > 3);
    const keywordMatch = (text: string) => keywords.some(k => text.toLowerCase().includes(k));
    const filtered = articles.filter(article =>
      article !== selectedArticle &&
      (article.category === selectedArticle.category || keywordMatch(article.title) || keywordMatch(article.description || ''))
    );
    setArticles([selectedArticle, ...filtered]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="newspaper-header">
        <div className="container mx-auto px-4">
          <div className="border-b-2 border-black pb-2 mb-4">
            <div className="text-center text-sm uppercase tracking-wider">Vol. 1 No. 1</div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Newspaper className="w-12 h-12" />
            <h1 className="newspaper-title">ComicChronicle</h1>
          </div>
          <div className="text-center text-sm uppercase tracking-wider mt-2">
            "Your Daily Dose of News, with a Twist!"
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-2xl mx-auto block px-4 py-2 border-2 border-black"
          />
        </div>

        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {error && (
          <div className="text-red-600 text-center mb-4">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-black"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
            {filteredArticles.map((article, index) => (
              <NewsPanel key={index} article={article} onSelectSimilar={handleSimilarClick} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
