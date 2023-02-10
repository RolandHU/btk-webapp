import { useState } from 'react'
import PenaltyInfo from './PenaltyInfo'
import styles from '../styles/Penalty.module.css'

export default function Penalty({ data }) {
    const [ state, setState ] = useState(false)

    return (
        <div className={`${styles.penalty} ${state ? styles.open : ''}`} onClick={() => setState(!state)}>
            <div>
                <div>
                    <h2>{data.Name}</h2>
                </div>
                <div>
                    <p>{data.ID}</p>
                </div>
                <button>+</button>
                <button>-</button>
            </div>
            <PenaltyInfo data={data} />
        </div>
    )
}