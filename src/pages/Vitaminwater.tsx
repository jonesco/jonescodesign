import FadeIn from '../components/FadeIn'

export default function Vitaminwater() {
  return (
    <>
      <FadeIn delay={500} duration={1000}>
        <div className="row">
          <div className="hide-for-small">
            <div className="seven columns">
              <img src="/images/work/vw-lineupall.png" alt="" />
            </div>
          </div>
          <div className="show-for-small">
            <div id="vw-lineupall" className="twelve columns">
              <img src="/images/work/vw-lineupsmall.png" alt="" />
            </div>
          </div>
          <div className="five columns">
            <div className="hide-for-small"><div id="spacer"></div></div>
            <h4>Unlock your<br />inner awesome.</h4>
            <hr className="style-two" />
            <h6 className="subheader">brand campaign</h6>
            <h5 className="subheader">When vitaminwater brought us the challenge to make them the drink of the next creative generation, we brought them a new brand experience, targeting the next Zuckerbergs with fresh, relatable language and a look that attracted our audience's (often microscopic) attention span.</h5>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={2000} duration={1000}>
        {/* Mobile poster layout */}
        <div className="row show-for-small">
          <div className="column twelve">
            <hr className="style-two" /><h6 className="subheader"><span>&#9661;</span> variant posters</h6>
          </div>
          <div className="four mobile-two columns"><img src="/images/work/vw-poster-2.jpg" alt="" /></div>
          <div className="four mobile-two columns"><img src="/images/work/vw-poster-1.jpg" alt="" /></div>
          <div className="four mobile-two columns"><img src="/images/work/vw-poster-3.jpg" alt="" /></div>
          <div className="four mobile-two columns"><img src="/images/work/vw-poster-4.jpg" alt="" /></div>
          <div className="four mobile-two columns"><img src="/images/work/vw-poster-5.jpg" alt="" /></div>
          <div className="four mobile-two columns"><img src="/images/work/vw-poster-6.jpg" alt="" /></div>
        </div>

        {/* Desktop poster layout */}
        <div className="row hide-for-small">
          <div className="column mobile-four twelve">
            <hr className="style-two" /><h6 className="subheader"><span>&#9661;</span> variant posters</h6>
          </div>
          <div className="six mobile-four columns">
            <img src="/images/work/vw-poster-6.jpg" alt="" />
          </div>
          <div id="vw-posters-4up" className="six columns">
            <div id="vw-push" className="six mobile-four columns">
              <img src="/images/work/vw-poster-1.jpg" alt="" />
            </div>
            <div id="vw-push" className="six mobile-four columns">
              <img src="/images/work/vw-poster-5.jpg" alt="" />
            </div>
            <div className="six mobile-four columns">
              <img src="/images/work/vw-poster-2.jpg" alt="" />
            </div>
            <div className="six mobile-four columns">
              <img src="/images/work/vw-poster-3.jpg" alt="" />
            </div>
          </div>
        </div>

        {/* Outdoor/transit */}
        <div className="row">
          <div className="twelve columns">
            <hr className="style-two" /><h6 className="subheader"><span>&#9661;</span> outdoor/transit</h6>
          </div>
          <div className="twelve columns" style={{ paddingBottom: 20 }}>
            <img src="/images/work/vw-outdoor-1.jpg" alt="" />
          </div>
          <div className="twelve columns" style={{ paddingBottom: 20 }}>
            <img src="/images/work/vw-outdoor-3.jpg" alt="" />
          </div>
          <div className="twelve columns" style={{ paddingBottom: 20 }}>
            <img src="/images/work/vw-outdoor-2.jpg" alt="" />
          </div>

          <div id="rule-fix" className="twelve columns">
            <hr className="style-two" /><h6 className="subheader"><span>&#9661;</span> game</h6>
          </div>
          <div className="nine columns">
            <img src="/images/work/vw-game.png" alt="" />
          </div>
          <div className="three columns">
            <h5 className="subheader">In this throwback video game, we use an 8-bit style that asks users to "unlock your inner awesome" - with levels that go deeper and deeper inside your brain. The more vitaminwaters you pick up along the way, the more power you have to continue!</h5>
          </div>
        </div>
      </FadeIn>
    </>
  )
}
