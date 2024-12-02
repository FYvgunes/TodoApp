import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
const AddTodoItemModal = ({ open, handleClose, addTodoItem }) => {
  const [title, setTitle] = useState("");

  const appleTodoItem = () => {
    addTodoItem({
      title,
      id: Date.now().toString(36) + Math.random().toString(36).substring(2),
      checked: false,
    });
    setTitle("");
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        xs={{ w: "1000px", height: "auto" }}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"New Note"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
          <TextField
            id="outlined-basic"
            hiddenLabel
            variant="outlined"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{ float: "right" }} onClick={handleClose}>
            Cancel
          </Button>
          <Button sx={{ float: "left" }} onClick={appleTodoItem}>
            Appley
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTodoItemModal;
