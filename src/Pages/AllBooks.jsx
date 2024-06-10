import { Outlet } from "react-router-dom";
import TableGrid from "./TableGrid";

const AllBooks = () => {
    return (
     <>
        <TableGrid/>
        <Outlet/>
     </>
    );
};

export default AllBooks;