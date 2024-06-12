import { FaUserPen } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 

const BooksGrid = ({book}) => {
    const {_id, name, category , image, description, rating, author_name} = book || {};
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
              <p className=" mx-auto bg-green-100/60 text-green-600 px-2 rounded-full">{category}</p>
              </div>
              <p>{description}</p>
              <div className=" w-full ">
                  <Link to={`/updateBooks/${_id}`} className="btn btn-sm btn-outline btn-info w-full">Update Books
                  </Link>
              </div>
          </div>
      </div>
    );
};

export default BooksGrid;


BooksGrid.propTypes = {
    book: PropTypes.array
  };