
import './App.css';
import InlineStyle from './components/InlineStyle';
import Stylesheet from './components/Stylesheet';
// import PersonList from './components/PersonList';
// import NameList from './components/NameList';
// import UserGreeting from './components/UserGreeting';
// import ParentComponent from './components/ParentComponent';
// import EventBind from './components/EventBind';


function App() {
  return (
    <div className="App">
     <h1>Lord Maha Ganapthi</h1>

     {/* <EventBind/> */}
     {/* <ParentComponent /> */}
     {/* <UserGreeting /> */}
     {/* <NameList/> */}
     {/* <PersonList /> */}
     <Stylesheet primary={true}/>
     <InlineStyle/>
     
    </div>
  );
}

export default App;
