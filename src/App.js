import React from "react";
import './App.css';
import Tile from './components/tileComponent'
class App extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=ad8b358b24634005a0960f277c97c482")
// "https://jsonplaceholder.typicode.com/users")
            .then((res) => {
              
              
               
              
              return res.json()})
            .then((json) => {
              console.log(json,"great");
                this.setState({
                    items: json.articles,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
          <div>
          <h1> Namshi Interview Task </h1> 
        <div className = "tile" style={{display:"flex",flexWrap: "wrap"}}>
             {
                items.map((item) => ( 
<Tile source={item} key={item} />

                // <ol key = { item.id } >
                //     User_Name: { item.source.name }, 
                //     {/* Full_Name: { item.name }, 
                //     User_Email: { item.email }  */}
                //     </ol>
                ))
            }
            {/* <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile /> */}
        </div></div>
    );
}
}
   
export default App;