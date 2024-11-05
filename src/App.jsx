import './App.css'
import Links from "./componenst/Links/Links.jsx"
import Overview from "./componenst/Overview/Overview.jsx"
import Staff from './componenst/Staff/Staff.jsx'


const App = () => {
  return (
    <div>
      <h1>MENSCH</h1>
      <h2 className='titleText'>Dein bester Salon</h2>
      <Overview />
      <Staff />
      <Links />
    </div >
  )
}


export default App
