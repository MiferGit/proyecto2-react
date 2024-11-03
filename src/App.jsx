import './App.css'
import axios from "axios"
import { useEffect, useState } from "react"
import Card from './components/Card'
import {conditionCodes, icons} from './helpers/ConstantsIcon'

const background = [
  'assets/fon1.jpg',
  'assets/fon2.jpg',
  'assets/fon3.jpg',
  'assets/fon4.jpg',
]
//*********************************************************************** */
const key = 'a5fb658f2c10b57d18dfc829b47a6b6a'

const initialState = {
  latitude: 0,
  longitude: 0
}

//*********************************************************************** */

function App() {
 
  const [coords, setCoords] = useState(initialState)
  const [weather, setWeather] = useState ({})
  const [toggle, setToggle] = useState(false)

 

//*********************************************************************** */
useEffect(()=> {
 const success = (position) => {
  const {latitude, longitude} = position.coords
  setCoords({latitude, longitude})
 }

 const error = (error) => {
 console.log(error)
 }

 console.log(navigator.geolocation.getCurrentPosition(success, error))
}, [])
 //*********************************************************************** */

useEffect(()=> {
  if (coords) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${key}`)
    .then(res => {
      console.log(res.data)

      const keys = Object.keys(conditionCodes)
      const iconName = keys.find(key => conditionCodes[key].includes(res.data?.weather[0].id) )
      console.log(iconName)

      setWeather({
        city: res.data?.name,
        country: res.data?.sys.country,
        iconx: icons[iconName],
        main: res.data?.weather[0].main,
        windSpeed: res.data?.wind.speed,
        clouds: res.data?.clouds.all,
        pressure: res.data?.main.pressure,
        temperature: res.data?.main.temp -273.15
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  
}, [coords])



//************************************************************************ */
  return (
    <>
    <Card weather={weather} toggle={toggle} setToggle={setToggle}/>
    </>
  )
}

export default App
