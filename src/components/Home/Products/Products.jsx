import ProductsTitle from "./ProductsTitle/ProductsTitle"
import styles from "./Products.module.css"
import ProductsItems from "./ProductsItems/ProductsItems";
import { data } from "../../../data/data";

const Products = () => {

    return(
        <div className={styles.products}>
            <ProductsTitle/>
        </div>
    )
}

export default Products;