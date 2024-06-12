import { CiGrid41 } from "react-icons/ci";
import { FaTable } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TableGrid = () => {
    return (
        <div>
            <div className="flex justify-end gap-4 mr-4 mt-3">
                <Link title="Table view" className="text-2xl text-white btn">
                    <FaTable />
                </Link>

                <Link  title="Grid view" className="text-2xl text-white btn">
                    <CiGrid41 />
                </Link>
            </div>
        </div>
    );
};

export default TableGrid;