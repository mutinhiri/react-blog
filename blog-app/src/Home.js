import { useState } from "react"

const Home = () => {
// let name = 'John' 
    const [name, setName] = useState('John')
    const handleClick = (e) => {
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
            <p>{name} </p>
        </div>
     );
}
 
export default Home;