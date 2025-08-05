import React from 'react'
import Logo from '../Logo'
import styles from './Footer.module.css';

const FooterLogo = () => {
  return (
    <div className={styles.logo}>
        <Logo src="./logo_branco.png" alt='logo'></Logo>
        <p>Onde a realidade encontra a fantasia</p>
    </div>
  )
}

export default FooterLogo