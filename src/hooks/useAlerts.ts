import { useState, useEffect, useCallback } from 'react'

interface Alert {
  id: string
  type: 'thunderstorm' | 'high-tide' | 'landslide' | 'lightning' | 'flood'
  severity: 'low' | 'medium' | 'high'
  message: string
  timestamp: Date
  location: string
}

const alertMessages = {
  thunderstorm: [
    'Severe thunderstorm approaching from the northwest',
    'Heavy rainfall and strong winds expected',
    'Lightning activity detected in the area'
  ],
  'high-tide': [
    'Abnormally high tide levels detected',
    'Coastal flooding possible in low-lying areas',
    'Storm surge warning issued'
  ],
  landslide: [
    'Soil instability detected on mountain slopes',
    'Rock fall risk elevated due to recent rainfall',
    'Ground movement sensors triggered'
  ],
  lightning: [
    'Multiple lightning strikes detected nearby',
    'Electromagnetic interference possible',
    'Seek shelter immediately - lightning risk high'
  ],
  flood: [
    'Flash flood warning for low-lying areas',
    'River levels rising rapidly',
    'Emergency evacuation may be required'
  ]
}

const locations = [
  'Mountain Ridge Sector 7',
  'Coastal Highway Mile 15',
  'Valley Floor East',
  'Northern Slopes',
  'Central Basin',
  'River Crossing Point'
]

export const useAlerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      type: 'thunderstorm',
      severity: 'high',
      message: 'Severe thunderstorm approaching from the northwest. Strong winds and heavy rainfall expected.',
      timestamp: new Date(),
      location: 'Mountain Ridge Sector 7'
    },
    {
      id: '2',
      type: 'high-tide',
      severity: 'medium',
      message: 'Abnormally high tide levels detected. Coastal flooding possible in low-lying areas.',
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      location: 'Coastal Highway Mile 15'
    }
  ])

  const addAlert = useCallback((alert: Omit<Alert, 'id' | 'timestamp'>) => {
    const newAlert: Alert = {
      ...alert,
      id: Date.now().toString(),
      timestamp: new Date()
    }
    setAlerts(prev => [newAlert, ...prev].slice(0, 10)) // Keep only 10 most recent alerts
  }, [])

  const removeAlert = useCallback((id: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id))
  }, [])

  // Simulate periodic alerts
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.3) { // 30% chance every interval
        const alertTypes: Alert['type'][] = ['thunderstorm', 'high-tide', 'landslide', 'lightning', 'flood']
        const severities: Alert['severity'][] = ['low', 'medium', 'high']
        
        const randomType = alertTypes[Math.floor(Math.random() * alertTypes.length)]
        const randomSeverity = severities[Math.floor(Math.random() * severities.length)]
        const randomMessage = alertMessages[randomType][Math.floor(Math.random() * alertMessages[randomType].length)]
        const randomLocation = locations[Math.floor(Math.random() * locations.length)]

        addAlert({
          type: randomType,
          severity: randomSeverity,
          message: randomMessage,
          location: randomLocation
        })
      }
    }, 15000) // Check every 15 seconds

    return () => clearInterval(interval)
  }, [addAlert])

  return { alerts, addAlert, removeAlert }
}