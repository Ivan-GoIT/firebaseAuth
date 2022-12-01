import './sass/styles.scss';
import 'modern-normalize'
import debounce from 'lodash.debounce';

const form = document.forms['authorization-form'];

const onSubmit = (e) => {
  
  e.preventDefault();
  console.log('Submit');
}

form.addEventListener('submit',onSubmit)