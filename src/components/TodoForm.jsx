import { useState } from 'react';
import Grid  from '@mui/material/Grid'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {Box, Stack, TextField, Autocomplete, InputBase} from '@mui/material';

const TodoForm = () => {
  const [items, setItems] = useState([]);
 const mockdata = [ 
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 }] 

  return (
    <div className="todoForm">
      <Box
        sx={{
          height: "100vh", // Tüm ekran yüksekliği
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Stack
              spacing={{ xs: 3, sm: 4 }}
              direction="row"
              useFlexGap
              sx={{ flexWrap: "wrap" }}
            >
              <InputBase
              sx={{ ml: 1, flex: 1, border: 1, pl:1, borderColor: "#6C63FF", color: '#6C63FF' }}
                placeholder="Add Todo Item"
                inputProps={{ "aria-label": "Add Todo Item" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Autocomplete
                disablePortal
                options={mockdata}
                sx={{ width: 20 }}
                renderInput={(params) => <TextField {...params} label="All" />}
              />{" "}
              <IconButton aria-label="DarkModeIcon" disabled color="primary">
                <DarkModeIcon sx={{ color: '#6C63FF'}} />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default TodoForm
