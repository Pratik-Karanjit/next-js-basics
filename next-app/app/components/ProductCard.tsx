import React from 'react'
import AddToCart from './AddToCart'
import styles from './ProductCard.module.css'

styles.card

//call all components here
const ProductCard = () => {
  return (
    <div className={styles.card}>
    <div>ProductCard</div>
    <AddToCart></AddToCart>
    </div>
  )
}

export default ProductCard