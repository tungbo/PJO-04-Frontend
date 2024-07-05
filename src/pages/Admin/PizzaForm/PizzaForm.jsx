import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PizzaForm = () => {
  const [listSize, setListSize] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    namePiza: "",
    idSize: "",
    Description: "",
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
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
      data.append("namePiza", formData.namePiza);
      data.append("idSize", formData.idSize);
      data.append("Description", formData.Description);
      if (imageFile) {
        data.append("imgPiza", imageFile);
      }

      const response = await fetch(`${process.env.REACT_APP_URL_BACK}/pizzas`, {
        method: "POST",
        credentials: "include",
        body: data,
      });
      if (response.ok) {
        console.log("Pizza created successfully");
        navigate("/admin/Pizza");
      } else {
        console.error("Failed to create pizza");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleCancel = () => {
    navigate("/admin/Pizza");
  };

  return (
    <section className="py-1 bg-gray-50">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-gray-700 text-xl font-bold">Create Pizza</h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleSubmit}>
              <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Pizza Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="namePiza"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={formData.namePiza}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                      Size
                    </label>
                    <select
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      name="idSize"
                      onChange={handleChange}
                      value={formData.idSize}
                    >
                      <option selected>Choose a size</option>
                      {listSize.map((size) => (
                        <option key={size.idSize} value={size.idSize}>
                          {size.NameSize}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                      Image
                    </label>
                    <input
                      type="file"
                      name="imgPiza"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      accept="image/*"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                      Description
                    </label>
                    <textarea
                      type="text"
                      name="Description"
                      value={formData.Description}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                className="bg-red-500 text-white active:bg-red-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white active:bg-green-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
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

export default PizzaForm;
