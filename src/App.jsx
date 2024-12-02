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

  const handleCheckboxChange = (todoId) => {
    // Toggle checked state logic here
    console.log("Toggle Checkbox", todoId);
    const updatedItems = todoItems.map((item) =>
      item.id === todoId ? { ...item, checked: !item.checked } : item
    );
    setTodoItems(updatedItems);
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
      <Box sx={{ flexGrow: 20 }}>
        <Grid container>
          <Grid xs={0} md={3} lg={3}></Grid>
          <Grid sx={{ flexGrow: 1 }} xs={12} md={6} lg={6}>
            <TodoForm></TodoForm>
            <TodoList
              addTodoItem={addTodoItem}
              todoItems={todoItems}
              onToggle={handleCheckboxChange}
            />
            <AddTodoItemModal
              open={open}
              handleClose={handleClose}
              addTodoItem={addTodoItem}
            ></AddTodoItemModal>
          </Grid>
          <Grid xs={0} md={3} lg={3}>
            <Button
              variant="outlined"
              onClick={handleClickOpen}
              sx={{
                backgroundColor: "#6C63FF",
                color: "#ffffff",
                w: "10px",
                "&:hover": {
                  backgroundColor: "#534CC2",
                },
                position: "absolute",
                top: "90vh",
                right: "20rem",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                fontSize: "24px",
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              +
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
