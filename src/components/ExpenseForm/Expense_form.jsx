import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Category from '../Category/Category';
import Modal from '../Modal/Modal';
import { useState } from 'react';

export default function Expense_form({ expenseHandler,btnHandler}){

    const[data, setData]= useState({
        title:'',
        price:'',
        date:''
    });

    const [category, setCategory] = useState('');

    const dataHandler = (e) =>{
        setData({...data,[e.target.name]:e.target.value,'category':category});
    }
    
    const formHandler = (e) => {
        e.preventDefault();
        console.log(data);
        expenseHandler(data);

    }

    const handleChange = (event) => {
      setCategory(event.target.value);
      
    };

    return(
        <Modal btnHandler={btnHandler}>
            <form onSubmit={formHandler}>
                <h1>Add Expenses</h1>
                <TextField name="title" id="outlined-basic" label="Title" variant="outlined" onChange={dataHandler}/>
                <TextField name="price" id="outlined-basic" label="Price" variant="outlined" onChange={dataHandler}/>
                <Category name="category" handleChange={handleChange} category={category}></Category>
                <TextField name="date" type="date" id="outlined-basic" variant="outlined" onChange={dataHandler}/>
                <Button variant="contained" type='submit'>Add Expense</Button>
            </form>
        </Modal>
    )
}