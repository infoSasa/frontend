import { Outlet } from 'react-router-dom'
import { Header } from '../components/layout/Header/Header.jsx'
import { Footer } from '../components/layout/Footer/Footer.jsx'
import { SidePanelLeft } from '../components/layout/SidePanelLeft/SidePanelLeft.jsx'
import { SidePanelRight } from '../components/layout/SidePanelRight/SidePanelRight.jsx'

import styles from './MainLayout.module.css'

export const MainLayout = () =>{
  return(
    <div className={styles.mainLayoutGrid}>
      <header className={styles.headerArea}><Header /></header>
      <section className={styles.sideLeftArea}><SidePanelLeft /></section>
      <main>
        <div className={styles.outletArea}>
          <Outlet />
        </div>
      </main>
      <section className={styles.sideRightArea}><SidePanelRight /></section>
      <footer className={styles.footerArea}><Footer /></footer>
    </div>
  )   
}