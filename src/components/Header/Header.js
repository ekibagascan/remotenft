import React from 'react'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Grid item sx={{ margin: '20px auto 10px', textAlign: 'center' }}>
        <Link to='/'>
          <img alt='remotenft' src='/images/remotenftlogo.svg' height={30} />
        </Link>
      </Grid>
    </div>
  )
}

export default Header
