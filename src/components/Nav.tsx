import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  function closeMobile() { setMobileOpen(false) }

  function handleLogoClick(e: React.MouseEvent) {
    e.preventDefault()
    navigate('/')
  }

  return (
    <>
      {/* Desktop nav — shown on medium+ screens */}
      <div className="hide-for-small">
        <div className="row">
          <div className="twelve columns">
            <div id="contain-to-grid-holder">
              <nav className="top-bar">
                <ul>
                  <li className="name">
                    <h1>
                      <Link to="/">
                        <div id="large-logo">
                          <img src="/images/jonesco-header.png" alt="Jonesco" />
                        </div>
                      </Link>
                    </h1>
                  </li>
                  <li className="toggle-topbar"><a href="#" onClick={e => e.preventDefault()}></a></li>
                </ul>
                <section>
                  <ul className="right">
                    <li className="divider"></li>
                    <li><Link to="/">work</Link></li>
                    <li className="divider"></li>
                    <li><Link to="/about">about</Link></li>
                    <li className="divider"></li>
                  </ul>
                </section>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile nav — shown on small screens */}
      <div className="show-for-small" id="small-header-holder">
        <div className="row">
          <div className="twelve columns">
            <div style={{ position: 'relative' }}>
              <a href="/" onClick={handleLogoClick}>
                <div id="small-logo-over">
                  <img src="/images/jonesco-header-sm.png" alt="Jonesco" />
                </div>
              </a>

              <nav className={`top-bar${mobileOpen ? ' expanded' : ''}`}>
                <ul>
                  <li className="name"><h1></h1></li>
                  <li
                    className="toggle-topbar"
                    onClick={() => setMobileOpen(o => !o)}
                  >
                    <a href="#" onClick={e => e.preventDefault()}></a>
                  </li>
                </ul>

                <section>
                  <ul className="right">
                    <li className="divider"></li>
                    <li><Link to="/" onClick={closeMobile}>work</Link></li>
                    <li className="divider"></li>
                    <li><Link to="/about" onClick={closeMobile}>about</Link></li>
                    <li className="divider"></li>
                    {mobileOpen && (
                      <>
                        <div className="soc">
                          <li>
                            <a href="https://www.linkedin.com/pub/wes-jones/12/143/a09" target="_blank" rel="noreferrer">
                              <FaLinkedin />
                            </a>
                          </li>
                        </div>
                        <div className="soc">
                          <li>
                            <a href="mailto:wes@jonesco.com">
                              <FaEnvelope />
                            </a>
                          </li>
                        </div>
                      </>
                    )}
                  </ul>
                </section>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
