import ProductsTitle from "./ProductsTitle/ProductsTitle"
import styles from "./Products.module.css"

const Products = () => {

    return(
        <div className={styles.products}>
            <ProductsTitle/>
        </div>
    )
}

export default Products;