import FadeIn from '../components/FadeIn'

export default function Ironsight() {
  return (
    <>
      <div className="row">
        <FadeIn delay={500} duration={1000}>
          <div className="twelve columns">
            <div className="hide-for-small"><div id="spacer"></div></div>
            <h4>Ironsight Brewers</h4>
            <hr className="style-two" />
            <h6 className="subheader">logo</h6>
          </div>
          <div className="twelve columns" style={{ textAlign: 'center' }}>
            <img src="/images/work/ironsight-logo.png" alt="" />
          </div>
        </FadeIn>
      </div>

      <div className="hide-for-small"><div id="spacer"></div></div>
      <div id="spacer"></div>
    </>
  )
}
