import React from 'react';
import './style.less';


export interface IProps {
    visible: boolean
}

export default function Panel(props: IProps) {
    const {visible} = props;
    return <div className={`panel ${visible ? '' : 'hide'}`}>
        
    </div>
}

