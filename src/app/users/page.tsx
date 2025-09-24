'use client';
import React from 'react';
import '../css/users.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DataTableComponent from '../components/DataTableComponent';

const UserPage = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const email = formJson.email;
    console.log(email);
    handleClose();
  };

    return(
        <div>
           <h1> User Information Page </h1>
                <div className='button'>
                    <Button variant="outlined" onClick={handleClickOpen}>
                    Add Users
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Add Users</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your details here. We
                            will send updates occasionally.
                        </DialogContentText>
                        <form onSubmit={handleSubmit} id="subscription-form">
                            <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="username"
                            label="User Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            />
                            <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="password"
                            label="Your Password"
                            type="password"
                            fullWidth
                            variant="standard"
                            />
                            <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                            />
                            <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="phone"
                            label="Phone Number"
                            type="number"
                            fullWidth
                            variant="standard"
                            />
                        </form>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit" form="subscription-form">
                            Save
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>   
                <div className='table'>
                    <DataTableComponent />
                </div>
        </div>
    )
}

export default UserPage;

