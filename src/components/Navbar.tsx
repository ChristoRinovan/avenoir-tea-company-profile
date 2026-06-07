import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { navMenus } from "../data/NavMenu";
import { MdMenu } from "react-icons/md";
import { useAuthStore } from "@/services/useAuthStore";
// ga perlu import types from navmenus karna udah dibaca ya bang

function Navbar() {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleCreateBlogClick = () => {
    if (!user) {
      toast.error(
        <>
          <div className="text-red-500 font-bold">Anda belum login!</div>
          <p className="font-bold">Login dahulu untuk mengakses Create Blog Page!</p>
        </>,
      );
      navigate("/login");
      return;
    }

    navigate("/create-blog");
  };
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
                            {child.path === "/create-blog" ? (
                              <button
                                type="button"
                                onClick={handleCreateBlogClick}
                                className="w-full text-left"
                              >
                                {child.name}
                              </button>
                            ) : (
                              <Link to={child.path!}>{child.name}</Link>
                            )}
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
                          {child.path === "/create-blog" ? (
                            <button
                              type="button"
                              onClick={handleCreateBlogClick}
                              className="w-full text-left lg:hover:bg-utama/50"
                            >
                              {child.name}
                            </button>
                          ) : (
                            <Link
                              to={child.path!}
                              className="lg:hover:bg-utama/50"
                            >
                              {child.name}
                            </Link>
                          )}
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

        <div className="navbar-end gap-3">
          {user ? (
            <>
              <span className="hidden md:block">Hi, {user.name}</span>

              <button
                onClick={logout}
                className="font-brand font-bold hover:scale-115 transition-all duration-700"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="font-brand font-bold hover:scale-115 transition-all duration-700"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
