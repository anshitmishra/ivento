import React, { useState } from "react";
import style from "../../styles/common/Header.module.css"
import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
    const [menuShow, setMenuShow] = useState<any>(false)
    return (
        <>
            <div className={style.header_main}>
                <Link href={'/home'}><div className={style.header_main_logo}>
                    <img src="/images/logo.png" alt="ivento logo" />
                </div></Link>

                <div className={style.main_heaeder_menu_holder}>
                    <div className={style.main_header_menu_box_icon} onClick={() => setMenuShow(!menuShow)}>
                        <RiMenu4Fill />
                    </div>
                    <div className={style.main_header_menu_item_holder}>
                        <div className={style.main_header_menu_item}>
                            <Link href="/#tech"><p>tech</p></Link>
                        </div>
                        <div className={style.main_header_menu_item}>
                            <Link href="/#non-tech"><p>non-tech</p></Link>
                        </div>
                        <div className={style.main_header_menu_item}>
                            <Link href="/#esports"><p>esports</p></Link>
                        </div>
                        <div className={style.main_header_menu_item}>
                            <Link href="/team"><p>Team</p></Link>
                        </div>
                        {/* <Link href="/home/#tech"><div className={style.main_header_menu_item}>
                            <p>about-us</p>
                        </div></Link> */}
                    </div>
                </div>
            </div>
            <div className={style.main_header_menu_item_holder_two} style={{ display: `${menuShow == true ? "flex" : "none"}` }}>
                <div className={style.main_header_menu_box_icon_close} onClick={() => setMenuShow(!menuShow)}>
                    <AiOutlineClose />
                </div>
                <div className={style.main_header_menu_item_two}>
                    <img src="./images/logo.png" alt="ivento logo" />
                </div>
                <div>

                    <div className={style.main_header_menu_item_two}>
                        <Link href="/team"><p>tech</p></Link>
                    </div>
                    <div className={style.main_header_menu_item_two}>
                        <Link href="/team"><p>non-tech</p></Link>
                    </div>
                    <div className={style.main_header_menu_item_two}>
                        <Link href="/team"><p>esports</p></Link>
                    </div>
                    <div className={style.main_header_menu_item_two}>
                        <Link href="/team"><p>Team</p></Link>
                    </div>
                    {/* <Link href="/home/#tech"><div className={style.main_header_menu_item}>
                        <p>about-us</p>
                    </div></Link> */}

                </div>
            </div>
        </>
    )
}

export default Header;