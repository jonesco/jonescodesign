import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Wayblazer from './pages/Wayblazer'
import Wellsmith from './pages/Wellsmith'
import Youga from './pages/Youga'
import Partstree from './pages/Partstree'
import Firefly from './pages/Firefly'
import Ironsight from './pages/Ironsight'
import Prime from './pages/Prime'
import Rta from './pages/Rta'
import Dort from './pages/Dort'
import Travelocity from './pages/Travelocity'
import Joule from './pages/Joule'
import Vitaminwater from './pages/Vitaminwater'
import Rembrandt from './pages/Rembrandt'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="wayblazer" element={<Wayblazer />} />
        <Route path="wellsmith" element={<Wellsmith />} />
        <Route path="youga" element={<Youga />} />
        <Route path="partstree" element={<Partstree />} />
        <Route path="firefly" element={<Firefly />} />
        <Route path="ironsight" element={<Ironsight />} />
        <Route path="prime" element={<Prime />} />
        <Route path="rta" element={<Rta />} />
        <Route path="dort" element={<Dort />} />
        <Route path="travelocity" element={<Travelocity />} />
        <Route path="joule" element={<Joule />} />
        <Route path="vitaminwater" element={<Vitaminwater />} />
        <Route path="rembrandt" element={<Rembrandt />} />
      </Route>
    </Routes>
  )
}
