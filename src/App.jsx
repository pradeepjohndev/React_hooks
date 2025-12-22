import './App.css'
import Icon from './componets/Icon'
import Parentprops from './componets/parentprops'
import Parentinc from './componets/Parentinc'
import UseRef from './componets/UseRef'
import Task1 from './componets/Task1'
import ComponentA from './Content/ComponentA'
// import Mycomponent from './Context/Mycomponent'
// import { useState } from 'react'
// import Theme from './Context/Theme'
import Redu from './Reducer/redu'
import Memo from './Reducer/Memo'
import Test from './Reducer/Test'
import W3school from './Reducer/W3school'
import Lenis_scroll from './Lenis_smooth/Lenis_scroll'
import Smooth from './Lenis_smooth/Smooth'


function App() {
  // const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   setTheme(prev => (prev === "light" ? "dark" : "light"));
  // };
  return (
    <>
      {/* <Icon />
      <Parentprops /> 
      <Parentinc />
      <UseEff />
      <UseRef />
      <Task1 />
      <ComponentA />
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
      </ThemeContext.Provider>
      */}

      {/* <Theme.Provider value={{ theme, setTheme, toggleTheme }}>
        <Mycomponent />
      </Theme.Provider> 
      <Counter />
      <Redu />
      <Memo />
      <Test val={false}/>
      <W3school />
      <Lenis_scroll />*/}
      <Smooth />

    </>
  )
}

export default App
