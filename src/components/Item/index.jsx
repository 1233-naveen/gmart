import React, { useEffect ,useState} from 'react'
import { useLocation,useParams} from 'react-router-dom'
import axios from 'axios'


const Item = () => {
    const [itemData,setItemData] = useState('')
    const location = useLocation()
    const params = useParams()

    useEffect(()=>{
        console.log(params)
        const categorey = location.state
        if(categorey==="veg"){
            axios.get(`http://localhost:8000/market/vegetables/${params.id}`)
           
            .then((res)=>{
                console.log(res.data)
                return setItemData(res.data)
            })
            .catch((e)=>{
                console.log(e)
            })
        }
        else if(categorey==="nonveg"){
            axios.get(`http://localhost:8000/market/nonvegs/${params.id}`)
           
            .then((res)=>{
                console.log(res.data)
                return setItemData(res.data)
            })
            .catch((e)=>{
                console.log(e)
            })
        }
    },[])

  return (
    <>
        {itemData.name}
    </>
  )
}

export default Item