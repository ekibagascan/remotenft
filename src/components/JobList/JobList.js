import React, { useState } from 'react'
import {
  Grid,
  Typography,
  Chip,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Paper,
  Container,
} from '@mui/material'
import CollapseDetails from '../CollapseDetails/CollapseDetails'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { styled } from '@mui/material/styles'

import { getPostsByCategory, getPostsByTag } from '../../actions/posts'

const MyCard = styled(Card)(({ theme }) => ({
  maxHeight: '106px',
  [theme.breakpoints.down('sm')]: {
    maxHeight: 100,
  },
}))

const Media = styled(CardMedia)(({ theme }) => ({
  maxWidth: 106,
  [theme.breakpoints.down('sm')]: {
    maxWidth: 90,
  },
}))
const Name = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
  },
}))
const Position = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}))

const ChipBottom = styled(Chip)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))
const ChipRight = styled(Chip)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))
const ChipGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {},
}))
const MyGrid = styled(Grid)(({ theme }) => ({
  paddingBottom: 1,
  paddingRight: 1,
  [theme.breakpoints.down('sm')]: {
    padding: 0,
  },
}))
const MyContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: 0,
  },
}))

const JobList = ({ posts }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [expanded, setExpanded] = useState(false)
  const [currentId, setCurrentId] = useState(0)

  const handleClick = async (id, e) => {
    setCurrentId(id)
    setExpanded(!expanded)
  }

  const handleSearchTag = (tag) => {
    dispatch(getPostsByTag(tag))
    history.push(`/remote-nft/tags/${tag}`)
  }
  const handleSearchCategory = (category) => {
    dispatch(getPostsByCategory(category))
    history.push(`/remote-nft/categories/${category}`)
  }

  if (!posts) return 'nopost'

  return (
    <MyContainer maxWidth='md'>
      <Grid
        container
        alignitems='center'
        justifyContent='center'
        spacing={{ xs: 0, md: 1 }}
        sx={{ margin: '30px 0px' }}
      >
        {posts?.map((post) =>
          post.isApproved ? (
            <MyGrid key={post?._id} item xs={12}>
              <CardActionArea>
                <MyCard
                  sx={{ display: 'flex' }}
                  onClick={(e) => handleClick(post._id, e)}
                >
                  <Media
                    component='img'
                    sx={{
                      padding: 1,
                      borderRadius: '12px',
                      objectFit: 'cover',
                    }}
                    image={post?.logo}
                    alt='remoteNFT'
                  />

                  <CardContent
                    sx={{
                      flex: '1 0 auto',
                      padding: 1,
                      paddingBottom: '8px',
                      margin: 'auto',
                    }}
                  >
                    <Name variant='body1'>{post?.name}</Name>
                    <Position variant='h6'>{post?.position}</Position>
                    <Grid sx={{ margin: '5px auto' }}>
                      <Chip
                        label={post?.location}
                        variant='contained'
                        size='small'
                        sx={{ margin: 'auto 3px' }}
                      />
                      <ChipBottom
                        label={post?.type}
                        variant='contained'
                        size='small'
                        sx={{ margin: 'auto 3px' }}
                      />
                      <Chip
                        variant='contained'
                        size='small'
                        label={post?.maxSalary}
                        sx={{
                          margin: 'auto 3px',
                          backgroundColor: '#C6D57E',
                          fontSize: '0.65rem',
                          height: '24px',
                          boxShadow: 'none',
                          borderRadius: '15px',
                          '&:hover': {
                            backgroundColor: '#C6D57E',
                            boxShadow: 'none',
                          },
                        }}
                      />
                    </Grid>
                  </CardContent>
                  <ChipGrid
                    item
                    xs={4}
                    sx={{
                      margin: 'auto',
                      marginRight: '50px',
                      padding: 1,
                    }}
                  >
                    <ChipRight
                      variant='outlined'
                      label={post.category}
                      size='medium'
                      sx={{ margin: '3px' }}
                      onClick={() => handleSearchCategory(post?.category)}
                    />

                    {post.tags.map((tag) => (
                      <ChipRight
                        key={tag}
                        label={tag}
                        variant='outlined'
                        size='medium'
                        sx={{ margin: '3px' }}
                        onClick={() => handleSearchTag(tag)}
                      />
                    ))}
                  </ChipGrid>
                </MyCard>
              </CardActionArea>
              {currentId === post._id ? (
                <Paper>
                  <CollapseDetails
                    expanded={expanded}
                    currentId={currentId}
                    post={post}
                  />
                </Paper>
              ) : null}
            </MyGrid>
          ) : null
        )}
      </Grid>
    </MyContainer>
  )
}

export default JobList
