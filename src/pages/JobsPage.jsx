import React from 'react'
import JobListings from '../components/JobListings'

const JobsPage = () => {
  return (
    <section className='bg-blue-50 px-6 py-6' >
        <JobListings isJobPage={true}/>
    </section>
  )
}

export default JobsPage
