import { defineConfig } from "vite"

export default defineConfig({
  root: './src',
  base: '/',
  build: {
    root: './',
    outDir: '../dist',
    watch: true
  },
  css: {
    devSourcemap: true
  },
  assetsInclude: [
    // images
    '.apng', '.png', '.jpe?g', '.jfif', '.pjpeg', '.pjp', '.gif', '.svg', '.ico', '.webp', '.avif',
    // media
    '.mp4', '.webm', '.ogg', '.mp3', '.wav', '.flac', '.aac', '.opus',
    // fonts
    '.woff2?', '.eot', '.ttf', '.otf',
    // other
    'webmanifest', 'pdf', 'txt'
  ]
});