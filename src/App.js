
import './App.css';
import Row from './components/Row.js';
import Login from './pages/Login/Login.js'
import requests from './request';
function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchURl={requests.fetchNetflixOriginal}/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
