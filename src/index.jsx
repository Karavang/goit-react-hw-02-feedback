import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import MyClicker from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="all-pos">
      <MyClicker />
    </div>
  </React.StrictMode>
);
