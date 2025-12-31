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
import { Route, Routes } from 'react-router-dom'
// import Home from './Lenis_smooth/Home'
// import Navbar from './Lenis_smooth/Navbar'

import About from './Route/About'
// import Home from './Route/Home'
import Navbar from './Route/Navbar'
import Contact from './Route/Contact'
import Product from './Route/Product'
import Fruit from './Collapse/Fruit'
import Collapse_able from './Collapse/Collapse_able'

import Mycol from './Collapse/Mycol'
import { Home, Calendar, Settings, LifeBuoy, Flag, Layers, StickyNote, LayoutDashboard } from "lucide-react"
import Sidebar, { SidebarItem } from './Sidebar/Sidebar'
import Dash from './Collapse/Dash'

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
      <Lenis_scroll />
      <Smooth />
      */}
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Lenis_scroll' element={<Lenis_scroll />} />
        <Route path='/Smooth' element={<Smooth />} />
      </Routes> 

      <Home />

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Product/:id' element={<Product />} />

      </Routes>

      <Collapse_able />
      <Fruit />
      <Mycol />
      */}

      <div className="flex h-screen overflow-hidden">
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Home" />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" />
          <SidebarItem icon={<StickyNote size={20} />} text="Projects" />
          <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
          <SidebarItem icon={<Layers size={20} />} text="Tasks" />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>

        <div className="flex-1 overflow-y-auto">
          <Dash />
        </div>
      </div>


    </>
  )
}

export default App
