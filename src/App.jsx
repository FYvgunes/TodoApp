import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Grid from "@mui/material/Grid";
import { Box, Button } from "@mui/material";
import AddTodoItemModal from "./components/AddTodoItemModal";

function App() {
  const [open, setOpen] = useState(false);
  const [todoItems, setTodoItems] = useState([]);

  // Add todo item function here

  const addTodoItem = (newItem) => {
    // Add todo item logic here
    console.log("Add Todo Item", newItem);
    setTodoItems([...todoItems, newItem]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h2>TODO LİST </h2>
      <Box sx={{ flexGrow: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={0} md={3} lg={3}></Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TodoForm>xs=8</TodoForm>
            <AddTodoItemModal
              open={open}
              handleClose={handleClose}
              addTodoItem={addTodoItem}
            ></AddTodoItemModal>
            <TodoList addTodoItem={addTodoItem} todoItems={todoItems} />
          </Grid>
          <Grid item xs={0} md={3} lg={3}>
            <Button variant="outlined" onClick={handleClickOpen}>
              Slide in alert dialog
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
