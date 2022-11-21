import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

const MuiTextField = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const postData = {
      title: enteredTitle,
    };

    console.log(postData);

    setEnteredTitle("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="expenseControl">
          <div className="expenseControl">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
        </div>

        <button type="submit">hii</button>
      
      </form>

      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField label="Small Secondary" size="small" color="secondary" />
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField label="Form Input" required error />
          <TextField
            label="password"
            type="password"
            helperText="Do not share password with anyone"
          />
          <TextField
            label="password"
            type="password"
            helperText="Do not share password with anyone"
            disabled
          />
          <TextField label="Read Only" InputProps={{ readOnly: true }} />
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField
            label="Amout"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />

          <TextField
            label="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Stack>
      </Stack>
    </div>
  );
};


export default MuiTextField;