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
                    <h1 className={styles.heroTitle}>A melhor loja de Jordan</h1>
                </article>

                <p className={styles.heroDescription}>
                    A melhor loja de Jordan. O tênis Jordan é fruto de uma velha e forte
                    parceria entre a Nike e o jogador Michael Jordan.
                </p>
            </div>
        </section>
    );
}