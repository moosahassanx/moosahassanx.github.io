import Page from './pages/index';
import * as React from 'react';
// import { ChakraProvider } from '@chakra-ui/provider';

// hook function
const Main = () => {
  return(
    <div>
        {/* present index page only to emulate devaslife code */}
        {/* <ChakraProvider> */}
          <Page />
        {/* </ChakraProvider> */}
    </div>
  )
}

// react initial starting point
function App() {
  // redirect to hook function
  return (
      <Main />
  )
}

export default App;