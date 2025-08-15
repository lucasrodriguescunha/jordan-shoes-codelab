import HeroBanner from '@/components/HeroBanner/HeroBanner';

import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <span className={styles.freeShippingMessage}>
                Frete grátis para todo o Brasil
            </span>
            <HeroBanner/>
        </header>
    );
}