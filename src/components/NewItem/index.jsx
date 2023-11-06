import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { itemTypes as types } from './itemsPreloadData';
import { itemSizes as sizes } from './itemsPreloadData';
import { MenuItem } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { Grid } from '@mui/material';
import axios from 'axios';



const NewItem = () => {

  const [itemData, setItemData] = useState({ "Name": "", "Price": "", "Quantity": 0, "Size": "", "Status": true, "Category": "veg", "Type": "andhra", "Image": "" ,"Maxprice":""})

  const handleChange = (event) => {
    setItemData({ ...itemData, [event.target.name]: event.target.value })
  }


  function handleSubmit(e) {
    e.preventDefault()
    axios.post('https://xhkyl8-8080.csb.app/market/newitem', itemData)
      .then((res) => {
        return res
      })
      .then((res) => {
        return console.log(res.data)
      })
      .catch((e) => {
        return console.log(e.message)
      })
  }

  return (
    <>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"

      >

        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            justifyContent: "center",
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}


        >

          <div>
            <TextField
              name='Name'
              id="standard-error"
              label="Name"
              defaultValue=""
              variant="standard"
              helperText=""
              placeholder='Enter Name'
              onChange={handleChange}
            />
            <TextField
              name='Price'
              id="standard-error-helper-text"
              label="Price"
              defaultValue=""
              helperText=""
              type='number'
              variant="standard"
              placeholder='Enter Price'
              InputProps={{
                endAdornment: <InputAdornment position="start">₹</InputAdornment>,
              }}
              onChange={handleChange}

            />

<TextField
              name='Maxrice'
              id="standard-error-helper-text"
              label="MaxPrice"
              defaultValue=""
              helperText=""
              type='number'
              variant="standard"
              placeholder='Enter MaxPrice'
              InputProps={{
                endAdornment: <InputAdornment position="start">₹</InputAdornment>,
              }}
              onChange={handleChange}

            />

            <TextField
              name='Quantity'
              label="Quantity"
              id="standard-start-adornment"
              placeholder='Enter Quantity'
              InputProps={{
                endAdornment: <InputAdornment position="start">kg</InputAdornment>,
              }}
              type='number'
              variant="standard"
              onChange={handleChange}

            />

            <TextField
              name='Type'
              id="standard-select-currency"
              select
              label="Type"
              defaultValue=""
              helperText=""
              variant="standard"
              placeholder='Select Type'
              onChange={handleChange}
            >
              {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              name='Size'
              id="standard-select-currency"
              select
              label="Size"
              defaultValue=""
              helperText=""
              variant="standard"
              placeholder='Select Size'
              onChange={handleChange}
            >
              {sizes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div >
            <Box sx={{ display: 'flex' }}>
              <div>
                <FormLabel id="demo-controlled-radio-buttons-group" sx={{ marginLeft: 1 }}>Stock Available</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name='Status'
                  value={itemData.Status}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                  row

                >
                  <FormControlLabel value="true" control={<Radio />} label="InStock" />
                  <FormControlLabel value="false" control={<Radio />} label="OutofStock" />
                </RadioGroup>
              </div>
              <div>
                <FormLabel id="demo-controlled-radio-buttons-group" sx={{ marginLeft: 1 }}>Veg or NonVeg</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="Category"
                  value={itemData.Category}
                  onChange={handleChange}
                  sx={{ marginLeft: 1 }}
                  row
                >
                  <FormControlLabel value="veg" control={<Radio />} label="Veg" />
                  <FormControlLabel value="nonveg" control={<Radio />} label="NonVeg" />
                </RadioGroup>
              </div>
              <TextField
                name='Image'
                id="standard-error"
                label="ImageURL"
                defaultValue=""
                variant="standard"
                helperText=""
                placeholder='URL "https://image.jpg"'
                onChange={handleChange}
              />
            </Box>



          </div>
          <button type='submit'>Submit</button>
        </Box>
      </Grid>
    </>
  )
}

export default NewItem



