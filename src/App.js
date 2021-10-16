import { Container } from '@mui/material'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header/Header'
import Home from './screens/Home'
import CreatePost from './screens/CreatePost'
import PostJobDone from './screens/PostJobDone'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth='xl'>
        <Switch>
          <>
            <Header />
            <Route path='/' exact component={Home} />
            <Route path='/remote-nft/:id' exact component={Home} />
            <Route
              path='/remote-nft/categories/:category'
              exact
              component={Home}
            />
            <Route path='/remote-nft/tags/:tag' exact component={Home} />
            <Route path='/remote-hire' exact component={CreatePost} />
            <Route
              path='/remote-nft/postjob/:id'
              exact
              component={PostJobDone}
            />
            <Route
              path='/remote-nft/category/:category'
              exact
              component={PostJobDone}
            />
            <Footer />
          </>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App