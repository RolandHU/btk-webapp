import { useState } from 'react'
import PenaltyInfo from './PenaltyInfo'
import styles from '../styles/Penalty.module.css'

export default function Penalty({ data }) {
    const [ state, setState ] = useState(false)

    return (
        <div className={`${styles.penalty} ${state ? styles.open : ''}`}>
            <div className={styles.penalty__header}>
                <div onClick={() => setState(!state)}>
                    <div>
                        <h2>{data.Name}</h2>
                    </div>
                    <div>
                        <p>{data.ID}</p>
                    </div>
                </div>
                <button>+</button>
                <button>-</button>
            </div>
            <PenaltyInfo data={data} state={state} setState={setState} />
        </div>
    )
}