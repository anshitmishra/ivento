import Link from "next/link";
import React from "react";
import style from "../../styles/common/Footer.module.css"

const Footer = () => {
    return (
        <>
            <div className={style.mainTeam}>
                <Link href={"/team"}><p>view team members</p></Link>
            </div>
            <div className={style.mainFooter}>
                <p>copyright © 2022 developed by <a target={"_blank"} rel={"noreferrer"} href="https://github.com/anshitmishra">anshit mishra</a></p>
            </div>
        </>
    )
}

export default Footer;