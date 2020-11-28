import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Layout from './components/Layout/Layout'
import reducers from './reducers';
import ViewPromotions from './containers/ViewPromotions/ViewPromotions'


function App() {
  
  const profile = {
    name: "Tito Mathews",
    org: "Enterprise Rewards",
    env: "Production",
    appProfile: "Cardmember Rewards"
  }

  const store = createStore(reducers);

  return (
    <div>

      <Provider store={store}>

        <Layout profileInfo={profile}>
          <ViewPromotions/>
        </Layout>

      </Provider>

    </div>
  );
}

export default App;
