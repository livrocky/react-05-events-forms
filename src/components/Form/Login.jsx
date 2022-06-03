// Login.jsx componentas
function Login() {
  function displayValue() {
    console.log('DisplayValue called');
  }
  return (
    <div className='login'>
      {/* // vienas input type text */}
      <input type='text' placeholder='Login here' />
      {/* // vienas button */}
      <button onClick={displayValue}>Submit</button>
    </div>
  );
}
// sukurti displayValue funkcija su test console.log
// paspaudus button iskvieciam funkcija displayValue
// sukurti state kuriam saugosim username

export default Login;
