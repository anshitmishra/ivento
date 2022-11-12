import React from "react";
import Header from "../../common/header";
import style from "../../../styles/esports/event/Index.module.css"
import Footer from "../../common/footer";
const Events = () => {
    return (
        <>
        <div className={style.main}>
        <Header/>
        <div className={style.mainBg}>
            <div className={style.mainBgDesignOne}>
                <img src="/images/esports/events/1/1.png" alt="valorent" />
            </div>
            <div className={style.mainBgDesignThree}>
               <h2>Shake Down Season 1</h2>
            </div>
            <div className={style.mainBgDesignFour}>
               <button className={style.mainBgDesignFourButton}>Register Now</button>
            </div>
            <div className={style.mainBgDesignTwo}>
                <img src="/images/esports/events/1/3.png" alt="valorent" />
            </div>
        </div>
        <div className={style.mainContianer}></div>
        </div>
        <Footer/>
        </>
    )
} 

export default Events;