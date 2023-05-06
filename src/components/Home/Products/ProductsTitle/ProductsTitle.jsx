import styles from "./ProductsTitle.module.css";

import { typesEat } from "../../../../data/data"; 
import { data } from "../../../../data/data";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductsItems from "../ProductsItems/ProductsItems";

const ProductsTitle = () => {
    let newData = data.filter(dish => dish.type === "ХОЛОДНЫЕ ЗАКУСКИ".toUpperCase());

    const [type, setType] = useState(newData)

    const findDishes = (event) => {
        newData = data.filter(dish => dish.type === event.target.innerHTML.toUpperCase());
        setType(newData);
    }

    // console.log(type);
    return(
        <>
        <nav className= {styles.nav}>
           {typesEat.map(typeDish => 
                <Link to = '/' 
                key = {typeDish}
                onClick= {findDishes}
                >
                    <span 
                        className={styles.nav__item}
                        // key = {typeDish}
                        // onClick= {findDishes}
                    >
                        {typeDish}
                    </span>   
                </Link>
            )}
        </nav>
        <ProductsItems data = {type}/>
        </> 
    )
}

export default ProductsTitle;