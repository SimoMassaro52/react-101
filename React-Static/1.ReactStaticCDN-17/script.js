

//React is based on components, we can create them as function that return a block of html
function MainContent(){
    return(
        <div>
            <h1>Title</h1>
            <p>This is the paragraph.</p>
            <ul>
                <li>
                    Item 1
                </li>
                <li>
                    Item 2
                </li>
                <li>
                    Item 3
                </li>
            </ul>
        </div>
    )
}

//Best practice is creating the components as arrow functions
// const MainContent = () => {return (<div></div>)}


// JSX allows us to save a whole lot of html in a variable. Mind that JSX has a slightly different syntax than default html so class becomes className
const bold = (
    <b className="bold-text">
        This bold text element is a variable
    </b>
)


//Now that we have babel, we will gain access to a global variable called ReactDOM
//The render() method expects the "node" of html code and where it will be placed inside the DOM
ReactDOM.render(
    <div> 
        {/* As we saw, react is composable meaning, we can build components made up of streaks of code to create a greater element*/}
        <MainContent /> 
        {bold}
    </div>
, document.getElementById("root"));

//React is also a Declarative framework so we will tell it WHAT to do whithout worrying much about HOW it will do it =/= Imperative (like vanilla JS) where we are telling the code HOW to run and only then it will do whatever we told it to do

//Lines 44 to 48 are an example of how we would have appended a single html element to the DOM with vanilla JS

// const h1 = document.createElement("h1");
// h1.textContent = "Hello World";
// h1.className = "header";

// document.getElementById("root").appendChild(h1);