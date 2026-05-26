import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import FadeIn from '../components/FadeIn'

const slides = [
  { src: '/images/work/wellsmith_desktop1-.jpg' },
  { src: '/images/work/wellsmith_desktop2-.jpg' },
  { src: '/images/work/wellsmith_desktop3-.jpg' },
  { src: '/images/work/wellsmith_desktop4-.jpg' },
  { src: '/images/work/wellsmith_activity1.png' },
  { src: '/images/work/wellsmith_meds1.png' },
  { src: '/images/work/wellsmith_messaging1.png' },
]

function GImg({ src, index, className, id, onClick }: {
  src: string; index: number; className?: string; id?: string; onClick: (i: number) => void
}) {
  return <img src={src} alt="" id={id} className={className} onClick={() => onClick(index)} />
}

export default function Wellsmith() {
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)
  function openAt(i: number) { setIdx(i); setOpen(true) }

  return (
    <>
      <div className="hide-for-small"><div id="spacer"></div></div>

      <FadeIn delay={500} duration={1000}>
        <div className="row">
          <div>
            <div className="eight columns">
              <GImg src="/images/work/wellsmith_desktop1-.jpg" index={0} className="pswp-trigger roundthat bump" onClick={openAt} />
            </div>
            <div className="three columns">
              <div>
                <h4>Wellsmith</h4>
                <hr className="style-two" />
                <h6 className="subheader">web portal and mobile app</h6>
                <h5 className="subheader">We designed this healthcare ecosystem to track the compliance levels of patients based on their medication, activity, nutrition and vitals. The web portal access allows clinicians to check-in on large numbers of patients at any time and offer on-the-spot expertise. Additionally, with individualized reminders and care plan baselines, this app provides a clear path for patients to reach their health and wellness goals.</h5>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={2000} duration={1000}>
        <div className="row">
          <div className="twelve columns">
            <div className="hide-for-small"><div id="spacer"></div></div>
            <div id="spacer"></div>
            <div className="four mobile-four columns">
              <GImg src="/images/work/wellsmith_desktop2-.jpg" index={1} className="port pswp-trigger roundthat bump" onClick={openAt} />
            </div>
            <div className="four mobile-four columns">
              <GImg src="/images/work/wellsmith_desktop3-.jpg" index={2} className="port pswp-trigger roundthat bump" onClick={openAt} />
            </div>
            <div className="four mobile-four columns">
              <GImg src="/images/work/wellsmith_desktop4-.jpg" index={3} className="port pswp-trigger roundthat bump" onClick={openAt} />
            </div>
          </div>
        </div>

        <div className="hide-for-small"><div id="spacer"></div></div>

        <div className="row">
          <div className="twelve columns">
            <hr className="style-two" />
            <h6 className="subheader"><span>&#9661;</span>mobile app</h6>
            <div className="four mobile-four columns" id="centerthat">
              <GImg src="/images/work/wellsmith_activity1.png" index={4} id="threeupmobile" className="port pswp-trigger roundthat bump" onClick={openAt} />
            </div>
            <div className="four mobile-four columns" id="centerthat">
              <GImg src="/images/work/wellsmith_meds1.png" index={5} id="threeupmobile" className="port pswp-trigger roundthat bump" onClick={openAt} />
            </div>
            <div className="four mobile-four columns" id="centerthat">
              <GImg src="/images/work/wellsmith_messaging1.png" index={6} id="threeupmobile" className="port pswp-trigger roundthat bump" onClick={openAt} />
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="hide-for-small"><div id="spacer"></div></div>
      <div id="spacer"></div>
      <div className="hide-for-small"><div id="spacer"></div></div>
      <div id="spacer"></div>

      <Lightbox open={open} close={() => setOpen(false)} slides={slides} index={idx} />
    </>
  )
}
