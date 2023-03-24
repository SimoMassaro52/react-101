//For the sake of order and organization, we are going to split our components into their own .js files
//To import other script files in ES6 we need the keyword "import" followed by the exact name of the file and "from" the location of the file in our project

import { Header } from "./Components/Header";
import { MainContent } from "./Components/MainContent";
import { Footer } from "./Components/Footer";


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