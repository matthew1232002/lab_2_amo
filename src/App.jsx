import {Menu} from "./components/Menu";
import {
  BrowserRouter,
  Routes,
  Route, Navigate,
} from 'react-router-dom';
import {Lab2} from "./pages/lab2/Lab2";

function App() {
  return (
  <BrowserRouter basename={`/${import.meta.env.VITE_BASE_ROUTE}`}>
    <div className="flex">
      <Menu />
      <div className="p-12 w-full">
        <Routes>
          <Route path="/lab-2" element={<Lab2 />} />
          <Route path="/lab-3" element={null} />
          <Route path="/lab-4" element={null} />
          <Route path="/lab-5" element={null} />
          <Route path="*" element={<Navigate to="/lab-1" replace />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  )
}

export default App
