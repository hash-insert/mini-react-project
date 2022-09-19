 import './Body.css'
 import Button from './Button'
 
 
 export default function MYBody() {
    return (
      <div className="contain">
        <h1 className="signin">Sign In</h1>
        <div className="box">
          <input className="box1" type="email" placeholder="Email" />
  
          <input className="box2" type="password" placeholder="Password" />
  
          <Button  label ='SIGN IN'/>
        </div>
        <h6>Having Trouble logging in?</h6>
        <Button  label ='SIGN UP'/>
      </div>
    );
  }