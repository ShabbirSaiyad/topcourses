import React, { useState } from 'react'
import Card from './Card'
import {toast} from 'react-toastify'

const Cards = (props) => {
  let courses = props.courses;
  let catagory = props.catagory;
  const [likedCourses, setLikedCourses] = useState([]);

  //returns you a list of all courses received from api response 
  const getCourses = () => {
    if(catagory === 'All'){
      let allCourses = [];
      if(courses === null){
          toast.warning("Courses Not found");   
      }
      else{
        Object.values(courses).forEach(array => {
          array.forEach(courseData => {
            allCourses.push(courseData);
          })
        })
      //  console.log("All courses are present in this array.");
      //  console.log(allCourses);
      }
     
      return allCourses;
    }
    else{
      // here catagory wise data will be passed
      // console.log("courses are present catagory wise here.");
      //  console.log(courses[catagory]);
      return courses[catagory];
    }

   
    
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map((course) => {
          return (
            <Card key={course.id} course={course}  likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
          );
        })
      }

    </div>
  )
}

export default Cards