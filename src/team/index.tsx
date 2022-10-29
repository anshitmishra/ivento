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
                    <TeamCard name="aazam khan" image={"/images/team/121.jpg"} position={"ivento head"} facebook={""}instagram={"https://instagram.com/ayushmishravlogs"}  twitter={""} linkedIn={" https://www.linkedin.com/in/ayush-mishra-936791203"}   github={""}  youtube={" https://youtube.com/c/CodersCommunity"}/>
                    <TeamCard name="anshit mishra" image={"/images/team/1231.jpg"} position={"ivento tech head"} facebook={""}instagram={""}  twitter={"https://twitter.com/Anshit_03"} linkedIn={"https://www.linkedin.com/in/anshit-mishra-172b33237"}   github={"https://github.com/anshitmishra"}  youtube={""}/>
                    <TeamCard name="shardha gurjar" image={""} position={"ivento Non tech head"} facebook={""}instagram={"https://instagram.com/ayushmishravlogs"}  twitter={""} linkedIn={" https://www.linkedin.com/in/ayush-mishra-936791203"}   github={""}  youtube={" https://youtube.com/c/CodersCommunity"}/>
                    <TeamCard name="adarsh" image={""} position={"ivento social head"} facebook={"https://www.facebook.com/people/Adarsh-Dubey/100029093229302/"}instagram={"https://www.instagram.com/_.isshh_parsh/"}  twitter={"https://twitter.com/kakashi3007?t=Rb3FSsCgTNk6Twx_Dlw7SA&s=09"} linkedIn={""}   github={""}  youtube={""}/>
                    <TeamCard name="chetan sharma" image={"/images/team/chetanww.jpg"} position={"ivento management head"} facebook={"https://www.facebook.com/people/Adarsh-Dubey/100029093229302/"}instagram={"https://www.instagram.com/_.isshh_parsh/"}  twitter={"https://twitter.com/kakashi3007?t=Rb3FSsCgTNk6Twx_Dlw7SA&s=09"} linkedIn={""}   github={""}  youtube={""}/>
                    <TeamCard name="ayush mishra" image={"/images/team/12121.png"} position={"ivento tech co head"} facebook={""}instagram={"https://instagram.com/ayushmishravlogs"}  twitter={""} linkedIn={" https://www.linkedin.com/in/ayush-mishra-936791203"}   github={""}  youtube={" https://youtube.com/c/CodersCommunity"}/>

                    </div>
                </div>
            </div>
        </>
    )
}


export default team;