import Expensecard from "../../components/Expensecard/Expensecard";
import Balancecard from "../../components/Balancecard/Balancecard";
import Piechart from "../../components/Piechart/Piechart";
import styles from './Landing.module.css';
import Transacation from "../../components/Transcations/Transcations";
import {useState } from "react";
export default function Landing(){

    let list = [ {
        title:'Samosa',
        price:'25',
        category:'Food',
        date:'10/2/2024',
        
    },
    {
        title:'Jalebi',
        price:'20',
        category:'Food',
        date:'13/2/2024',
    }];

    const[balance, setBalance] = useState('5000');
    const[expense, setExpense] = useState('500');
    const[tranx, setTranx] = useState(list);


    const balanceHandler = (value) => {
        console.log("BalanceHanddler")
        setBalance(balance => Number(balance)+Number(value));
    }

    const expenseHandler = (value) => {
        console.log("Expense Handler");
        if(value.price < balance){
            setExpense(expense => Number(expense)+Number(value.price));
            setBalance(balance => Number(balance)-Number(value.price));
            setTranx((previousStateArray)=>[...previousStateArray, value]);
        }else{
            console.log("No balance left");
        } 
    }

    const handleEdit = (e)=>{
            console.log(e.key);
    }


    return(
        <div className={styles.mainbody}>
            <h1>Expense Tracker</h1>
            <div className={styles.display_section}>
                <Expensecard expense={expense} expenseHandler={expenseHandler}></Expensecard>
                <Balancecard balance={balance} balanceHandler={balanceHandler}></Balancecard>
                <Piechart data={tranx}></Piechart>
            </div>
            <div className={styles.display_section_lower}>
                <div className={styles.section_lower_data}>
                    <h1>Recent Transacation</h1>
                    <div>
                        <Transacation data={tranx} handleEdit={handleEdit}></Transacation>
                    </div>
                </div>
               <div  className={styles.section_lower_data_two}>
                    <h1>Top Expenses</h1>
               </div>
                
                
            </div>
            
        </div>
        
    )
}