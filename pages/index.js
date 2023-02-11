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
    }

    function removePenalty(p) {
        const data = [...chosen]
        if (data.indexOf(p) === -1) return
        data.splice(data.indexOf(p), 1)
        setChosen(data)
    }

    function deletePenalty(p) {
        const data = [...chosen]
        if (data.indexOf(p) === -1) return
        setChosen(data.filter(d => d !== p))
    }

    function resetPenalty() {
        setChosen([])
    }

    return (
        <div className={styles.main}>
            <SideBar data={chosen} func={{deletePenalty, resetPenalty}} />
            <div className={styles.penalty__container}>
                {Object.keys(data).map(c => <PenaltyCollection key={uuid4()} title={c} data={data[c]} func={{addPenalty, removePenalty}} />)}
            </div>
        </div>
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