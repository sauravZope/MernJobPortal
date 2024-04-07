import Banner from "../components/Banner"
import { useEffect, useState } from "react";
import Jobs from "../components/Jobs";
import Card from "../components/Card";
import Sidebar from "../sidebar/sidebar"
import Newletter from "../components/Newletter";
import Navbar from '../components/Navbar';

const Home = () => {
  // why we are make query as stateVariable
  // why we used it as a prop
  // handle input changes
  const [query, setQuery] = useState("");

  const [isLoading, SetIsLoading] = useState(true);
 const [currentPage,SetCurrentPage]=useState(1);
 const itemsPerPage=6;


  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const [selectCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-jobs").then(res => res.json()).then(data => {
      SetIsLoading(false)
      setJobs(data);
    })
  }, [])


  //filter job by title
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) != -1)

  //radio-filtering
  const handleChange = (event) => {

    setSelectedCategory(event.target.value);
  }

  // button based filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  }


  //calculating the ind range
  const calculatePageRange=()=>{

    const startIndex=(currentPage-1)*itemsPerPage;
    const endIndex=startIndex+itemsPerPage;
    return {startIndex,endIndex};
  }

  const nextPage=()=>
  {
    if(currentPage<Math.ceil(filteredItems.length/itemsPerPage))
    {
      SetCurrentPage(currentPage+1);
    }
  }

  const prevPage=()=>
  {
    if(currentPage>1)
    {
      SetCurrentPage(currentPage-1);
    }
  }

let tot=0;
  //main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

   
    //filtering based on input items
    if (query) {
      filteredJobs = filteredItems;
    }

    if (selected) {

      filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, salaryType, employmentType,postingDate,experienceLevel }) => (
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selected) ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase() ||
        postingDate>=selected||
        experienceLevel==selected
      ));



    }
tot=filteredJobs.length;
    const {startIndex,endIndex}=calculatePageRange();
    console.log(startIndex,endIndex);
  filteredJobs= filteredJobs.slice(startIndex,endIndex);
  
    return filteredJobs.map((data, i) => <Card key={i} data={data} />)

  }



  //category filtering
  let result = filteredData(jobs, selectCategory, query);

  return (
    <>
    <Navbar/>
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* main content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">

        {/* left side */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* job cards */}
        <div className="col-span-2 bg-white p-4 rounded-sm">
        {

        isLoading ?<p className="font-medium">Loading...</p> : result.length==0?
        <><h3 className="text-lg font-bold mb-2">0 Job Found!</h3></>
        
        :
        <div className="col-span-2 bg-white p-4 rounded-sm"><Jobs result={result} /></div>
        
        }

        {/* pagination */}
          
          {

                  result.length>0?(
                        <div className="flex justify-center mt-4 space-x-8 ">
                          <button onClick={prevPage} disabled={currentPage==1}className="hover:underline">Previous</button>
                          <span className="mx-2 ">Page{currentPage} of {Math.ceil(tot/itemsPerPage)}</span>
                          <button onClick={nextPage} disabled={currentPage===Math.ceil(tot/itemsPerPage) }  className="hover:underline">Next</button>
                        </div>
                  ):""

          }
          
          </div>
        

        {/* right side */}
        <div className="bg-white p-4 rounded" >
          <Newletter/>
        </div>
      </div>

    </div>
    </>
    
  )
}

export default Home