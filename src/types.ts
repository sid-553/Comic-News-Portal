export interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
  sentiment?: 'positive' | 'negative' | 'neutral';
}

export type NewsCategory = 'technology' | 'politics' | 'sports' | 'entertainment' | 'business' | 'health';