import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import vegIcon from '../../assets/veg_icon.png'
import nonVegIcon from '../../assets/nonveg_icon.png'
import Rating from "@mui/material/Rating";
import Stack from '@mui/material/Stack';
import { capitalize } from '@mui/material';
import { useNavigate } from 'react-router-dom';





export default function VegCard(props) {
  const { name, price, type, size, image, status, category, _id, rating,maxPrice } = props.vegdata
  const [addCart, setAddCart] = useState(false)
  const navigate = useNavigate()
  const ratings = 1234

  function handleClick(e) {
    e.preventDefault()
    setAddCart(!addCart)
    window.location.replace('/login')
  }

  function handleSingleItem(a, b) {
    if (b === "nonveg") {
      navigate(`/store/${a}`, { state: b })
    } else if (b === "veg") {
      navigate(`/store/${a}`, { state: b })
    }
  }

  const getPercentage = (max,sell)=>{
    const diff = max-sell
    const average = (max+sell)/2
    return Math.floor((diff/average) * 100)
    // return parseInt((sell-max)/100)
  }


  return (
    <>
      <Card sx={{ maxWidth:245, minWidth: 245 }} onClick={(e) => { handleSingleItem(_id, category) }}>
        {category == "nonveg" ? <img src={nonVegIcon} width={20} alt='veg or nonveg' /> : <img src={vegIcon} width={20} alt='veg or nonveg' />}

        <CardMedia
          sx={{ height: 100, backgroundSize: "contain" }}
          image={image}
          title={name}
        />
        <CardContent>
          <Badge className="badge-end mt-2" size="small" pill bg={status ? "success" : "danger"}>{status ? "Instock" : "OutofStock"}</Badge>
          <Typography gutterBottom variant="h6" component="div">
            {capitalize(name)}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Vegetables are fresh and very rich in vitmains
          </Typography>
          <Stack direction="row" spacing={0.5}>
          <Typography sx={{fontSize:14,color:"#aaaaaa"}}>Type</Typography>
          <Typography sx={{fontSize:14,color:"#5c7aff"}}>{type.toUpperCase()}</Typography>
          <Typography sx={{fontSize:14,color:"#5c7aff"}}>{size.toUpperCase()}</Typography>
          </Stack>
          <Stack direction="row" spacing={0.3}>
            <Rating name="size-small" size="small" value={rating} readOnly />
            <Typography sx={{fontSize:13}}>({ratings.toLocaleString()})</Typography>
            <Typography sx={{fontSize:13,color:'grey'}}>Ratings</Typography>
          </Stack>

        </CardContent>
        <CardActions style={{
          display: 'flex',
          marginTop:-30,
          
        }}>

          <CardActions style={{
            marginTop:-10,
            marginBottom:-16,
            padding:10,
            justifyItems:"self-end",
            
           
          }}>
          <Typography sx={{
            fontSize:16,
            fontWeight:"bold",
            
           
            
          }}>₹{price}</Typography>
          <Typography sx={{
            fontSize:14,
            fontWeight: 700,
            

          }} className='text-danger text-decoration-line-through'>{maxPrice}</Typography>
          <Typography sx={{fontSize:12}} className='fw-semibold text-success '>{getPercentage(maxPrice,price)}%off</Typography>
          
          
          <Button className='ms-5' onClick={handleClick}>{addCart ? <ShoppingCartRoundedIcon fontSize='large' /> : <ShoppingCartOutlinedIcon fontSize='large' />}</Button>
          </CardActions>
        </CardActions>

        <ButtonGroup style={{
          display: 'flex',
          justifyContent: 'space-between'
        }} size="large" variant="outlained" aria-label="outlined primary button group">

          {/* for admin use only  */}

          {/* <Button><EditIcon  fontSize='large'/></Button>
      <Button><DeleteForeverIcon fontSize='large'/></Button> */}
        </ButtonGroup>
      </Card>
    </>
  );
}