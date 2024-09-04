import backend from "@/shared/backend";
import style from "@/styles/item.module.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { redirect, useRouter } from "next/navigation";

const Item = (id: string) => {
  interface Item {
    title?: string;
    amount?: number;
    price?: number;
    description?: string;
    stock?: boolean;
    images: {
      data: {
        attributes: {
          url: string;
        };
      }[];
    };
  }
  const [item, setItem] = useState<Item>({ images: { data: [] } });
  const router = useRouter()
  if (typeof window !== "undefined") {
    id = window.location.pathname.split("/")[2];
  }
  useEffect(() => {
    backend.item(id).then((data) => {
      setItem(data);
    });
  }, []);
  return (
    <div className={style.wrapper}>
      <div className={style.upper}>
        <div className={style.left_container}>
          <div className={style.exit_btn}>
            <button onClick={()=> router.push('/catalog')}>Exit</button>
          </div>
          {/* <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {item?.images.data.map((image: any) => (
              <SwiperSlide key={image.attributes.url}>
                <img
                  src={
                    !image.attributes.url
                      ? `http://localhost:3000/${image.attributes.url}`
                      : "https://via.placeholder.com/300"
                  }
                  alt="item"
                />
              </SwiperSlide>
            ))}
          </Swiper> */}
          <img
            src={
              !item.images.data[0]?.attributes.url
                ? `http://localhost:3000/${item?.images?.data[0]?.attributes.url}`
                : "https://via.placeholder.com/300"
            }
            alt="item"
          />
        </div>

        <div className={style.right_container}>
          <div className={style.title}>
            <p>{item.title ? item.title : "Title"}</p>
          </div>
          <div className={style.amount}>
            <div className={item.stock ? style.stock : style.nonstock}>
              {item.stock ? <p>In Stock</p> : <p>Out of Stock</p>}
            </div>
            <div className={style.amount_num}>
              <p>{item.amount}</p>
            </div>
            <div className={style.price}>
              {item.price ? <p>{item.price}$</p> : <p>123$</p>}
            </div>
          </div>
          <div className={style.where_buy}>
            <p>Where to buy</p>
            <div>
              <button>Amazon</button>
              <button>Aliexpress</button>
              <button>Ebay</button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.lower}>
        <div className={style.description}>
          <h3>Description</h3>
          <p>{item.description ? item.description : "Description"}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;