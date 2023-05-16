import * as React from "react";
import "./App.css";
// import { useEffect } from "react";
import { useState, useEffect } from "react";


// const API = "https://swapi.dev/api/people/1/";


const KEY = "https://official-joke-api.appspot.com/random_joke";

async function APIREQ() {



  const response = await fetch(KEY);
  const Data = await response.json();
  console.log(Data);
  console.log(Data.setup);
  console.log(Data.punchline);
}
APIREQ();



class StarWar extends React.Component {
  constructor() {
    super();
    this.state = {
      LoadCharacter: false,
      name: null,
      hight: null,
      home: null,
      list: [],
    };
  }

  GetCharector() {
    // const url="https://swapi.dev/api/people/1/"
    const URL = "https://pokeapi.co/api/v2/pokemon/";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          LoadCharacter: true,
          name: data.name,
          hight: data.hight,
          home: data.homeworld,
          list: data.flims,
        });
      });
    console.log("im Clicked");
  }

  render() {
    return (
      <div>
        

        <br />
        {this.state.LoadCharacter && (
          <div>
            <h1>{this.state.name}</h1>
            <h1>{this.state.hight}</h1>
            <h1>HomeWorld : {this.state.home}</h1>
            <ul>
              <li>{this.state.list}</li>
            </ul>
          </div>
        )}

        <button
          className="btn bg-black text-white p-5 rounded-3xl border-8 border-yellow-900"
          onClick={() => this.GetCharector()}
        >
          Change
        </button>
      </div>
    );
  }
}

function App() {

  // const [names , setname]=useState("")
  const [joke, setJoke] = useState('');
  const API = () => {
    
     fetch(KEY)
      .then((response) => response.json())
      .then((data) => setJoke(data.punchline));
  };
  
useEffect(() => {
  console.log('updated')
  
}, [joke])
  // const requst = async () => {
  //   const response = await fetch(`API`);
  //   const data = await response.json();
  //   console.log(data);
  // };

  // useEffect(() => {
  //   requst();
  // }, []);

  return (
    <div className="flex flex-row align-middle ">
      {/* <StarWar></StarWar> */}
      <button onClick={API}>get the joke</button>
        <h1>{joke} -- magesh</h1>
      
    </div>
  );
}

export default App;
