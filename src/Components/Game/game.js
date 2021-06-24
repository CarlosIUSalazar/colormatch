import React, { useState, useEffect } from 'react';

export const Game = () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'black', 'orange']
  let colorsModifiedArray = []
  let topWord = 'Default'
  let bottomWord = 'Default'
  let willItMatch = ''
  let topWordColor = { color: 'grey' };
  let bottomWordColor = { color: 'grey' };
  let randomColor = '';
  let [score, setScore] = useState(0)
  let [totalGames, setTotalGames] = useState(0)

  // useEffect(() => {
  //   startGame()
  // }, [totalGames])

  const getRandomNumber = (min, max) => {
    //Returns a random integer between min (inclusive) and max (inclusive).
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("random number", randomNumber);
    return randomNumber;
  }

  const randomizeColor = (colorsArray) => {
    //Choose a random color word from array
    //Choose if it'll match or not with 30% chance
    const randomColor = colorsArray[Math.floor(Math.random() * colors.length)];
    console.log("randomColor", randomColor)
    return randomColor
  }

  //const element = <h1 style={ wordColor }>Hello world</h1>

  const generateWrongColor = (colorToUnmatch) => {
    //This function will generate a copy of the oroginal Colors array minus the color to unmatch
    colorsModifiedArray = colors
    const index = colorsModifiedArray.indexOf(colorToUnmatch);
    if (index > -1) {
      colorsModifiedArray.splice(index, 1);
    }
    //console.log("Color to unmatch", colorToUnmatch)
    //console.log("colors Modified Array", colorsModifiedArray)
    randomColor = randomizeColor(colorsModifiedArray)
    return randomColor
  }


  const assertIfCorrect = () => {
    console.log("Asserting")
    if (willItMatch === true) {
      setScore(score = score + 1)
    }
    setTotalGames(totalGames = totalGames + 1)
  }

  const assertIfIncorrect = () => {
    console.log("Asserting")
    if (willItMatch === false) {
      setScore(score = score + 1)
    }
    setTotalGames(totalGames = totalGames + 1)
  }

//  const startGame = () => { 
    console.log("Game started")
    if (getRandomNumber(1, 100) > 70) {
      willItMatch = true;
    } else {
      willItMatch = false;
    }
    console.log('willItMatch', willItMatch)

    if (willItMatch === true) {
      //A match means that Top word meaning will be the color of the lower word
      randomColor = randomizeColor(colors)
      topWord = randomColor;
      bottomWord = randomizeColor(colors)
      //console.log("randomColor", randomColor)
      bottomWordColor = { color: `${randomColor}` };
      //console.log("wordColor",bottomWordColor)
      topWordColor = { color: `${randomizeColor(colors)}` };
    } else {
      //A non match means that the Top word meaning will NOT be the color of the lower word
      randomColor = randomizeColor(colors)
      topWord = randomColor;
      topWordColor = { color: randomColor };
      bottomWord = randomizeColor(colors)
      //console.log('topword',topWord)
      bottomWordColor = { color: `${generateWrongColor(topWord)}` };
      //console.log("bottomWordColor 111", bottomWordColor)
    }
//}

return ( 
  <>
    <div>Your Score is { score }</div>
    <div>Total Games is { totalGames }</div>
    <div className = "meaning">
      <h1 style = { topWordColor } > { topWord.toUpperCase() } </h1> 
    </div>
    <div className = "color">
      <h1 style = { bottomWordColor }> { bottomWord.toUpperCase() } </h1> 
    </div> 
    <br></br> 
    <button className="yes-button" onClick={assertIfCorrect}>YES</button> 
    <button className="no-button" onClick={assertIfIncorrect}>NO</button> 
    </>
)

}
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;