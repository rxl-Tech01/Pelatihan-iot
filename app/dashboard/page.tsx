"use client";

import {
  Thermometer,
  Droplets,
  Waves,
  Activity,
  Cpu,
  Wifi,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

export default function DashboardPage() {
  const sensorData = [
    {
      title: "Suhu",
      value: "28°C",
      icon: Thermometer,
      color: "text-red-500",
      bg: "bg-red-100",
    },
    {
      title: "Kelembapan",
      value: "76%",
      icon: Droplets,
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      title: "Water Level",
      value: "65%",
      icon: Waves,
      color: "text-cyan-500",
      bg: "bg-cyan-100",
    },
    {
      title: "pH Air",
      value: "6.8",
      icon: Activity,
      color: "text-green-500",
      bg: "bg-green-100",
    },
  ];

  const logs = [
    "Sensor suhu diperbarui 2 detik lalu",
    "Koneksi perangkat stabil",
    "Pompa air aktif otomatis",
    "Monitoring berjalan normal",
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Dashboard IoT Monitoring
          </h1>
          <p className="mt-1 text-slate-500">
            Pantau kondisi sensor dan perangkat IoT secara real-time.
          </p>
        </div>

        <button className="mt-4 flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow-md transition hover:bg-slate-800 md:mt-0">
          <RefreshCw size={18} />
          Refresh Data
        </button>
      </div>

      {/* Sensor Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {sensorData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">{item.title}</p>
                  <h2 className="mt-2 text-3xl font-bold text-slate-800">
                    {item.value}
                  </h2>
                </div>
                <div className={`rounded-2xl p-3 ${item.bg}`}>
                  <Icon className={item.color} size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Section */}
      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Device Status */}
        <div className="rounded-2xl bg-white p-6 shadow-sm xl:col-span-2">
          <h2 className="mb-5 text-xl font-semibold text-slate-800">
            Status Perangkat
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <Cpu className="text-slate-700" />
                <div>
                  <p className="font-medium text-slate-800">ESP32 Controller</p>
                  <p className="text-sm text-green-600">Online</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <Wifi className="text-slate-700" />
                <div>
                  <p className="font-medium text-slate-800">WiFi Network</p>
                  <p className="text-sm text-green-600">Connected</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-slate-700" />
                <div>
                  <p className="font-medium text-slate-800">System Security</p>
                  <p className="text-sm text-green-600">Secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Log */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-semibold text-slate-800">
            Aktivitas Terbaru
          </h2>

          <div className="space-y-4">
            {logs.map((log, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm text-slate-600"
              >
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}