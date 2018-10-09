import React from 'react';
import ReactDOM from 'react-dom';
import Pacientes from './Pacientes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pacientes />, div);
  ReactDOM.unmountComponentAtNode(div);
});
