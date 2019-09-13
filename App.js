import React from 'react';
import { AppContainer } from './navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, } from 'redux';
import reducers from './redux/reducers';
import reduxThunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(reduxThunk))

class App extends React.Component {
  render(){
    return (
        <Provider store={store}>
          <AppContainer />
        </Provider>
    );
  }
}




export default App;