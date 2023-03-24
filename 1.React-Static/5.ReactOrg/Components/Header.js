
//To "send" our component to the main script of the page we need to explicity export it and the JS file of destination will take care of importing

const Header = () => {
    return ( 
        <div>
            <nav className="mynav">
                <img className="myimg" src="./react-logo.png" />
                <ul className="nav-items">
                    <li>
                        Pricing
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </nav>
            <h1>Fun facts about React</h1>
        </div>
    )
}

export default Header;