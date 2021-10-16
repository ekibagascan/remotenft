import React from 'react'
import { Fab } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useHistory } from 'react-router-dom'

const PostJob = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  top: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: '#0F00FF',
  borderRadius: '5px',
  color: '#fff',
  '&:hover': {
    background: 'linear-gradient(90deg, #92fe9d 0%, #00C9FF 100%)',
  },
  [theme.breakpoints.down('sm')]: {
    top: theme.spacing(2.3),
    width: '50px',
    height: '25px',
    fontSize: '0.4rem',
    fontWeight: 400,
    borderRadius: '3px',
  },
}))

const FloatingButton = () => {
  const history = useHistory()
  return (
    <div>
      <PostJob
        variant='extended'
        aria-label='postjob'
        size='small'
        onClick={() => history.push('/remote-nft/postjob')}
      >
        Post Job
      </PostJob>
    </div>
  )
}

export default FloatingButton
