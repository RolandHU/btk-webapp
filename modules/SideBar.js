import { v4 as uuid4 } from 'uuid'

import styles from '../styles/Penalty.module.css'

export default function SideBar({ data, func }) {
    const penalties = {}
    const formatter = Intl.NumberFormat('en', { notation: 'compact' })

    data.map(d => {
        if (Object.keys(penalties).includes(d.Paragraph)) penalties[d.Paragraph] += 1
        else penalties[d.Paragraph] = 1
    })

    return (
        <div className={styles.penalty__sidebar}>
            <div className={styles.penalty__summary}>
                {Object.keys(penalties).map(p => 
                    <div key={uuid4()} className={styles.penalty__summary__elem}>
                        <p>{penalties[p]}x</p>
                        <p>{data.find(d => d.Paragraph === p).Name}</p>
                        <button onClick={() => func.deletePenalty(data.find(d => d.Paragraph === p))}>X</button>
                    </div>    
                )}
                <button onClick={() => func.resetPenalty()}>X</button>                
            </div>
            <div>
                <div>
                    <p>Min. büntetés: ${formatter.format(data.map(d => d.MinTicket).reduce((num, a) => num + a, 0))}</p>
                </div>
                <div>
                    <p>Max. büntetés: ${formatter.format(data.map(d => d.MaxTicket).reduce((num, a) => num + a, 0))}</p>                
                </div>
                <div>
                    <p>Min. letöltendő: {data.map(d => (typeof(d.MinJail) === 'number') ? d.MinJail : 0).reduce((num, a) => num + a, 0)}p</p>
                </div>
                <div>
                    <p>Max. letöltendő: {data.map(d => (typeof(d.MaxJail) === 'number') ? d.MaxJail : 0).reduce((num, a) => num + a, 0)}p</p>                
                </div>
            </div>
            <p>{data.length} szabálysértés</p>
        </div>
    )
}