import React from 'react'
import   { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
function Date() {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
      
  return (
    <>
    <Space direction="vertical">

    <DatePicker onChange={onChange} placeholder='Select Move-In Date' />
    </Space>
    </>
  )
}

export default Date