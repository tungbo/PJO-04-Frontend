import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const OrderDetail = () => {
  const { idAccount } = useParams();
  const navigate = useNavigate();
  const [listOrderDetail, setListOrderDetail] = React.useState([]);
  console.log(listOrderDetail);
  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_BACK}/order/${idAccount}`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setListOrderDetail(data))
      .catch((err) => console.log(err));
  }, [idAccount]);

  const handleCancel = () => {
    navigate("/admin/Order");
  };
  if (!listOrderDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div class="flex min-h-80 items-center justify-center bg-white px-8">
      <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex flex-col justify-between">
          <h6 class="text-gray-700 text-xl font-bold mb-3 mr-4">
            User Details
          </h6>
          <button
            onClick={() => handleCancel()}
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
                  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div class="p-6 overflow-scroll px-0">
        <table class="w-full table-fixed text-left">
          <thead>
            <tr>
              <th class="border-y border-slate-400 bg-blue-gray-50/50 p-4">
                <p class="block antialiased font-sans text-sm text-gray-900 font-normal leading-none opacity-70">
                  No.
                </p>
              </th>
              <th class="border-y border-slate-400 bg-blue-gray-50/50 p-4">
                <p class="block antialiased font-sans text-sm text-gray-900 font-normal leading-none opacity-70">
                  Name
                </p>
              </th>
              <th class="border-y border-slate-400 bg-blue-gray-50/50 p-4">
                <p class="block antialiased font-sans text-sm text-gray-900 font-normal leading-none opacity-70">
                  Quantity
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {listOrderDetail.map((OrderDetail, index) => (
              <tr key={index}>
                <td class="p-4 border-b border-slate-300">
                  <p class="block antialiased font-sans text-sm leading-normal text-gray-900 font-normal">
                    {index + 1} .
                  </p>
                </td>
                <td class="p-4 border-b border-slate-300">
                  <p class="block antialiased font-sans text-sm leading-normal text-gray-900 font-normal">
                    {OrderDetail.namePiza}
                  </p>
                </td>
                <td class="p-4 border-b border-slate-300">
                  <p class="block antialiased font-sans text-sm leading-normal text-gray-900 font-normal">
                    {OrderDetail.quantity}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetail;
