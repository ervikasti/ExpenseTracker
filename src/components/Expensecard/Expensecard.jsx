import { useState } from "react";
import Card from "../Card/Card";
import Expense_form from "../ExpenseForm/Expense_form";

export default function Expensecard(){

    const[btn, setBtn] = useState(false);

    const funcHandler = (e)=>{
        console.log('btn clicked');
        setBtn(!btn);        
    }

    return(
        <>
        {btn && (<Expense_form/>)}
        <Card title={'Expensecard'} price={'500'} btnName={'Add Expense'} funcHandler={funcHandler}></Card>
        </>
        
    )
}