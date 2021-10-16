import React from 'react'
import { Container } from '@mui/material'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { styled } from '@mui/material/styles'

import './App.css'
import Header from './components/Header/Header'
import Home from './screens/Home'
import CreatePost from './screens/CreatePost'
import PostJobDone from './screens/PostJobDone'
import Footer from './components/Footer/Footer'

const MyContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: 0,
  },
}))

const App = () => {
  return (
    <BrowserRouter>
      <MyContainer maxWidth='xl'>
        <Switch>
          <>
            <Header />
            <Route path='/' exact component={Home} />
            <Route
              path='/remote-nft/categories/:category'
              exact
              component={Home}
            />
            <Route path='/remote-nft/tags/:tag' exact component={Home} />
            <Route path='/remote-nft/postjob' exact component={CreatePost} />
            <Route
              path='/remote-nft/postjob/:id'
              exact
              component={PostJobDone}
            />

            <Footer />
          </>
        </Switch>
      </MyContainer>
    </BrowserRouter>
  )
}

export default App
