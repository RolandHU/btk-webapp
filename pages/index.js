import path from 'path'
import fs from 'fs'
import { v4 as uuid4 } from 'uuid'

import { useState, useEffect } from 'react'
import SideBar from '../modules/SideBar'
import PenaltyCollection from '../modules/PenaltyCollection'
import Penalty from '../modules/Penalty'
import styles from '../styles/Penalty.module.css'

export default function Home({ data }) {
    const [ chosen, setChosen ] = useState([])

    function addPenalty(p) {
        setChosen([...chosen, p])
        /*const data = chosen
        if (Object.keys(data).includes(JSON.stringify(p))) data[JSON.stringify(p)] += 1
        else data[JSON.stringify(p)] = 1
        setChosen(data)
        console.log(chosen)*/
    }

    function removePenalty(p) {
        const data = [...chosen]
        if (data.indexOf(p) === -1) return
        data.splice(data.indexOf(p), 1)
        setChosen(data)
        /*const data = chosen
        if (!Object.keys(data).includes(JSON.stringify(p))) return
        if (data[JSON.stringify(p)] === 1) delete data[JSON.stringify(p)]
        else data[JSON.stringify(p)] -= 1
        setChosen(data)
        console.log(chosen)*/
    }

    return (
        <>
            <SideBar data={chosen} />
            <div className={styles.main}>
                {Object.keys(data).map(c => <PenaltyCollection key={uuid4()} title={c} data={data[c]} func={{addPenalty, removePenalty}} />)}
            </div>
        </>
    )
}

export async function getStaticProps() {
    const file = JSON.parse(fs.readFileSync(path.join(__dirname + '../../../../BTK.json')))
    let data = {}

    file.map(o => {
        if (Object.keys(data).includes(o.Category)) return data[o.Category].push(o)
        return data[o.Category] = [o]
    })

    return {
        props: { data }
    }
}