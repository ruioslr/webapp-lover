import React, {useState} from 'react';
import './style.less';
import Panel from './Panel';

export interface IProps {
    value: string;
    onChange: (value: string) => void;
}

export default function DatePicker(props: IProps){

    const [panelVisible, setPanelVisible] = useState<boolean>(false);

    const onBlur = () => {
        setPanelVisible(false);
    }

    const onFocus = () => {
        setPanelVisible(true);
    }

    return <div>
        <input type="text" onBlur={onBlur} onFocus={onFocus}/>
        <Panel visible={panelVisible}/>
    </div>
}
