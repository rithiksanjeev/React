// component architecture - write once and reuse ultiple times
// function exactly as file name
// rfce - short cut to create the component
import './App.css'; // links the css file
import Header from './Components/Header' // default import not need curly braces
import Header2 from './Components/Header2' // default import not need curly braces
// importing normal functions to git
import {greet ,greetOne} from './Components/Header' //named import
import pikachu from './assets/pikachu.png'
import Footer from './Components/Footer'
import Products from './Components/Products'
import Hero from './Components/Hero';


function App()
{
  const ourStyle = 
  {
  color:'red',
  background:'black',
  borderRadius:'4px'
  }
  return (
    // in jsx file we can have html code
    // Adjacent JSX elements must be wrapped in an enclosing tag if we are using html code in return
    // return can return only one element it can not return mutiple tags
    // we are enclosing it within enclosing tags as react has only root element
    // react fragements
    // css cannot be return as we write in html
    <>
    {/* Header component from another file */}
    <div>
      <Header2/>
      <Hero/>
      <Products/>
      <Footer/>
      
      App code
    </div>

    <div>
      <Header/>
      App code
    </div>
    {/* image tags */}
    <img src={pikachu}></img>
    {/* inline css */}
    <div style={{color:'red',background:'blue',borderRadius:'4px'}}>
      hello boys
    </div>
    {/* internal css */}
    <div style={ourStyle}>hello again</div>
    {/* external css */}
    <div className="external-style">I am external css</div>
    </>
  )
}

export default App;