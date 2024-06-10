import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '../Modal/Modal';
import { useState } from 'react';

export default function AddBalance({balanceHandler,btnHandler}){

    const[amount, setAmount] = useState('0');

    const amountHandler = (e) =>{
        setAmount(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        balanceHandler(amount);
    }

    return(
        <Modal btnHandler={btnHandler}>
            <form onSubmit={submitHandler}>
                <h1>Add Balance</h1>
                <TextField id="outlined-basic" type='Number' label="Increment Amount" variant="outlined" value={amount} onChange={amountHandler}/>
                <Button variant="contained" type='submit'>Add Balance</Button>
            </form>
        </Modal>
    )
}