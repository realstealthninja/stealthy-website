import type { NextPage } from "next"
import Head from "next/head"
import Typewriter from "typewriter-effect"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"


const Home: NextPage = () => {
  return (
    <>
      <Head><title>stealthy website</title></Head>
      <div className="bg-black text-white h-screen">
      <div>
        <ul>
        <li className="inline ml-5 mt-5 fa-github">
          <Link href="https://github.com/realstealthninja">
            <FontAwesomeIcon  icon={ faGithub } size="lg"/>
          </Link>
          </li>
        <li className="inline ml-5 mt-5">
          <FontAwesomeIcon icon={ faInstagram } size="lg"/>
          </li>
        <li className="inline ml-5 mt-5">
          <Link href="https://www.youtube.com/channel/UCRBu1hybrrioa8hZc5_Ggig">
          <FontAwesomeIcon icon={ faYoutube} size="lg"/>
          </Link>
        </li>
        <li className="float-right mr-5">hello</li>  
        </ul>
      </div>
      <div className="text-5xl flex items-center justify-center h-screen">
        <Typewriter options={{
          strings: ["programming", "gaming", "tea", "welcome!"],
          autoStart: true,
          loop: true,
        }} />
      </div>
      </div>
    </>
  )
}

export default Home
