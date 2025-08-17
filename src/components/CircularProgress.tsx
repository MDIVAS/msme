import React from 'react'
import { motion } from 'framer-motion'

interface CircularProgressProps {
  value: number
  max: number
  color: string
  size: number
}

const CircularProgress: React.FC<CircularProgressProps> = ({ 
  value, 
  max, 
  color, 
  size 
}) => {
  const percentage = Math.min((value / max) * 100, 100)
  const circumference = 2 * Math.PI * (size / 2 - 10)
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 10}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="4"
          fill="transparent"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 10}
          stroke={color}
          strokeWidth="4"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            filter: `drop-shadow(0 0 10px ${color}40)`
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold font-mono" style={{ color }}>
          {Math.round(percentage)}
        </span>
      </div>
    </div>
  )
}

export default CircularProgress