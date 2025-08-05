import styles from './Footer.module.css';

const FooterInfo = () => {
  return (
    <div className={styles.funcionamento}>
        <h4 className={styles.titulo}>Funcionamento</h4>
        <span>Segunda a sexta, 16h as 00h</span>
        <span>ola@luzecena.com.br</span>
        <span>0800 234 5432</span>
    </div>
  )
}

export default FooterInfo