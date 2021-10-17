import React from 'react'
import { Paper, TextField, Autocomplete } from '@mui/material'
import { styled } from '@mui/material/styles'

import tagLists from '../tags'

const InputField = styled(TextField)({
  '& label': {
    fontSize: '1rem',
  },
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
})

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

const categoriesJob = [
  'Artist',
  'Design',
  'Manager',
  'Marketing',
  'Product Manager',
  'Developer',
  'Community',
  'Creator',
]

const Form1 = ({ postData, setPostData }) => {
  const handleChangeCategory = (event, value) =>
    setPostData({ ...postData, category: value })

  const handleAddTag = (event, values) => {
    setPostData({ ...postData, tags: values })
  }

  return (
    <Paper elevation={1} sx={{ padding: 2 }}>
      <InputField
        label='Company/Project Name'
        required
        value={postData.name}
        onChange={(e) => setPostData({ ...postData, name: e.target.value })}
        helperText='Your company or name of your project '
        sx={{ margin: '8px auto', width: '100%' }}
      />
      <InputField
        label='POSITION'
        required
        value={postData.position}
        onChange={(e) => setPostData({ ...postData, position: e.target.value })}
        sx={{ margin: '8px auto', width: '100%' }}
        helperText='Please specify as single job position like "Designer" or "Artist", not a sentence like "Looking for PM / Dev / Manager". We know your job is important but please DO NOT WRITE IN FULL CAPS.'
      />
      <Autocomplete
        id='primary-tag'
        options={categoriesJob}
        getOptionLabel={(option) => option.toString()}
        isOptionEqualToValue={(option, value) =>
          option.category === value.category
        }
        value={postData.category}
        onChange={handleChangeCategory}
        fullWidth
        renderInput={(params) => (
          <AutoField
            sx={{ margin: '8px auto', width: '100%' }}
            required
            {...params}
            label='Category'
            helperText='This Category shows first and increases visibility in the main sections. Your job is shown on every page that is tagged with though. E.g. if you tag it as Designer, it shows for Remote Deigner Jobs etc.'
          />
        )}
      />
      <Autocomplete
        multiple
        limitTags={5}
        id='tags'
        fullWidth
        options={tagLists}
        value={[...postData.tags]}
        onChange={handleAddTag}
        isOptionEqualToValue={(option, value) => option === value}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <AutoField
            sx={{ margin: '8px auto', width: '100%' }}
            {...params}
            label='Tags'
            placeholder='Tags'
            helperText="Use tags like industry and tech stack, and separate multiple tags by enter. The first 3 or 4 tags are shown on the site, the other tags aren't but the job will be shown on each tag specific page (like /remote-artist-jobs)."
          />
        )}
      />
      <InputField
        label='JOB IS RESTRICTED TO LOCATION?'
        value={postData.location}
        onChange={(e) => setPostData({ ...postData, location: e.target.value })}
        sx={{ margin: '8px auto', width: '100%' }}
        helperText="If you'd only like to hire people from a specific location or timezone this remote job is restricted to (e.g. Europe, United States or CET Timezone). If not restricted, please leave it as Worldwide."
      />
      <InputField
        label='JOB TYPE'
        value={postData.type}
        onChange={(e) => setPostData({ ...postData, type: e.target.value })}
        sx={{ margin: '8px auto', width: '100%' }}
        helperText='This is for information about your job type, whether is contract, fulltime or part-time.'
      />
      <InputField
        label='Twitter username'
        value={postData.twitterUsername}
        onChange={(e) =>
          setPostData({ ...postData, twitterUsername: e.target.value })
        }
        sx={{ margin: '8px auto', width: '100%' }}
        helperText='Twitter username without @. Not required, but used to tag your company when we tweet out your job post.'
      />
    </Paper>
  )
}

export default Form1
