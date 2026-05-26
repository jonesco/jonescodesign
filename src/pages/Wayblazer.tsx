import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import FadeIn from '../components/FadeIn'

const slides = [
  { src: '/images/work/wayblazer_home2.png' },
  { src: '/images/work/wayblazer_results_land.png' },
  { src: '/images/work/wayblazer_results.png' },
  { src: '/images/work/wayblazer_maps.png' },
  { src: '/images/work/wayblazer_mobile1.png' },
  { src: '/images/work/wayblazer_mobile2.png' },
  { src: '/images/work/wayblazer_mobile3.png' },
  { src: '/images/work/wayblazer_mobile4.png' },
]

function GalleryImg({ src, index, className, style, onClick }: {
  src: string
  index: number
  className?: string
  style?: React.CSSProperties
  onClick: (i: number) => void
}) {
  return (
    <img
      src={src}
      alt=""
      className={className}
      style={style}
      onClick={() => onClick(index)}
    />
  )
}

export default function Wayblazer() {
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
              <GalleryImg src="/images/work/wayblazer_home2.png" index={0} className="pswp-trigger roundthat bump" onClick={openAt} />
            </div>
            <div className="three columns">
              <div>
                <h4>Wayblazer</h4>
                <hr className="style-two" />
                <h6 className="subheader">search platform</h6>
                <h5 className="subheader">A search experience that navigates around you, Wayblazer is blazing a trail as the first "smart" travel website. Leveraging IBM Watson by incorporating a selection of API's into their technology platform, we designed this site with the ability to predict the type of trip, like a family versus a business trip, as well as suggest activities and features to enhance your visit. Plus, the ability to operate seamlessly inside third party sites with just a few CSS tweaks.</h5>
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
            <div className="four mobile-four columns bump">
              <GalleryImg src="/images/work/wayblazer_results_land.png" index={1} className="pswp-trigger roundthat bump" onClick={openAt} />
            </div>
            <div className="four mobile-four columns bump">
              <GalleryImg src="/images/work/wayblazer_results.png" index={2} className="pswp-trigger roundthat bump" onClick={openAt} />
            </div>
            <div className="four mobile-four columns bump">
              <GalleryImg src="/images/work/wayblazer_maps.png" index={3} className="pswp-trigger roundthat bump" onClick={openAt} />
            </div>
          </div>
        </div>

        <div className="hide-for-small"><div id="spacer"></div></div>

        <div className="row">
          <div className="twelve columns">
            <hr className="style-two" />
            <h6 className="subheader"><span>&#9661;</span>responsive mobile</h6>
            <div className="three mobile-two columns">
              <GalleryImg src="/images/work/wayblazer_mobile1.png" index={4} className="pswp-trigger roundthat bump" onClick={openAt} />
            </div>
            <div className="three mobile-two columns bump">
              <GalleryImg src="/images/work/wayblazer_mobile2.png" index={5} className="pswp-trigger roundthat bump" onClick={openAt} />
            </div>
            <div className="three mobile-two columns bump">
              <GalleryImg src="/images/work/wayblazer_mobile3.png" index={6} className="pswp-trigger roundthat bump" onClick={openAt} />
            </div>
            <div className="three mobile-two columns bump">
              <GalleryImg src="/images/work/wayblazer_mobile4.png" index={7} className="pswp-trigger roundthat bump" onClick={openAt} />
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
