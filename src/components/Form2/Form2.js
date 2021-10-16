import React, { useState } from 'react'
import {
  Grid,
  Paper,
  Box,
  TextField,
  Typography,
  Autocomplete,
  Button,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import FileBase from 'react-file-base64'

import TextEditor from '../TextEditor/TextEditor'
import { minSalaries, maxSalaries } from '../salaries'

const InputField = styled(TextField)(() => ({
  '& input:valid + fieldset': {
    borderColor: 'black',
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important',
  },
}))

const AutoField = styled(TextField)(() => ({
  '& label': {
    fontSize: '1rem',
  },
  '& fieldset': {
    borderColor: 'black',
    borderWidth: 2,
  },
  '& fieldset:focus': {
    borderLeftWidth: 6,
    padding: '4px !important',
  },
}))

const Form2 = ({ postData, setPostData }) => {
  const [getClick, setGetClick] = useState(false)
  const [getClick2, setGetClick2] = useState(false)

  const handleGetClick = () => {
    setGetClick2(false)
    setGetClick(true)
  }
  const handleGetClick2 = () => {
    setGetClick(false)
    setGetClick2(true)
  }
  const handleChangeminSalary = (event, value) =>
    setPostData({ ...postData, minSalary: value })

  const handleChangemaxSalary = (event, value) =>
    setPostData({ ...postData, maxSalary: value })

  return (
    <Paper elevation={1} sx={{ marginTop: '20px', padding: 2 }}>
      <Typography
        variant='body1'
        color='black'
        sx={{ fontWeight: 'bold', marginBottom: 1 }}
      >
        Logo/Gif,JPEG,PNG*
      </Typography>
      <Box
        alignItems='center'
        sx={{
          height: 30,
          width: 250,
          padding: 2,
          border: '2px solid #000',
          borderRadius: '4px',
          backgroundColor: '#FBFBFB',
          textAlign: 'center',
        }}
      >
        <FileBase
          type='file'
          multiple={false}
          onDone={({ base64 }) => setPostData({ ...postData, logo: base64 })}
        />
      </Box>
      <Grid item xs={12} sx={{ margin: '30px auto 3px', display: 'flex' }}>
        <Autocomplete
          id='minSalaries'
          options={minSalaries}
          getOptionLabel={(option) => option.toString()}
          getOptionSelected={(option, value) => option.salary === value.salary}
          value={postData.minSalary}
          onChange={handleChangeminSalary}
          fullWidth
          style={{ marginRight: '16px' }}
          renderInput={(params) => (
            <AutoField required {...params} shrink label='Minimum Salary' />
          )}
        />
        <Autocomplete
          id='maxSalaries'
          options={maxSalaries}
          getOptionLabel={(option) => option.toString()}
          getOptionSelected={(option, value) => option.salary === value.salary}
          value={postData.maxSalary}
          onChange={handleChangemaxSalary}
          fullWidth
          renderInput={(params) => (
            <AutoField required {...params} shrink label='Maximum Salary' />
          )}
        />
      </Grid>
      <Grid sx={{ padding: '0px 15px', margin: 0 }}>
        <Typography sx={{ fontSize: '0.8rem', color: '#78909c' }}>
          Google does NOT index jobs without salary data.
        </Typography>
      </Grid>
      <Grid item sx={{ margin: '20px auto' }}>
        <Typography
          variant='body1'
          color='black'
          sx={{ fontWeight: 'bold', marginBottom: 1 }}
        >
          Job Description*
        </Typography>
        <TextEditor setPostData={setPostData} postData={postData} />
      </Grid>
      <Grid>
        <InputField
          shrink
          onClick={handleGetClick}
          disabled={getClick2}
          label='Apply URL Link'
          sx={{ margin: '8px auto', width: '100%' }}
          value={postData.applyUrl}
          onChange={(e) =>
            setPostData({ ...postData, applyUrl: e.target.value })
          }
          helperText='Apply URLs with a form an applicant can fill out generally receive a lot more applicants than having people apply by email.'
        />

        <Typography variant='body1' sx={{ textAlign: 'center' }}>
          OR
        </Typography>

        <InputField
          shrink
          onClick={handleGetClick2}
          disabled={getClick}
          label='Apply Email'
          sx={{ margin: '8px auto', width: '100%' }}
          value={postData.applyEmail}
          onChange={(e) =>
            setPostData({ ...postData, applyEmail: e.target.value })
          }
          helperText='This email is public, the Apply button links to it if you do not supply an Apply URL above.'
        />
      </Grid>
      <Grid item xs={12} sx={{ margin: '20px auto' }}>
        <Button
          type='submit'
          variant='contained'
          fullWidth
          sx={{
            color: '#fff',
            backgroundColor: '#0F00FF',
            height: 60,
            borderRadius: '5px',
          }}
        >
          <Typography variant='h5' sx={{ fontWeight: 550 }}>
            Post Job Now ~ Free
          </Typography>
        </Button>
      </Grid>
    </Paper>
  )
}

export default Form2
