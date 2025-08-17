import { useState, useCallback } from 'react'

interface WeatherData {
  temperature: number
  humidity: number
  pressure: number
  windSpeed: number
  windDirection: number
  visibility: number
  uvIndex: number
  precipitation: number
}

export const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    temperature: 18.5,
    humidity: 65,
    pressure: 1013,
    windSpeed: 8.2,
    windDirection: 45,
    visibility: 12,
    uvIndex: 6,
    precipitation: 0
  })

  const updateWeatherData = useCallback(() => {
    setWeatherData(prev => ({
      temperature: 18.5 + (Math.random() - 0.5) * 4,
      humidity: Math.max(30, Math.min(90, prev.humidity + (Math.random() - 0.5) * 10)),
      pressure: Math.max(980, Math.min(1040, prev.pressure + (Math.random() - 0.5) * 5)),
      windSpeed: Math.max(0, prev.windSpeed + (Math.random() - 0.5) * 2),
      windDirection: (prev.windDirection + (Math.random() - 0.5) * 20 + 360) % 360,
      visibility: Math.max(1, Math.min(20, prev.visibility + (Math.random() - 0.5) * 2)),
      uvIndex: Math.max(0, Math.min(11, prev.uvIndex + (Math.random() - 0.5))),
      precipitation: Math.max(0, Math.random() * 2)
    }))
  }, [])

  return { weatherData, updateWeatherData }
}