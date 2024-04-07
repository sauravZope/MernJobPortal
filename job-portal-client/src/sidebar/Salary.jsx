import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'
                                    
const Salary = ({handleChange,handleClick}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Salary</h4>
        <div className='mb-4'>
            <Button onClickHandler={handleClick} value="" title="Hourly"/>
            <Button onClickHandler={handleClick} value="Yearly" title="Yearly"/>
            <Button onClickHandler={handleClick} value="Monthly" title="Monthly"/>
        </div>
        <div>

        <InputField handleChange={handleChange} value={300000}
        title="<300000k" name ='test2'/>
          <InputField handleChange={handleChange} value={800000}
        title="<800000k" name ='test2'/>
          <InputField handleChange={handleChange} value={1000000}
        title="<1000000k" name ='test2'/>
        </div>
    </div>
  )
}

export default Salary