import Pic1 from './logo.png';
import Pic2 from './menu.png';
import './navbar.css'

const Navbar = () =>{
   return(
        <>
           <nav className='nav'>
             <img className='logo' src={Pic1} alt="logo"/>
             <li onClick={()=>document.querySelector('.absolute').classList.toggle('active')}> <img src={Pic2} alt="" />
              <div className="absolute">
                <li><a href="">Settings</a></li>
                <li><a href="">Account</a></li>
                <li><a href="">Help</a></li>
                <li><a href="">About Us</a></li>
              </div>
             </li>
             <li className='menu'><a href="">ГЛАВНАЯ</a></li>
             <li className='menu'><a href="">КАТАЛОГ</a></li>
             <li className='menu'><a href="">О КОМПАНИИ</a></li>
             <li className='menu'><a href="">КОНТАКТЫ</a></li>
           </nav>
        </>
    )
}

export default Navbar;