import { v4 as uuid4 } from 'uuid'

export default function SideBar({ data }) {
    const penalties = {}

    data.map(d => {
        if (Object.keys(penalties).includes(d.Paragraph)) penalties[d.Paragraph] += 1
        else penalties[d.Paragraph] = 1
    })

    return (
        <div>
            {Object.keys(penalties).map(p => 
                <div key={uuid4()}>
                    <p>{penalties[p]}</p>
                    <p>{data.find(d => d.Paragraph === p).Name}</p>
                </div>    
            )}
            <p>{data.length} szabálysértés</p>
        </div>
    )
}