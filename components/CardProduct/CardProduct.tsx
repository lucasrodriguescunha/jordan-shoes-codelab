import Image from 'next/image';

import styles from './CardProduct.module.css';

interface CardProductProps {
    image: string;
    title: string;
    description: string;
    price: number;
}

export default function CardProduct({image, title, description, price}: CardProductProps) {
    return (
        <section className={styles.cardProductContainer}>
            <div className={styles.cardContent}>
                <Image
                    src={image}
                    alt='Tênis Jordan'
                    width={225}
                    height={135}
                />

                <h2 className={styles.productTitle}>{title}</h2>
                <p className={styles.productDescription}>{description}</p>
                <span className={styles.productPrice}>R$ {price.toFixed(2)}</span>
                <button className={styles.addToCartButton}>Add to Cart</button>
            </div>
        </section>
    );
}