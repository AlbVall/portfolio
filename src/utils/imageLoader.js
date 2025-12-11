// Helper function to get image path from assets folder
// This allows using image filenames directly without importing each one
export const getImagePath = (filename) => {
  // For Vite, we can use dynamic imports with import.meta.glob
  // This will be handled at build time
  try {
    // Return the path that will be resolved by Vite
    // Images in assets folder can be referenced this way
    return new URL(`../assets/${filename}`, import.meta.url).href
  } catch (error) {
    console.warn(`Image not found: ${filename}`)
    return null
  }
}

// Alternative: Use Vite's glob import to preload all images
const imageModules = import.meta.glob('../assets/*.{jpg,jpeg,png,svg,gif,webp}', { 
  eager: true,
  import: 'default'
})

// Create a map of filename to image URL
const imageMap = {}
Object.keys(imageModules).forEach((path) => {
  const filename = path.split('/').pop()
  imageMap[filename] = imageModules[path]
})

export const getImage = (filename) => {
  return imageMap[filename] || null
}

// Video loader: Use Vite's URL constructor for videos
// Videos in Vite can be loaded using new URL() which works at runtime
const videoUrlCache = {}

// Helper function to get video path from assets folder using URL constructor
export const getVideoPath = (filename) => {
  try {
    // This is the correct way to import assets in Vite
    return new URL(`../assets/${filename}`, import.meta.url).href
  } catch (error) {
    console.warn(`Video path error for ${filename}:`, error)
    return null
  }
}

// Function to load video URL (synchronous)
export const getVideo = (filename) => {
  // Check cache first
  if (videoUrlCache[filename]) {
    return videoUrlCache[filename]
  }
  
  // Use URL constructor - this works in Vite
  const url = getVideoPath(filename)
  if (url) {
    videoUrlCache[filename] = url
  }
  return url
}

// Synchronous version (same as getVideo)
export const getVideoSync = (filename) => {
  return getVideo(filename)
}

// Helper to check if a file is a video
export const isVideo = (filename) => {
  if (!filename) return false
  const ext = filename.toLowerCase().split('.').pop()
  return ['mp4', 'webm', 'mov'].includes(ext)
}

