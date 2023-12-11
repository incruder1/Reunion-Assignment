import React from 'react'
import { Cascader } from 'antd';
function Type() {
    const options = [
        {
          value: 'flat',
          label: 'Flat',
          
        },
        {
          value: 'commercial',
          label: 'Commercial',          
        },
        {
          value: 'storage',
          label: 'Storage',          
        },{
            value: 'pg',
            label: 'Paying Guest',          
          }
      ];
      const onChange = (value) => {
        console.log(value);
      };
  return (
    <>
    
    <Cascader options={options} onChange={onChange} placeholder="Select Property Type" maxTagTextLength={4} />
     
    </>
  )
}

export default Type