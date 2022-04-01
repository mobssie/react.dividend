import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// 리덕스
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';

// 스토어 생성
const store = createStore(rootReducer);

const responseGoogle = (response) => {
  console.log(response);
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);