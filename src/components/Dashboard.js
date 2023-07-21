import React, { useEffect, useState } from 'react'
import dashboard from "../dashboard.svg"
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";

export default function Dashboard() {
 const [speciality,setSpeciality]=useState()
 const[loading,setLoading]=useState(true)

useEffect(()=>{
 ( async()=>{
    const res=await axios.get("http://my-doctors.net:8090/specializations?$limit=100&$sort[name]=1")
    setSpeciality(res.data.data)
    setLoading(false)
})();
},[])

console.log(speciality)
  return (
    <>
      <div style={{marginTop:"100px"}} >
        <img src={dashboard} alt="image not found" />
      </div>
     {speciality && <Typography variant="h4" component="div" color="#3f51b5" fontWeight="Bold" sx={{ mt: 3, mx: 3 }}>
        {speciality.length}+ Specialities
      </Typography>}
      <Grid container spacing={2} sx={{pl:3}} >
        {speciality? speciality.slice(0,6).map((item,index)=>{
                return( <Grid item key={index} xs={12}   lg={4} sx={{mt:3}}>
                <Card sx={{ width:390 , height:200 , border:1, borderColor:"divider" }}>
                    <CardContent sx={{ textAlign: "center" }}>
                      <img src={`http://my-doctors.net/${item.imageUrl}`} alt="img not found" width="30%" />
                      <Typography variant="h6" component="div" sx={{ mt: 3 }}>
                        {item.name}
                      </Typography>
                    </CardContent>
                </Card>
              </Grid>)
        }):<ClipLoader
        loading={loading}
        size={150}
        cssOverride={{margin:"auto"}}/>
      }
      </Grid>
      <Box sx={{display:"flex", justifyContent:"end", pr:2}}>
      <Link href='/specialities' color="inherit" fontSize={18} underline='none' >View all Specialities...</Link>
      </Box>
    </>
  )
}
