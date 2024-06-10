import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const author_name = form.author_name.value;
        const image = form.image.value;
        const description = form.description.value;

        const bookData = {name, category, quantity, rating, author_name, image, description};
        
        try{
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/book`, bookData)
            console.log(data);
            toast.success('Book Added succuss')
            navigate('/')
        } catch(err) {
            console.log(err);
            toast.error('Book add failed');
        }
    }
    return (
        <div className="bg-[#8f8f8f] p-24">
            <h1 className="mx-auto text-4xl text-black font-bold font-mono">Add New Books </h1>
            <form onSubmit={handleSubmit}>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Name <span className="text-red-700">*</span> </span>
                        </label>
                        <input name="name" type="text" placeholder="Book Name" className="input input-bordered w-full" />
                    </div>

                    <div className="form-control ml-3 md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Category Name <span className="text-red-700">*</span> </span>
                        </label>
                        <select
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
                            <span className="label-text text-black font-bold">Quantity <span className="text-red-700">*</span> </span>
                        </label>
                        <input name="quantity" type="number" className="input input-bordered w-full" />
                    </div>

                    <div className="form-control ml-3 md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Rating (max rate 5) <span className="text-red-700">*</span> </span>
                        </label>
                        <input name="rating" type="number" max={5} className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Author Name <span className="text-red-700">*</span> </span>
                        </label>
                        <input name="author_name" type="text" placeholder="Author Name" className="input input-bordered w-full" />
                    </div>

                    <div className="form-control ml-3 md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Time</span>
                        </label>
                        <input name="time" type="time" className="input input-bordered w-full" />
                    </div>
                </div>

                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black font-bold">Photo URL <span className="text-red-700">*</span> </span>
                        </label>
                        <input name="image" type="url" placeholder="Photo URL" className="input input-bordered w-full" />
                    </div>
                </div>

                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black font-bold">Description <span className="text-red-700">*</span> </span>
                        </label>

                        <input name="description" type="text" placeholder="Description" className="input input-bordered w-full" />
                    </div>
                </div>

                <div className="">
                    <div className="form-control w-1/3 mx-auto mt-5">
                        <input type="submit" value="Add" className="input input-bordered w-full bg-stone-700 btn" />
                    </div>
                </div>


            </form>
        </div>
    );
};

export default AddBook;