import Card from "../Card/Card";
const Balancecard = ()=>{

    const funcHandler = () => {
        console.log("Add Balance Btn clicked");
    }

    return(
        <Card title={'Wallet Balance'} price={'5000'} btnName={'Add Balance'} funcHandler={funcHandler}></Card>
    )
}

export default Balancecard;