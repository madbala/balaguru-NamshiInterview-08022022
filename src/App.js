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

        this.handleChange = this.handleChange.bind(this)
        this.doApiCall = this.doApiCall.bind(this)
    }
   
    // ComponentDidMount is used to
    // execute the code 

doApiCall=(country)=>{
  fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=ad8b358b24634005a0960f277c97c482`).then((res) => {
              return res.json()})
            .then((json) => {
                this.setState({
                    items: json.articles,
                    DataisLoaded: true
                });
            })
}

    handleChange = (e)=>{
console.log(e.target.value,'balaji');
this.doApiCall(e.target.value);
    }
    componentDidMount() {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=ad8b358b24634005a0960f277c97c482").then((res) => {
              return res.json()})
            .then((json) => {
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
          <select className="App-Dropdown" onChange={this.handleChange}>
  <option value="ae">UAE</option>
  <option value="in">India</option>
  <option selected value="au">Australia</option>
  <option value="us">America</option>
</select>
        <div className = "tile" style={{display:"flex",flexWrap: "wrap"}}>
             {
                items.map((item) => ( 
<Tile source={item} key={item} />
                
                ))
            }
            
        </div></div>
    );
}
}
   
export default App;