import { getImage } from '../utils/imageLoader'

export default function Acknowledgement() {
  const logo1 = getImage('hcdc logo.png') || 'hcdc logo.png'
  const logo2 = getImage('watt.jpg') || 'watt.jpg' // You can change this to a different logo

  return (
    <main className="page page-acknowledgement">
      <div className="section-header">
        <div>
          <div className="section-eyebrow">Acknowledgement</div>
          <h3 className="section-title">Acknowledgement</h3>
        </div>
      </div>
      <div className="acknowledgement">
        <div className="acknowledgement-logos">
          <div className="acknowledgement-logo">
            <img 
              src={logo1} 
              alt="Logo 1" 
              className="logo-image"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
          <div className="acknowledgement-logo">
            <img 
              src={logo2} 
              alt="Logo 2" 
              className="logo-image"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
        </div>
        <div className="acknowledgement-speech">
          <p>
          I would like to express my heartfelt gratitude to WATT–World of Adventures Travel and Tours for providing us with a wonderful, well-organized, safe, and fully insured Cebu–Bohol Educational Tour. The entire experience was enriching, memorable, and flawlessly coordinated, allowing us to explore and learn with confidence and enjoyment. My sincere thanks also go to our amazing and professional tour guides, Ate Danica Dibdib and Kuya Renz, whose warmth, knowledge, and guidance made every part of the journey more engaging and meaningful. I am also truly grateful to our dedicated faculty who took responsibility for us, ensured our safety, and supported us throughout the trip. Lastly, a special thank you to Sir Owen Pilongo for his effort, leadership, and commitment in making this entire educational tour possible for all of us.
          </p>
        </div>
      </div>
    </main>
  )
}

