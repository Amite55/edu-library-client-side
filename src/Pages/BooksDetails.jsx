import { FaUserPen } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const BooksDetails = () => {

	const book = useLoaderData();
	const {quantity, name, category , image, description, rating, author_name} = book || {};

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>

		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none md:text-4xl font-mono">
				{name}
			</h1>
			<h3 className='flex items-center gap-2 text-2xl mt-3'><FaUserPen /> {author_name}</h3>
			<div className="divider"></div>
			<div className="flex justify-between px-6">
				<p className="underline font-bold">Rating: {rating}</p>
				<p className=" bg-green-100/60 text-green-600 px-2 rounded-full">{category}</p>
			</div>
			<p className="mt-6 mb-8 text-lg sm:mb-12">
				{description}
			</p>
			<p className="mb-5 font-bold">Quantity: {quantity}</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link className="btn btn-md text-xl btn-outline btn-info w-full">Borrow</Link>
			</div>
		</div>
	</div>
</section>
    );
};

export default BooksDetails;