import React from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const Order = () => {
  const [listOrder, setListOrder] = React.useState([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_BACK}/order`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setListOrder(data))
      .catch((err) => console.log(err));
  }, []);
  const handleDetailClick = (idAccount, idOrderPiza) => {
    navigate(`/admin/OrderDetail/${idAccount}/${idOrderPiza}`);
  };
  return (
    <div class="flex min-h-full items-center justify-center bg-white px-8">
      <div class="text-center flex flex-col justify-between">
        <h6 class="text-gray-700 text-xl font-bold mb-3 mr-4">Order</h6>
      </div>
      <div class="p-6 overflow-scroll px-0">
        <table class="w-full table-fixed text-left">
          <thead>
            <tr>
              <th class="border-y border-slate-400 bg-blue-gray-50/50 p-4">
                <p class="block antialiased font-sans text-sm text-gray-900 font-normal leading-none opacity-70">
                  Order
                </p>
              </th>
              <th class="border-y border-slate-400 bg-blue-gray-50/50 p-4">
                <p class="block antialiased font-sans text-sm text-gray-900 font-normal leading-none opacity-70">
                  Name
                </p>
              </th>
              <th class="border-y border-slate-400 bg-blue-gray-50/50 p-4">
                <p class="block antialiased font-sans text-sm text-gray-900 font-normal leading-none opacity-70">
                  Order Date
                </p>
              </th>
              <th class="border-y border-slate-400 bg-blue-gray-50/50 p-4">
                <p class="block antialiased font-sans text-sm text-gray-900 font-normal leading-none opacity-70">
                  Total
                </p>
              </th>
              <th class="border-y border-slate-400 bg-blue-gray-50/50 p-4">
                <p class="block antialiased font-sans text-sm text-gray-900 font-normal leading-none opacity-70">
                  Actions
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {listOrder.map((order, index) => (
              <tr key={index}>
                <td class="p-4 border-b border-slate-300">
                  <p class="block antialiased font-sans text-sm leading-normal text-gray-900 font-normal">
                    {order.idOrderPiza} .
                  </p>
                </td>
                <td class="p-4 border-b border-slate-300">
                  <p class="block antialiased font-sans text-sm leading-normal text-gray-900 font-normal">
                    {order.Name}
                  </p>
                </td>
                <td class="p-4 border-b border-slate-300">
                  <p class="block antialiased font-sans text-sm leading-normal text-gray-900 font-normal">
                    {format(new Date(order.orderDate), "dd/MM/yyyy")}
                  </p>
                </td>
                <td class="p-4 border-b border-slate-300">
                  <p class="block antialiased font-sans text-sm leading-normal text-gray-900 font-normal">
                    {order.totalOrderPiza}
                  </p>
                </td>
                <td class="p-4 border-b border-slate-300">
                  <button
                    class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button"
                    onClick={() =>
                      handleDetailClick(order.idAccount, order.idOrderPiza)
                    }
                  >
                    <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6 text-blue-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
                        />
                      </svg>
                    </span>
                  </button>
                  <button
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

export default Order;
