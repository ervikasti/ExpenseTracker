import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '../Modal/Modal';

export default function AddBalance(){

    return(
        <Modal>
            <form>
                <h1>Add Balance</h1>
                <TextField id="outlined-basic" type='Number' label="Increment Amount" variant="outlined"/>
                <Button variant="contained">Add Balance</Button>
            </form>
        </Modal>
    )
}