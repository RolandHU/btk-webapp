import styles from '../styles/Penalty.module.css'

export default function PenaltyMain({ data }) {
    return (
        <div className={styles.penalty}>
            <div>
                <h2>{data.Name}</h2>
            </div>
        </div>
    )
}