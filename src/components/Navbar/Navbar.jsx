import { Link } from 'react-router-dom';
import Pic1 from './logo.png';
import Pic2 from './menu.png';
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className='nav '>
        <div className="flex justify-between max-w-[1560px] mx-auto items-end px-[4%]">
          <img className='logo' src={Pic1} alt="logo" />

          <div className="lg:flex hidden gap-4 lg:gap-8">
            <li className='menu hover:bg-[#e62323] px-2 rounded-t-3xl'><Link to="/main">ГЛАВНАЯ</Link></li>
            <li className='menu hover:bg-[#e62323] px-2 rounded-t-3xl'><Link to="/osp">ОСП</Link></li>
            <li className='menu hover:bg-[#e62323] px-2 rounded-t-3xl'><Link to="/aboutCompany">О КОМПАНИИ</Link></li>
            <li className='menu hover:bg-[#e62323] px-2 rounded-t-3xl'><Link to="/Contact">КОНТАКТЫ</Link></li>
          </div>

          <div className="lg:hidden block relative">
            <div onClick={() => {
              document
                .querySelector("#mob-nav")
                .classList.add("active");
            }} id='x' className=" mb-4">
              <div className="w-8 h-1 bg-white mb-1 rounded-md"></div>
              <div className="w-8 h-1 bg-white mb-1 rounded-md"></div>
              <div className="w-8 h-1 bg-white mb-1 rounded-md"></div>
            </div>
            <div id='mob-nav' className="duration-500 fixed h-full w-full flex items-center text-center justify-center bg-[#004AAD] z-50 top-0 py-10 -right-[300%] md:w-1/3">
              <div onClick={() => {
                document
                  .querySelector("#mob-nav")
                  .classList.remove("active");
              }} className="">
                <img className=' absolute top-3 right-3' src={require('./x-symbol.png')} alt="" />
                <div className="">
                  <li className='menu'><Link className='transition-colors hover:text-[#e62323] duration-200' to="/main">ГЛАВНАЯ</Link></li>
                  <li className='menu'><Link className='transition-colors hover:text-[#e62323] duration-200' to="/osp">ОСП</Link></li>
                  <li className='menu'><Link className='transition-colors hover:text-[#e62323] duration-200' to="/aboutCompany">О КОМПАНИИ</Link></li>
                  <li className='menu'><Link className='transition-colors hover:text-[#e62323] duration-200' to="/Contact">КОНТАКТЫ</Link></li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;