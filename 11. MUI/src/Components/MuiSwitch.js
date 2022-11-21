import { Box, FormControlLabel, Switch } from '@mui/material'
import { useState } from 'react'

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false)
  console.log(checked)
  const handleChange = (event) => {
    setChecked(event.target.checked)
  }
  return (
    <Box>
      <FormControlLabel
        control={<Switch checked={checked} color="success" onChange={handleChange} />}
        label='Dark mode'
      />
    </Box>
  )
}

export default MuiSwitch;