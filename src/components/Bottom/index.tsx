import React from 'react';
import styles from './style.less';
import { useHistory, useLocation } from "react-router-dom";

export interface IProps {
    visible: boolean;
    items: Array<{
        url: string;
        name: string;
    }>;
}

export default function Bottom(props: IProps) {
    const {visible, items} = props;
    const history = useHistory();
    const location = useLocation()

    const go = (url: string) => {
        if(location.pathname !== url){
            history.push(url)
        }
    }
    return <ul className={`${styles.bottom} ${visible ? styles.hide : ''}'`}>
        {
           items.map((_, index) => <li onClick={() => go(_.url)} className={styles.bottomItem} key={index}>{_.name}</li>)
        }
    </ul>
}
