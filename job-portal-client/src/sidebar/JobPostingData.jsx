import React from 'react'
import InputField from '../components/InputField'
const JobPostingData = ({handleChange}) => {
 const now= new Date();

      const oneDayAgo=new Date(now-24*60*60*1000);
      const SevenDaysAgo=new Date(now-7*24*60*60*1000);
      const ThirtyDaysAgo=new Date(now-30*24*60*60*1000);


      const oneDayAgoDate=oneDayAgo.toISOString().slice(0,10);
      const SevenDayAgoDate=SevenDaysAgo.toISOString().slice(0,10);
      const ThirtyDaysAgoDate=ThirtyDaysAgo.toISOString().slice(0,10);
     
      console.log(oneDayAgoDate);

    return (
     <div> 
        <h3 className='text-lg font-medium '>Date of Posting</h3>
      <h4 className='text-lg font-medium mb-2'></h4>
      <div>
          <label className='sidebar-label-container  '>
          <input type='radio' name='test' id='test' value="" onChange={handleChange}/>
          <span className='checkmark'></span>All time
          </label>
      </div>
      
     
      <InputField handleChange={handleChange} value={oneDayAgoDate} title="Last 24 hour" name ='test'/>

      <InputField handleChange={handleChange} value={SevenDayAgoDate} title="Last 7 days" name ='test'/>
      <InputField handleChange={handleChange} value={ThirtyDaysAgoDate }title="Last 30 days" name ='test'/>
      
     </div>

    )
  }

export default JobPostingData