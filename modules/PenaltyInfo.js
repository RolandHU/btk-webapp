import styles from '../styles/Penalty.module.css'

export default function PenaltyInfo({ data, state, setState }) {
    const formatter = Intl.NumberFormat('en', { notation: 'compact' })

    return (
        <div className={styles.penalty__info} onClick={() => setState(!state)}>
            <div>
                <p>{data.Desc}</p>
            </div>
            <div>
                <div>
                    <h2>{(data.MinTicket === '---') ? '-' : `$${formatter.format(data.MinTicket)}`}</h2>
                    <p>minimum kiszabható büntetés</p>
                </div>
                <div>
                    <h2>{(data.MaxTicket === '---') ? '-' : `$${formatter.format(data.MaxTicket)}`}</h2>
                    <p>maximum kiszabható büntetés</p>
                </div>
                <div>
                    <h2>{(data.MinJail === '---') ? '-' : `${data.MinJail}p`}</h2>
                    <p>minimum letöltendő büntetés</p>
                </div>
                <div>
                    <h2>{(data.MaxJail === '---') ? '-' : `${data.MaxJail}p`}</h2>
                    <p>maximum letöltendő büntetés</p>
                </div>         
            </div>
        </div>
    )
}