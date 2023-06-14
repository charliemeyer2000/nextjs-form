import styles from '../../styles/BoringButton.module.css';

export default function BoringButton({
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