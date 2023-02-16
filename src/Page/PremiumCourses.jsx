import React from 'react'
import { Link } from 'react-router-dom'

export const PremiumCourses = () => {
  return (
    <div>

<div className="flex flex-col items-center space-y-5 bg-white mt-20 px-2 py-2 rounded-2xl" >
        <h1 className="text-purple-800 text-xl">Premium Courses</h1>
        <img className="rounded-lg w-80"
          src="https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcwh-full-next-space.fra1.digitaloceanspaces.com%2Fvideoseries%2Fpython-100-days-of-code-1%2F7wnove7K-ZQ-HD.jpg&w=384&q=75"
          alt=""
        />

        <h1 className="text-center">
          FREE COURSE Python Tutorials - 100 Days of Code Python is one of the
          most demanded programming languages in the job market. Surprisingly,
          it is equally easy to learn and master Python. Let's commit our 100
          days of code to python!
        </h1>
        <Link className="bg-purple-800 text-white px-5 py-1 rounded-md" to="/codeyogiyoutubvideos">Start Watching</Link>
      
      </div>


      <div className="flex flex-col items-center space-y-5  bg-white mt-10 px-2 py-2 rounded-2xl">
        <h1>Recommended Courses</h1>
        <img className="rounded-lg w-80"
          src="https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcwh-full-next-space.fra1.digitaloceanspaces.com%2Fvideoseries%2Fpython-100-days-of-code-1%2F7wnove7K-ZQ-HD.jpg&w=384&q=75"
          alt=""
        />

        <h1 className="text-center">
          FREE COURSE Python Tutorials - 100 Days of Code Python is one of the
          most demanded programming languages in the job market. Surprisingly,
          it is equally easy to learn and master Python. Let's commit our 100
          days of code to python!
        </h1>
        <button className="bg-purple-800 px-5 text-white  py-1 rounded-md">Start Watching</button>
      </div>

      <div className="flex flex-col items-center space-y-5  bg-white mt-10 px-2 py-2 rounded-2xl">
        <h1>Recommended Courses</h1>
        <img className="rounded-lg w-80"
          src="https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcwh-full-next-space.fra1.digitaloceanspaces.com%2Fvideoseries%2Fpython-100-days-of-code-1%2F7wnove7K-ZQ-HD.jpg&w=384&q=75"
          alt=""
        />

        <h1 className="text-center">
          FREE COURSE Python Tutorials - 100 Days of Code Python is one of the
          most demanded programming languages in the job market. Surprisingly,
          it is equally easy to learn and master Python. Let's commit our 100
          days of code to python!
        </h1>
        <button className="bg-purple-800 px-5 py-1 rounded-md">Start Watching</button>
      </div>





    </div>
  )
}
