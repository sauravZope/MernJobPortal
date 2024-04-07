import React from 'react'
import InputField from '../components/InputField'

const Location = ({handleChange}) => {
  return (
   <div>
    <h4 className='text-lg font-medium mb-2'></h4>
    <div>
        <label className='sidebar-label-container  '>
        <input type='radio' name='test' id='test' value="" onChange={handleChange}/>
        <span className='checkmark'></span>All
        </label>
    </div>
    
    
    <InputField handleChange={handleChange} value="Pune" title="Pune" name ='test'/>
    <InputField handleChange={handleChange} value="Chennai" title="Chennai" name ='test'/>
    <InputField handleChange={handleChange} value="Noida" title="Noida" name ='test'/>
    <InputField handleChange={handleChange} value="Banglore" title="Bangalore" name ='test'/>
   </div>
  )
}

export default Location