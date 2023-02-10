import { v4 as uuid4 } from 'uuid'

import { useState } from 'react'
import Penalty from './Penalty'
import styles from '../styles/Penalty.module.css'

export default function PenaltyMain({ main, data }) {
    const [ state, setState ] = useState(false)

    return (
        <div className={`${styles.penalty} ${state ? styles.open : ''}`}>
            <div className={styles.penalty__header} onClick={() => setState(!state)}>
                <h2>{main.Name}</h2>
            </div>
            <div className={`${styles.penalty__info} ${styles.penalty__padding}`}>
                {data.map(d => <Penalty key={uuid4()} data={d} />)}
            </div>
        </div>
    )
}