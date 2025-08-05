import InputText from "../InputText";
import FieldSet from "../FieldSet";
import Button from "../Button";
import styles from './Newsletter.module.css';

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
        <h2 className={styles.titulo}>Inscreva se para ganhar descontos</h2>
        <form className={styles.form}>
            <FieldSet>
                <InputText placeholder="Digite seu email"></InputText>
            </FieldSet>
            <Button variant="default" type="submit">
                Inscreva se
            </Button>
        </form>
    </section>
  )
}

export default Newsletter;