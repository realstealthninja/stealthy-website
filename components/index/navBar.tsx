import NavBarBtn from "./navBarBtn"

interface NavBarInterface {
  Buttons: Array<string>
  Links: Array<string>
}

const NavBar = ({ Buttons, Links }: NavBarInterface) => {
  return (
    <nav className="relative flex items-center bg-transparent shadow-md">
      <div className="flex w-full flex-wrap items-center justify-between">
        <div className="grow items-center">
          <ul className="navbar-nav flex-col lg:flex lg:flex-row">
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
