import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetPizzaDetail } from "../../../redux/selector";
const PizzaDetail = () => {
  const pizzaDetail = useSelector(GetPizzaDetail);
  const [listSize, setListSize] = React.useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState(pizzaDetail);
  const [imageFile, setImageFile] = useState(null);
  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_BACK}/size`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setListSize(data))
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imgPiza" && files.length > 0) {
      setImageFile(files[0]);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("idPiza", formData.idPiza);
      data.append("namePiza", formData.namePiza);
      data.append("idSize", formData.idSize);
      data.append("Description", formData.Description);
      if (imageFile) {
        data.append("imgPiza", imageFile);
      }

      const response = await fetch(`${process.env.REACT_APP_URL_BACK}/pizzas`, {
        method: "PUT",
        credentials: "include",
        body: data,
      });
      if (response.ok) {
        console.log("Pizza updated successfully");
        navigate("/admin/Pizza");
      } else {
        console.error("Failed to update pizza");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };
  const handleCancel = () => {
    navigate("/admin/Pizza");
  };

  return (
    <section class=" py-1 bg-gray-50">
      <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
          <div class="rounded-t bg-white mb-0 px-6 py-6">
            <div class="text-center flex justify-between">
              <h6 class="text-gray-700 text-xl font-bold">Pizza Details</h6>
            </div>
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleSubmit}>
              <h6 class="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Pizza Information
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
                      name="namePiza"
                      class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={formData.namePiza}
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
                      Size
                    </label>
                    <select
                      class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      name="idSize"
                      onChange={handleChange}
                      value={formData.idSize}
                    >
                      <option selected>Choose a size</option>
                      {listSize.map((size, index) => (
                        <option value={size.idSize}>{size.NameSize}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      Image
                    </label>
                    <input
                      type="file"
                      name="imgPiza"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      accept="image/*"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      Current Image
                    </label>
                    <img
                      src={`${process.env.REACT_APP_URL_BACK_IMG}/${pizzaDetail.imgPiza}`}
                      alt=""
                      class="inline-block relative object-cover object-center !rounded-full w-12 h-12 rounded-lg"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-12/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      Description
                    </label>
                    <textarea
                      type="text"
                      name="Description"
                      value={formData.Description}
                      onChange={handleChange}
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      rows="4"
                    ></textarea>
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
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PizzaDetail;
