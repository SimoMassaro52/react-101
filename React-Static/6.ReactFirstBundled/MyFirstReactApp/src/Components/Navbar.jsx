
//Asset import in React
import logo from '../assets/react-logo.png'

//Style sheet import
import '../styles/Navbar.css'


export const Navbar = () => {
    return (
        <div>
            <nav className="mynav">
                <div className='navlogo'>
                    <img src={logo} className="logo"/>
                    <span>ReactFacts</span>
                </div>
                <div className='navindex'>
                    <span>React Course - Project 1</span>
                </div>  
            </nav>
        </div>
    )
}

