import AddBalance from "../AddBalance/AddBalance";
import Card from "../Card/Card";
import { useState } from "react";
const Balancecard = ()=>{

    const[btn, setBtn] = useState(false);

    const funcHandler = (e)=>{
        console.log("Add Balance Btn clicked");
        setBtn(!btn);        
    }


    return(
        <>
        {btn && (<AddBalance/>)}
        <Card title={'Wallet Balance'} price={'5000'} btnName={'Add Balance'} funcHandler={funcHandler}></Card>
        </>
          )
}

export default Balancecard;