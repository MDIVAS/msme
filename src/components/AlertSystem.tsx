import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  AlertTriangle, 
  Zap, 
  Waves, 
  Mountain,
  Cloud,
  Bell,
  X
} from 'lucide-react'

interface Alert {
  id: string
  type: 'thunderstorm' | 'high-tide' | 'landslide' | 'lightning' | 'flood'
  severity: 'low' | 'medium' | 'high'
  message: string
  timestamp: Date
  location: string
}

interface AlertSystemProps {
  alerts: Alert[]
}

const AlertSystem: React.FC<AlertSystemProps> = ({ alerts }) => {
  const getAlertIcon = (type: Alert['type']) => {
    switch (type) {
      case 'thunderstorm': return Cloud
      case 'high-tide': return Waves
      case 'landslide': return Mountain
      case 'lightning': return Zap
      case 'flood': return Waves
      default: return AlertTriangle
    }
  }

  const getAlertColor = (severity: Alert['severity']) => {
    switch (severity) {
      case 'low': return 'border-green-400 bg-green-900/20 text-green-300'
      case 'medium': return 'border-yellow-400 bg-yellow-900/20 text-yellow-300'
      case 'high': return 'border-red-400 bg-red-900/20 text-red-300'
    }
  }

  const getSeverityBadge = (severity: Alert['severity']) => {
    switch (severity) {
      case 'low': return 'bg-green-500 text-green-100'
      case 'medium': return 'bg-yellow-500 text-yellow-100'
      case 'high': return 'bg-red-500 text-red-100 animate-pulse'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Bell className="w-5 h-5 text-red-400" />
          <h2 className="text-lg font-semibold">Disaster Alerts</h2>
          <div className="px-2 py-1 bg-red-500 text-red-100 text-xs font-bold rounded-full">
            {alerts.length}
          </div>
        </div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center space-x-2"
        >
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-red-400 font-mono">MONITORING</span>
        </motion.div>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-hide">
        <AnimatePresence>
          {alerts.map((alert, index) => {
            const IconComponent = getAlertIcon(alert.type)
            return (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-4 border-l-4 ${getAlertColor(alert.severity)}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="p-2 rounded-lg bg-white/10">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-sm uppercase tracking-wide">
                          {alert.type.replace('-', ' ')}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-bold rounded-full ${getSeverityBadge(alert.severity)}`}>
                          {alert.severity.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300 mb-2">
                        {alert.message}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-gray-400">
                        <span className="font-mono">
                          {alert.timestamp.toLocaleTimeString()}
                        </span>
                        <span>{alert.location}</span>
                      </div>
                    </div>
                  </div>
                  <button className="p-1 hover:bg-white/10 rounded">
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
        
        {alerts.length === 0 && (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-900/20 mb-4">
              <AlertTriangle className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">All Clear</h3>
            <p className="text-gray-400">No active disaster alerts in your area</p>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-lg border border-orange-400/20">
        <div className="flex items-center space-x-2 mb-2">
          <AlertTriangle className="w-4 h-4 text-orange-400" />
          <span className="text-sm text-orange-300 font-semibold">Emergency Protocol</span>
        </div>
        <p className="text-xs text-gray-300">
          In case of high severity alerts, immediately follow evacuation procedures. 
          Keep emergency kit ready and stay informed through official channels.
        </p>
      </div>
    </motion.div>
  )
}

export default AlertSystem