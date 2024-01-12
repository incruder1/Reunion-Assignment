import React from 'react';
import { Slider } from 'antd';
import "./Price.jsx"
const marks = {
  0: '0',
  10000: '10,000',
  20000: '20,000',
  100000: {
    style: {
      color: '#f50',
    },
    label: <strong>{'>20,000'}</strong>,
  },
};
const App = () => (
  <>
    <h4>included=true</h4>
    <Slider marks={marks} defaultValue={37} />
    
  </>
);
export default App;