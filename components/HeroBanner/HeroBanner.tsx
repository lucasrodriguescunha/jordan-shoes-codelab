import Image from 'next/image';

import styles from './HeroBanner.module.css';

export default function HeroBanner() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <article className={styles.heroHeader}>
                    <Image
                        src='/logo-jordan.svg'
                        alt='Logo da Jordan Shoes'
                        width='48'
                        height='48'
                        className={styles.heroLogo}
                    />
                    <h1 className={styles.heroTitle}>JordanShoes</h1>
                </article>

                <div className={styles.heroDescription}>
                    <h2 className={styles.heroSubtitle}>A melhor loja de Jordan</h2>
                    <p className={styles.heroText}>
                        O tênis Jordan é fruto de uma velha e forte
                        parceria entre a Nike e o jogador Michael Jordan.
                    </p>
                </div>
            </div>
        </section>
    );
}