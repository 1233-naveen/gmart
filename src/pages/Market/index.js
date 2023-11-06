import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import VegCard from './vegCard';
import moment from 'moment/moment';

const Market = () => {
    const [vegData,setVegData] = useState([])
    const [nonvegData,setnonVegData] = useState([])

    useEffect(() => {
        getVegetables()
    }, [])

    function getVegetables(){
        // axios.get("http://localhost:8000/market/vegetables")
        axios.get("https://xhkyl8-8080.csb.app/market/vegetables")
            .then(res => {
                if (res.data == "Not a user") {
                    return
                } else {
                    setVegData(res.data)
                    console.log(res.data)
                    console.log(moment(new Date(res.data[8].createdAt)).fromNow())
                }}
                )
            .catch(err => console.log(err))
        // axios.get("http://localhost:8000/market/nonvegs")
        axios.get("https://xhkyl8-8080.csb.app/market/nonvegs")
            .then(res => {
                if (res.data == "Not a user") {
                    return
                } else {
                    setnonVegData(res.data)
                }
            })
            
            .catch(err => console.log(err))
    };

    return (
        <>
        <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center",gap:"15px",marginTop:"10px"}}>{vegData.map((item)=>{
            return <VegCard key={item._id} vegdata={item}/>
        })}</div>
        <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center",gap:"20px",marginTop:"10px"}}>{nonvegData.map((item)=>{
            return <VegCard key={item._id} vegdata={item}/>
        })}</div>
        </>
    )
}

export default Market