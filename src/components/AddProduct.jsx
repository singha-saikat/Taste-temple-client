import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const addProductData = {
      image,
      name,
      brand,
      type,
      price,
      description,
      rating,
    };
    console.log(addProductData);
    fetch("http://localhost:4000/products", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(addProductData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("🦄 Product added successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="form-control">
            <label className="input-group input-group-vertical">
              <span>Image Url</span>
              <input
                type="text"
                name="image"
                placeholder="info@site.com"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-vertical">
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="info@site.com"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-vertical">
              <span>Brand Name</span>
              <input
                type="text"
                name="brand"
                placeholder="info@site.com"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Select a type</span>
            </label>
            <div className="input-group">
              <select name="type" className="select select-bordered">
                <option disabled selected>
                  Pick category
                </option>
                <option>Burgers</option>
                <option>McNuggets</option>
                <option>Fries</option>
                <option>McCafe</option>
                <option>Oleato</option>
                <option>Hot Teas</option>
                <option>Iced Teas</option>
                <option>Cold drinks</option>
                <option>Coke</option>
                <option>Diet coke</option>
                <option>Breakfast</option>
                <option>HotCoffee</option>
                <option>Tomato</option>
                <option>Chips</option>
                <option>Noodles </option>
                <option>Chocolates</option>
                <option>Beverages</option>
              </select>
              <button className="btn">Go</button>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter amount</span>
            </label>
            <label className="input-group">
              <span>Price</span>
              <input
                type="text"
                name="price"
                placeholder="10"
                className="input input-bordered"
              />
              <span>USD</span>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <label className="input-group input-group-md">
              <input
                type="text"
                name="description"
                placeholder="Type here"
                className="input input-bordered input-md"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Rating:</label>
            <input
              type="number"
              name="rating"
              className="form-input border-2"
              placeholder="4"
              min="1"
              max="5"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
