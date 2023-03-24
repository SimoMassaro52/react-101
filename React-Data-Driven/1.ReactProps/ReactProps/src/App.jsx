//Let's see how props work in react. These will take our components to the next level and make them more reusable. They are really data or metadata that will keep us away from hardcoding and open a million possibilities to data-rich websites
//We are going to make a page that displays 4 contacts so we are going to create a Contact component and use it 4 times in the root App component
//We can write JavaScript in our JSX by wrapping the code in curly brackets {}

import {Contact} from './Contact'
import './App.css'
import cat1 from './assets/cat1.jpg'
import cat2 from './assets/cat2.jpg'
import cat3 from './assets/cat3.jpg'
import cat4 from './assets/cat4.jpg'


//Much like we do with regular JS functions, we can pass values in our components as well. These values are called props and they are the foundation of making our page dynamic.

function App() {
  return (
    //For now, we are going to write down our props but this is just an example. In production we are going to see this through the lens of API and remote data
    <div className='contacts'>
    {/* Our Contact component will be read as an object by the page, so we can just add the properties as attributes to the component */}
    {/* We are not restricted to strings. JSX allows us to write whatever value we want. An example is the number of likes or if a cat has a pedigree or not (boolean) or an array containing features */}
      <Contact 
        img={cat1}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
        likes={5}
        hasPed={true}
      />
      <Contact 
        img={cat2}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
        likes={9}
        hasPed={false}
      />
      <Contact 
        img={cat3}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
        likes={4}
        hasPed={false}
      />
      <Contact 
        img={cat4}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
        likes={2}
        hasPed={true}
      />
      
    </div>
  )
}

export default App
