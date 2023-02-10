import { v4 as uuid4 } from 'uuid'
import PenaltyMain from './PenaltyMain'
import Penalty from './Penalty'

export default function PenaltyCollection({ title, data }) {
    return (
        <>
            <h1>{title}</h1>
            {data.map(d => {
                if (Object.keys(d).includes('MinTicket') && !d.Paragraph.match(/\d+\.\d+/gm)) return <Penalty key={uuid4()} data={d} />
                else if (!Object.keys(d).includes('MinTicket')) {
                    let list = []
                    
                    data.map(e => {
                        console.log(d, e)
                        const mat = e.Paragraph.match(/\d+\.\d+/gm)
                        if (!mat) return
                        if (mat[0].substring(0, mat[0].indexOf('.')) == d.Paragraph.match(/\d+/gm)[0]) list.push(e)
                    })

                    return <PenaltyMain key={uuid4()} main={d} data={list} />
                }
            })}
        </>
    )
}