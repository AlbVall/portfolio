import { useState, useEffect, useRef } from 'react'

export default function ImageViewer({ images, isOpen, onClose, startIndex = 0, mediaTypes = null }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex)
  const videoRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(startIndex)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      // Pause video when closing
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, startIndex])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, images.length, onClose])

  // Pause video when switching media
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }, [currentIndex])

  if (!isOpen || !images || images.length === 0) return null

  const currentMedia = images[currentIndex]
  const currentType = mediaTypes ? mediaTypes[currentIndex] : 'image'
  const isVideo = currentType === 'video'

  return (
    <div className="image-viewer-overlay" onClick={onClose}>
      <div className="image-viewer-container" onClick={(e) => e.stopPropagation()}>
        <button className="image-viewer-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        {images.length > 1 && (
          <>
            <button
              className="image-viewer-nav image-viewer-prev"
              onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              className="image-viewer-nav image-viewer-next"
              onClick={() => setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
              aria-label="Next"
            >
              ›
            </button>
          </>
        )}
        <div className="image-viewer-content">
          {isVideo ? (
            <video
              ref={videoRef}
              src={currentMedia}
              controls
              className="image-viewer-image image-viewer-video"
              autoPlay
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={currentMedia} alt={`Media ${currentIndex + 1} of ${images.length}`} className="image-viewer-image" />
          )}
          {images.length > 1 && (
            <div className="image-viewer-counter">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

