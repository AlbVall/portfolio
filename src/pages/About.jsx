import { useState } from 'react'
import { getImage } from '../utils/imageLoader'
import ImageViewer from '../components/ImageViewer'

export default function About() {
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const certificateImage = getImage('Certificate.jpg') || 'Certificate.jpg'

  const handleCertificateClick = () => {
    setIsViewerOpen(true)
  }

  const handleCloseViewer = () => {
    setIsViewerOpen(false)
  }

  return (
    <main className="page page-about">
      <div className="section-header">
        <div>
          <div className="section-eyebrow">About</div>
          <h3 className="section-title">Albert Vallente</h3>
        </div>
      </div>
      <div className="about">
        <div className="about-info">
          <div className="info-item">
            <strong>Name:</strong>
            <span>Albert Vallente</span>
          </div>
          <div className="info-item">
            <strong>School:</strong>
            <span>Holy Cross of Davao College</span>
          </div>
          <div className="info-item">
            <strong>Course:</strong>
            <span>BSIT (Bachelor of Science in Information Technology)</span>
          </div>
          <div className="info-item">
            <strong>Year Level:</strong>
            <span>3rd Year</span>
          </div>
          <div className="info-item">
            <strong>Age:</strong>
            <span>22 years old</span>
          </div>
          <div className="info-item">
            <strong>Educational Tour:</strong>
            <span>Cebu-Bohol Educational Tour - Batch 2</span>
          </div>
        </div>
        <p>
          This portfolio documents my participation in the Cebu-Bohol Educational Tour as part of Batch 2. 
          Through this journey, I've gained valuable insights into technology, culture, and collaborative learning 
          while exploring the beautiful regions of Cebu and Bohol.
        </p>
        <p>
          As a 3rd year BSIT student, I'm passionate about applying technology to solve real-world problems 
          and documenting experiences that contribute to both personal and academic growth.
        </p>
        
        <div className="certificate-section">
          <h4 className="certificate-title">Certificate</h4>
          <div className="certificate-container" onClick={handleCertificateClick}>
            <img 
              src={certificateImage} 
              alt="Certificate" 
              className="certificate-image"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23333" width="600" height="400"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ECertificate%3C/text%3E%3C/svg%3E'
              }}
            />
            <div className="certificate-overlay">
              <span>View Certificate</span>
            </div>
          </div>
        </div>
      </div>
      {isViewerOpen && (
        <ImageViewer
          images={[certificateImage]}
          isOpen={isViewerOpen}
          onClose={handleCloseViewer}
          startIndex={0}
          mediaTypes={['image']}
        />
      )}
    </main>
  )
}
