import React from 'react'
import { motion } from 'framer-motion'
import { Wifi, WifiOff, Shield, Zap } from 'lucide-react'

interface HeaderProps {
  isOnline: boolean
}

const Header: React.FC<HeaderProps> = ({ isOnline }) => {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 glass-card mx-4 mt-4 p-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="p-2 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-green"
          >
            <Shield className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <h1 className="text-xl font-bold text-white">DisasterWatch Pro</h1>
            <p className="text-xs text-gray-400 font-mono">v2.1.4-ALPHA</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center space-x-2"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-400 font-mono">ACTIVE</span>
          </motion.div>
          
          <div className="flex items-center space-x-1">
            {isOnline ? (
              <Wifi className="w-4 h-4 text-cyber-green" />
            ) : (
              <WifiOff className="w-4 h-4 text-red-400" />
            )}
            <Zap className="w-4 h-4 text-yellow-400" />
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header