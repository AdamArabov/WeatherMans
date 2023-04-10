
import { Inter } from 'next/font/google'
import axios from 'axios'
import { useState } from 'react'
import {BsSearch} from 'react-icons/bs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [city, setCity] = useState('')
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(false)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

  function fetchWeather (e) {
    e.preventDefault();
    setLoading(true)
    axios.get(url).then((response)=> {
      setWeather(response.data)
      console.log(response.data)
    })
    setCity('')
    setLoading(false)
  }
  return (
    <div>
     <button onClick={fetchWeather}>Fetch</button>
    </div>
  )
}
