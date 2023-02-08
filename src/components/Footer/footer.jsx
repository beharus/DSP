import { Link } from 'react-router-dom';
import './footer.css';



function Footer() {

    return (

        <div className='footer'>


            <img className="logo1" src={require('./logo.png')} alt="" />


            <div className='icon'>
                <ol>
                    <li className="ff1"><a href="">
                        <img class="f1" src={require('./F_img/facebook.png')} alt="facebook" />
                    </a></li>
                    <li className="ff1"><a href="#">
                        <img src={require('./F_img/wk.png')} alt="wk" />
                    </a></li>
                    <li className="ff1"><a href="#">
                        <img src={require('./F_img/instagram.png')} alt="inst" />
                    </a></li>
                </ol>
            </div>

            <div className='txt'>
                <div className='li'>
                    <ol>
                        <li><a href="">Главная</a></li>
                        <li><a href="">ТК Партнер</a></li>
                        <li><a href="">Каталог</a></li>
                        <li><a href="">Логистика</a></li>
                        <li><a href="">О компании</a></li>
                        <li><a href="">Контакты</a></li>
                        <li><a href="">Поставщик</a></li>
                    </ol>
                </div>
            </div>
            <div className='li2'>

                <li className="txt2"><a className=' duration-75' href="">ДСП</a></li>
                <li className="txt2"><a href="/dvp">ДВП</a></li>
                <li className="txt2"><a href="">Фанера</a></li>
                <li className="txt2"><Link to="/osp">ОСП</Link></li>
                <li className="txt2"><Link to="/latoflex">Латофлекс</Link></li>

            </div>

            <div className='cts'>
                <p className="p contact">Контакты:</p>
                <p className="p">ТК «Партнер»</p>

                <p className="p contact"><img className="f4" src={require('./F_img/Vector.png')} alt="" />+7 (4922) 771-017 </p>
                <p className="p">«Фанторг»</p>

                <p className="p"><img className="f4" src={require('./F_img/Vector.png')} alt="" />+7 (4922) 771-016 </p>

                <p className="p contact"><img className="f4" src={require('./F_img/Vector.png')} alt="" /> +7 (910) 770-14-63</p>

                <p className="p"><img className="f4" src={require("./F_img/email.png")} />ooo_tkpartner@mail.ru</p>
            </div>

            
        </div>
    )
};

export default Footer;