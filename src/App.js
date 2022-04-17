import Page from './pages/index';
import * as React from 'react';
import Navbar from './components/navbar';

// hook function
const Main = () => {
  return(
    <div>
        {/* present index page only to emulate devaslife code */}
        <Navbar />
        <Page />
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