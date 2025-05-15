import React from 'react';
import { NewsArticle } from '../types';
import { ThumbsUp, ThumbsDown, Minus } from 'lucide-react';
import { useComicImage } from '../utils/useComicImage'; // ✅ move import here

interface NewsPanelProps {
  article: NewsArticle;
}

const getSentimentIcon = (sentiment: string | undefined) => {
  switch (sentiment) {
    case 'positive':
      return <ThumbsUp className="w-6 h-6 text-green-500" />;
    case 'negative':
      return <ThumbsDown className="w-6 h-6 text-red-500" />;
    default:
      return <Minus className="w-6 h-6 text-gray-500" />;
  }
};

export const NewsPanel: React.FC<NewsPanelProps> = ({ article }) => {
  const comicImage = useComicImage(article.urlToImage); // ✅ call the hook at the top

  return (
    <article className="comic-panel p-4 rounded-xl border-4 border-black bg-white shadow-md hover:shadow-xl transition-transform duration-200 cursor-pointer">
      {comicImage && (
        <div className="news-image mb-4">
          <img
            src={comicImage}
            alt={article.title}
            className="w-full h-40 sm:h-48 md:h-52 object-cover rounded"
          />
        </div>
      )}
      
      <h2 className="text-base sm:text-lg md:text-xl font-bold comic-font mb-2">
        {article.title}
      </h2>
      
      <div className="text-sm sm:text-base text-gray-800 leading-relaxed mb-4">
        {article.description}
      </div>
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-4 border-t border-black gap-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-bold uppercase">{article.source.name}</span>
          {getSentimentIcon(article.sentiment)}
        </div>
        <a 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 text-sm font-bold uppercase text-center hover:bg-gray-800 w-full sm:w-auto"
        >
          Read Full Story
        </a>
      </div>
    </article>
  );
};
