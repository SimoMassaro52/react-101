import './App.css'

//Set the attributes on the 'parent' component that will be emitting the data, we are going to pass the props parameter to the component function
//Now we can use the dot syntax to access the data we wrote in the main component... just like any object!
//Thanks to JSX we can avoid hard-coding the info in the component. Instead we are printing the 4 contacts as 4 different objects with their own diverse attributes

// export function Contact(props) {
//   return (
//     <div className="contact-card">
//         <img src={props.img} />
//         <h3>{props.name}</h3>
//         <div className="info-group">
//             <i class="fa-solid fa-phone"></i>
//             <p>{props.phone}</p>
//         </div>
//         <div className="info-group">
//             <i class="fa-solid fa-envelope"></i>
//             <p>{props.email}</p>
//         </div>
//     </div>
//   )
// }

//Knowledge is power! Did you know that some developers like to destructure their props? 
//As we said, the props parameter is treated like an object and objects can be broken down
//Example

const person = {
    name: 'Alex',
    height: 173,
    age: 22,
    passion: 'sports'
}

//We can acces the values of this object with dot notation like person.name etc

console.log(person.name, person.height);

//But we can also access these values like this, by deconstructing the array 
//We are basically creating a new variable containing the properties of the original object

const {name, height} = person;

console.log(name, height)

//Now that we now that, the component can be written like this. 

export function Contact({img, name, phone, email, likes, hasPed}) {
    return (
    <div className="contact-card">
        <img src={img} />
        <h3>{name}</h3>
        <div className="info-group">
            <i class="fa-solid fa-phone"></i>
            <p>{phone}</p>
        </div>
        <div className="info-group">
            <i class="fa-solid fa-envelope"></i>
            <p>{email}</p>
        </div>
        <div className="info-group">
            <i class="fa-solid fa-heart"></i>
            <p>{likes}</p>
        </div>

        {/* Example of inline conditional rendering. If hasPed is true it will render the div, if it is false it will render nothing*/}
        {hasPed ? (
        <div className="info-group">
            <i class="fa-solid fa-medal"></i>
                <p>Pedigree Quality</p>
        </div>
        ) : ('')}     
    </div>
    )
}

//How we write our props is all up to personal preference