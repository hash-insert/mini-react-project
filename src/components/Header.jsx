import reactLogo from "../assets/react.svg";
import './Header.css'
 const name = 'kaushik'
 function Header() {
  return (
    <div>
      <header className="head">
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo_react" alt="React logo" />
        </a>
        <h3>HASHINSERT</h3>
        <div className="top">
          <a>Sign In</a>
          <a>Pricing</a>
          <a>About</a>
        </div>
      </header>
      
    </div>
  );                                  
}

export default Header
export {name}