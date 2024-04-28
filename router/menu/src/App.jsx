import {Routes, Route, Outlet} from 'react-router-dom'
import { Menu } from './components/Menu'
import { HomePage } from './components/HomePage'
import { DriftPage } from './components/DriftPage'
import { TimeAttackPage } from './components/TimeAttackPage'
import { ForzaPage } from "./components/ForzaPage";

export default function App() {
  return (
    <div>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
}