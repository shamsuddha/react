import logo from './logo.svg';
import './App.css';
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Message from "./component/Message";
import Counter from "./component/Counter";
import FunctionClick from "./component/FunctionClick";
import ClassClick from "./component/ClassClick";
import EventBind from "./component/EventBind";
import ParentComponent from "./component/ParentComponent";
import UserGreeting from "./component/UserGreeting";
import NameList from "./component/NameList";

function App() {
    return (
        <div className="App">

           <NameList></NameList>


            {/*
             <UserGreeting></UserGreeting>

        <ParentComponent></ParentComponent>
             <EventBind></EventBind>
             <ClassClick></ClassClick>
             <FunctionClick></FunctionClick>
         <Greet name="hello rajit"><p>hello</p></Greet>
            <Greet name="hello asma"><p>hello</p></Greet>
            <Greet name="hello rahat"><p>hello</p></Greet>*!/


            <Welcome name="hello rajit"><p>hello adf</p></Welcome>
            <Welcome name="hello asma"><p>hello adfa</p></Welcome>
            <Welcome name="hello rahat"><p>hello adfadf</p></Welcome>
            <Message></Message>
            <Counter></Counter>*/}


        </div>
    );
}

export default App;
