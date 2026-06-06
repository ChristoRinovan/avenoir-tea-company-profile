import { Link } from "react-router-dom";
import { navMenus } from "../data/NavMenu";
import { MdMenu } from "react-icons/md";
// ga perlu import types from navmenus karna udah dibaca ya bang

function Navbar() {
  return (
    <header className="sticky top-0 z-50 font-navbar font-semibold">
      <div className="navbar bg-second shadow-sm px-5 text-utama">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-utama font-bold"
            >
              <MdMenu />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-second rounded-box z-[100] mt-3 w-52 p-2 shadow text-utama"
            >
              {navMenus.map((item) => (
                <li key={item.name}>
                  {item.children ? (
                    <details>
                      <summary>{item.name}</summary>
                      <ul className="p-2">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <Link to={child.path!}>{child.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link to={item.path!}>{item.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <Link
            to="/"
            className=" my-auto hidden text-4xl text-shadow-lg/5 text-utama font-brand font-bold lg:flex hover:scale-115 transition-all duration-700"
          >
            Avenoir
          </Link>
        </div>

        <div className="navbar-center lg:hidden">
          <Link
            to="/"
            className="text-2xl text-shadow-lg/10 text-utama font-brand font-bold"
          >
            Avenoir
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navMenus.map((item) => (
              <li key={item.name}>
                {item.children ? (
                  <details>
                    <summary className="lg:hover:bg-utama/50">
                      {item.name}
                    </summary>
                    <ul className="bg-white rounded-box w-48 p-2 shadow-lg ">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            to={child.path!}
                            className="lg:hover:bg-utama/50"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  // button buat ke masing-masing komponen wok
                  <Link to={item.path!} className="lg:hover:bg-utama/50">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <button className=" my-auto   text-utama font-brand font-bold lg:flex hover:scale-115 transition-all duration-700">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
