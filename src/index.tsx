import React from 'react';
import ReactDom from 'react-dom';
import './less/base.less';


import Bottom from 'components/Bottom';


function App() {
    return <div>
        hello world
        <Bottom visible={true}/>
    </div>
}


ReactDom.render(<App/>, document.querySelector('#root'));
