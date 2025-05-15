import { useEffect, useState } from 'react';

export const useComicImage = (src: string): string | null => {
  const [comicSrc, setComicSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onerror = () => {
      console.warn('Comic filter failed, using original image.');
      setComicSrc(src);
    };
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = img.width;
      const height = img.height;
      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0);

      // Posterize effect
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        for (let j = 0; j < 3; j++) {
          data[i + j] = Math.floor(data[i + j] / 64) * 64; // reduce color depth
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setComicSrc(canvas.toDataURL());
    };
  }, [src]);

  return comicSrc;
};
