import Expensecard from "../../components/Expensecard/Expensecard";
import Balancecard from "../../components/Balancecard/Balancecard";
import styles from './Landing.module.css';
export default function Landing(){
    return(
        <div className={styles.mainbody}>
            <div className={styles.display_section}>
                <Expensecard></Expensecard>
                <Balancecard></Balancecard>
            </div>
        </div>
        
    )
}