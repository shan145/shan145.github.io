import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadStarsPreset } from 'tsparticles-preset-stars'

import './Layout.scss'
import Footer from '../Footer/Footer'

const Layout = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

  return (
    <div>
      <Particles
        className="particles"
        options={{ preset: 'stars' }}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <div className="container">
        <Navbar />
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default Layout
