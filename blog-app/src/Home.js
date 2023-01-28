import { useState } from "react"

const Home = () => {
// let name = 'John' 
    const [name, setName] = useState('John')
    const [age, setAge] = useState(25)

    const handleClick = (e) => {
        setName('Paul')
        console.log('hello click', e)
    }

    // const clickMe = (name, e) => {
    //     console.log('hello ' + name, e.target)
    // }
    return ( 
        <div className="home">
            <h2>Home here </h2>
            <button onClick={ handleClick }>Click me </button>
            {/* <button onClick={ (e) => {clickMe('jospw', e) }}>Click again</button> */}
            <p>{name}  is {age} years old</p>
        </div>
     );
}
 
export default Home;