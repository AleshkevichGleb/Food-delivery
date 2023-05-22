import styles from "./ProductsTitle.module.css"; 
import { Link, useLocation } from "react-router-dom";
import { initialState } from "../../../../reducer/initialState";

const ProductsTitle = () => {

    const {pathname} = useLocation();
    
    return(
        <nav className= {styles.nav}>
           {initialState.map((type) => 
                <Link to = {`/${type.link}`} key = {type.id}>
                    <span className={pathname.slice(1) !== type.link 
                                    ? styles.nav__item 
                                    : [styles.nav__item, styles.nav__item_active].join(' ')}
                    >
                        {type.title}
                    </span>   
                </Link>
            )}
        </nav>
    )
}

export default ProductsTitle;