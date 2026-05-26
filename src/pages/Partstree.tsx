import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import FadeIn from '../components/FadeIn'

const slides = [
  { src: '/images/work/partstree_home.png' },
  { src: '/images/work/partstree_cascading.png' },
  { src: '/images/work/partstree_multiple.png' },
  { src: '/images/work/partstree-diagram.png' },
]

function GImg({ src, index, className, onClick }: {
  src: string; index: number; className?: string; onClick: (i: number) => void
}) {
  return <img src={src} alt="" className={className} onClick={() => onClick(index)} />
}

export default function Partstree() {
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
              <GImg src="/images/work/partstree_home.png" index={0} className="pswp-web-trigger" onClick={openAt} />
            </div>
            <div className="three columns">
              <div>
                <h4>PartsTree</h4>
                <hr className="style-two" />
                <h6 className="subheader">specialized e-commerce</h6>
                <h5 className="subheader">PartsTree came to us with a complex UX challenge and we accepted every bit. With a slew of different search possibilities – from model numbers to lawn equipment brands to serial numbers – we created an intuitive and robust platform so that customers can find the parts they need, simply and quickly.</h5>
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
              <GImg src="/images/work/partstree_cascading.png" index={1} className="port pswp-web-trigger" onClick={openAt} />
            </div>
            <div className="four mobile-four columns">
              <GImg src="/images/work/partstree_multiple.png" index={2} className="port pswp-web-trigger" onClick={openAt} />
            </div>
            <div className="four mobile-four columns">
              <GImg src="/images/work/partstree-diagram.png" index={3} className="port pswp-web-trigger" onClick={openAt} />
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
