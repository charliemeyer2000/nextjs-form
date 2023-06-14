import styles from '../../styles/ColoredButton.module.css'

export default function ColoredButton({
    text, 
    onClick
}) {
    return (
        <div className={styles.button_wrapper} onClick={onClick}>
            <button className={styles.button}>
                <span className={styles.button_text}>{text}</span>
            </button>
        </div>
    )
}