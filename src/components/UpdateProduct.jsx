import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const UpdateProduct = () => {
    const data = useLoaderData();
    console.log(data);
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
        // console.log("Form Data:");
        // console.log("Image:", image);
        // console.log("Name:", name);
        // console.log("Brand:", brand);
        // console.log("Type:", type);
        // console.log("Price:", price);
        // console.log("Description:", description);
        // console.log("Rating:", rating);
        const addProductData = {
            image,name,brand,type,price,description,rating
        }
        console.log(addProductData);
        fetch('http://localhost:4000/products',{
            method:"POST",
            headers:{
                'content-Type' : 'application/json'
            },
            body: JSON.stringify(addProductData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId)
            {
              toast.success('🦄 Product added successfully', {
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
        })
      };
    return (
        <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Update {data.name} Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="form-control">
            <label className="input-group input-group-vertical">
              <span>Image Url</span>
              <input
                type="text"
                name="image"
                placeholder="info@site.com"
                defaultValue={data.image}
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
                defaultValue={data.name}
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
                defaultValue={data.brand}
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
                defaultValue={data.price}
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
                defaultValue={data.description}
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
              defaultValue={data.rating}
              min="1"
              max="5"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-red-400 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Update Product
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
    );
};

export default UpdateProduct;