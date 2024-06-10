import { Link } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";
import useAuth from "../customHooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";

const BorrowedMeBooks = () => {
    const {user} = useAuth();
    const [borrowedBooks, setBorrowedBooks] = useState([]);

    useEffect(()=> {
      const getData = async() => {
        const {data} = await axios(`${import.meta.env.VITE_API_URL}/borrowed/${user?.email}`)
        setBorrowedBooks(data)
      }
      getData();
    },[user?.email])
    console.log(borrowedBooks);


    return (
        <div  className='grid grid-cols-1 gap-4 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>

       { 
       borrowedBooks.map(borrowed => 

       <div key={borrowed._id} className="card card-compact bg-base-100 shadow-xl">
        <div> 
        <figure><img className="hover:scale-110 rounded-md h-[200px]" src={borrowed.image} alt="Shoes" /></figure>
        </div>
          <div className="card-body">
              <h2 className="card-title">{borrowed.name}</h2>
              <h4 className='flex items-center gap-2'>Borrowed Date:-{ borrowed.dateline }</h4>
              <div className="grid grid-cols-2 gap-5">
             <p>Rating: {borrowed.rating}</p>
              <p className=" mx-auto bg-green-100/60 text-green-600 px-2 rounded-full">{borrowed.category}</p>
              </div>
              <p>{borrowed.description}</p>
              <div className="flex justify-between">
                  
                  <Link to={``} className="btn btn-sm btn-outline btn-info ">
                  Return<IoMdReturnLeft />
                  </Link>
              </div>
          </div>
      </div>)
       
       
       }

      </div>
    );
};

export default BorrowedMeBooks;