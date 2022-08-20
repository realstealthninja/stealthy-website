import { NextPage } from "next"
import Head from "next/head"
import NavBar from "../components/nav";
const About: NextPage = () => {
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
    <div className="bg-slate-900 h-screen text-white">
        <NavBar/>
        <div className="text-4xl text-white text-center pt-10">
            <h1>About me</h1>
            <p className="text-lg mt-5 text-center">
                The username is stealthninja, <br/> An Indian from the state of kerala, Developer, 

            </p>
        </div>
    </div>
    </>
);};

export default About