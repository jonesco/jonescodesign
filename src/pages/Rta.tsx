import FadeIn from '../components/FadeIn'

export default function Rta() {
  return (
    <>
      <div className="row">
        <FadeIn delay={500} duration={1000}>
          <div className="eight columns">
            <img src="/images/work/rta-shirts-1.png" alt="" />
            <img src="/images/work/rta-shirts-2.png" alt="" />
          </div>
          <div className="four columns">
            <div className="hide-for-small"><div id="spacer"></div></div>
            <h4>RTA +<br />Cleveland Sports</h4>
            <hr className="style-two" />
            <h6 className="subheader">promotional items</h6>
            <h5 className="subheader">Clevelanders love their sports teams. Which is why when the Greater Cleveland Rapid Transit Authority (RTA) asked us to help boost their ridership, we created these sports-related promotional items to hand out at games and, ultimately, to remind fans that the RTA was the best way to get to the big game. Go, sports!</h5>
          </div>
        </FadeIn>
      </div>

      <div className="hide-for-small"><div id="spacer"></div></div>
      <div id="spacer"></div>
    </>
  )
}
