import React from 'react'
import InputField from '../components/InputField'

const WorkExperience = ({handleChange}) => {
  return (
    <div> 
    <h3 className='text-lg font-medium '>Work Experience</h3>
  <h4 className='text-lg font-medium mb-2'></h4>
  <div>
      <label className='sidebar-label-container  '>
      <input type='radio' name='test' id='test' value="" onChange={handleChange}/>
      <span className='checkmark'></span>Any Experience
      </label>
  </div>
 
  <InputField handleChange={handleChange} value="Internship" title="Internship" name ='test'/>
  <InputField handleChange={handleChange} value="Work remotely" title="Remote" name ='test'/>

  
 </div>
  )
}

export default WorkExperience