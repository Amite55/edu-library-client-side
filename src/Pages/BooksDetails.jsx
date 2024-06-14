import { FaUserPen } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const BooksDetails = () => {
	const [startDate, setStartDate] = useState(new Date());
	const { user } = useAuth();

	const book = useLoaderData();
	const { quantity, _id, name, category, image, description, rating, author_name } = book || {};
	const handleBorrowedBooks = async () => {
		const email = user?.email;
		const displayName = user?.displayName;
		const dateline = startDate;
		
		if(quantity <= 0){
			return 	Swal.fire({
				icon: "error",
				title: "Borrow Failed",
				text: "Your Borrowed Books quantity 0!",
				footer: '<a href="#">Why do I have this issue?</a>',
			})
		}

		const borrowedBooks = {
			email, displayName, name, category, image, description, dateline, quantity, bookId:_id
		}
		try {
			const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/borrowed`, borrowedBooks)
			console.log(data);
			if (data.acknowledged) {
				Swal.fire({
					icon: "success",
					title: "Borrow success",
					text: "Your Borrowed Books pages added !",
					footer: '<a href="#">Why do I have this issue?</a>',
				})
			}
		} catch (err) {
			console.log(err);
		}
	}


	return (
		<section className="dark:bg-gray-100 dark:text-gray-800">
			<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
				<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
					<img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
				</div>

				<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">

					<p className="flex justify-end mr-2 mb-6"> Borrowed Date:-  <DatePicker className="text-white rounded-md border-none" selected={startDate} onChange={(date) => setStartDate(date)} /></p>

					<h1 className="text-5xl font-bold leading-none md:text-4xl font-mono">
						{name}
					</h1>
					<h3 className='flex items-center gap-2 text-2xl mt-3'><FaUserPen /> {author_name}</h3>
					<div className="divider"></div>
					<div className="flex justify-between px-6">
						<p className="underline font-bold">Rating: {rating}</p>

						<p className={` px-2 rounded-full
							${category === 'Thriller' && 'bg-yellow-100/60 text-yellow-600' }
							${category === 'Novel' && 'bg-orange-100/60 text-orange-600' }
							${category === 'History' && 'bg-blue-100/60 text-blue-600' }
							${category === 'Drama' && 'bg-teal-100/60 text-teal-600' }
							`}>{category}</p>

					</div>
					<p className="mt-6 mb-8 text-lg sm:mb-12">
						{description}
					</p>
					<p className="mb-5 font-bold">Quantity: {quantity}</p>
					<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">

						<Link onClick={handleBorrowedBooks} to='/borrowed' className="btn btn-md text-xl btn-outline btn-info w-full">Borrow</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BooksDetails;