import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import Layout from './components/Layout/Layout'
import reducers from './reducers';

 

function App() { 
   
  const profile = {
    name: "Tito Mathews",
    org: "Enterprise Rewards",
    env: "Production",
    appProfile: "Cardmember Rewards"
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));

  return (
    <div>

      <Provider store={store}>

        <Layout profileInfo={profile}>
          
        </Layout>

      </Provider>

    </div>
  );
}

export default App;
 