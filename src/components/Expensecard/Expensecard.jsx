import Card from "../Card/Card";

export default function Expensecard(){

    const funcHandler = ()=>{
        console.log('btn clicked');
    }

    return(
    
        <Card title={'Expensecard'} price={'500'} btnName={'Add Expense'} funcHandler={funcHandler}></Card>
    )
}