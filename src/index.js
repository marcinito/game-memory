import _ from 'lodash';
import './css/style.css';
import {Container} from './components/Container'
import createInput from './Funkcje/createInput';
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
createInput()

  document.body.appendChild(Container());