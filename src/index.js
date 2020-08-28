import React from 'react';
import ReactDom from 'react-dom';

import MyDatePicker from "./DatePicker/index";



function App() {
    return <div>
        <MyDatePicker/>
    </div>
}


ReactDom.render(<App/>, document.querySelector('#root'));
