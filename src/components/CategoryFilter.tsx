import React from 'react';
import { NewsCategory } from '../types';

interface CategoryFilterProps {
  selectedCategory: NewsCategory | null;
  onSelectCategory: (category: NewsCategory | null) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onSelectCategory }) => {
  const categories: NewsCategory[] = ['technology', 'politics', 'sports', 'entertainment', 'business', 'health'];

  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 uppercase text-sm font-bold transition-colors border-2 border-black
          ${!selectedCategory ? 'bg-black text-white' : 'bg-white text-black'}`}
      >
        All News
      </button>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 uppercase text-sm font-bold transition-colors border-2 border-black
            ${selectedCategory === category ? 'bg-black text-white' : 'bg-white text-black'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};