import React from "react";
import { TextField, InputAdornment, IconButton, Grid } from "@material-ui/core";
import { Visibility } from "@material-ui/icons/Visibility";
import { VisibilityOff } from "@material-ui/icons/VisibilityOff";
function Input({
  half,
  handleChange,
  name,
  label,
  autoFocus,
  type,
  handleShowPassword,
}) {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === "password" && {
            endAdornement: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === "password" ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }
        }
      />
    </Grid>
  );
}

export default Input;
