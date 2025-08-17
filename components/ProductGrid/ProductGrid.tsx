import CardProduct from '@/components/CardProduct/CardProduct';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

import styles from './ProductGrid.module.css';

export default function ProductGrid() {
    return (
        <>
            <SectionTitle/>
            <section className={styles.productGridContainer}>
                <CardProduct
                    image='/air-jordan-1-mid-dutch-green-1-400.svg'
                    title='Air Jordan 1 Mid Dutch Green'
                    description='Tênis Air Jordan'
                    price={119999 / 100}
                />

                <CardProduct
                    image='/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.svg'
                    title='Air Jordan 1 High Zoom CMFT Tropical Twist'
                    description='Tênis Air Jordan'
                    price={104900 / 100}
                />

                <CardProduct
                    image='/air-jordan-1-retro-high-court-purple-w-1-400.svg'
                    title='Air Jordan 1 Retro High Court Purple'
                    description='Tênis Air Jordan'
                    price={135000 / 100}
                />

                <CardProduct
                    image='/air-jordan-1-mid-light-smoke-grey-gs-1-1000.svg'
                    title='Air Jordan 1 Mid GS "Light Smoke Grey"'
                    description='Tênis Air Jordan'
                    price={158500 / 100}
                />

                <CardProduct
                    image='/air-jordan-1-mid-bright-citrus-1-1000 1.svg'
                    title='Air Jordan 1 Mid SE Bright Citrus'
                    description='Tênis Air Jordan'
                    price={94999 / 100}
                />

                <CardProduct
                    image='/air-jordan-1-mid-grey-camo-1-1000 1.svg'
                    title='Air Jordan 1 Mid Grey Camo'
                    description='Tênis Air Jordan'
                    price={99999 / 100}
                />
            </section>
        </>
    );
}