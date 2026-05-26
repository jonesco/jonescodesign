import FadeIn from '../components/FadeIn'

export default function Prime() {
  return (
    <>
      <div className="row">
        <FadeIn delay={500} duration={1000}>
          <div className="twelve columns">
            <div className="hide-for-small"><div id="spacer"></div></div>
            <h4>Prime Institutional Group</h4>
            <hr className="style-two" />
            <h6 className="subheader">logo</h6>
          </div>
          <div className="twelve columns" style={{ textAlign: 'center', backgroundColor: '#00457c' }}>
            <img src="/images/work/prime-logo.png" alt="" style={{ maxWidth: '80%', margin: '0 auto' }} />
          </div>
        </FadeIn>
      </div>

      <div className="hide-for-small"><div id="spacer"></div></div>
      <div id="spacer"></div>
    </>
  )
}
