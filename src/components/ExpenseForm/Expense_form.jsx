import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Category from '../Category/Category';
import Modal from '../Modal/Modal';

export default function Expense_form(){

    return(
        <Modal>
            <form>
                <h1>Add Expenses</h1>
                <TextField id="outlined-basic" label="Title" variant="outlined"/>
                <TextField id="outlined-basic" label="Price" variant="outlined"/>
                <Category></Category>
                <TextField type="date" id="outlined-basic" variant="outlined"/>
                <Button variant="contained">Add Expense</Button>
            </form>
        </Modal>
    )
}