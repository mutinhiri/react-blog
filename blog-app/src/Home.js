const Home = () => {

    const handleClick = () => {
        console.log('hello click')
    }
    return ( 
        <div className="home">
            <h2>Home here </h2>
            <button onClick={ handleClick() }>Click me </button>
        </div>
     );
}
 
export default Home;