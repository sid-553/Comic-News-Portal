import * as tf from '@tensorflow/tfjs';

// Simple sentiment analysis using TensorFlow.js
export async function analyzeSentiment(text: string): Promise<'positive' | 'negative' | 'neutral'> {
  // This is a simplified version. In production, you'd want to use a proper pre-trained model
  const positiveWords = ['good', 'great', 'excellent', 'positive', 'success', 'win', 'breakthrough'];
  const negativeWords = ['bad', 'terrible', 'poor', 'negative', 'fail', 'crisis', 'disaster'];

  const words = text.toLowerCase().split(' ');
  const positiveCount = words.filter(word => positiveWords.includes(word)).length;
  const negativeCount = words.filter(word => negativeWords.includes(word)).length;

  if (positiveCount > negativeCount) return 'positive';
  if (negativeCount > positiveCount) return 'negative';
  return 'neutral';
}