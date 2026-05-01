'use client';

import React from 'react';
import {
  LayoutDashboard,
  Settings,
  Menu,
  Bell,
  Activity,
  Zap,
  Droplets,
  Gauge,
} from 'lucide-react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function Dashboard() {
  const analyticsData = [
    { time: '08:00', temp: 24.8, vibration: 0.8, gas: 220 },
    { time: '10:00', temp: 25.6, vibration: 1.1, gas: 240 },
    { time: '12:00', temp: 26.4, vibration: 1.4, gas: 260 },
    { time: '14:00', temp: 27.1, vibration: 1.2, gas: 250 },
    { time: '16:00', temp: 26.7, vibration: 0.9, gas: 230 },
    { time: '18:00', temp: 25.9, vibration: 0.7, gas: 210 },
  ];

  return (
    <div className="flex h-screen bg-[#0e1116] text-white font-sans">
      {/* Sidebar */}
      <aside className="relative w-64 bg-[#15181e] p-6 border-r border-gray-800 hidden lg:block h-full">
        <h1 className="text-xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          IoT Control Center
        </h1>

        <nav className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-blue-600/10 text-blue-400 rounded-xl cursor-pointer border border-blue-500/20">
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </div>

          <div className="flex items-center gap-3 p-3 text-gray-500 hover:text-white transition-colors cursor-pointer">
            <Activity className="w-5 h-5" />
            <span>Real-time Log</span>
          </div>
        </nav>

        {/* User Badge */}
        <div className="absolute bottom-6 left-6 w-10 h-10 rounded-full bg-black border border-gray-700 flex items-center justify-center text-white font-semibold">
          N
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-gray-800 flex items-center justify-between px-6 bg-[#0e1116]/80 backdrop-blur-md sticky top-0 z-10">
          <button className="lg:hidden text-gray-400">
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-6 ml-auto">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-emerald-400">System Live</span>
            </div>

            <Bell className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Settings className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </header>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Top Sensor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* DHT22 Card */}
            <div className="bg-[#171c25] border border-gray-800 p-6 rounded-2xl transition-all hover:border-blue-500/50 hover:-translate-y-1 group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-gray-400">DHT22 Temperature</h3>
                <Droplets className="w-4 h-4 text-blue-400" />
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold group-hover:text-blue-400 transition-colors">
                  26.4
                </span>
                <span className="text-lg text-gray-500">°C</span>
              </div>

              <div className="mt-4 w-full bg-gray-800 h-1.5 rounded-full">
                <div className="bg-blue-500 h-full w-[60%] rounded-full"></div>
              </div>
            </div>

            {/* ADXL345 */}
            <div className="bg-[#171c25] border border-gray-800 border-dashed p-6 rounded-2xl flex flex-col items-center justify-center min-h-[160px] hover:bg-gray-800/20 transition-colors cursor-pointer group">
              <Activity className="w-8 h-8 text-gray-600 mb-2 group-hover:text-purple-400 transition-colors" />
              <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">
                ADXL345 Data
              </span>
            </div>

            {/* Output Control */}
            <div className="bg-[#171c25] border border-gray-800 border-dashed p-6 rounded-2xl flex flex-col items-center justify-center min-h-[160px] hover:bg-gray-800/20 transition-colors cursor-pointer group">
              <Zap className="w-8 h-8 text-gray-600 mb-2 group-hover:text-yellow-400 transition-colors" />
              <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">
                Output Control
              </span>
            </div>

            {/* MQ Series */}
            <div className="bg-[#171c25] border border-gray-800 border-dashed p-6 rounded-2xl flex flex-col items-center justify-center min-h-[160px] hover:bg-gray-800/20 transition-colors cursor-pointer group">
              <Gauge className="w-8 h-8 text-gray-600 mb-2 group-hover:text-emerald-400 transition-colors" />
              <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">
                MQ Series Gas
              </span>
            </div>
          </div>

          {/* System Performance Analytics */}
          <div className="bg-[#171c25] border border-gray-800 p-8 rounded-2xl min-h-[300px] relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full"></div>

            <div className="relative z-10">
              {/* Header */}
              <div>
                <h3 className="text-lg font-bold text-gray-200">System Performance Analytics</h3>
                <p className="text-sm text-gray-500">
                  Historical data analysis from all connected sensors.
                </p>
              </div>

              {/* Analytics Content */}
              <div className="mt-6 space-y-6">
                {/* Summary Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-[#0f141b] border border-gray-800 rounded-xl p-4">
                    <p className="text-xs text-gray-500">Avg Temp</p>
                    <h4 className="text-xl font-bold text-blue-400">°C</h4>
                  </div>

                  <div className="bg-[#0f141b] border border-gray-800 rounded-xl p-4">
                    <p className="text-xs text-gray-500">Peak Vibration</p>
                    <h4 className="text-xl font-bold text-purple-400">..</h4>
                  </div>

                  <div className="bg-[#0f141b] border border-gray-800 rounded-xl p-4">
                    <p className="text-xs text-gray-500">Gas Alert</p>
                    <h4 className="text-xl font-bold text-emerald-400">Safe</h4>
                  </div>

                  <div className="bg-[#0f141b] border border-gray-800 rounded-xl p-4">
                    <p className="text-xs text-gray-500">Active Output</p>
                    <h4 className="text-xl font-bold text-yellow-400">Devices</h4>
                  </div>
                </div>

                {/* Chart */}
                <div className="h-64 border border-gray-800 rounded-xl bg-[#0f141b] p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={analyticsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />

                      <XAxis
                        dataKey="time"
                        stroke="#6b7280"
                        tickLine={false}
                        axisLine={false}
                      />

                      <YAxis
                        stroke="#6b7280"
                        tickLine={false}
                        axisLine={false}
                      />

                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#111827',
                          border: '1px solid #1f2937',
                          borderRadius: '12px',
                          color: '#fff',
                        }}
                      />

                      <Line
                        type="monotone"
                        dataKey="temp"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        dot={false}
                        name="Temperature"
                      />

                      <Line
                        type="monotone"
                        dataKey="vibration"
                        stroke="#a855f7"
                        strokeWidth={3}
                        dot={false}
                        name="Vibration"
                      />

                      <Line
                        type="monotone"
                        dataKey="gas"
                        stroke="#10b981"
                        strokeWidth={3}
                        dot={false}
                        name="Gas Level"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Insight Panel */}
                <div className="bg-[#0f141b] border border-gray-800 rounded-xl p-4">
                  <p className="text-sm text-gray-400">
                    System Insight: All connected sensors are operating within normal
                    parameters. Temperature remains stable, vibration levels are low,
                    and gas concentration is safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}