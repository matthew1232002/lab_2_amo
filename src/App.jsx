import {Menu} from "./components/Menu";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import {Lab1} from "./pages/lab1/Lab1";
import {Linear} from "./pages/lab1/Linear";
import {Branched} from "./pages/lab1/Branched";
import {Circular} from "./pages/lab1/Circular";

function App() {
  return (
  <BrowserRouter>
    <div className="flex">
      <Menu />
      <div className="p-12 w-full">
        <Routes>
          <Route path="/lab-1" element={<Lab1 />}>
            <Route path="linear" element={<Linear />} />
            <Route path="branched" element={<Branched />} />
            <Route path="circular" element={<Circular />} />
          </Route>
          <Route path="/lab-2" element={<Lab1 />} />
          <Route path="/lab-3" element={<Lab1 />} />
          <Route path="/lab-4" element={<Lab1 />} />
          <Route path="/lab-5" element={<Lab1 />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  )
}

export default App
