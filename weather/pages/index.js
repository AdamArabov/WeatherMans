
import { Inter } from 'next/font/google'
import axios from 'axios'
import { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import Image from 'next/legacy/image'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [city, setCity] = useState('')
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(false)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

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

    <Image 
    src = "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1213&q=80" alt = ""
    layout='fill'
    className='object-cover'
    />
<div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 '>
  <form onSubmit={fetchWeather} className='flex justify-between items-center w-full m-auto p-3 bg-transparent border rounded-2xl '>
    <div>
      <input 
      onChange={(e)=> setCity(e.target.value)}
      className='bg-transparent border-none focus:outline-none text-2xl' type='text' placeholder='City Name'/>
    </div>
    <button onClick={fetchWeather}><BsSearch/></button>
  </form>
</div>

    </div>
  )
}
