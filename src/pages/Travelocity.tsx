import FadeIn from '../components/FadeIn'

export default function Travelocity() {
  return (
    <>
      <div className="hide-for-small"><div id="spacer"></div></div>

      <FadeIn delay={500} duration={1000}>
        <div className="row">
          <div className="twelve columns">
            <div style={{ padding: '56.25% 0 0 0', position: 'relative', marginBottom: 32 }}>
              <iframe
                src="https://player.vimeo.com/video/35479487?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="CLE + Travelocity 2"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="hide-for-small">
            <div className="five columns">
              <img src="/images/work/travelocity-gocard.png" alt="" />
            </div>
            <div className="seven columns">
              <h4>Travelocity + CLE</h4>
              <hr className="style-two" />
              <h6 className="subheader">:30 sec tv</h6>
              <h5 className="subheader">Cleveland Hopkins International Airport (CLE) was looking to engage - and grow - their fanbase on Facebook. So we partnered CLE with one of the largest online travel agencies - Travelocity - and developed a cross-promo that excited, engaged, and enticed users - online and offline.</h5>
            </div>
          </div>
          <div className="show-for-small">
            <div className="twelve columns">
              <h4>Travelocity + CLE</h4>
              <hr className="style-two" />
              <h6 className="subheader">:30 sec tv</h6>
              <h5 className="subheader">Cleveland Hopkins International Airport (CLE) was looking to engage - and grow - their fanbase on Facebook. So we partnered CLE with one of the largest online travel agencies - Travelocity - and developed a cross-promo that excited, engaged, and enticed users – online and offline.</h5>
            </div>
          </div>
        </div>

        <div className="row">
          <FadeIn delay={2000} duration={1000}>
            <div className="column twelve">
              <hr className="style-two" /><h6 className="subheader"><span>&#9661;</span> stills</h6>
            </div>
            <div className="four mobile-four columns">
              <img className="port" src="/images/work/travelocity-1.jpg" alt="" />
            </div>
            <div className="four mobile-four columns">
              <img className="port" src="/images/work/travelocity-4.jpg" alt="" />
            </div>
            <div className="four mobile-four columns">
              <img className="port" src="/images/work/travelocity-3.jpg" alt="" />
            </div>
          </FadeIn>

          <div className="hide-for-small"><div id="spacer"></div></div>
          <div id="spacer"></div>
        </div>
      </FadeIn>
    </>
  )
}
