import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Contact() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const buttonStyle = {
    border: "1px solid rgba(255, 255, 255, 1)",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "-110px"
  };
  const buttonStyleMobile = {
    border: "1px solid rgba(255, 255, 255, 1)",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "-20px"
  };

  return (
    <div style={{ display: "flex", width: "40px" }}>
      {window.screen.width > 1000 ? (
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
          style={buttonStyle}
        >
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1em",
              color: "white"
            }}
          >
            Contact &nbsp;&nbsp;
          </p>
          <i class="fas fa-envelope fa-2x" style={{ color: "white" }} />
        </Button>
      ) : (
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
          style={buttonStyleMobile}
        >
          <i class="fas fa-envelope fa-2x" style={{ color: "white" }} />
        </Button>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Contact me</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="myEmail"
            label="Cette fonctionnalité n'est pas ecore disponnible"
            type="email"
            fullWidth
            disabled
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            disabled
          />
          <TextField
            margin="dense"
            id="message"
            label="Message"
            type="text"
            fullWidth
            multiline="true"
            disabled
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
