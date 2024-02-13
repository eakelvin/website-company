import BlogPostCard from '@/components/BlogPostCard'
import React from 'react'
import data from '../../data.json'

const Work = () => {
  const { projects } = data

  return (
    <div className='mt-20 p-4 px-12'>
      <div className='text-center'>
        <h2 className="mb-4 text-5xl">PORTFOLIO</h2>
        <p className="text-base">
          Explore our captivating projects. <br /> (Tap/Click for more details)
        </p>
      </div>

      <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {projects.map((project) =>
          <BlogPostCard key={project.id} project={project} /> 
        )}
      </div>
    </div>
  )
}

export default Work