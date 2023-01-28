import { useState } from "react"
const Home = () => {

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
        </div>
     );
}
 
export default Home;