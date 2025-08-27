# Assets Integration Guide

This project has been updated to support various file types with proper TypeScript integration and optimized build configuration.

## 📁 File Structure

```
public/
├── assets/
│   ├── images/          # Profile pictures, project images, icons
│   ├── fonts/           # Custom fonts (if needed)
│   ├── videos/          # Video files
│   └── audio/           # Audio files
```

## 🖼️ Image Files

### Supported Formats
- `.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`, `.webp`, `.bmp`, `.ico`

### Usage in Components
```tsx
import { getAssetPath } from '../utils/fileUtils';

// In your component
<img 
  src={getAssetPath('image.jpeg', 'images')}
  alt="Description"
  className="w-full h-full object-cover"
/>
```

### Profile Image Setup
1. Place your profile image in `public/assets/images/`
2. Name it `image.jpeg` (or update the path in Hero.tsx)
3. The component will automatically handle fallback to initials if the image fails to load

## 🎥 Video Files

### Supported Formats
- `.mp4`, `.webm`, `.avi`, `.mov`, `.mkv`

### Usage
```tsx
<video 
  src={getAssetPath('video.mp4', 'videos')}
  controls
  className="w-full"
/>
```

## 🎵 Audio Files

### Supported Formats
- `.mp3`, `.wav`, `.ogg`, `.aac`, `.flac`

### Usage
```tsx
<audio 
  src={getAssetPath('audio.mp3', 'audio')}
  controls
/>
```

## 🔤 Font Files

### Supported Formats
- `.woff`, `.woff2`, `.ttf`, `.otf`, `.eot`

### Usage
```css
@font-face {
  font-family: 'CustomFont';
  src: url('/assets/fonts/custom-font.woff2') format('woff2');
}
```

## 📄 Document Files

### Supported Formats
- `.pdf`, `.doc`, `.docx`, `.txt`, `.md`

### Usage
```tsx
<a href={getAssetPath('document.pdf', 'documents')} target="_blank">
  Download PDF
</a>
```

## 🛠️ Utility Functions

### File Type Checking
```tsx
import { isImageFile, isVideoFile, isAudioFile } from '../utils/fileUtils';

if (isImageFile('photo.jpg')) {
  // Handle image file
}
```

### Asset Path Generation
```tsx
import { getAssetPath, getOptimizedImagePath } from '../utils/fileUtils';

// Basic path
const imagePath = getAssetPath('photo.jpg', 'images');

// Optimized path with dimensions
const optimizedPath = getOptimizedImagePath('photo.jpg', 300, 200);
```

### Error Handling
```tsx
import { handleAssetError } from '../utils/fileUtils';

<img 
  src={getAssetPath('image.jpg', 'images')}
  onError={(e) => {
    const target = e.target as HTMLImageElement;
    handleAssetError(e.nativeEvent, fallbackElement);
  }}
/>
```

## ⚙️ Build Configuration

The Vite configuration has been updated to:
- Organize assets by type during build
- Optimize image loading
- Provide proper TypeScript support for all file types
- Generate hashed filenames for cache busting

## 🚀 Getting Started

1. **Add your profile image:**
   ```bash
   cp your-image.jpeg public/assets/images/image.jpeg
   ```

2. **Add project images:**
   ```bash
   cp project-screenshot.png public/assets/images/
   ```

3. **Update component references:**
   ```tsx
   src={getAssetPath('your-image.jpeg', 'images')}
   ```

## 📝 TypeScript Support

All file types are properly declared in `src/vite-env.d.ts` for full TypeScript support and IntelliSense.

## 🔧 Customization

You can extend the file types by:
1. Adding new extensions to `FILE_TYPES` in `src/utils/fileUtils.ts`
2. Adding corresponding module declarations in `src/vite-env.d.ts`
3. Updating the Vite configuration if needed 