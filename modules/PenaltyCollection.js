import { v4 as uuid4 } from 'uuid'
import PenaltyMain from './PenaltyMain'
import Penalty from './Penalty'
import styles from '../styles/Penalty.module.css'

export default function PenaltyCollection({ title, data, func }) {
    return (
        <div className={styles.penalty__container}>
            <h1>{title}</h1>
            {data.map(d => {
                if (Object.keys(d).includes('MinTicket') && !d.Paragraph.match(/\d+\.\d+/gm)) return <Penalty key={uuid4()} data={d} func={func} />
                else if (!Object.keys(d).includes('MinTicket')) {
                    let list = []
                    
                    data.map(e => {
                        const mat = e.Paragraph.match(/\d+\.\d+/gm)
                        if (!mat) return
                        if (mat[0].substring(0, mat[0].indexOf('.')) == d.Paragraph.match(/\d+/gm)[0]) list.push(e)
                    })

                    return <PenaltyMain key={uuid4()} main={d} data={list} />
                }
            })}
        </div>
    )
}