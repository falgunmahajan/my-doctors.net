import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import error from "../404 page error.svg"
export default function NotFound() {
  return (
<Grid container sx={{p:10}}>
<Grid xs={4}>
<Typography variant="h1">
OOPS!
</Typography>
<Typography variant="h4">
We can't seem to find the page
you are looking for.
<br /><br />
Here are some helpful links instead:
<br /><br />
</Typography>
<Link to ="/">Doctors</Link><br />
<Link to ="/auth/login">Login/SignUp</Link>
</Grid>
<Grid xs={4} sx={{ m:"auto"}}>
<img src={error} alt="img not found" />
</Grid>
</Grid>
  )
}
