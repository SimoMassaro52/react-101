//As we saw in the previous unit, React is based on the rendering of pieces of html (or JSX) code. 
//We can store actual html lines in variables but the convention is using CUSTOM COMPONENTS
//They are initialized as arrow function written in PascalCase and they return JSX, a specialized JavaScript object 

const Title = () => {
    return ( 
        <div>
            <h1>React Lesson</h1>
        </div>
    )
}

const MainContent = () => {
    return ( 
        <div>
            <ol>
                <b>Why I'm excited about React</b>
                <li>
                    React is composable
                </li>
                <li>
                    React is declarative
                </li>
                <li>
                    React is amazing
                </li>
            </ol>
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
            <Title />
            <MainContent />
            <Footer />
        </div>
    )
}

const root = document.getElementById("root");

ReactDOM.render(<MyComponent />, root);