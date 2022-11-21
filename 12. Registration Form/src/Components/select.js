import { TextField, MenuItem } from "@mui/material";
import React from "react";
import { useField, useFormikContext } from "formik";

const Select = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }
  // console.log(Object.keys(options));
  //  AZ, AF, AL

  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {/* options[AZ] : Find the key value (like option.AZ)*/}
            {options[item]}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default Select;
