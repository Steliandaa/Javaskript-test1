import React from "react"

let name ="vsicki sme bokluci"
let list1 =["rado","eliq","steliyan","alex"]
let name1="rado ne chisti nishto v kvartirata"
let list2=["kuhnq","koridor","banq","toaletna","staq"]
class App extends React.Component {
  // когато е вътре в class  е метод 
  render() { 
    return (<div>
    <h1 style={{backgroundColor:"Tomato"}}>Hello World</h1>
    {name}
    {list1.map(item =><li>{item + " e pulen bokluk"}</li>)}

    </div> )
    // return (<h1 style="background-color:DodgerBlue;">Hello World</h1>)

  }   
}

export default App