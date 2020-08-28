import React from 'react';
import styles from './style.less';

interface IProps {
    visible: boolean
}

export default function Bottom(props: IProps) {
    return <div className={styles.bottom}>
        这里是Bottom
    </div>
}
