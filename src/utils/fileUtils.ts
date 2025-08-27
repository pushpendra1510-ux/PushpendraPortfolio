// File type utilities for handling different asset types

export const FILE_TYPES = {
  IMAGES: ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.bmp', '.ico'],
  VIDEOS: ['.mp4', '.webm', '.avi', '.mov', '.mkv'],
  AUDIO: ['.mp3', '.wav', '.ogg', '.aac', '.flac'],
  DOCUMENTS: ['.pdf', '.doc', '.docx', '.txt', '.md'],
  FONTS: ['.woff', '.woff2', '.ttf', '.otf', '.eot'],
} as const;

export const isImageFile = (filename: string): boolean => {
  const extension = filename.toLowerCase().substring(filename.lastIndexOf('.'));
  return FILE_TYPES.IMAGES.includes(extension as any);
};

export const isVideoFile = (filename: string): boolean => {
  const extension = filename.toLowerCase().substring(filename.lastIndexOf('.'));
  return FILE_TYPES.VIDEOS.includes(extension as any);
};

export const isAudioFile = (filename: string): boolean => {
  const extension = filename.toLowerCase().substring(filename.lastIndexOf('.'));
  return FILE_TYPES.AUDIO.includes(extension as any);
};

export const getFileExtension = (filename: string): string => {
  return filename.toLowerCase().substring(filename.lastIndexOf('.') + 1);
};

export const getAssetPath = (filename: string, type: 'images' | 'fonts' | 'videos' | 'audio' = 'images'): string => {
  return `/assets/${type}/${filename}`;
};

// Image optimization utilities
export const getOptimizedImagePath = (filename: string, width?: number, height?: number): string => {
  const basePath = getAssetPath(filename, 'images');
  if (width && height) {
    return `${basePath}?w=${width}&h=${height}`;
  }
  return basePath;
};

// Error handling for assets
export const handleAssetError = (event: Event, fallbackElement?: HTMLElement): void => {
  const target = event.target as HTMLImageElement | HTMLVideoElement | HTMLAudioElement;
  
  if (target instanceof HTMLImageElement) {
    target.style.display = 'none';
    if (fallbackElement) {
      fallbackElement.style.display = 'flex';
    }
  }
  
  console.warn(`Failed to load asset: ${target.src}`);
}; 