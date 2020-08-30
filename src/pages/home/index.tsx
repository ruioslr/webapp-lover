import React from 'react';
import styles from './style.less'
import Weather from 'components/Weather';


export default function Home() {
    return <div className={styles.home}>
        <Weather/>
    </div>
}
