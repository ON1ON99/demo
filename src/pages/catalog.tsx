'use client'
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ItemsList from "@/components/items_list/items_list";
import style from "@/styles/catalog.module.css";

const Catalog = () => {
return(
    <div className={style.wrapper}>
        <Header/>
        <div className={style.container}>
            <div className={style.header}>
                <p>Products</p>
                <div className={style.search}>
                <input type="text" placeholder="Search" />
                <button>Search</button>
                </div>
            </div>
            <ItemsList />
            <div className={style.pagination}>
                
            </div>
        </div>
        <Footer />
    </div>
)
}

export default Catalog;