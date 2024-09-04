"use client";
import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import backend from "@/shared/backend";
import { useRouter } from "next/navigation";
import Item from "@/pages/item/[id]";
interface ItemsListProps {
  catalog: Array<{
    title: string;
    price: number;
    image: Array<string> | any;
    stock: boolean;
    description: string;
    amount: number;
  }>;
}

const ItemsList = () => {
  const router = useRouter();
  const [catalog, setCatalog] = useState([]);
  useEffect(() => {
    console.log(' it works')
    backend.catalog().then((data) => {
      setCatalog(data); 

    });
  }, []);

  const handleItemClick = (id: string) => {
    router.push(`/item/${id}`);
  }
  return (
    <div className={style.items}>
      {catalog?.map(( item: any, index: any) => {
        console.log(item, "itemaaaa", index)
        return (
          <div className={style.item} key={index} onClick={()=> handleItemClick(String(item.id)) }>
            <div className={style.image}>
              {item?.attributes.images ? <img src={item?.attributes.images.data[1].attributes.url} alt="item" /> : null}
            </div>
            <div className={style.description}>
              <p className={style.title}>{item?.attributes.title ? item?.attributes.title : "Title"}</p>
              <p className={style.price}>{item?.attributes.price ? item?.attributes.price + "$" : "123" + "$"}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
