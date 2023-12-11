import React from 'react'
import { Cascader } from 'antd';
function City() {
    const options = [
        {
          value: 'mumbai',
          label: 'Mumbai',
          
        },
        {
          value: 'noida',
          label: 'Noida',          
        },
        {
          value: 'delhi',
          label: 'Delhi',          
        },
        {
            value: 'bangalore',
            label: 'Bangalore',          
          },
          {
            value: 'ghaziabad',
            label: 'Ghaziabad',          
          },
      ];
      const onChange = (value) => {
        console.log(value);
      };
  return (
    <>
    
    <Cascader options={options} onChange={onChange} placeholder="Select Location" />
     
    </>
  )
}

export default City