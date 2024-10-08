import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import { ThemeProvider } from './ThemeContext';

import App from './App'
import Reducer from './pages/store/Reducer'

const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render((
  <BrowserRouter>
    <ThemeProvider>
      <Provider store={store}>  
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
 
), document.getElementById('root'))