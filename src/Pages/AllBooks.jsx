import { useEffect, useState } from "react";
import TableGrid from "./TableGrid";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import axios from "axios";
import BooksGrid from "./BooksGrid";

const AllBooks = () => {


    const [books, setBooks] = useState([]);
    useEffect(()=> {
        const getData = async() => {
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/books`, {withCredentials: true})
            setBooks(data)
            console.log(data);
        }
        getData();
    },[setBooks])

    return (
     <>
        <TableGrid/>
        <div>
            <Tabs>
                <div className='container px-2 py-10 mx-auto'>
                    <h1 className='text-2xl font-semibold text-center lg:text-3xl capitalize my-10 divider underline'>Browse All Books By Category</h1>
                <div className='flex items-center justify-center'>
                <TabList>
                    <Tab>Thriller</Tab>
                    <Tab>Novel</Tab>
                    <Tab>History</Tab>
                    <Tab>Drama</Tab>
                </TabList>
                </div>

                <TabPanel>
                  <div className='grid grid-cols-1 gap-4 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
                  {
                    books?.filter(j => j.category === 'Thriller').map(book => <BooksGrid key={book._id} book={book} />)
                   }
                  </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 gap-4 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
                  {
                    books?.filter(j => j.category === 'Novel').map(book => <BooksGrid key={book._id} book={book} />)
                   }
                  </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 gap-4 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
                  {
                    books?.filter(j => j.category === 'History').map(book => <BooksGrid key={book._id} book={book} />)
                   }
                  </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 gap-4 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
                  {
                    books?.filter(j => j.category === 'Drama').map(book => <BooksGrid key={book._id} book={book} />)
                   }
                  </div>
                </TabPanel>
                </div>
            </Tabs>
        </div>
     </>
    );
};

export default AllBooks;