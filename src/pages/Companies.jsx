import { useState } from 'react'
import companies from '../data/companies'
import ImageViewer from '../components/ImageViewer'
import { getImage } from '../utils/imageLoader'

export default function Companies() {
  const [activeTab, setActiveTab] = useState('companies')
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const [allExpanded, setAllExpanded] = useState(false)
  const [selectedJournalImages, setSelectedJournalImages] = useState(null)
  const [isJournalViewerOpen, setIsJournalViewerOpen] = useState(false)
  const [journalStartIndex, setJournalStartIndex] = useState(0)

  const handleViewImages = (company) => {
    // Convert image filenames to actual image paths
    const companyWithImages = {
      ...company,
      images: company.images.map(img => getImage(img) || img).filter(Boolean)
    }
    setSelectedCompany(companyWithImages)
    setIsViewerOpen(true)
  }

  const handleCloseViewer = () => {
    setIsViewerOpen(false)
    setSelectedCompany(null)
  }

  const handleCloseJournalViewer = () => {
    setIsJournalViewerOpen(false)
    setSelectedJournalImages(null)
    setJournalStartIndex(0)
  }

  const toggleExpandAll = () => {
    setAllExpanded(!allExpanded)
  }

  const journalImages = [
    { name: 'Tarsier', filename: 'tarsier journal.jpg' },
    { name: 'Mata Technologies', filename: 'mata journal.jpg' },
    { name: 'CodeChum', filename: 'codechum journal.jpg' },
    { name: 'Rivan IT', filename: 'rivan journal.jpg' },
    { name: 'Worldtech', filename: 'worldtech journal.jpg' }
  ]

  const handleJournalImageClick = (index) => {
    const images = journalImages.map(j => getImage(j.filename) || j.filename).filter(Boolean)
    setSelectedJournalImages(images)
    setJournalStartIndex(index)
    setIsJournalViewerOpen(true)
  }

  return (
    <main className="page">
      <div className="section-header">
        <div>
          <div className="section-eyebrow">Documentation</div>
          <h3 className="section-title">Companies Visited</h3>
        </div>
        <span className="pill">Cebu · Bohol · Learning Journey</span>
      </div>
      
      {/* Tabs */}
      <div className="companies-tabs">
        <button
          className={`tab-button ${activeTab === 'companies' ? 'active' : ''}`}
          onClick={() => setActiveTab('companies')}
        >
          Companies
        </button>
        <button
          className={`tab-button ${activeTab === 'journal' ? 'active' : ''}`}
          onClick={() => setActiveTab('journal')}
        >
          Journal Pictures
        </button>
      </div>

      {/* Companies Tab Content */}
      {activeTab === 'companies' && (
        <div className="companies-grid">
        {companies.map((company) => {
          const thumbnailSrc = getImage(company.thumbnail) || company.thumbnail
          return (
            <div key={company.id} className="company-card">
              <div className="company-thumbnail" onClick={() => handleViewImages(company)}>
                <img 
                  src={thumbnailSrc} 
                  alt={company.name}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23333" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EThumbnail%3C/text%3E%3C/svg%3E'
                  }}
                />
                <div className="company-thumbnail-overlay">
                  <span>View Images ({company.images.length})</span>
                </div>
              </div>
              <div className="company-info">
                <h4 className="company-name">{company.name}</h4>
                <p className="company-details">{company.details}</p>
                
                {allExpanded && (
                  <div className="company-expanded-content">
                    <div className="company-info-section">
                      <div className="info-row">
                        <strong>Address:</strong>
                        <span>{company.address || 'Not specified'}</span>
                      </div>
                      <div className="info-row">
                        <strong>Facilitator:</strong>
                        <span>{company.facilitator || 'Not specified'}</span>
                      </div>
                      {company.socialMedia && company.socialMedia.length > 0 && (
                        <div className="info-row">
                          <strong>Social Media Accounts:</strong>
                          <div className="social-media-links">
                            {company.socialMedia.map((social, idx) => (
                              <a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                              >
                                {social.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="observations-section">
                      <h5 className="section-label">Observations</h5>
                      <ul className="observations-list">
                        {company.observations?.map((obs, idx) => (
                          <li key={idx}>{obs}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="learnings-section">
                      <h5 className="section-label">Learnings</h5>
                      <ul className="learnings-list">
                        {company.learnings?.map((learning, idx) => (
                          <li key={idx}>{learning}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="company-actions">
                  <button 
                    className="company-expand-btn"
                    onClick={toggleExpandAll}
                  >
                    {allExpanded ? 'Hide' : 'View'}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
        </div>
      )}

      {/* Journal Pictures Tab Content */}
      {activeTab === 'journal' && (
        <div className="journal-grid">
          {journalImages.map((journal, index) => {
            const imageSrc = getImage(journal.filename) || journal.filename
            return (
              <div 
                key={index} 
                className="journal-item"
                onClick={() => handleJournalImageClick(index)}
              >
                <div className="journal-thumbnail">
                  <img 
                    src={imageSrc} 
                    alt={journal.name}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23333" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EJournal%3C/text%3E%3C/svg%3E'
                    }}
                  />
                  <div className="journal-overlay">
                    <span>View</span>
                  </div>
                </div>
                <div className="journal-name">{journal.name}</div>
              </div>
            )
          })}
        </div>
      )}

      {selectedCompany && (
        <ImageViewer
          images={selectedCompany.images}
          isOpen={isViewerOpen}
          onClose={handleCloseViewer}
        />
      )}
      {selectedJournalImages && (
        <ImageViewer
          images={selectedJournalImages}
          isOpen={isJournalViewerOpen}
          onClose={handleCloseJournalViewer}
          startIndex={journalStartIndex}
        />
      )}
    </main>
  )
}
