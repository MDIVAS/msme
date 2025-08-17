import { motion } from "framer-motion";
import {
  Activity,
  Cpu,
  HardDrive,
  Radio,
  Satellite,
  Database,
  Wifi,
  Gauge,
} from "lucide-react";

const TechnicalMetrics: React.FC = () => {
  // Simulate technical system metrics
  const systemMetrics = {
    cpuUsage: 23 + Math.sin(Date.now() / 1000) * 5,
    memoryUsage: 67 + Math.cos(Date.now() / 2000) * 8,
    networkLatency: 15 + Math.random() * 10,
    sensorStatus: 98 + Math.random() * 2,
    dataIntegrity: 99.7,
    signalStrength: -45 + Math.random() * 10,
    batteryLevel: 87,
    storageUsage: 34,
  };

  const technicalCards = [
    {
      icon: Cpu,
      title: "CPU Usage",
      value: `${systemMetrics.cpuUsage.toFixed(1)}%`,
      color: "text-blue-400",
      bgColor: "from-blue-900/20",
    },
    {
      icon: HardDrive,
      title: "Memory",
      value: `${systemMetrics.memoryUsage.toFixed(1)}%`,
      color: "text-purple-400",
      bgColor: "from-purple-900/20",
    },
    {
      icon: Radio,
      title: "Network",
      value: `${systemMetrics.networkLatency.toFixed(0)}ms`,
      color: "text-green-400",
      bgColor: "from-green-900/20",
    },
    {
      icon: Satellite,
      title: "Signal",
      value: `${systemMetrics.signalStrength.toFixed(0)}dBm`,
      color: "text-cyan-400",
      bgColor: "from-cyan-900/20",
    },
    {
      icon: Database,
      title: "Data Sync",
      value: `${systemMetrics.dataIntegrity}%`,
      color: "text-yellow-400",
      bgColor: "from-yellow-900/20",
    },
    {
      icon: Activity,
      title: "Sensors",
      value: `${systemMetrics.sensorStatus.toFixed(1)}%`,
      color: "text-red-400",
      bgColor: "from-red-900/20",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Gauge className="w-5 h-5 text-cyber-purple" />
          <h2 className="text-lg font-semibold">System Diagnostics</h2>
        </div>
        <div className="flex items-center space-x-2">
          <div className="status-indicator bg-green-500"></div>
          <span className="text-xs text-green-400 font-mono">OPTIMAL</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {technicalCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className={`glass-card p-4 bg-gradient-to-br ${card.bgColor} hover:scale-105 transition-transform`}
          >
            <div className="flex items-center justify-between mb-2">
              <card.icon className={`w-5 h-5 ${card.color}`} />
              <div className="status-indicator bg-green-500"></div>
            </div>
            <div className="space-y-1">
              <h3 className="text-xs text-gray-400 uppercase tracking-wide font-mono">
                {card.title}
              </h3>
              <div className={`data-display text-base ${card.color}`}>
                {card.value}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Advanced Technical Panel */}
      <div className="glass-card p-4 neon-border">
        <div className="flex items-center space-x-2 mb-4">
          <Wifi className="w-4 h-4 text-cyber-blue" />
          <span className="text-sm font-semibold">Advanced Telemetry</span>
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-gray-400">Atmospheric Density:</span>
            <div className="data-display text-sm">1.225 kg/m³</div>
          </div>
          <div>
            <span className="text-gray-400">Magnetic Declination:</span>
            <div className="data-display text-sm">12.5° E</div>
          </div>
          <div>
            <span className="text-gray-400">Seismic Activity:</span>
            <div className="data-display text-sm">0.2 Richter</div>
          </div>
          <div>
            <span className="text-gray-400">Ion Concentration:</span>
            <div className="data-display text-sm">1247 /cm³</div>
          </div>
          <div>
            <span className="text-gray-400">Solar Radiation:</span>
            <div className="data-display text-sm">850 W/m²</div>
          </div>
          <div>
            <span className="text-gray-400">Tidal Force:</span>
            <div className="data-display text-sm">2.3 m/s²</div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-400/20">
        <p className="text-xs text-gray-300">
          <strong className="text-green-400">Status:</strong> All monitoring
          systems operational. Real-time data acquisition active. Predictive
          algorithms running.
        </p>
      </div>
    </motion.div>
  );
};

export default TechnicalMetrics;
