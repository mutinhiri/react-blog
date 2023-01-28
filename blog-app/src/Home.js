const Home = () => {

    const handleClick = () => {
        console.log('hello click')
    }

    const clickMe = (name) => {
        console.log('hello ' + name)
    }
    return ( 
        <div className="home">
            <h2>Home here </h2>
            <button onClick={ handleClick }>Click me </button>
            <button onClick={ () => {clickMe('jospw') }}>Click again</button>
        </div>
     );
}
 
export default Home;