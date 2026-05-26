import { FaLinkedin, FaInstagram, FaDribbble, FaEnvelope } from 'react-icons/fa'
import FadeIn from '../components/FadeIn'

export default function About() {
  return (
    <>
      <FadeIn delay={500} duration={1000}>
        <div className="row" style={{ paddingTop: 60 }}>
          <div className="four columns">
            <h4>Wes Jones</h4>
            <h6 className="subheader">
              <a href="mailto:wes@jonesco.com">wes@jonesco.com</a><br />
              <a href="tel:512-944-8513">512-944-8513</a>
            </h6>
            <div style={{ overflow: 'hidden', marginBottom: 32 }}>
              <div id="social"><a href="https://www.linkedin.com/pub/wes-jones/12/143/a09" target="_blank" rel="noreferrer"><FaLinkedin /></a></div>
              <div id="social"><a href="http://instagram.com/jonesco" target="_blank" rel="noreferrer"><FaInstagram /></a></div>
              <div id="social"><a href="https://dribbble.com/jonesco" target="_blank" rel="noreferrer"><FaDribbble /></a></div>
              <div id="social"><a href="mailto:wes@jonesco.com"><FaEnvelope /></a></div>
            </div>
          </div>

          <div className="eight columns">
            <div id="about-copy" style={{ paddingBottom: 60 }}>
              <div className="hide-for-small"><div id="spacer"></div></div>
              <h1 style={{ marginBottom: 20 }}>
                I've always been a creative problem solver. And for more than two decades, it's also been my career. I know how to create smart, engaging solutions that connect with the audience while supporting creative strategy.
              </h1>
              <h1>
                But if you were to ask my parents what I do for a living, they'd proudly tell you, "He makes brochures."
              </h1>
            </div>
          </div>
        </div>
      </FadeIn>

      <div style={{ backgroundColor: '#eeeeee' }}>
        <FadeIn delay={1000} duration={1000}>
          <div className="row" style={{ paddingTop: 60 }}>
            <div className="four columns">
              <h1>clients</h1>
              <p>
                Microsoft<br />
                Samsung<br />
                IBM<br />
                S&amp;P Global<br />
                ABB Robotics<br />
                Fidelity<br />
                PricewaterhouseCoopers<br />
                Hotels.com<br />
                Neuberger Berman<br />
                Lubrizol<br />
                Loctite<br />
                Glidden<br />
                Ridgid Tools<br />
                vitaminwater<br />
                University Hospitals<br />
                FirstMerit Bank<br />
                Great Lakes Brewing Co.<br />
                Fazoli's<br />
                Cleveland Museum of Art<br />
                DARPA
              </p>

              <h1 style={{ paddingTop: 20 }}>education</h1>
              <p>BFA in Communication Design from Texas State University</p>
              <p>Graduated summa cum laude</p>
            </div>

            <div className="eight columns" style={{ paddingBottom: 40 }}>
              <div className="show-for-small" style={{ paddingTop: 20 }}></div>
              <h1>achievements</h1>

              <h6>work published in:</h6>
              <p><em>LogoLounge: Master Library, Volume 2</em><br />(2010)</p>
              <p><em>Graphis Design 2004</em><br />(2004)</p>
              <p><em>Print Regional Annual</em><br />(2002, 2003)</p>
              <p><em>Communication Arts Design Annual</em><br />(2003)</p>

              <h6>awards:</h6>
              <p>Judge's Choice Award from the American Advertising Federation Cleveland</p>
              <p>Judge's Choice Award for Multimedia from the Houston Advertising Federation</p>
              <p>Regional Gold Addy Awards from the American Advertising Federation</p>
              <p>
                Gold and Silver Awards from:<br />
                <ul className="square">
                  <li>American Advertising Federation Cleveland</li>
                  <li>AIGA Cleveland</li>
                  <li>The Art Directors Club of Houston</li>
                  <li>American Advertising Federation Houston</li>
                  <li>Houston American Marketing Association</li>
                  <li>Business Marketing Association, Houston Chapter</li>
                  <li>Dallas Society of Visual Communication</li>
                </ul>
              </p><br />
            </div>
          </div>
        </FadeIn>
      </div>
    </>
  )
}
