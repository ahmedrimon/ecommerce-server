import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App-header">
      
      <Person name="Rimon" profession="programmer"></Person>
      <Person name="Rimon" profession="programmer"></Person>
      <Person name="Rimon" profession="programmer"></Person>
      <Person name="Rimon" profession="programmer"></Person>
    </div>

  );
  function Person(props) {
    return(
      <div style={{border: '2px solid red', margin: '5px', padding: '4px'}}>
        <p style={{textAlign: 'center'}}>i am a react person</p>
        <h2>Name : {props.name}</h2>
        <p>profession: {props.profession}</p>
      </div>
    )
      
    


  }
}

export default App;
