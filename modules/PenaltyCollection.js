import { v4 as uuid4 } from 'uuid'
import PenaltyMain from './PenaltyMain'
import Penalty from './Penalty'

export default function PenaltyCollection({ title, data }) {
    return (
        <>
            <h1>{title}</h1>
            {data.map(d => {
                if (Object.keys(d).includes('MinTicket')) <Penalty key={uuid4()} data={d} />
                else console.log(d, data)
            })}
        </>
    )
}