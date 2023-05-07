import styles from "./ProductsTitle.module.css";

import { typesEat } from "../../../../data/data"; 
import { data } from "../../../../data/data";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ProductsItems from "../ProductsItems/ProductsItems";

const ProductsTitle = () => {
    // let newData = data.filter(dish => dish.type === "cold");

    // const [type, setType] = useState(newData)

    // const findDishes = (event) => {
    //     newData = data.filter(dish => dish.type === event.target.innerHTML.toUpperCase());
    //     setType(newData);
    // }

    return(
        <>
        <nav className= {styles.nav}>
           {typesEat.map((type) => 
                <Link to = {`/${type.link}`} key = {type.link}>
                    <span className={styles.nav__item}>
                        {type.text}
                    </span>   
                </Link>
            )}
        </nav>
        {/* <ProductsItems data = {type}/> */}
        </> 
    )
}

export default ProductsTitle;