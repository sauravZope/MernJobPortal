import React from 'react'
import InputField from '../components/InputField'
const EmploymentType = ({handleChange}) => {
    return (
        <div> 
        <h3 className='text-lg font-medium '>Type of Employment</h3>
      <h4 className='text-lg font-medium mb-2'></h4>
      <div>
          <label className='sidebar-label-container  '>
          <input type='radio' name='test' id='test' value="" onChange={handleChange}/>
          <span className='checkmark'></span>Any type
          </label>
      </div>
      
     
      <InputField handleChange={handleChange} value="Full-time" title="Full-time" name ='test'/>
      <InputField handleChange={handleChange} value="Work remotely" title="Work remotely" name ='test'/>
      <InputField handleChange={handleChange} value="Part-time" title="Part time" name ='test'/>
      
     </div>
      )
}

export default EmploymentType