import React from "react";
import Header from "../../common/header";
import style from "../../../styles/esports/event/Index.module.css"
import Footer from "../../common/footer";
import { AiOutlineDown } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { TbBrandDiscord } from "react-icons/tb";
import Link from "next/link";
const Events = () => {
    return (
        <>
            <div className={style.main}>
                <Header />
                <div className={style.mainBg}>
                    <div className={style.mainBgDesignOne}>
                        <img src="/images/esports/events/1/1.png" alt="valorent" />
                    </div>
                    <div className={style.mainBgDesignThree}>
                        <h2>Shake Down Season 1</h2>
                        <h4 style={{ width: "100%", textAlign: "center" }}>show case what you got!</h4>
                    </div>
                    <div className={style.mainBgDesignFour}>
                        <button className={style.mainBgDesignFourButton}>Register Now</button>
                        <Link href={"/esports/event/#details"}><p>scroll down for details <AiOutlineDown style={{ lineHeight: "0px" }} /></p></Link>
                    </div>
                    <div className={style.mainBgDesignTwo}>
                        <img src="/images/esports/events/1/3.png" alt="valorent" />
                    </div>
                    <div className={style.mainBgDesignFive}>
                        <span> <a href="https://www.facebook.com/people/ivento_itm/100086248157978/" target={"_blank"} rel={"noreferrer"}><FaFacebookF /></a></span>
                        <span><a href="https://www.instagram.com/ivento_itm/" target={"_blank"} rel={"noreferrer"}><FaInstagram /></a></span>
                        <span><a href="https://twitter.com/ivento_itm?s=20&t=6DxUTd_UE9nUUTXjtGN3WQ" target={"_blank"} rel={"noreferrer"}><FaTwitter /></a></span>
                        <span><a href="https://discord.com/invite/QxKUswx7KZ" target={"_blank"} rel={"noreferrer"}><TbBrandDiscord /></a></span>
                    </div>
                    <div className={style.mainBgDesignSix}>
                        <p>terms {"&"} conditions applied.</p>
                    </div>
                </div>
                <div className={style.mainContianer} id="details">
                    <h2>Description</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, atque. At dolore sint officia, ex ad, ipsa commodi reiciendis eius voluptatem accusantium eos. Tenetur provident commodi earum molestias, sapiente eveniet?
                        Culpa pariatur quaerat fuga consequatur earum delectus sequi, labore voluptatum, assumenda maxime asperiores totam explicabo omnis quidem eos ea fugit velit sit quam non minus dolor eaque distinctio. Vitae, laudantium!
                       </p>
                    <h2>Eligibility</h2>
                        <ul className={style.mainContainerList}>
                            <li>Every Participant should be a student of ITM GOI.</li>
                            <li>The event is available only for the students of these particular courses -</li>
                            <ul>
                                <li className={style.mainContainerListTwo}>B.TECH</li>
                                <li className={style.mainContainerListTwo}>MCA</li>
                                <li className={style.mainContainerListTwo}>MBA</li>
                            </ul>
                        </ul>
                    <h2>Event Rules and Regulations-</h2>
                        <ul className={style.mainContainerList}>
                            <li>Registration is Free for everyone.</li>
                            <li>Participants have to bring their own devices and other accessories by their own.</li>
                            <li>Internet connection will be provided by Us.</li>
                            <li>Participants have to give their full details.</li>
                            <li>All the participants have to be present at the venue.</li>
                            <li>Harsh language and misbehavior are strictly prohibited, and strict action will be taken if found.</li>
                            <li>The usage of cheats, hacks or any other third-party applications that give you an unfair advantage over your opponents will result in immediate disqualification. Teams or players may also be banned from future tournaments.</li>
                            <li>Matches will not be restarted just because someone disconnects and/or their game crashes.</li>
                            <li>If a participant is disconnected due to network issues, they are allowed to reconnect back to the ongoing match if possible.</li>
                            <li>In case of a server crash and if the game cannot be continued due to various unfortunate reasons, the room will be re-hosted or rescheduled and the game will be played from start at the sole discretion of the admins.</li>

                        </ul>
                    <h2>Location</h2>
                    <p className={style.mainContainerMap}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d551.9657960597973!2d78.18813467952738!3d26.14755866994058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c4964532abdd%3A0xe71fa0450b77e0a5!2sITM%20Gwalior!5e0!3m2!1sen!2sin!4v1668275823608!5m2!1sen!2sin" width={"100%"} height={"350px"}  style={{maxWidth:"400px",border:"0px"}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Events;