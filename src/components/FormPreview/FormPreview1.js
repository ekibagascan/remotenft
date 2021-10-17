import React, { useState } from 'react'
import {
  Grid,
  Chip,
  Paper,
  CardActionArea,
  CardMedia,
  CardContent,
  Card,
  Box,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'

const ChipRight = styled(Chip)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))

const FormPreview = ({ postData }) => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = async (id, e) => {
    setExpanded(!expanded)
  }
  return (
    <Box
      sx={{
        height: '150px',
        width: 853,
        bottom: 0,
        position: 'fixed',
        marginTop: '30px',
        backgroundColor: '#0F00FF',
        borderRadius: '10px',
      }}
    >
      <Paper sx={{ padding: '0 16px 20px', backgroundColor: '#0F00FF' }}>
        <Typography
          variant='body2'
          textAlign='center'
          sx={{
            margin: '5px auto 3px',
            fontWeight: 500,
            color: '#fff',
          }}
        >
          Preview Card
        </Typography>
        <CardActionArea
          sx={{ backgroundColor: '#0F00FF', borderRadius: '8px' }}
          onClick={handleClick}
        >
          <Card
            sx={{
              display: 'flex',
              maxHeight: '106px',
            }}
          >
            <CardMedia
              component='img'
              sx={{
                maxWidth: 100,
                padding: 1,
                borderRadius: '12px',
                objectFit: 'cover',
              }}
              image={postData?.logo || '/images/remotenft.png'}
              alt='logo-preview'
            />

            <CardContent
              sx={{
                flex: '1 0 auto',
                padding: 1,
                paddingBottom: '8px',
                margin: 'auto',
                marginLeft: '10px',
              }}
            >
              <Typography variant='body1'>
                {postData?.name || 'Project/Company'}
              </Typography>
              <Typography variant='h6'>
                {postData?.position || 'Position/Role Job'}
              </Typography>
              <Grid sx={{ margin: '5px auto' }}>
                <Chip
                  variant='contained'
                  size='small'
                  label={postData?.location || 'Location'}
                  sx={{
                    margin: 'auto 3px',
                    backgroundColor: '#e2e2e2',
                    color: '#000',
                    fontSize: '0.65rem',
                    height: '24px',
                    boxShadow: 'none',
                    borderRadius: '5px',
                    '&:hover': {
                      backgroundColor: '#e2e2e2',
                      color: '#000',
                      boxShadow: 'none',
                    },
                  }}
                />

                <Chip
                  variant='contained'
                  size='small'
                  label={postData?.type || 'Type Job'}
                  sx={{
                    margin: 'auto 3px',
                    backgroundColor: '#e2e2e2',
                    color: '#000',
                    fontSize: '0.65rem',
                    height: '24px',
                    boxShadow: 'none',
                    borderRadius: '5px',
                    '&:hover': {
                      backgroundColor: '#e2e2e2',
                      color: '#000',
                      boxShadow: 'none',
                    },
                  }}
                />
                {postData?.minSalary || postData?.maxSalary !== 'Secret' ? (
                  <Chip
                    variant='contained'
                    size='small'
                    label={postData?.maxSalary || '$'}
                    sx={{
                      margin: 'auto 3px',
                      backgroundColor: '#66BB6A',
                      fontSize: '0.65rem',
                      height: '24px',
                      boxShadow: 'none',
                      borderRadius: '5px',
                      '&:hover': {
                        backgroundColor: '#66BB6A',
                        boxShadow: 'none',
                      },
                    }}
                  />
                ) : null}
              </Grid>
            </CardContent>
            <Grid
              item
              xs={4}
              sx={{
                margin: 'auto',
                marginRight: '80px',
              }}
            >
              <Box>
                <ChipRight
                  variant='outlined'
                  label={postData?.category}
                  size='medium'
                  sx={{ margin: '3px' }}
                />

                {postData?.tags.map((tag) => (
                  <ChipRight
                    key={tag}
                    label={tag}
                    variant='outlined'
                    size='medium'
                    sx={{ margin: '3px' }}
                  />
                ))}
              </Box>
            </Grid>
          </Card>
        </CardActionArea>
      </Paper>
    </Box>
  )
}

export default FormPreview
