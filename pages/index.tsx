import type { NextPage } from "next"
import Head from "next/head"
import NavBar from "../components/index/navBar"
import ArticleBox from "../components/index/articleBox"

const buttons = ["Home", "About", "Projects", "Contact"]
const links = ["/", "/about", "/projects", "/contact"]

const Home: NextPage = () => {
  return (
    <>
      <header className="dark: bg-Ebony">
        <Head>
          <title>stealthy website</title>
        </Head>
        <NavBar Buttons={buttons} Links={links}></NavBar>
        <div className="relative h-[350px] overflow-hidden bg-[url('https://www.acemetrix.com/wp-content/uploads/2015/08/black-banner-vector3.png')] bg-cover bg-no-repeat">
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="mt-0 mb-6 text-5xl font-bold">Welcome</h1>
                <h3 className="mb-8 text-3xl font-bold"> To my website </h3>
                <button
                  className="inline-block rounded border-2 border-white px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <body className="dark: bg-Ebony">
        <div className="flex-col m-10 flex lg:flex-row">
          <div className="mt-10 lg:mr-10  basis-1/3">
            <ArticleBox
              Title="Stealthy bot"
              Mainbody="One of my most worked on projects i've been at developing stealthy bot for about six months now "
              ImageUrl="https://cdn.discordapp.com/avatars/889922820317007928/9182f4cfa68a27628dc9927fd1459b93.png?size=128"
              ImageAlt="Stealthy bot image"
              ButtonName="Github"
              ButtonOnClick={() => {
                location.href =
                  "https://github.com/realstealthninja/Stealthybot"
              }}
            ></ArticleBox>
          </div>
          <div className="mt-10 lg:mr-10  basis-1/3">
            <ArticleBox
              Title="This website"
              Mainbody="Thats right! this website is completely open source! isnt that wonderful? check it out!"
              ImageUrl="https://3.bp.blogspot.com/-vd3HKLEsew0/T7uQM1U3BuI/AAAAAAAAAgk/12Nu4wEc8ZA/s1600/amy-lee-black-dark.jpg"
              ImageAlt="Stealthy bot image"
              ButtonName="Github"
              ButtonOnClick={() => {
                location.href =
                  "https://github.com/realstealthninja/Stealthybot"
              }}
            ></ArticleBox>
          </div>
          <div className="mt-10 lg:mr-10  basis-1/3">
            <ArticleBox
            Title="My Github"
            Mainbody="I have a github account. In which all my open source projects lay wide open for you too catch a glipse of, Check it out."
            ImageUrl="https://www.jpihealthcare.com/wp-content/uploads/2017/01/Banner1-Background_dark-1024x381.jpg"
            ImageAlt="PlaceHolder"
            ButtonName="GitHub"
            ButtonOnClick={() => {
              location.href= 
                "https://github.com/realstealthninja"
            }} 
            ></ArticleBox>
          </div>
        </div>
      </body>
    </>
  )
}

export default Home
