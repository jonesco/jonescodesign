import FadeIn from '../components/FadeIn'

export default function Firefly() {
  return (
    <>
      <FadeIn delay={500} duration={1000}>
        <div className="row">
          <div>
            <div className="eight columns">
              <img src="/images/work/ff-model.png" alt="" />
            </div>
            <div className="four columns">
              <div className="hide-for-small"><div id="spacer"></div></div>
              <h4>Firefly</h4>
              <hr className="style-two" />
              <h6 className="subheader project">product launch</h6>
              <h5 className="subheader">Input/Output wanted to launch a revolutionary product, Firefly, at the oil and gas industry's biggest trade show. But there was one problem - the system wasn't ready for demonstration. So we created a unique, interactive display to generate excitement about the product, as well as educate the attendees on its features and benefits.</h5>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={2000} duration={1000}>
        <div className="row">
          <div className="twelve columns">
            <hr className="style-two" />
            <h6 className="subheader"><span>&#9661;</span> poster</h6>
            <img src="/images/work/ff-poster.jpg" alt="" />
          </div>
          <div className="twelve columns">
            <hr className="style-two" />
            <h6 className="subheader"><span>&#9661;</span> interactive display</h6>
            <img className="port frame" src="/images/work/ff-web-2.png" alt="" id="roundthat" style={{ marginBottom: 30 }} />
            <img className="port frame" src="/images/work/ff-web-1.png" alt="" id="roundthat" style={{ marginBottom: 30 }} />
            <img className="port frame" src="/images/work/ff-web-3.png" alt="" id="roundthat" style={{ marginBottom: 30 }} />
            <img className="port frame" src="/images/work/ff-web-4.png" alt="" id="roundthat" style={{ marginBottom: 30 }} />
          </div>
        </div>
      </FadeIn>

      <div className="hide-for-small"><div id="spacer"></div></div>
      <div id="spacer"></div>
    </>
  )
}
