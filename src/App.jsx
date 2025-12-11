import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Companies from './pages/Companies'
import Sidetrips from './pages/Sidetrips'
import About from './pages/About'
import Contact from './pages/Contact'
import Acknowledgement from './pages/Acknowledgement'

function App() {
	const [route, setRoute] = useState(getRouteFromPath())

	useEffect(() => {
		const onPop = () => setRoute(getRouteFromPath())
		window.addEventListener('popstate', onPop)
		return () => window.removeEventListener('popstate', onPop)
	}, [])

	const navigate = (path) => {
		window.history.pushState({}, '', path)
		setRoute(getRouteFromPath(path))
	}

	return (
		<div className="app">
			<Header onNavigate={navigate} />
			<div className={`container main ${route === 'home' || route === 'about' ? 'main-centered' : ''}`}>
				{route === 'home' && <Home onNavigate={navigate} />}
				{route === 'companies' && <Companies />}
				{route === 'sidetrips' && <Sidetrips />}
				{route === 'about' && <About />}
				{route === 'contact' && <Contact />}
				{route === 'acknowledgement' && <Acknowledgement />}
			</div>
		</div>
	)
}

function getRouteFromPath(pathname = window.location.pathname) {
	const clean = pathname.replace(/^\/+|\/+$/g, '')
	if (!clean) return 'home'
	const segment = clean.split('/')[0]
	if (['home', 'about', 'contact', 'companies', 'sidetrips', 'acknowledgement'].includes(segment)) return segment
	return 'home'
}

export default App
