import React from 'react'
import { Button, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../slices/counter'
import { addName } from '../../slices/name'
import {Box} from '@mui/material';
import AdminCalendar from '../Calendar';


const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.counter.count)
    const name = useSelector(state => state.setname.myname)
    return (
        <>
        {/* <Box sx={{display:'flex',justifyContent:'center',margin:"10px"}}>
            <Card sx={{  margin:"10px" }}>
            <Typography sx={{textAlign:"center" ,padding:"10px",bgcolor:"#9c065d",color:"white"}} variant='h6'>
                   Counter By Redux Toolkit 
                </Typography>
                <Typography sx={{textAlign:"center"}} variant='h2'>
                    {count}
                </Typography>
              
                <Button variant="outlined"  sx={{margin:"25px",}} onClick={() => dispatch(decrement())}>-</Button>
                <Button variant="outlined" sx={{float:"right",margin:"25px"}} onClick={() => dispatch(increment())}>+</Button>
              
            </Card>
            <Card sx={{  margin:"10px"}}>
            <input type='text' onChange={(e) => dispatch(addName(e.target.value))}></input>
            <div>{name}</div>
              
            </Card>
           
            
        </Box> */}
            <AdminCalendar/>
            
        </>
    )
}

export default Counter