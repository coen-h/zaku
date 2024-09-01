import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="/dmca" element={<Dmca />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  )
}