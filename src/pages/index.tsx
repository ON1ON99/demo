'use client';

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import style from "@/styles/index.module.css";
import { useRouter } from "next/navigation";
import ItemsList from "@/components/items_list/items_list";

const Home = () => {
  const router = useRouter()
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.main_catalog}>
        <p className={style.title}>Catalog</p>
        <div>
          <ItemsList />
        </div>
        <div onClick={() => router.push('/catalog')} className={style.watch_more}>
          <p>Watch more</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;