import { Link } from "react-router-dom";
import { navMenus } from "../data/NavMenu";
import { MdMenu } from "react-icons/md";
// ga perlu import types from navmenus karna udah dibaca ya bang

function Navbar() {
  return (
    <header className="sticky top-0 z-50 font-navbar font-semibold">
      <div className="navbar bg-[#ffece3] shadow-sm">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <MdMenu />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#ffece3] rounded-box z-[100] mt-3 w-52 p-2 shadow"
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
            className="ml-5 my-auto hidden text-4xl text-shadow-lg/10 text-[#372015] font-brand font-bold lg:flex hover:scale-115 transition-all duration-700"
          >
            Avenoir
          </Link>
        </div>

        <div className="navbar-center lg:hidden">
          <Link to="/" className="text-2xl text-shadow-lg/10 text-[#372015] font-brand font-bold">
            Avenoir
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navMenus.map((item) => (
              <li key={item.name}>
                {item.children ? (
                  <details>
                    <summary className="lg:hover:bg-[#372015]/50">{item.name}</summary>
                    <ul className="bg-[#ffece3] rounded-box w-48 p-2 shadow lg:bg-[#372015]/50 ">
                      {item.children.map((child) => (
                        <li key={child.name} >
                          <Link to={child.path!} className="lg:hover:bg-[#372015]/50">{child.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                    // button buat ke masing-masing komponen wok
                  <Link to={item.path!} className="lg:hover:bg-[#372015]/50">{item.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
