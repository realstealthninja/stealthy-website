interface NavBarBtnInterface {
    Name: string,
    Link: string
}

const NavBarBtn = ({Name, Link} : NavBarBtnInterface) => {
    return (
        <li className="nav-item">
                <a
                  className=" nav-link block py-2 pr-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700 lg:px-2"
                  href={Link}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  {Name}
                </a>
        </li>
    );
}

export default NavBarBtn