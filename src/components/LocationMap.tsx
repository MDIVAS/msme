import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Radar } from 'lucide-react'
import L from 'leaflet'

// Fix for default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const LocationMap: React.FC = () => {
  const [position, setPosition] = useState<[number, number]>([19.0760, 72.8777]) // Mumbai, India (coastal)
  const [accuracy, setAccuracy] = useState(50)

  useEffect(() => {
    // Simulate GPS updates
    const interval = setInterval(() => {
      setPosition([
        19.0760 + (Math.random() - 0.5) * 0.01,
        72.8777 + (Math.random() - 0.5) * 0.01
      ])
      setAccuracy(30 + Math.random() * 70)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <MapPin className="w-5 h-5 text-cyber-blue" />
          <h2 className="text-lg font-semibold">Current Location</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Navigation className="w-4 h-4 text-cyber-green" />
          <span className="text-sm font-mono text-cyber-green">GPS LOCKED</span>
        </div>
      </div>

      <div className="mb-4">
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: '300px', borderRadius: '12px' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/?mlat=20.2454939&mlon=85.7266459#map=15/20.2454939/85.7266459">OpenStreetMap</a> contributors'
            url="https://www.openstreetmap.org/?mlat=20.2454939&mlon=85.7266459#map=15/20.2454939/85.7266459"
          />
          <Marker position={position}>
            <Popup>
              <div className="text-black">
                <strong>Current Position</strong><br />
                Lat: {position[0].toFixed(6)}<br />
                Lng: {position[1].toFixed(6)}<br />
                Accuracy: ±{accuracy.toFixed(0)}m
              </div>
            </Popup>
          </Marker>
          <Circle
            center={position}
            radius={accuracy}
            pathOptions={{ color: '#00d4ff', fillColor: '#00d4ff', fillOpacity: 0.1 }}
          />
        </MapContainer>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="glass-card p-3">
          <div className="flex items-center space-x-2">
            <Radar className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Coordinates</span>
          </div>
          <div className="data-display mt-1">
            {position[0].toFixed(6)}, {position[1].toFixed(6)}
          </div>
        </div>
        
        <div className="glass-card p-3">
          <div className="flex items-center space-x-2">
            <div className="status-indicator bg-green-500"></div>
            <span className="text-sm text-gray-300">GPS Accuracy</span>
          </div>
          <div className="data-display mt-1">
            ±{accuracy.toFixed(0)}m
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-400/20">
        <p className="text-sm text-gray-300">
          <strong className="text-cyber-blue">Zone:</strong> Madanpur , Bhubaneswar 
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Elevation: 14m • Terrain: Plain • Weather: Tropical
        </p>
      </div>
    </motion.div>
  )
}

export default LocationMap