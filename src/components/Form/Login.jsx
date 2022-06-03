// Login.jsx componentas
import { useState } from 'react';

function Login() {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [showUsername, setShowUsername] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function usernameEnterHandler(event) {
    // console.log('entering value to input');
    // console.log(event.target); // ===  <input type='text' placeholder='Login here' />
    const inputEl = event.target;
    const ivestaReikme = inputEl.value;
    setUsernameValue(ivestaReikme);
  }

  function passwordEnterHandler(event) {
    setPasswordValue(event.target.value);
  }

  // prideti slaptazodio ivesties lauka
  // sujungti slaptazodi su state two way binding
  // isvalyti slaptazodi mygtuko paspaudimu

  return (
    <div className='login'>
      <form onSubmit={sendValues}>
        <input onChange={usernameEnterHandler} value={usernameValue} type='text' placeholder='Login here' />
        <input onChange={passwordEnterHandler} value={passwordValue} type='password' placeholder='Enter Password Here' />
        <h3>Jus ivedete: {usernameValue}</h3>

        <button onClick={sendValues}>send</button>
        {showUsername && <h2>{usernameValue}</h2>}
        {showUsername && <h2>{usernameValue}</h2>}
      </form>
    </div>
  );

  function sendValues(event) {
    event.preventDefault();
    // send values
    // pagaminti objekta is input reiksmiu
    // kai mum reikia reiksmiu mes imam is state
    // nes state yra sinkronizuota su inputais
    if (usernameValue === '') return;
    const loginObj = {
      username: usernameValue,
      password: passwordValue,
    };
    console.log('loginObj===', loginObj);
    // clear inputs
    setUsernameValue('');
    setPasswordValue('');
  }

  function displayValue() {
    console.log('displayValue called');
    setShowUsername(!showUsername);
    setShowPassword(!showPassword);
  }
}

export default Login;
