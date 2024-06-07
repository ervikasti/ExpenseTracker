import styles from './Card.module.css';

export default function Card({title, price,btnName,funcHandler}){

    return(
    <div className={styles.card}>
        <h3>{title}:<span>{price}</span></h3>
        <button onClick={funcHandler}>{btnName}</button>
    </div>)
}