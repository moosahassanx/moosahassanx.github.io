import Page from './pages/index';
import * as React from 'react';
import Navbar from './components/navbar';
import { 
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import Works from './pages/projects';
import University from './pages/university';
import { Container, Box, Heading } from "@chakra-ui/react";

// hook function
const Main = () => {
  return(
    <div>
        <HashRouter>
          {/* navigation includes router */}
          <Navbar />

          {/* this content will always display */}
          <Container>
            <Box borderRadius="lg" mb={6} p={3} textAlign="center" bg={'blue'}>
              This content displays across all pages.
            </Box>
          </Container>

          {/* display content based on router */}
          <div className="content">
                <Routes>
                    <Route exact path="/" element={<Page/>} />
                    <Route exact path="/works" element={<Works/>} />
                    <Route path="/uni" element={<University/>} />
                </Routes>
            </div>
        </HashRouter>
        
    </div>
  )
}

// redirect to hook
function App() {
  return (
    <Main />
  )
}

export default App;