import NavBarBtn from "./navBarBtn"

interface NavBarInterface {
  Buttons: Array<string>
  Links: Array<string>
}

const NavBar = ({ Buttons, Links }: NavBarInterface) => {
  return (
    <nav className="navbar navbar-expand-lg relative flex w-full items-center justify-between bg-Ebony py-2 shadow-md">
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        <div
          className="navbar-collapse collapse grow items-center"
          id="navbarSupportedContentY"
        >
          <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
            {Buttons.map((text, index) => (
              <NavBarBtn Name={text} Link={Links[index]}></NavBarBtn>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
