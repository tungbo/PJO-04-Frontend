import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PizzaDetailReducer from "../../../redux/PizzaDetailReducer";

const Pizza = () => {
  const [listPizza, setListPizza] = React.useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_BACK}/pizzas`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setListPizza(data))
      .catch((err) => console.log(err));
  }, []);

  const handleAdd = () => {
    navigate("/admin/PizzaForm");
  };

  const handleDelete = async (idPiza) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_URL_BACK}/pizzas`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idPiza }),
      });

      if (response.ok) {
        window.location.reload();
        console.log("Pizza deleted successfully");
      } else {
        console.error("Failed to delete pizza");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };
  const Detail = (pizza) => {
    dispatch(PizzaDetailReducer.actions.setPizza(pizza));
    navigate("/admin/PizzaDetail");
  };

  return (
    <div class="flex min-h-full items-center justify-center bg-white px-8">
      <div class="text-center flex flex-col justify-between">
        <h6 class="text-gray-700 text-xl font-bold mb-3 mr-4">Pizza</h6>
        <button
          onClick={() => handleAdd()}
          class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
          type="button"
        >
          <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-green-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </span>
        </button>
      </div>
      <div class="p-6 overflow-scroll px-0">
        <table class="w-full table-fixed text-left">
          <thead>
            <tr>
              <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                  Image
                </p>
              </th>
              <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                  Name
                </p>
              </th>
              <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                  Size
                </p>
              </th>
              <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                  Price
                </p>
              </th>
              <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                  Actions
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {listPizza.map((pizza, index) => (
              <tr key={index}>
                <td class="p-4 border-b border-blue-gray-50">
                  <div class="flex items-center gap-3">
                    <img
                      src={`${process.env.REACT_APP_URL_BACK_IMG}/${pizza.imgPiza}`}
                      alt=""
                      class="inline-block relative object-center !rounded-full w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                    />
                  </div>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    {pizza.namePiza}
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    {pizza.NameSize}
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    {pizza.Price}
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <button
                    class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button"
                    onClick={() => Detail(pizza)}
                  >
                    <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-4 w-4 text-blue-500"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                      </svg>
                    </span>
                  </button>
                  <button
                    class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button"
                  >
                    <span
                      class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
                      onClick={() => handleDelete(pizza.idPiza)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6 text-red-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pizza;
