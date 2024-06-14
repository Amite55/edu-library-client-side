import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
import { FaUserPen } from "react-icons/fa6";
const BooksCard = ({book}) => {
    const {_id, name, category , image, description, rating, author_name, quantity} = book || {};
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
          <div> 
          <figure><img  className="hover:scale-110 rounded-md h-[200px]" src={image} alt="Shoes" /></figure>
          </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4 className='flex items-center gap-2'><FaUserPen /> {author_name} </h4>
                <div className="grid grid-cols-2 gap-5">
               <p>Rating: {rating}</p>
                <p className={`px-2 mx-auto rounded-full
							${category === 'Thriller' && 'bg-yellow-100/60 text-yellow-600' }
							${category === 'Novel' && 'bg-orange-100/60 text-orange-600' }
							${category === 'History' && 'bg-blue-100/60 text-blue-600' }
							${category === 'Drama' && 'bg-teal-100/60 text-teal-600' }
							`}>{category}</p>
                </div>
                <p>{description}</p>
                <p> Quantity: {quantity}</p>
                <div className=" w-full ">
                    <Link to={`/book/${_id}`} className="btn btn-sm btn-outline btn-info w-full">View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;


BooksCard.propTypes = {
    book: PropTypes.array
  };