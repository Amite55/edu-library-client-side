import { Link } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";
import useAuth from "../customHooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const BorrowedMeBooks = () => {
    const { user } = useAuth();
    const [borrowedBooks, setBorrowedBooks] = useState([]);

    useEffect(() => {

        getData();
    }, [user?.email])
    console.log(borrowedBooks);

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/borrowed/${user?.email}`)
        setBorrowedBooks(data)
    }

    const handleReturn = async (id) => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/borrowed/${id}`)
            console.log(data);
            toast.success('Your book Returned');
            getData()
        } catch (err) {
            console.log(err);
            toast.error('try agin')
        }
    }
    return (
        <div>


        <h3 className="text-center my-6 text-3xl font-bold font-mono">My All Borrowed Books</h3>

            <div className='grid grid-cols-1 gap-4 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>

                {
                    borrowedBooks.map(borrowed =>

                        <div key={borrowed._id} className="card card-compact bg-base-100 shadow-xl">
                            <div>
                                <figure><img className="hover:scale-110 rounded-md h-[200px]" src={borrowed.image} alt="Shoes" /></figure>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">{borrowed.name}</h2>
                                <h4 className='flex items-center gap-2'>Borrowed Date:- {new Date(borrowed.dateline).toLocaleDateString()}</h4>

                                <div className="grid grid-cols-2 gap-5">
                                    <p>Rating: {borrowed.rating}</p>
                                    <p className=" mx-auto bg-green-100/60 text-green-600 px-2 rounded-full">{borrowed.category}</p>
                                </div>
                                <p>{borrowed.description}</p>
                                <div className="flex justify-between">

                                    <Link onClick={() => handleReturn(borrowed._id)} to={``} className="btn btn-sm btn-outline btn-info ">
                                        Return<IoMdReturnLeft />
                                    </Link>
                                </div>
                            </div>
                        </div>)


                }

            </div>
        </div>
    );
};

export default BorrowedMeBooks;