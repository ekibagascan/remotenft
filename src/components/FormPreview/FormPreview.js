import React, { useState } from 'react'
import {
  Grid,
  Chip,
  Button,
  Paper,
  CardActionArea,
  CardMedia,
  CardContent,
  Card,
  Box,
  Typography,
  Collapse,
} from '@mui/material'
import ReactMarkdown from 'react-markdown'

const FormPreview = ({ postData }) => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = async (id, e) => {
    setExpanded(!expanded)
  }
  return (
    <Box
      sx={{
        marginTop: '30px',
        backgroundColor: '#FFF',
        borderRadius: '8px',
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
          Preview All
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
                maxWidth: 106,
                padding: 1,
                borderRadius: '12px',
                objectFit: 'cover',
              }}
              image={postData?.logo || 'images/nftjobs.webp'}
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
                <Chip
                  variant='outlined'
                  label={postData?.category || 'Category'}
                  size='medium'
                  sx={{ margin: '3px' }}
                />

                {postData.tags.map((tag) => (
                  <Button
                    variant='outlined'
                    label={tag}
                    size='medium'
                    sx={{ margin: '3px' }}
                  />
                ))}
              </Box>
            </Grid>
          </Card>
        </CardActionArea>
        <Paper>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent sx={{ padding: '50px 80px' }}>
              <Typography
                variant='h4'
                sx={{ fontWeight: 500, marginBottom: '20px' }}
              >
                {postData?.name || 'Company'} is hiring a Remote{' '}
                {postData?.position || 'Position'}
              </Typography>

              <ReactMarkdown>{postData?.jobDescriptions}</ReactMarkdown>

              <Typography
                variant='body1'
                sx={{ fontWeight: 500, marginBottom: '10px' }}
              >
                Location
              </Typography>
              <Typography paragraph>
                {postData?.location || 'Location'}
              </Typography>
              <Typography
                paragraph
                sx={{ textAlign: 'center', margin: '30px auto' }}
              >
                See more jobs at <strong>{postData?.name || 'Company'}</strong>
              </Typography>
              <Paper
                elevate={1}
                sx={{
                  padding: 3,
                  textAlign: 'center',
                  margin: '0px auto 50px',
                }}
              >
                <Button
                  variant='contained'
                  fullWidth
                  sx={{ borderRadius: '15px', backgroundColor: '#0F00FF' }}
                >
                  Apply for this job
                </Button>
              </Paper>
            </CardContent>
          </Collapse>
        </Paper>
      </Paper>
    </Box>
  )
}

export default FormPreview
