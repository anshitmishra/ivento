import Link from "next/link";
import React from "react";
import style from "../../styles/common/Footer.module.css"

const Footer = () => {
    return (
        <>
            <div className={style.mainTeam}>
                <Link href={"/team"}><p>Contact Us</p></Link>
            </div>
            <div className={style.mainFooter}>
                <p>copyright © 2022 </p>
            </div>
        </>
    )
}

export default Footer;
