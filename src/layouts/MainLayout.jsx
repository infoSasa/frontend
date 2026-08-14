import { Outlet } from 'react-router-dom'
import { Header } from '../components/layout/Header.jsx'
import { Footer } from '../components/layout/Footer.jsx'
import { SideLeftPanel } from '../components/layout/SideLeftPanel.jsx'
import { SideRightPanel } from '../components/layout/SideRightPanel.jsx'

import '../styles/MainLayout.css'

export const MainLayout = () =>{
  return(
    <div id="main-grid">
      <div id="header-grid"><Header /></div>
      <div id="side-left-panel"><SideLeftPanel /></div>
      <main>
        <div id="outlet-panel">
          <Outlet />
        </div>
      </main>
      <div id="side-right-panel"><SideRightPanel /></div>
      <div id="footer"><Footer /></div>
    </div>
  )   
}