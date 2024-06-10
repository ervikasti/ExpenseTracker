import {useState } from "react";
import Card from "../Card/Card";
import Expense_form from "../ExpenseForm/Expense_form";

export default function Expensecard({expense, expenseHandler}){

    const[btn, setBtn] = useState(false);
    // const[expense, setExpense] = useState('500');

    const funcHandler = (e)=>{
        console.log('btn clicked');
        setBtn(!btn);        
    }

    // useEffect(,[expense]);

    // const expenseHandler = (value) => {
    //     console.log("Expense Handler");
    //     setExpense(expense => Number(expense)+Number(value));

    // }

    return(
        <>
        {btn && (<Expense_form expenseHandler={expenseHandler} btnHandler={funcHandler}/>)}
        <Card title={'Expensecard'} price={expense} btnName={'Add Expense'} funcHandler={funcHandler}></Card>
        </>
        
    )
}