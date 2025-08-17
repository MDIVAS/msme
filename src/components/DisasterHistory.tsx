import React from 'react'
import { motion } from 'framer-motion'
import { History, TrendingUp, Calendar, MapPin } from 'lucide-react'

interface DisasterEvent {
  id: string
  type: string
  date: Date
  severity: 'low' | 'medium' | 'high'
  impact: string
  location: string
}

const DisasterHistory: React.FC = () => {
  const recentEvents: DisasterEvent[] = [
    {
      id: '1',
      type: 'Thunderstorm',
      date: new Date('2024-01-15T14:30:00'),
      severity: 'high',
      impact: 'Power outages in 3 districts',
      location: 'Mountain Ridge'
    },
    {
      id: '2',
      type: 'High Tide',
      date: new Date('2024-01-12T08:45:00'),
      severity: 'medium',
      impact: 'Coastal road flooding',
      location: 'Coastal Highway'
    },
    {
      id: '3',
      type: 'Landslide',
      date: new Date('2024-01-08T22:15:00'),
      severity: 'low',
      impact: 'Minor debris on Trail 7',
      location: 'North Slope'
    },
    {
      id: '4',
      type: 'Lightning Strike',
      date: new Date('2024-01-05T19:20:00'),
      severity: 'medium',
      impact: 'Communication tower damaged',
      location: 'Signal Hill'
    }
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'text-green-400 bg-green-900/20 border-green-400/30'
      case 'medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-400/30'
      case 'high': return 'text-red-400 bg-red-900/20 border-red-400/30'
      default: return 'text-gray-400'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <History className="w-5 h-5 text-orange-400" />
          <h2 className="text-lg font-semibold">Disaster History</h2>
        </div>
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-4 h-4 text-orange-400" />
          <span className="text-xs text-orange-400 font-mono">ANALYZED</span>
        </div>
      </div>

      <div className="space-y-4 max-h-80 overflow-y-auto scrollbar-hide">
        {recentEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-4 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-semibold text-white">{event.type}</h3>
                  <span className={`px-2 py-1 text-xs font-bold rounded-full border ${getSeverityColor(event.severity)}`}>
                    {event.severity.toUpperCase()}
                  </span>
                </div>
                <p className="text-sm text-gray-300 mb-2">{event.impact}</p>
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span className="font-mono">{event.date.toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1">
              <div 
                className={`h-1 rounded-full ${
                  event.severity === 'high' ? 'bg-red-400' :
                  event.severity === 'medium' ? 'bg-yellow-400' : 'bg-green-400'
                }`}
                style={{ 
                  width: event.severity === 'high' ? '85%' : 
                         event.severity === 'medium' ? '60%' : '35%'
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center p-3 glass-card">
          <div className="data-display text-red-400">12</div>
          <p className="text-xs text-gray-400 mt-1">High Risk Events</p>
        </div>
        <div className="text-center p-3 glass-card">
          <div className="data-display text-yellow-400">28</div>
          <p className="text-xs text-gray-400 mt-1">Medium Risk Events</p>
        </div>
        <div className="text-center p-3 glass-card">
          <div className="data-display text-green-400">45</div>
          <p className="text-xs text-gray-400 mt-1">Low Risk Events</p>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-400/20">
        <p className="text-xs text-gray-300">
          <strong className="text-purple-400">Predictive Analysis:</strong> Based on historical data, 
          increased thunderstorm activity expected in next 72 hours.
        </p>
      </div>
    </motion.div>
  )
}

export default DisasterHistory