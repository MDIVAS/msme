import React from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  MessageCircle, 
  Radio, 
  Shield,
  Users,
  MapPin,
  Clock,
  Zap
} from 'lucide-react'

interface EmergencyContact {
  name: string
  type: string
  number: string
  description: string
  available: boolean
}

const EmergencyContacts: React.FC = () => {
  const contacts: EmergencyContact[] = [
    {
      name: 'Emergency Services',
      type: 'Primary',
      number: '911',
      description: 'Fire, Police, Medical Emergency',
      available: true
    },
    {
      name: 'Disaster Response Unit',
      type: 'Specialized',
      number: '+1-555-DISASTER',
      description: 'Regional disaster coordination',
      available: true
    },
    {
      name: 'Coast Guard',
      type: 'Marine',
      number: '+1-555-COAST',
      description: 'Marine rescue and safety',
      available: true
    },
    {
      name: 'Mountain Rescue',
      type: 'Alpine',
      number: '+1-555-ALPINE',
      description: 'High altitude emergency response',
      available: false
    }
  ]

  const evacuationRoutes = [
    { name: 'Primary Route A', status: 'Clear', time: '15 min', direction: 'East Highway' },
    { name: 'Secondary Route B', status: 'Caution', time: '22 min', direction: 'North Trail' },
    { name: 'Emergency Route C', status: 'Blocked', time: 'N/A', direction: 'West Pass' }
  ]

  const getRouteColor = (status: string) => {
    switch (status) {
      case 'Clear': return 'text-green-400 bg-green-900/20 border-green-400/30'
      case 'Caution': return 'text-yellow-400 bg-yellow-900/20 border-yellow-400/30'
      case 'Blocked': return 'text-red-400 bg-red-900/20 border-red-400/30'
      default: return 'text-gray-400'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Shield className="w-5 h-5 text-red-400" />
          <h2 className="text-lg font-semibold">Emergency Response</h2>
        </div>
        <div className="flex items-center space-x-2">
          <div className="status-indicator bg-green-500"></div>
          <span className="text-xs text-green-400 font-mono">STANDBY</span>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-300 mb-4 flex items-center">
          <Phone className="w-4 h-4 mr-2" />
          Emergency Contacts
        </h3>
        <div className="space-y-3">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-4 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <h4 className="font-semibold text-white">{contact.name}</h4>
                    <span className="px-2 py-1 text-xs bg-blue-900/30 text-blue-300 rounded">
                      {contact.type}
                    </span>
                    <div className={`status-indicator ${contact.available ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  </div>
                  <p className="text-sm text-gray-300 mb-1">{contact.description}</p>
                  <div className="data-display text-sm text-cyber-blue">
                    {contact.number}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 glass-card hover:bg-green-500/20 transition-colors">
                    <Phone className="w-4 h-4 text-green-400" />
                  </button>
                  <button className="p-2 glass-card hover:bg-blue-500/20 transition-colors">
                    <MessageCircle className="w-4 h-4 text-blue-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Evacuation Routes */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-300 mb-4 flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          Evacuation Routes
        </h3>
        <div className="space-y-3">
          {evacuationRoutes.map((route, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <h4 className="font-semibold text-white text-sm">{route.name}</h4>
                    <span className={`px-2 py-1 text-xs rounded border ${getRouteColor(route.status)}`}>
                      {route.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{route.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{route.direction}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass-card p-4 bg-gradient-to-r from-red-900/20 to-red-800/10 border border-red-400/30 hover:bg-red-900/30 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <Zap className="w-5 h-5 text-red-400" />
            <div className="text-left">
              <h3 className="font-semibold text-red-300">Emergency Alert</h3>
              <p className="text-xs text-gray-400">Send SOS Signal</p>
            </div>
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass-card p-4 bg-gradient-to-r from-blue-900/20 to-blue-800/10 border border-blue-400/30 hover:bg-blue-900/30 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-blue-400" />
            <div className="text-left">
              <h3 className="font-semibold text-blue-300">Group Coordination</h3>
              <p className="text-xs text-gray-400">Contact Team</p>
            </div>
          </div>
        </motion.button>
      </div>

      <div className="mt-4 p-3 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-lg border border-red-400/20">
        <div className="flex items-center space-x-2 mb-2">
          <Radio className="w-4 h-4 text-red-400" />
          <span className="text-sm text-red-300 font-semibold">Emergency Protocol Active</span>
        </div>
        <p className="text-xs text-gray-300">
          All emergency services have been notified of your location. 
          Stay calm and follow evacuation procedures if instructed.
        </p>
      </div>
    </motion.div>
  )
}

export default EmergencyContacts