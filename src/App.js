
import React from 'react'
import Layout from './Layout/Layout';
import { Provider } from "react-redux"
import ScrollToTop from './Components/ScrollFromTop/ScrollToTop';
import store from './Components/Redux/Store/store';


function App() {
   return (

      <div>
         <ScrollToTop />
         <Provider store={store}>
            <Layout />
         </Provider>
      </div>
   );
}

export default App;
