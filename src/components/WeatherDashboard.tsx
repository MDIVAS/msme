import React from 'react'
import { motion } from 'framer-motion'
import { 
  Thermometer, 
  Wind, 
  Droplets, 
  Eye, 
  Gauge, 
  Umbrella,
  Sun,
  Cloud
} from 'lucide-react'
import CircularProgress from './CircularProgress'

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

interface WeatherDashboardProps {
  weatherData: WeatherData
}

const WeatherDashboard: React.FC<WeatherDashboardProps> = ({ weatherData }) => {
  const weatherCards = [
    {
      icon: Thermometer,
      title: 'Temperature',
      value: `${weatherData.temperature}°C`,
      color: 'text-red-400',
      bgColor: 'from-red-900/20 to-red-800/10'
    },
    {
      icon: Wind,
      title: 'Wind Speed',
      value: `${weatherData.windSpeed} m/s`,
      subtitle: `${weatherData.windDirection}° NE`,
      color: 'text-blue-400',
      bgColor: 'from-blue-900/20 to-blue-800/10'
    },
    {
      icon: Droplets,
      title: 'Humidity',
      value: `${weatherData.humidity}%`,
      color: 'text-cyan-400',
      bgColor: 'from-cyan-900/20 to-cyan-800/10'
    },
    {
      icon: Gauge,
      title: 'Pressure',
      value: `${weatherData.pressure} hPa`,
      color: 'text-purple-400',
      bgColor: 'from-purple-900/20 to-purple-800/10'
    },
    {
      icon: Eye,
      title: 'Visibility',
      value: `${weatherData.visibility} km`,
      color: 'text-green-400',
      bgColor: 'from-green-900/20 to-green-800/10'
    },
    {
      icon: Sun,
      title: 'UV Index',
      value: weatherData.uvIndex.toString(),
      color: 'text-yellow-400',
      bgColor: 'from-yellow-900/20 to-yellow-800/10'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Cloud className="w-5 h-5 text-cyber-blue" />
          <h2 className="text-lg font-semibold">Weather Monitoring</h2>
        </div>
        <div className="flex items-center space-x-2">
          <div className="status-indicator bg-green-500"></div>
          <span className="text-xs text-green-400 font-mono">REAL-TIME</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {weatherCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`glass-card p-4 bg-gradient-to-br ${card.bgColor}`}
          >
            <div className="flex items-center justify-between mb-2">
              <card.icon className={`w-5 h-5 ${card.color}`} />
              <div className="status-indicator bg-green-500"></div>
            </div>
            <div className="space-y-1">
              <h3 className="text-xs text-gray-400 uppercase tracking-wide">
                {card.title}
              </h3>
              <div className={`data-display text-base ${card.color}`}>
                {card.value}
              </div>
              {card.subtitle && (
                <p className="text-xs text-gray-500">{card.subtitle}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Circular Progress Indicators */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <CircularProgress 
            value={weatherData.humidity} 
            max={100} 
            color="#00d4ff"
            size={80}
          />
          <p className="text-xs text-gray-400 mt-2">Humidity</p>
        </div>
        <div className="text-center">
          <CircularProgress 
            value={weatherData.windSpeed * 10} 
            max={100} 
            color="#00ff88"
            size={80}
          />
          <p className="text-xs text-gray-400 mt-2">Wind Speed</p>
        </div>
        <div className="text-center">
          <CircularProgress 
            value={(weatherData.pressure - 900) / 2} 
            max={100} 
            color="#8b5cf6"
            size={80}
          />
          <p className="text-xs text-gray-400 mt-2">Pressure</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-indigo-900/20 to-blue-900/20 rounded-lg border border-indigo-400/20">
        <div className="flex items-center space-x-2 mb-2">
          <Umbrella className="w-4 h-4 text-indigo-400" />
          <span className="text-sm text-indigo-300 font-semibold">Weather Alert</span>
        </div>
        <p className="text-xs text-gray-300">
          Atmospheric conditions are within normal parameters. 
          Monitoring for precipitation changes and wind pattern shifts.
        </p>
      </div>
    </motion.div>
  )
}

export default WeatherDashboard