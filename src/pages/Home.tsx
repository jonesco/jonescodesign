import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'

const projects = [
  { slug: 'wayblazer', thumb: '/images/thumb/wayblazer_thumb.jpg' },
  { slug: 'firefly',   thumb: '/images/thumb/firefly_thumb.jpg' },
  { slug: 'wellsmith', thumb: '/images/thumb/wellsmith_thumb.jpg' },
  { slug: 'ironsight', thumb: '/images/thumb/ironsight_thumb.jpg' },
  { slug: 'prime',     thumb: '/images/thumb/prime_thumb.jpg' },
  { slug: 'rta',       thumb: '/images/thumb/rta-shirts_thumb.jpg' },
  { slug: 'youga',     thumb: '/images/thumb/youga_thumb.png' },
  { slug: 'dort',      thumb: '/images/thumb/glbc_thumb.jpg' },
  { slug: 'travelocity', thumb: '/images/thumb/travelocity_thumb.jpg' },
  { slug: 'joule',     thumb: '/images/thumb/joule_thumb.png' },
  { slug: 'vitaminwater', thumb: '/images/thumb/vw_thumb.jpg' },
  { slug: 'rembrandt', thumb: '/images/thumb/rembrandt_thumb.jpg' },
]

export default function Home() {
  return (
    <>
      <div className="hide-for-small"><div id="spacer"></div></div>

      <FadeIn delay={500} duration={500}>
        <div id="thumbs" className="row">
          {projects.map(p => (
            <div key={p.slug} id="thumb" className="three mobile-two columns">
              <Link to={`/${p.slug}`}>
                <img src={p.thumb} alt={p.slug} />
              </Link>
            </div>
          ))}

          <div className="row hide-for-small" style={{ paddingBottom: 80 }}></div>
        </div>
      </FadeIn>
    </>
  )
}
