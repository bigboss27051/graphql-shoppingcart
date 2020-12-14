import React, { useState } from 'react';
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from '@material-ui/core';

const FormDialog = (props) => {
  const { isShowDialog = false } = props
  const [isLoginPageShow, setLoginPageShow] = useState(false)

  const handleClickDialog = () => {
    return !isShowDialog
  };

  const handleONSwitchFrom = () => {
    setLoginPageShow(!isLoginPageShow);
  };

  return (
      <Dialog open={isShowDialog} onClose={handleClickDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{isLoginPageShow ? 'Login' : 'Register'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Button variant="outlined" color="primary" onClick={handleONSwitchFrom}>
              {
                isLoginPageShow ? 'Login to Shopping Cart' : 'Register to Shopping Cart'
              }
            </Button>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="text"
            fullWidth
          />
          {!isLoginPageShow ??
            <TextField
              autoFocus
              margin="dense"
              id="confirmPassword"
              label="Confirm Password"
              type="text"
              fullWidth
            />
          }
          {!isLoginPageShow &&
            <TextField
              autoFocus
              margin="dense"
              id="fullname"
              label="Full Name"
              type="text"
              fullWidth
            />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClickDialog} color="primary">
            {isLoginPageShow ? 'Login' : 'Register'}
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default FormDialog 