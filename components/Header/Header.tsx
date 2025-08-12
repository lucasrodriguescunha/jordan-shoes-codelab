
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <p className={styles.phraseFreight}>Frete grátis para todo o Brasil</p>
        </div>
    );
}