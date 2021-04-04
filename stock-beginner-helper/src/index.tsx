import React from 'react';
import ReactDOM from 'react-dom';
import TitleBar from 'frameless-titlebar';
import styled from 'styled-components';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const TitleBarStyled = styled.div`
  position: fixed;
  width: 100%;
  z-index: 99;
`;

ReactDOM.render(
  <React.StrictMode>
    <TitleBarStyled>
      <TitleBar title="stock-begginner-helper" disableMaximize disableMinimize />
    </TitleBarStyled>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
