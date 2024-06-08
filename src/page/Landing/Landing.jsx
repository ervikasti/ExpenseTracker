import Expensecard from "../../components/Expensecard/Expensecard";
import Balancecard from "../../components/Balancecard/Balancecard";
import Piechart from "../../components/Piechart/Piechart";
import styles from './Landing.module.css';
export default function Landing(){
    return(
        <div className={styles.mainbody}>
            <h1>Expense Tracker</h1>
            <div className={styles.display_section}>
                <Expensecard></Expensecard>
                <Balancecard></Balancecard>
                <Piechart></Piechart>
            </div>
            <div className={styles.display_section_lower}>
                <h1>Recent Transacation</h1>
                <h1>Top Expenses</h1>
            </div>
        </div>
        
    )
}