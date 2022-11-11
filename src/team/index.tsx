import React from "react";
import Header from '../common/header'
import style from '../../styles/team/Team.module.css'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";
import { NextPage } from "next";


interface card {
    name: any,
    image: any,
    position: any,
    facebook: any,
    instagram: any,
    twitter: any,
    linkedIn: any,
    github: any,
    youtube: any,
}


const TeamCard: NextPage<card> = (props: any) => {
    return (
        <>
            <div className={style.main_team_design}>
                <img src={props?.image != "" ? props?.image : "/images/userimage.png"} alt={props?.name} />
                <h2>{props?.name}</h2>
                <p>{props?.position}</p>

                <div className={style.mainCardSocial}>
                    <a href={`${props?.facebook}`} target={"_blank"} rel={"noreferrer"}>{props?.facebook != '' ? <p><BsFacebook /></p> : ""}</a>
                    <a href={`${props?.instagram}`}  target={"_blank"} rel={"noreferrer"}>{props?.instagram != '' ? <p><BsInstagram /></p> : ""}</a>
                    <a href={`${props?.twitter}`}  target={"_blank"} rel={"noreferrer"} >{props?.twitter != '' ? <p><BsTwitter /></p> : ""}</a>
                    <a href={`${props?.linkedIn}`} target={"_blank"} rel={"noreferrer"} >{props?.linkedIn != '' ? <p><BsLinkedin /></p> : ""}</a>
                    <a href={`${props?.github}`}  target={"_blank"} rel={"noreferrer"}>{props?.github != '' ? <p><BsGithub /></p> : ""}</a>
                    <a href={`${props?.youtube}`}  target={"_blank"} rel={"noreferrer"}>{props?.youtube != '' ? <p><BsYoutube /></p> : ""}</a>
                </div>
            </div>
        </>
    )
}




const team = () => {

    return (
        <>
            <div className={style.mainContainer}>
                <Header></Header>

                <div className={style.mainContainer_design}>
                    <h1>Team Members</h1>

                    <div className={style.mainTeamCardHolder}>
                    <TeamCard name="aazam khan" image={"/images/team/121.jpg"} position={"ivento head"} facebook={""}instagram={"https://instagram.com/iam_wiz_7"}  twitter={""} linkedIn={"https://www.linkedin.com/in/aazam-khan-997602226/"} github={""}  youtube={""}/>
                    <TeamCard name="anshit mishra" image={"/images/team/1231.jpg"} position={"ivento tech head"} facebook={""}instagram={""}  twitter={"https://twitter.com/Anshit_03"} linkedIn={"https://www.linkedin.com/in/anshit-mishra-172b33237"} github={"https://github.com/anshitmishra"}  youtube={""}/>
                    <TeamCard name="shradha gurjar" image={"/images/team/13123123.jpeg"} position={"ivento Non tech head"} facebook={""} instagram={"https://instagram.com/Shra_ddha203"}  twitter={""} linkedIn={"https://www.linkedin.com/in/shradha-gurjar-976b05247"}   github={"https://github.com/shradhagurjar27"} youtube={""}/>
                    <TeamCard name="Devansh Kulshrestha" image={"/images/team/123232312.jpg"} position={"ivento eSports head"} facebook={"https://www.facebook.com/devansh.kulshrestha.562"} instagram={"https://instagram.com/___mr.__kd"}  twitter={""} linkedIn={"https://www.linkedin.com/in/devansh-kulshrestha-151098228/"} github={""}  youtube={""}/>
                    <TeamCard name="chetan sharma" image={"/images/team/chetanww.jpg"} position={"ivento management head"} facebook={"https://www.facebook.com/people/Adarsh-Dubey/100029093229302/"}instagram={"https://www.instagram.com/_.isshh_parsh/"}  twitter={"https://twitter.com/kakashi3007?t=Rb3FSsCgTNk6Twx_Dlw7SA&s=09"} linkedIn={""}   github={""}  youtube={""}/>
                    <TeamCard name="Dhwaj sharma" image={""} position={"ivento co-head"} facebook={""}instagram={"https://www.instagram.com/_sweet_evil_devil_god_/"}  twitter={""} linkedIn={""} github={""}  youtube={""}/>
                    <TeamCard name="Shreshtha kinger" image={"/images/team/123123123.jpeg"} position={"ivento Non tech co-head"} facebook={""}instagram={"https://instagram.com/shreshthakinger"}  twitter={""} linkedIn={"https://www.linkedin.com/in/shreshtha-kinger-57a13824b"}   github={""}  youtube={""}/>
                    <TeamCard name="ayush mishra" image={"/images/team/12121.png"} position={"ivento tech co-head"} facebook={""}instagram={"https://instagram.com/ayushmishravlogs"}  twitter={""} linkedIn={" https://www.linkedin.com/in/ayush-mishra-936791203"}   github={""}  youtube={" https://youtube.com/c/CodersCommunity"}/>
                    <TeamCard name="adarsh " image={"/images/team/12323123312.jpg"} position={"ivento eSports co-head"} facebook={"https://www.facebook.com/people/Adarsh-Dubey/100029093229302/"}instagram={"https://www.instagram.com/_.isshh_parsh/"}  twitter={"https://twitter.com/kakashi3007?t=Rb3FSsCgTNk6Twx_Dlw7SA&s=09"} linkedIn={""}   github={""}  youtube={""}/>
                    <TeamCard name="ayush sharma" image={"/images/team/12312312.jpg"} position={"ivento management co-head"} facebook={"https://m.facebook.com/100012964263341/"} instagram={"https://www.instagram.com/itzayushsharma/"}  twitter={"https://mobile.twitter.com/i_ayush_sharma_"} linkedIn={""}   github={""}  youtube={""}/>

                    </div>
                </div>
            </div>
        </>
    )
}


export default team;