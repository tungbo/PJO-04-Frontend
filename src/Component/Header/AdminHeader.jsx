import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContextAPI } from "../../Context/AppContext";
import { CookieController } from "../../Service/CookiesController";
import { AuthCreateContext } from "../../Context/AuthContex";
const AdminHeader = () => {
  const navigate = useNavigate();
  const { setIsLoading } = React.useContext(AppContextAPI);
  React.useContext(AppContextAPI);
  const { setAuth } = React.useContext(AuthCreateContext);
  const Logout = () => {
    CookieController.DeleteCookie("isLogin");
    fetch(`${process.env.REACT_APP_URL_BACK}/logout`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => err);
    setIsLoading(true);
    setAuth(false);
    navigate("/Login");
  };
  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Remove active class from all items
        navItems.forEach((nav) => nav.classList.remove("text-indigo-500"));
        // Add active class to the clicked item
        item.classList.add("text-indigo-500");
      });
    });
    return () => {
      navItems.forEach((item) => {
        item.removeEventListener("click", () => {
          navItems.forEach((nav) => nav.classList.remove("text-indigo-500"));
          item.classList.add("text-indigo-500");
        });
      });
    };
  }, []);
  return (
    <nav class="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
      <div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div class="text-indigo-500 md:order-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
            />
          </svg>
        </div>
        <div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
          <ul class="flex font-semibold justify-between">
            <li class="nav-item md:px-4 md:py-2 hover:text-indigo-400 text-indigo-500">
              <Link to="/admin/User">User</Link>
            </li>
            <li class="nav-item md:px-4 md:py-2 hover:text-indigo-400">
              <Link to="/admin/Pizza">Pizza</Link>
            </li>
            <li class="nav-item md:px-4 md:py-2 hover:text-indigo-400">
              <Link to="/admin/Size">Size</Link>
            </li>
            <li class="nav-item md:px-4 md:py-2 hover:text-indigo-400">
              <Link to="/admin/Order">Order</Link>
            </li>
          </ul>
        </div>
        <div class="order-2 md:order-3">
          <Link onClick={Logout} to="/Login">
            <button class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
              <span>Logout</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminHeader;
