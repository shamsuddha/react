import logo from './logo.svg';
import './App.css';
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";

function App() {
    return (
        <div className="App">
            <Greet name="rajit">
                <p>Hello banglaesh</p>

            </Greet>
            <Greet name="asma">
                <button>Action</button>

            </Greet>
            <Greet name="rahat"></Greet>

            <Welcome name="rajit"></Welcome>
            <Welcome name="asma"></Welcome>
            <Welcome name="rahat"></Welcome>
        </div>
    );
}

export default App;
