import path from 'path'
import fs from 'fs'
import { v4 as uuid4 } from 'uuid'

import { useState } from 'react'
import PenaltyCollection from '../modules/PenaltyCollection'
import Penalty from '../modules/Penalty'
import styles from '../styles/Penalty.module.css'

export default function Home({ data }) {
    return (
        <>
            <div className={styles.main}>
                {Object.keys(data).map(c => <PenaltyCollection key={uuid4()} title={c} data={data[c]} />)}
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