import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBooks = () => {
    const book = useLoaderData();
    const navigate = useNavigate();
    const {_id,name, category,author_name} = book || {};

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const category = form.category.value;
        const author_name = form.author_name.value;
        const rating = form.rating.value;
        const updateData = {
            name, image, category, author_name, rating
        }
        try{
            const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/book/${_id}`, updateData)
            console.log(data);
            Swal.fire({
                icon: "success",
                title: "Updated",
                text: "Your Books page Updated Done",
              });
              navigate('/allBooks')
        } catch(err){
            console.log(err);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
               
              });
        }
    }
    return (
        <div className="bg-[#8f8f8f] p-24">
        <h1 className="mx-auto text-4xl text-black font-bold font-mono">Update Book Details</h1>
        <form onSubmit={handleUpdate}>
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-black font-bold">Name </span>
                    </label>
                    <input defaultValue={name} name="name" type="text" placeholder="Book Name" className="input input-bordered w-full" />
                </div>

                <div className="form-control ml-3 md:w-1/2">
                    <label className="label">
                        <span className="label-text text-black font-bold">Category Name</span>
                    </label>
                    <select
                     defaultValue={category}
                        name='category'
                        id='category'
                        className='border-none p-2 rounded-md'
                    >
                        <option value='Thriller'>Thriller</option>
                        <option value='Novel'>Novel</option>
                        <option value='History'>History</option>
                        <option value='Drama'>Drama</option>
                    </select>
                </div>
            </div>

            <div className="md:flex">
            <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-black font-bold">Author Name</span>
                    </label>
                    <input  defaultValue={author_name} name="author_name" type="text" placeholder="Author Name" className="input input-bordered w-full" />
                </div>

                <div className="form-control ml-3 md:w-1/2">
                    <label className="label">
                        <span className="label-text text-black font-bold">Rating (max rate 5)</span>
                    </label>
                    <input   name="rating" type="number" max={5} className="input input-bordered w-full" />
                </div>
            </div>
            <div className="">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-black font-bold">Photo URL <span className="text-red-700">*</span></span>
                    </label>
                    <input name="image" type="url" placeholder="Photo URL" className="input input-bordered w-full" />
                </div>
            </div>

            <div className="">
                <div className="form-control w-1/3 mx-auto mt-5">
                    <input type="submit" value="Submit" className="input input-bordered w-full bg-stone-700 btn" />
                </div>
            </div>


        </form>
    </div>
    );
};

export default UpdateBooks;