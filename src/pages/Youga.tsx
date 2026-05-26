import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import FadeIn from '../components/FadeIn'

const slides = [
  { src: '/images/work/youga1.png' },
  { src: '/images/work/youga2.png' },
  { src: '/images/work/youga3.png' },
  { src: '/images/work/youga4.png' },
  { src: '/images/work/youga8.png' },
  { src: '/images/work/youga7.png' },
  { src: '/images/work/youga5.png' },
  { src: '/images/work/youga6.png' },
]

function GImg({ src, index, className, id, onClick }: {
  src: string; index: number; className?: string; id?: string; onClick: (i: number) => void
}) {
  return <img src={src} alt="" id={id} className={className} onClick={() => onClick(index)} />
}

export default function Youga() {
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)
  function openAt(i: number) { setIdx(i); setOpen(true) }

  return (
    <>
      <div className="hide-for-small"><div id="spacer"></div></div>

      <FadeIn delay={500} duration={1000}>
        <div className="row">
          <div>
            <div className="one columns hide-for-small"></div>
            <div className="five columns" id="rightthat">
              <GImg src="/images/work/youga1.png" index={0} id="yougamain" className="pswp-trigger" onClick={openAt} />
            </div>
            <div className="four columns">
              <div>
                <h4>Youga</h4>
                <hr className="style-two" />
                <h6 className="subheader">mobile app</h6>
                <h5 className="subheader">We stretched this yoga app into a range of personalized workout capabilities. Including the ability to create a yoga mix tape with guided sessions, video and audio content. The capacity to save your favorite sessions, keep track of your goals and share out experiences makes this app feel like a personal yogi.</h5>
              </div>
            </div>
            <div className="one columns hide-for-small"></div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={2000} duration={1000}>
        <div className="row">
          <div className="twelve columns">
            <hr className="style-two" style={{ marginTop: 60 }} />
            <h6 className="subheader"></h6>
            <div className="hide-for-small"><div id="spacer"></div></div>
            <div id="spacer"></div>

            <div className="three mobile-four columns" id="centerthat">
              <GImg src="/images/work/youga2.png" index={1} id="fourupmobile" className="port pswp-trigger" onClick={openAt} />
            </div>
            <div className="three mobile-four columns" id="centerthat">
              <GImg src="/images/work/youga3.png" index={2} id="fourupmobile" className="port pswp-trigger" onClick={openAt} />
            </div>
            <div className="three mobile-four columns" id="centerthat">
              <GImg src="/images/work/youga4.png" index={3} id="fourupmobile" className="port pswp-trigger" onClick={openAt} />
            </div>
            <div className="three mobile-four columns" id="centerthat">
              <GImg src="/images/work/youga8.png" index={4} id="fourupmobile" className="port pswp-trigger" onClick={openAt} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="twelve columns">
            <div className="hide-for-small"><div id="spacer"></div></div>
            <div id="spacer"></div>

            <div className="four mobile-four columns">
              <GImg src="/images/work/youga7.png" index={5} className="port pswp-trigger" onClick={openAt} />
            </div>
            <div className="four mobile-four columns">
              <GImg src="/images/work/youga5.png" index={6} className="port pswp-trigger" onClick={openAt} />
            </div>
            <div className="four mobile-four columns">
              <GImg src="/images/work/youga6.png" index={7} className="port pswp-trigger" onClick={openAt} />
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
