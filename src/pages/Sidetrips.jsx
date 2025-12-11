import { useState, useEffect } from 'react'
import sidetrips from '../data/sidetrips'
import ImageViewer from '../components/ImageViewer'
import { getImage, getVideo, getVideoSync, isVideo } from '../utils/imageLoader'

export default function Sidetrips() {
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [mediaTypes, setMediaTypes] = useState(null)
  const [startIndex, setStartIndex] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const [videoUrls, setVideoUrls] = useState({})

  // Preload video URLs on component mount
  useEffect(() => {
    const loadAllVideos = async () => {
      const allTrips = [...sidetrips.cebu, ...sidetrips.bohol, ...sidetrips.manila]
      const videoPromises = allTrips
        .filter(t => t.type === 'video' || isVideo(t.media))
        .map(async (t) => {
          const url = await getVideo(t.media)
          return { filename: t.media, url }
        })
      
      const loaded = await Promise.all(videoPromises)
      const urlMap = {}
      loaded.forEach(({ filename, url }) => {
        if (url) urlMap[filename] = url
      })
      setVideoUrls(urlMap)
    }
    loadAllVideos()
  }, [])

  const handleCloseViewer = () => {
    setIsViewerOpen(false)
    setSelectedMedia(null)
    setMediaTypes(null)
    setStartIndex(0)
  }

  const handleMediaClick = (trip, location) => {
    // Get all media from the same location
    const locationTrips = sidetrips[location]
    const media = []
    const types = []
    let clickedIndex = -1
    
    // Build media array and track the index of the clicked item
    locationTrips.forEach((t, idx) => {
      // Check if this is the clicked item (compare by reference or by all properties)
      const isClickedItem = t === trip || (
        t.id === trip.id && 
        t.media === trip.media && 
        t.location === trip.location
      )
      
      if (t.type === 'video' || isVideo(t.media)) {
        // Try cached URL first, then load
        const videoSrc = videoUrls[t.media] || getVideo(t.media)
        if (videoSrc) {
          if (isClickedItem && clickedIndex === -1) {
            clickedIndex = media.length
          }
          media.push(videoSrc)
          types.push('video')
          // Cache it if not already cached
          if (!videoUrls[t.media]) {
            setVideoUrls(prev => ({ ...prev, [t.media]: videoSrc }))
          }
        } else {
          console.warn(`Video not found: ${t.media}`)
        }
      } else {
        const imageSrc = getImage(t.media) || t.media
        if (imageSrc) {
          if (isClickedItem && clickedIndex === -1) {
            clickedIndex = media.length
          }
          media.push(imageSrc)
          types.push('image')
        }
      }
    })
    
    setSelectedMedia(media)
    setMediaTypes(types)
    setStartIndex(clickedIndex >= 0 ? clickedIndex : 0)
    setIsViewerOpen(true)
  }

  const renderLocationSection = (location, trips, locationName) => {
    return (
      <div key={location} className="sidetrips-location-section">
        <h4 className="sidetrips-location-title">{locationName}</h4>
        <div className="sidetrips-grid">
          {trips.map((trip) => {
            const isVideoFile = trip.type === 'video' || isVideo(trip.media)
            const mediaSrc = isVideoFile 
              ? (videoUrls[trip.media] || getVideoSync(trip.media) || null)
              : (getImage(trip.media) || trip.media)
            
            return (
              <div 
                key={trip.id} 
                className="sidetrip-item"
                onClick={() => handleMediaClick(trip, location)}
              >
                <div className={`sidetrip-media ${isVideoFile ? 'sidetrip-video' : 'sidetrip-image'}`}>
                  {isVideoFile ? (
                    mediaSrc ? (
                      <video
                        src={mediaSrc}
                        muted
                        playsInline
                        preload="metadata"
                        className="sidetrip-thumbnail"
                        onLoadedMetadata={(e) => {
                          // Try to set a frame as thumbnail
                          e.target.currentTime = 0.1
                        }}
                        onError={(e) => {
                          console.error(`Video error for ${trip.media}:`, e)
                          e.target.style.display = 'none'
                        }}
                      >
                        <source src={mediaSrc} type="video/mp4" />
                      </video>
                    ) : (
                      <div className="sidetrip-thumbnail" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255,255,255,0.1)',
                        color: 'var(--muted)',
                        fontSize: '0.9rem'
                      }}>
                        Video not found
                      </div>
                    )
                  ) : (
                    <img 
                      src={mediaSrc} 
                      alt={trip.title}
                      className="sidetrip-thumbnail"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23333" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage%3C/text%3E%3C/svg%3E'
                      }}
                    />
                  )}
                  <div className="sidetrip-overlay">
                    {isVideoFile ? (
                      <span className="sidetrip-play-icon">▶</span>
                    ) : (
                      <span>View</span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <main className="page">
      <div className="section-header">
        <div>
          <div className="section-eyebrow">Gallery</div>
          <h3 className="section-title">Sidetrips</h3>
        </div>
        <span className="pill">Memories · Adventures · Experiences</span>
      </div>
      {renderLocationSection('cebu', sidetrips.cebu, 'CEBU')}
      {renderLocationSection('bohol', sidetrips.bohol, 'BOHOL')}
      {renderLocationSection('manila', sidetrips.manila, 'MANILA')}
      {selectedMedia && (
        <ImageViewer
          images={selectedMedia}
          isOpen={isViewerOpen}
          onClose={handleCloseViewer}
          startIndex={startIndex}
          mediaTypes={mediaTypes}
        />
      )}
    </main>
  )
}

