import logo from './logo.svg';
import './App.css';
import ContactoComponent from './components/pure/contacto';
import ContactoListComponent from './components/container/contacto_list';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greetenf name="Martin"></Greetenf> */}
        {/* <TaskListComponents></TaskListComponents> */}
       <ContactoListComponent></ContactoListComponent>
      </header>
    </div>
  );
}

export default App;
