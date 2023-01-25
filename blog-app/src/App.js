import './App.css';
import Navbar from './Navbar';

function App() {

  const title = 'Welcome to the blog'
  const likes = 50
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <h1>{title}</h1>
        <p>Liked { likes} times</p>
        {Math.random() *2}
      </div>
    </div>
  );
}

export default App;
