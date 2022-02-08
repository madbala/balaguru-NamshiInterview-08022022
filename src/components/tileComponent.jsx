import logo from '../logo.svg';
import '../App.css';

function Tile(props) {
    console.log('hello',props);
  return (
    <div className="App" style={{boxShadow: "0px 16px 73px rgb(53 42 42 / 38%)"}}>
      <header className="App-header">
        <img src={props.source.urlToImage} className="App-logo" alt="logo" />
       <div>
           <h1>
           {props.source.title}
           </h1>
           <p>
           {props.source.content}
        </p>
           </div> 

       
      </header>
    </div>
  );
}

export default Tile;
