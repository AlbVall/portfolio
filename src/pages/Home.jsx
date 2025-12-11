import groupPicture from '../assets/group picture.jpg'

export default function Home() {
  return (
    <main className="page page-home">
      <section className="welcome-hero">
        <div className="welcome-content">
          <div className="section-eyebrow">Welcome</div>
          <h1 className="welcome-title">
            CEBU-BOHOL<br />
            <span className="welcome-subtitle">Educational Tour</span>
          </h1>
          <p className="welcome-description">
            This website serves as a documentation portfolio for our educational journey through Cebu and Bohol. 
            Explore our experiences, learnings, and memories from this enriching academic adventure.
          </p>
        </div>
        <div className="welcome-image-container">
          <img 
            src={groupPicture} 
            alt="Group photo from Cebu-Bohol Educational Tour" 
            className="welcome-image"
          />
        </div>
      </section>
    </main>
  )
}
