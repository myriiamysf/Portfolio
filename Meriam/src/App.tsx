import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Body from './pages/BodyN'


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/body" element={<Body/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
