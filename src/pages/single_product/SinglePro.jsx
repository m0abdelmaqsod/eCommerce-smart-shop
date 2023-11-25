import React, { useState, useEffect } from "react";
import styles from "./styles/singlePro.module.css";
import { Link, useParams } from "react-router-dom";
import Similar_pro from "../../components/products/similar_product/Similar_pro";
import { FaFacebookF } from "react-icons/fa";
import {
    AiFillYoutube, AiOutlineWhatsApp, AiOutlineTwitter, AiTwotoneStar, AiFillHeart
} from "react-icons/ai";
import { addCart } from "../../api";
import axios from "axios";
import ProReviews from "./proInfo/proReviews/ProReviews";
import AdditionalInfo from "./proInfo/additionalInfo/AdditionalInfo";
import Description from "./proInfo/description/Description";



const SinglePro = () => {

    const [data, setData] = useState([]);
    document.title =`${data.productName}`;
    
    const [infoProduct, setInfoProduct] = useState("proReviews");
    // console.log(infoProduct);
    
    // === handle swiper img === //
    const [swiperImg, setSwiperImg] = useState(data.imageUrl);
    // console.log(swiperImg);


    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/Product/${id}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <section className={styles.singlePro}>
            {/* === start of header === */}
            <div className={styles.header}>
                <div className={styles.img_header}>
                    <img src={require("../../assets/images/home/paner_pro.png")} alt="" />
                </div>

                <div className={styles.title_header}>
                    <h2>تسوق احدث المنتجات العصرية</h2>

                    <div className={styles.name_and_link}>
                        {/* <p>{data.productName}</p> */}
                        <span>/</span>
                        <Link to={"/Products"}>المنتجات</Link>
                        <span>/</span>
                        <Link to={"/"}>الرئيسية</Link>
                    </div>
                </div>
            </div>

            {/* === start of wiper single product === */}
            <div className={styles.swiper_single_product}>

                {/* start of data_swiper*/}
                <div className={styles.data_swiper}>
                    {/* start of title_price_start*/}
                    <div className={styles.title_price_start}>
                        <h3>{data.productName}</h3>

                        <div className={styles.price}>
                            <p className={styles.discounted}>
                                {data.discountedPrice}ج.م
                            </p>
                            <span>-</span>
                            <p>{data.price}ج.م</p>
                        </div>

                        <div className={styles.assess}>
                            <button className={styles.star}>
                                <AiTwotoneStar />
                            </button>
                            <button>
                                <AiTwotoneStar />
                            </button>
                            <button>
                                <AiTwotoneStar />
                            </button>
                            <button>
                                <AiTwotoneStar />
                            </button>
                            <button>
                                <AiTwotoneStar />
                            </button>
                        </div>
                    </div>

                    {/* start of desc*/}
                    <div className={styles.desc}>
                        <p>{data.desc}</p>
                    </div>

                    {/* start of colors*/}
                    <div className={styles.colors}>
                        <h3> : اللون</h3>

                        <div className={styles.divColorsImg}>
                            <button>
                                <img
                                    src={require("../../assets/images/home/singlePro/Ellipse 188.png")}
                                    alt=""
                                />
                            </button>
                            <button>
                                <img
                                    src={require("../../assets/images/home/singlePro/Ellipse 187.png")}
                                    alt=""
                                />
                            </button>
                            <button>
                                <img
                                    src={require("../../assets/images/home/singlePro/Ellipse 186.png")}
                                    alt=""
                                />
                            </button>
                            <button>
                                <img
                                    src={require("../../assets/images/home/singlePro/Ellipse 189.png")}
                                    alt=""
                                />
                            </button>
                        </div>
                    </div>

                    {/* start of div_btn_KG*/}
                    <div className={styles.div_btn_KG}>
                        <h3> : الوزن</h3>
                        <div className={styles.btn_kg}>
                            <button>5 كيلو</button>
                            <button>3 كيلو</button>
                            <button>2 كيلو</button>
                        </div>
                    </div>

                    {/* start of btn_add_and_numDecInc */}
                    <div className={styles.btn_add_and_numDecInc}>
                        <div className={styles.btn_addCart}>
                            <button
                                onClick={() =>
                                    addCart(
                                        data.productName,
                                        data.price,
                                        data.imageUrl,
                                        data.discountedPrice,
                                        data.categories,
                                        data.trademarks,
                                        data.color,
                                        data.weight
                                    )
                                }
                            >
                                اضف للسلة
                            </button>
                        </div>
                        <div className={styles.btnDecInc}>
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                        </div>
                    </div>

                    {/* start of add heart*/}
                    <div className={styles.add_heart}>
                        <p>اضف للمفضلة</p>
                        <button>
                            <AiFillHeart />
                        </button>
                    </div>

                    {/* start of */}
                    <div className={styles.btn_buy_now}>
                        <Link
                            to={"/Cart"}
                            onClick={() =>
                                addCart(
                                    data.productName,
                                    data.price,
                                    data.imageUrl,
                                    data.discountedPrice,
                                    data.categories,
                                    data.trademarks,
                                    data.color,
                                    data.weight
                                )
                            }
                        >
                            اشتري الان
                        </Link>
                    </div>

                    {/* start of media*/}
                    <div className={styles.media}>
                        <p>شارك عبر موقع التواصل</p>
                        <div className={styles.icons_media}>
                            <ul>
                                <li>
                                    <button className={styles.bg_w}>
                                        <AiOutlineWhatsApp />
                                    </button>
                                </li>
                                <li>
                                    <button className={styles.bg_y}>
                                        <AiFillYoutube />
                                    </button>
                                </li>
                                <li>
                                    <button className={styles.bg_f}>
                                        <FaFacebookF />
                                    </button>
                                </li>
                                <li>
                                    <button className={styles.bg_t}>
                                        <AiOutlineTwitter />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.div_imgPro}>

                    <div className={styles.mySwiper2}>
                        <img src={data.imageUrl} />
                    </div>

                    <div className={styles.mySwiper1}>
                        <img onClick={() => setSwiperImg(data.imageUrl)} className={data.imageUr1 === "" ? styles.img_none : ''} src={data.imageUrl} />
                        <img onClick={() => setSwiperImg(data.imageUr2)} className={data.imageUr2 === "" ? styles.img_none : ''} src={data.imageUr2} />
                        <img onClick={() => setSwiperImg(data.imageUr3)} className={data.imageUr3 === "" ? styles.img_none : ''} src={data.imageUr3} />
                        <img onClick={() => setSwiperImg(data.imageUr4)} className={data.imageUr4 === "" ? styles.img_none : ''} src={data.imageUr4} />
                        <img onClick={() => setSwiperImg(data.imageUr5)} className={data.imageUr5 === "" ? styles.img_none : ''} src={data.imageUr5} />
                    </div>
                </div>

                {/*=== start of infoPro ===*/}
                <div className={styles.infoPro}>
                    <div className={styles.navInfo}>
                        <div className={styles.title}>
                            <button onClick={() => setInfoProduct("proReviews")} className={infoProduct === "proReviews" ? styles.infoProduct : ""} >تقييمات المنتج</button>
                            <button onClick={() => setInfoProduct("additionalInfo")} className={infoProduct === "additionalInfo" ? styles.infoProduct : ""} >معلومات اضافيه</button>
                            <button onClick={() => setInfoProduct("description")} className={infoProduct === "description" ? styles.infoProduct : ""} >الوصف</button>
                        </div>
                    </div>
                    {
                        infoProduct === "proReviews" ? <ProReviews /> : infoProduct === "additionalInfo" ? <AdditionalInfo /> : infoProduct === "description" ? <Description /> : ''
                    }

                </div>
            </div>

            {/* === start of Similar_pro === */}
            <Similar_pro />
        </section>
    );
};

export default SinglePro;