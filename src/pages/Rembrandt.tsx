import FadeIn from '../components/FadeIn'

export default function Rembrandt() {
  return (
    <>
      <FadeIn delay={200} duration={1000}>
        <div className="row">
          <div className="five mobile columns">
            <div className="hide-for-small"><div id="spacer"></div></div>
            <img src="/images/work/rembrandt-frame.png" alt="" />
          </div>
          <div className="seven columns">
            <div className="hide-for-small"><div id="spacer"></div></div>
            <h4 id="rembrandt-title">What makes a<br />Rembrandt a Rembrandt?</h4>
            <hr className="style-two" />
            <h6 className="subheader project">campaign</h6>
            <h5 className="subheader">The Cleveland Museum of Art was one of only three American cities to host a rare collection of portraits by the 17th-century portrait master Rembrandt. The objective of the campaign was not only to gain the attention of art enthusiasts, but also to encourage a younger demographic of entertainment seekers to find out what makes a Rembrandt a Rembrandt. Using traditional media as well as nontraditional, digital, and social media, we increased word of mouth and generated buzz around town. ("Hey, it's the Rembrandt bus!" Beep! Beep!)</h5>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={500} duration={1000}>
        <div className="row">
          <div className="twelve columns">
            <hr className="style-two" /><h6 className="subheader"><span>&#9661;</span> bus wrap</h6>
            <img src="/images/work/rembrandt-bus1.jpg" alt="" />
            <img src="/images/work/rembrandt-bus2.jpg" alt="" />
          </div>
        </div>

        <div className="row">
          <div id="rule-fix" className="twelve columns">
            <hr className="style-two" /><h6 className="subheader"><span>&#9661;</span> facebook app</h6>
          </div>
          <div id="mobile-four-fix" className="six mobile-four columns">
            <img src="/images/work/rembrandt-yourself1.png" alt="" />
          </div>
          <div id="mobile-four-fix" className="six mobile-four columns">
            <img src="/images/work/rembrandt-yourself2.png" alt="" />
          </div>
          <div id="mobile-four-fix" className="six mobile-four columns">
            <img src="/images/work/rembrandt-yourself3.png" alt="" />
          </div>
          <div id="mobile-four-fix" className="six mobile-four columns">
            <img src="/images/work/rembrandt-yourself4.png" alt="" />
          </div>
        </div>
      </FadeIn>

      <div className="hide-for-small"><div id="spacer"></div></div>
      <div id="spacer"></div>
    </>
  )
}
