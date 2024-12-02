import React from "react";
import Checkbox from "@mui/material/Checkbox";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const TodoList = ({ addTodoItem, todoItems, onToggle }) => {
  console.log("TodoList", todoItems);

  return (
    <div>
      <ul sx={{ ml: "10px" }}>
        {todoItems.map((todoItem) => (
          <Grid container>
            <Grid sx={{ textAlign: "left" }} xs={12} md={9} lg={9}>
              <span key={todoItem.id} style={{ textTransform: "uppercase" }}>
                <Checkbox
                  checked={todoItem.checked}
                  inputProps={{ "aria-labelledby": todoItem.id }}
                  onChange={() => onToggle(todoItem.id)}
                  sx={{
                    color: "#6C63FF",
                    "&.Mui-checked": {
                      color: "#6C63dd",
                    },
                  }}
                />
                {todoItem.title}
                <DeleteIcon onClick={() => console.log("Delete Todo Item")} />
                <EditIcon onClick={() => console.log("Edit Todo Item")} />
              </span>
              <hr style={{ backgroundColor: "#6C63FF", height: "0.5px" }} />
            </Grid>
          </Grid>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
