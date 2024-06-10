import AddBalance from "../AddBalance/AddBalance";
import Card from "../Card/Card";
import { useState } from "react";
const Balancecard = ({balance, balanceHandler})=>{

    const[btn, setBtn] = useState(false);
    // const[balance, setBalance] = useState('5000');

    const funcHandler = (e)=>{
        console.log("Add Balance Btn clicked");
        setBtn(!btn);        
    }

    // const balanceHandler = (value) => {
    //     console.log("BalanceHanddler")
    //     setBalance(balance => Number(balance)+Number(value));
    // }


    return(
        <>
        {btn && (<AddBalance balanceHandler={balanceHandler} btnHandler={funcHandler}/>)}
        <Card title={'Wallet Balance'} price={balance} btnName={'Add Balance'} funcHandler={funcHandler} ></Card>
        </>
          )
}

export default Balancecard;