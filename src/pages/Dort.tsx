import FadeIn from '../components/FadeIn'

export default function Dort() {
  return (
    <>
      <FadeIn delay={500} duration={1000}>
        <div className="row">
          {/* Desktop glass image */}
          <div className="hide-for-small">
            <div className="six mobile-two columns">
              <img src="/images/work/dort-glass.png" alt="" />
            </div>
          </div>
          {/* Mobile glass image */}
          <div className="show-for-small">
            <div className="mobile-four columns">
              <img src="/images/work/dort-glass-show-small.png" alt="" />
            </div>
          </div>

          <div id="dort-fix" className="six columns">
            <div>
              <div className="hide-for-small"><div id="spacer"></div></div>
              <h4>Have a drink<br /> with a good friend.</h4>
              <hr className="style-two" />
              <h6 className="subheader">text message &amp; voicemail campaign</h6>
              <h5 className="subheader">Great Lakes Brewing Company's flagship product, Dortmunder Gold, is a 14-time world champion beer. For many in Ohio, Dortmunder Gold was probably their introduction to craft beer. So to promote sales of an old favorite, we created a campaign that allowed beer drinkers to reconnect with a good friend through text messages and voicemails.</h5>
              <div className="hide-for-small"><img src="/images/work/dort-napkin.png" alt="" /></div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={2000} duration={1000}>
        {/* Mobile coasters */}
        <div className="show-for-small">
          <div className="row">
            <div className="twelve column">
              <hr className="style-two" /><h6 className="subheader"><span>&#9661;</span> coasters</h6>
            </div>
            <div className="four mobile-two columns"><img className="push-right" src="/images/work/dort-coaster-1.png" alt="" /></div>
            <div className="four mobile-two columns"><img className="push-left" src="/images/work/dort-coaster-1-5.png" alt="" /></div>
            <div className="four mobile-two columns"><img className="push-right" src="/images/work/dort-coaster-2.png" alt="" /></div>
            <div className="four mobile-two columns"><img className="push-left" src="/images/work/dort-coaster-2-5.png" alt="" /></div>
            <div className="four mobile-two columns"><img className="push-right" src="/images/work/dort-coaster-3.png" alt="" /></div>
            <div className="four mobile-two columns"><img className="push-left" src="/images/work/dort-coaster-3-5.png" alt="" /></div>
          </div>
        </div>

        {/* Desktop coasters */}
        <div className="hide-for-small">
          <div className="row">
            <div className="twelve column">
              <hr className="style-two" /><h6 className="subheader"><span>&#9661;</span> coasters</h6>
            </div>
            <div className="four mobile-two columns"><img src="/images/work/dort-coaster-1.png" alt="" /></div>
            <div className="four mobile-two columns"><img src="/images/work/dort-coaster-2.png" alt="" /></div>
            <div className="four mobile-two columns"><img src="/images/work/dort-coaster-3.png" alt="" /></div>
            <div className="four mobile-two columns"><img src="/images/work/dort-coaster-1-5.png" alt="" /></div>
            <div className="four mobile-two columns"><img src="/images/work/dort-coaster-2-5.png" alt="" /></div>
            <div className="four mobile-two columns"><img src="/images/work/dort-coaster-3-5.png" alt="" /></div>
          </div>
        </div>

        {/* Video */}
        <div className="row">
          <div className="twelve mobile-four columns">
            <hr className="style-two" /><h6 className="subheader"><span>&#9661;</span> case study</h6>
            <div className="flex-video widescreen vimeo">
              <iframe
                src="https://player.vimeo.com/video/61919410?title=0&byline=0&portrait=0&color=666666"
                width="1000"
                height="563"
                frameBorder="0"
                allowFullScreen
                title="Dort case study"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Glassware */}
        <div className="row">
          <div className="twelve columns">
            <hr className="style-two" /><h6 className="subheader"><span>&#9661;</span> glassware</h6>
            <div id="textright" className="six mobile-two columns">
              <img className="dortglass" src="/images/work/dort-glass-front.png" alt="" />
            </div>
            <div className="six mobile-two columns">
              <img className="dortglass" src="/images/work/dort-glass-back.png" alt="" />
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="hide-for-small"><div id="spacer"></div></div>
      <div id="spacer"></div>
    </>
  )
}
