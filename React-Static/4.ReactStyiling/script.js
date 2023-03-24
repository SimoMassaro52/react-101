//Styling React components is exactly the same as regular html except for the fact that JSX has unique syntax for attributes
// class becomes className

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

const MainContent = () => {
    return ( 
        <div>
            <ul>
                <li>
                    Was first released in 2013
                </li>
                <li>
                    Was originally created by Jordan Walke
                </li>
                <li>
                    Has well over 100k stars on Github
                </li>
                <li>
                    Is maintained by Facebook
                </li>
                <li>
                    Powers thousands of enterprise apps, including mobile apps
                </li>
            </ul>
        </div>
    )
}

const Footer = () => {
    return ( 
        <div>
            <small> @ 2023 Max development. All rights reserved. </small>
        </div>
    )
}

//Ideally, we would make components so that they can be reused in our page, even inside other components
//Technically speaking, Title, MainContent and Footer are now children components of the parent component MyComponent. This scales indefinately

const MyComponent = () => {
    return ( 
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const root = document.getElementById("root");

ReactDOM.render(<MyComponent />, root);