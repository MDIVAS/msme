import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import LocationMap from "./components/LocationMap";
import WeatherDashboard from "./components/WeatherDashboard";
import AlertSystem from "./components/AlertSystem";
import TechnicalMetrics from "./components/TechnicalMetrics";
import DisasterHistory from "./components/DisasterHistory";
import EmergencyContacts from "./components/EmergencyContacts";
import { useWeatherData } from "./hooks/useWeatherData";
import { useAlerts } from "./hooks/useAlerts";

function App() {
  const { weatherData, updateWeatherData } = useWeatherData();
  const { alerts } = useAlerts(); // removed addAlert since unused
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Simulate real-time updates
    const interval = setInterval(() => {
      updateWeatherData();
    }, 3000);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      clearInterval(interval);
    };
  }, [updateWeatherData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg">
      <Header isOnline={isOnline} />

      <main className="container mx-auto px-4 py-6 space-y-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Location & Map Section */}
          <LocationMap />
          {/* Weather Dashboard */}
          <WeatherDashboard weatherData={weatherData} />
          {/* Alert System */}
          <AlertSystem alerts={alerts} />
          {/* Technical Metrics */}
          <TechnicalMetrics /> {/* removed weatherData prop */}
          {/* Disaster History */}
          <DisasterHistory />
          {/* Emergency Contacts */}
          <EmergencyContacts />
        </motion.div>
      </main>
    </div>
  );
}

export default App;
