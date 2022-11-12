import React from "react";
import Header from "../common/header"
import style from "../../styles/home/Home.module.css"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { TbBrandDiscord } from "react-icons/tb";
import { FaRegWindowMinimize, FaRegWindowMaximize, FaTimes } from "react-icons/fa";
import { BiCheckbox, } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";
import { BsTriangle, BsCircle } from "react-icons/bs";
import Link from "next/link";
import Footer from "../common/footer";

const Home = () => {

    return (
        <>
            <div className={style.main_section}>

                <section id={style.section_one} className={style.section}>
                    <Header></Header>
                    <div className={style.main_container} id="home">
                        {/* design one */}
                        <div className={style.main_design_one}>
                            <span className={style.main_design_one_item}></span>
                            <span className={style.main_design_two_item}></span>
                        </div>



                        {/* design two */}
                        <div className={style.main_design_two}>
                           <span> <a href="https://www.facebook.com/people/ivento_itm/100086248157978/" target={"_blank"}  rel={"noreferrer"}><FaFacebookF /></a></span>
                            <span><a href="https://www.instagram.com/ivento_itm/" target={"_blank"}  rel={"noreferrer"}><FaInstagram /></a></span>
                            <span><a href="https://twitter.com/ivento_itm?s=20&t=6DxUTd_UE9nUUTXjtGN3WQ" target={"_blank"}  rel={"noreferrer"}><FaTwitter /></a></span>
                            <span><a href="https://discord.com/invite/QxKUswx7KZ" target={"_blank"}  rel={"noreferrer"}><TbBrandDiscord /></a></span>
                        </div>



                        {/* design three */}
                        <div className={style.main_design_three}>
                            <span className={style.main_design_three_item_one}>x <br />x <br />x <br />x <br /></span>
                            <span className={style.main_design_three_item_two}>x <br />x <br />x <br />x <br /></span>
                        </div>


                        {/* design four center */}
                        <div className={style.main_design_four}>
                            <div className={style.main_design_four_letters}>
                                <span>I</span>
                                <span>{'\''}</span>
                                <span>v</span>
                                <span>e</span>
                                <span id={style.main_design_four_letters_image}><img src="./images/mainsectionone.png" alt="ivento" /></span>
                                <span>n</span>
                                <span>t</span>
                                <span>{'\''}</span>
                                <span>O</span>
                            </div>
                            <div className={style.main_deisgn_four_letters_two}>
                                <p>Show Case What You Got</p>
                            </div>
                        </div>

                    </div>
                </section>

                <section id={style.section_two} className={style.section}>
                    <div className={style.main_section_two} id="tech">
                        {/* design one */}
                        <div className={style.main_section_two_design_one}>
                            <div className={style.main_section_two_design_one_circle}>
                                <img src="/images/section2image1.webp" alt="computer image" />
                            </div>
                        </div>



                        {/* design two */}
                        <div className={style.main_section_two_design_two}>
                            {/* console design */}
                            <div className={style.main_section_two_design_two_design_holder}>
                                {/* console design header */}
                                <div className={style.main_section_two_design_two_design_holder_header}>
                                    <div className={style.main_section_two_design_two_design_holder_header_left}>
                                        <img src="/images/cmdlogo.png" alt="cmd logo" />
                                        <p>Command Prompt </p>
                                    </div>
                                    <div className={style.main_section_two_design_two_design_holder_header_right}>
                                        <p><FaRegWindowMinimize /></p>
                                        <p><FaRegWindowMaximize /></p>
                                        <p id={style.section_two_console_design_close}><FaTimes /></p>
                                    </div>
                                </div>

                                {/* console log design main body */}
                                <div className={style.main_section_two_design_two_design_holder_body}>
                                    <div className={style.main_section_two_design_two_design_holder_body_text_holder}>
                                        <p>Microsoft Windows {'['}Version 10.0.22621.674{']'}<br /><br />
                                            {'(c)'} Microsoft Corporation. All rights reserved.<br /><br />
                                            C:\Users\Admin{'>'} I{'\''}vent{'\''}O <br /></p>
                                        <pre>
                                            ##  ##        ##  #######  ###    ##  ########    ######    <br />
                                            ##   ##      ##   ##       ## #   ##     ##      ##    ##   <br />
                                            ##    ##    ##    #####    ##  #  ##     ##     ##      ##  <br />
                                            ##     ##  ##     ##       ##   # ##     ##      ##    ##   <br />
                                            ##       ##       #######  ##    ###     ##       ######    <br />
                                        </pre>
                                        <p>
                                            IventO:\User\{'>'} I{'\''}vent{'\''}O Tech --help<br /><br />
                                            I{'\''}vent{'\''}O is a club that based on three category{'\''}s. we organize compition for you so<br /> show case what you got<br /><br />

                                            Options -- {'(Click Option)'}<br />
                                        </p>
                                        <ul>
                                        <a href="https://www.instagram.com/ivento_itm/" target={"_blank"}  rel={"noreferrer"}><li>Join Club</li></a>
                                        <Link href="./team" ><li>Details I{"'"}vent{"'"}O Team</li></Link>
                                        <a href="#esports" ><li>Scroll Down To Explore More</li></a></ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section id={style.section_three} className={style.section}>
                    <video preload="true" autoPlay muted loop playsInline={true} poster="/images/gameplayimage.JPG"><source src="/images/gameplay.mp4" type="video/mp4" /></video>
                    <div className={style.main_section_three_holder} id="esports">
                        <div className={style.main_section_three_holder_item_one}>
                            {/* item one design one */}
                            <div className={style.main_section_three_holder_item_one_design_one_holder}>
                                <div className={style.main_section_three_holder_item_one_design_design}>
                                    <p style={{ color: "#38dfc9" }}><BsTriangle /></p>
                                    <p style={{ color: "#d692be" }}><BiCheckbox /></p>
                                    <p style={{ color: "#ed6c6a" }}><BsCircle /></p>
                                    <p style={{ color: "#9bade4" }}><FaTimes /></p>
                                </div>
                                <div className={style.main_section_three_holder_item_one_design_three}>
                                    <img src="/images/tekken.jpg" alt="tekken " />
                                </div>
                                <div className={style.main_section_three_holder_item_one_design_one}>
                                    <img src="/images/section3image.jpg" alt="game " />
                                </div>
                                <div className={style.main_section_three_holder_item_one_design_two}>
                                    <img src="/images/bgmi.webp" alt="game " />
                                </div>
                            </div>
                        </div>
                        <div className={style.main_section_three_holder_item_two}>
                            <div className={style.main_section_three_holder_item_two_design}>
                                <h2 ><HiMenuAlt1 size={40} style={{position:"relative",top:"10px"}}/>sports </h2>                                
                                <p>I{'\''}vent{'\''}O is first club of itm that organize and support e-sport
s. we are organizing a esports event on 26th of Nov 2022. so join us and show case what you got!</p>
                                <a href="https://forms.gle/pX8GCNrcukK5wvhh7" target={"_blank"}  rel={"noreferrer"}><button>join event</button></a>
                                <div className={style.main_section_three_holder_item_two_design_design}>
                                    <p style={{ color: "#38dfc9" }}><BsTriangle /></p>
                                    <p style={{ color: "#d692be" }}><BiCheckbox /></p>
                                    <p style={{ color: "#ed6c6a" }}><BsCircle /></p>
                                    <p style={{ color: "#9bade4" }}><FaTimes /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={style.section_four} className={style.section}>
                    <div className={style.main_design_four_holder} id="non-tech">
                        <div className={style.main_design_four_holder_item_one}>
                            <img src="/images/section4.png" alt="community" />

                            {/* design one */}

                            <div className={style.main_design_four_holder_item_one_design}>
                                <span></span><span></span><span></span><span></span><span></span><br /><span></span><span></span><span></span><span></span><span></span><br /><span></span><span></span><span></span><span></span><span></span><br /><span></span><span></span><span></span><span></span><span></span><br />
                            </div>
                        </div>
                        <div className={style.main_design_four_holder_item_two}>
                            <div className={style.main_design_four_holder_item_one_design} style={{zIndex:"99",bottom:"0px",padding:"5px"}}>
                                <span></span><span></span><span></span><span></span><span></span><br /><span></span><span></span><span></span><span></span><span></span><br /><span></span><span></span><span></span><span></span><span></span><br /><span></span><span></span><span></span><span></span><span></span><br />
                            </div>
                            <div className={style.main_design_four_holder_item_two_design}>

                            </div>
                            <div className={style.main_design_four_holder_item_two_design_text}>

                                <h3>Non Tech</h3>
                                <p>I{'\''}vent{'\''}O non tech team based on different types of task like handling social media managing events and many other things.</p>
                            </div>

                        </div>
                    </div>
                </section>

            </div> 
            <Footer/>
        </>
    )
}

export default Home;