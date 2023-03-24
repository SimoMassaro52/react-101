
import './App.css'
import Joke from './Joke'
//Data import
import jokesData from './data'

//This demo has the purpose of showing how to mix the previous 2 modules. 
//We learned or re-learned how to use the map method effectively to perform a certain action on a set of elements
//And we also learned how props are passed in components in React in order to visualize a contacts list
//These 2 concepts go hand-in-hand to turn a set of data (most commonly arrays of objects) into props to be passed

//This is why we created the file data.jsx to pull the data from and turn it into props

function App() {
  //We are going to create an array jokeElements that will contain the transformed props. We will apply the map method to jokesData which is the data array. Our element will be called joke
  const jokeElements = jokesData.map(joke => {
    //No need to hard-code the joke component anymore. We are going to pass the props one time for each joke 
    //The props are actually taken from each joke element's keys. The keys obviously need to have the same name as the file source and the component attributes need to be the same as the one we wrote on our component file
    return <Joke setup={joke.su} punchline={joke.pl}/>
  })
  return (
    <div>
      {/* This is the rendering of the components. As we see, if a new one was added, removed, or modified to our data, it would take significantly less work */}
      {jokeElements}

      {/* This is how we have to write the properties without using .map()*/}
      {/* <Joke 
        setup="I got my daughter a fridge for her birthday." 
        punchline="I can't wait to see her face light up when she opens it." 
       />
       <Joke 
        setup="How did the hacker escape the police?" 
        punchline="He just ransomware!"
       />
       <Joke 
        setup="Why don't pirates travel on mountain roads?" 
        punchline="Scurvy." 
      />
      <Joke 
        setup="Why do bees stay in the hive in the winter?" 
        punchline="Swarm." 
      />
      <Joke 
        setup="What's the best thing about Switzerland?" 
        punchline="I don't know, but the flag is a big plus!" 
       /> */}
    </div>
  )
}

export default App
