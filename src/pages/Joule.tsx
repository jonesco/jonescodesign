import FadeIn from '../components/FadeIn'

export default function Joule() {
  return (
    <>
      <div className="row">
        <FadeIn delay={500} duration={1000}>
          <div className="twelve columns">
            <div id="spacer"></div>
            <h4>Joule Energy</h4>
            <hr className="style-two" />
            <h6 className="subheader">logo</h6>
          </div>
          <div className="twelve columns" style={{ backgroundColor: '#0b0146', textAlign: 'center' }}>
            <img src="/images/work/joule-logo.png" alt="" style={{ maxWidth: '80%', margin: '0 auto' }} />
          </div>
        </FadeIn>
      </div>

      <div className="hide-for-small"><div id="spacer"></div></div>
      <div id="spacer"></div>
    </>
  )
}
