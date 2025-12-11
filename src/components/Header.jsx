export default function Header({ onNavigate }) {
  const handleNav = (e, path) => {
    if (onNavigate) {
      e.preventDefault()
      onNavigate(path)
    }
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <h1 className="logo">
          EDUCATIONAL <span>TOUR</span>
        </h1>
        <nav className="nav">
          <a href="/" onClick={(e) => handleNav(e, '/')}>Home</a>
          <a href="/companies" onClick={(e) => handleNav(e, '/companies')}>Companies</a>
          <a href="/sidetrips" onClick={(e) => handleNav(e, '/sidetrips')}>Sidetrips</a>
          <a href="/about" onClick={(e) => handleNav(e, '/about')}>About</a>
          <a href="/acknowledgement" onClick={(e) => handleNav(e, '/acknowledgement')}>Acknowledgement</a>
          <a className="cta-link" href="/contact" onClick={(e) => handleNav(e, '/contact')}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
