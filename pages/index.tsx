import type { NextPage } from "next"
import Head from "next/head"
import NavBar from "../components/index/navBar"

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
        <div className="relative h-[350px] overflow-hidden bg-[url('https://wallpaper.dog/large/20366415.jpg')] bg-cover bg-no-repeat">
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h1 className="text-5xl font-bold mt-0 mb-6">Welcome</h1>
                <h3 className="text-3xl font-bold mb-8"> To my website </h3>
                <button className="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            data-mdb-ripple="true" data-mdb-ripple-color="light">Get started</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <body className="dark: bg-Ebony">

      </body>
    </>
  )
}

export default Home
