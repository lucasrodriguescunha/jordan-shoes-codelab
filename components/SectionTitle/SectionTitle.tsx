import styles from './SectionTitle.module.css';

export default function SectionTitle() {
    return (
        <section className={styles.sectionTitleContainer}>
            <div className={styles.sectionDescription}>
                <h3 className={styles.sectionTitle}>Os melhores em um só lugar</h3>
                <span className={styles.sectionText}>
                    A marca Jordan na JordanShoes é a escolha certa para os amantes de sneakers que buscam estilo e conforto.
                </span>
            </div>
        </section>
    );
}