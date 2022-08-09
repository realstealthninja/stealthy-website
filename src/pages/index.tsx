import type { NextPage } from "next"
import Head from "next/head"
import Typewriter from "typewriter-effect"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
import Image from "next/image"
import HomeCard from "../components/home/card"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>stealthy website</title>
        <link rel="icon" href="/stealthysmile.ico"/>
        <meta content="Stealthy.dev" property="og:title"/>
        <meta content="Welcome to the website of stealthninja. Welcome home." property="og:description"/>
        <meta content="https://stealthy-dev.vercel.app/" property="og:url"/>
        <meta content="https://stealthy-dev.vercel.app/stealthysmile.png" property="og:image"/>
        <meta content="#000000" data-react-helmet="true" name="theme-color" />
      </Head>
      <div className="bg-black text-white h-screen scrollbar scrollbar-thumb-black scrollbar-track-gray-900">
        <div>
          <ul>
            <li className="inline ml-5 mt-5 fa-github">
              <Link href="https://github.com/realstealthninja">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </Link>
            </li>
            <li className="inline ml-5 mt-5">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </li>
            <li className="inline ml-5 mt-5">
              <Link href="https://www.youtube.com/channel/UCRBu1hybrrioa8hZc5_Ggig">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </Link>
            </li>
            <li className="float-right mr-5"><Image src="/stealthysmile.png" width="30px" height="10px" /></li>
          </ul>
        </div>
        <div className="text-5xl flex items-center justify-center h-screen bg-black">
          <Typewriter options={{
            strings: ["Programming", "Gaming", "Designing", "[{Stealthy.dev}]", "stealthninja"],
            autoStart: true,
            loop: true,
          }} />
        </div>
        <div className="text-4xl text-center bg-black">
          <h1>Projects</h1>
          <div className="flex flex-col md:flex-row">

            <HomeCard
              name="stealthy bot"
              banner="/stealthybot.png"
              text="stealthy bot is a discord general bot, it has many features. This was the first project ive ever worked on very hard. still alot more to do tho."
              onClickEvent={
                () => {
                  window.location.replace("https://github.com/realstealthninja/Stealthybot");
                }}
            />
            <HomeCard
            name="stealthy website"
            banner="/website.png"
            text="the project im very proud to start, this has been a long time coming. My first ever project in nextjs + tailwind + typescript"
            onClickEvent={
              () => {
                  window.location.replace("https://github.com/realstealthninja/stealthy-website")
              }
            }/>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
