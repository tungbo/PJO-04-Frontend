import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SizeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ NameSize: "", Price: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_URL_BACK}/size`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("User updated successfully");
        navigate("/admin/Size");
      } else {
        console.error("Failed to update user");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleCancel = () => {
    navigate("/admin/Size");
  };

  return (
    <section class=" py-1 bg-gray-50">
      <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
          <div class="rounded-t bg-white mb-0 px-6 py-6">
            <div class="text-center flex justify-between">
              <h6 class="text-gray-700 text-xl font-bold">Create size</h6>
            </div>
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleSubmit}>
              <h6 class="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Size Information
              </h6>
              <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="NameSize"
                      class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={formData.NameSize}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      Price
                    </label>
                    <input
                      type="text"
                      name="Price"
                      class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={formData.Price}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <button
                class="bg-red-500 text-white active:bg-red-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleCancel()}
              >
                Cancel
              </button>
              <button
                class="bg-green-500 text-white active:bg-green-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizeForm;
