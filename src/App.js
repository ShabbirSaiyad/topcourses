
import './App.css';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import { apiUrl, filterData } from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from './Components/Spinner';
import NoCourses from './Components/NoCourses';

function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [catagory,setCatagory] = useState(filterData[0].title);
  const [nocourse,setNocourse] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      //Save the data in variable output
      setCourses(output.data);

    }
    catch (err) {
      setNocourse(true);
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='min-h-screen flex flex-col bg-[#427D9D]'>

      <div>
        <Navbar />
      </div>
      
      <div className='bg-[#427D9D]'>
      <div>
        <Filter filterData={filterData} catagory={catagory} setCatagory={setCatagory}/>
      </div>
      

      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
      {
        nocourse ? (<NoCourses/>) : ( loading ? <Spinner/> : <Cards courses={courses} catagory={catagory} />)
      }       
    
        {/* if(course === null){
          <NoCourses/>
        }
        else
        {  
            loading ? <Spinner/> : <Cards courses={courses} catagory={catagory} />
        }  */}
        
    
      </div>

      </div>
     

    </div>
  );
}

export default App;
