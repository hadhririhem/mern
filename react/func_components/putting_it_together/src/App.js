import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className='App'>
      <Person 
      fname = {"Jane"} 
      lname= {"Doe"}
      age = {45}
      haircolor = {"Black"} />
      <Person 
      fname = {"John"} 
      lname= {"Smith"}
      age = {88}
      haircolor = {"Brown"}
    />
      <Person 
      fname = {"Millard"} 
      lname= {"Fillmore"}
      age = {50}
      haircolor = {"Brown"}
    />
      <Person 
      fname = {"Maria"} 
      lname= {"Smith"}
      age = {62}
      haircolor = {"Brown"}
    />
    </div>
  );
}

export default App;
