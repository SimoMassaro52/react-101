import '../styles/Navbar.css'
import logo from '../../public/images/Airbnb-logo.jpg'


export const Navbar = () => {
    return (
        <div className='nav-wrap'>
            <nav>
                <img className="airlogo" src={logo}/>
            </nav>
        </div>
    )
}