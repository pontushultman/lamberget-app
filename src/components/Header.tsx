import styled from 'styled-components'
import { Ul, MenuToggle, Navbar } from './HeaderStyles';
import '../App.css';
import image from "../assets/images/original.png"


const Logo = styled.div`
  font-size: 30px;
  color: white;

`

const Div = styled.div`
  justify-content: center;
  align-items: center;
  display: block;
  margin-top: 400px;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    color: white;
  }

  h2 {
    color: white;
  }

`

function Header() {
    return (
        <div id="background-image">
        <nav role="navigation">
        <div id="menuToggle">
         
          <input type="checkbox" />
          
          <span></span>
          <span></span>
          <span></span>

          
          
          <ul id="menu">
            <a href="#home"><li>Meny</li></a>
            <a href="#contact"><li>Kontakt</li></a>
          </ul>
        </div>
      </nav>
      <Logo> LAMBERGET THAI </Logo>
      <Div> 
        <h1> Lamberget Thai</h1>
        <a href="tel:+054-853560"><span>054-853560</span></a>
                             
      </Div>
      </div>
      
    )
}

export default Header;