'use client';

import { useState, useEffect, useRef } from 'react';
import { Sprout, Camera, CloudSun, DollarSign, Plus, Bell, Calendar, AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';

export default function CropManagementPage() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const crops = [
    { name: 'Wheat', status: 'healthy', health: 95, lastScan: '2 days ago' },
    { name: 'Rice', status: 'warning', health: 65, lastScan: '1 day ago' },
    { name: 'Cotton', status: 'critical', health: 40, lastScan: '3 hours ago' },
  ];

  const alerts = [
    { id: 1, type: 'critical', message: 'Disease detected in Cotton field', time: '3 hours ago' },
    { id: 2, type: 'warning', message: 'Pest activity in Wheat field', time: '1 day ago' },
    { id: 3, type: 'info', message: 'Fertilizer application due tomorrow', time: '2 days ago' },
  ];

  const recentActivity = [
    { action: 'Disease scan', crop: 'Cotton', date: '3 hours ago' },
    { action: 'Soil analysis', crop: 'Wheat', date: '2 days ago' },
    { action: 'Pest check', crop: 'Rice', date: '5 days ago' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-amber-600 bg-amber-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'healthy': return <CheckCircle className="w-5 h-5" />;
      case 'warning': return <AlertCircle className="w-5 h-5" />;
      case 'critical': return <AlertTriangle className="w-5 h-5" />;
      default: return null;
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'critical': return 'border-l-red-500 bg-red-50';
      case 'warning': return 'border-l-amber-500 bg-amber-50';
      case 'info': return 'border-l-blue-500 bg-blue-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen pt-40 px-6 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto pb-20">
        {/* Header */}
        <div ref={(el) => (sectionsRef.current[0] = el)} className="opacity-0 mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Crop Management
          </h1>
          <p className="text-xl text-gray-600">
            Monitor and manage all your crops in one place
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Current Status & Quick Actions */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Crop Status */}
            <div ref={(el) => (sectionsRef.current[1] = el)} className="opacity-0 bg-white rounded-2xl shadow-lg p-8 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Current Crops</h2>
              </div>

              <div className="space-y-4">
                {crops.map((crop, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-gray-900">{crop.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${getStatusColor(crop.status)}`}>
                          {getStatusIcon(crop.status)}
                          {crop.status.charAt(0).toUpperCase() + crop.status.slice(1)}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">Last scan: {crop.lastScan}</span>
                    </div>

                    {/* Health Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Health Status</span>
                        <span className="font-semibold text-gray-900">{crop.health}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all ${
                            crop.health >= 80 ? 'bg-green-500' : 
                            crop.health >= 50 ? 'bg-amber-500' : 
                            'bg-red-500'
                          }`}
                          style={{ width: `${crop.health}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium">
                        Scan Now
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 px-6 py-3 border-2 border-dashed border-gray-300 text-gray-600 rounded-xl hover:border-primary hover:text-primary transition-colors font-medium flex items-center justify-center gap-2">
                <Plus className="w-5 h-5" />
                Add New Crop
              </button>
            </div>

            {/* Quick Actions */}
            <div ref={(el) => (sectionsRef.current[2] = el)} className="opacity-0 bg-white rounded-2xl shadow-lg p-8 hover-lift">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Camera className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">New Scan</h3>
                  <p className="text-sm text-gray-600">Upload photo for instant analysis</p>
                </button>

                <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:scale-110 transition-all">
                    <CloudSun className="w-6 h-6 text-blue-500 group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Weather</h3>
                  <p className="text-sm text-gray-600">Check current and forecast</p>
                </button>

                <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-amber-500 hover:bg-amber-50 transition-all group">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:scale-110 transition-all">
                    <DollarSign className="w-6 h-6 text-amber-500 group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Check MSP</h3>
                  <p className="text-sm text-gray-600">View current support prices</p>
                </button>

                <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all group">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500 group-hover:scale-110 transition-all">
                    <Calendar className="w-6 h-6 text-purple-500 group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Schedule</h3>
                  <p className="text-sm text-gray-600">View upcoming tasks</p>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Alerts & Activity */}
          <div className="space-y-8">
            {/* Alerts */}
            <div ref={(el) => (sectionsRef.current[3] = el)} className="opacity-0 bg-white rounded-2xl shadow-lg p-8 hover-lift">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center relative">
                    <Bell className="w-6 h-6 text-red-600" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {alerts.length}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Alerts</h2>
                </div>
              </div>

              <div className="space-y-3">
                {alerts.map((alert) => (
                  <div key={alert.id} className={`border-l-4 ${getAlertColor(alert.type)} p-4 rounded-r-lg`}>
                    <p className="font-medium text-gray-900 mb-1">{alert.message}</p>
                    <p className="text-sm text-gray-600">{alert.time}</p>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 px-4 py-2 text-primary font-medium hover:bg-primary/5 rounded-lg transition-colors">
                View All Alerts
              </button>
            </div>

            {/* Weather Widget */}
            <div ref={(el) => (sectionsRef.current[4] = el)} className="opacity-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-8 text-white hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <CloudSun className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Weather</h2>
              </div>
              
              <div className="mb-6">
                <div className="text-5xl font-bold mb-2">28°C</div>
                <div className="text-lg opacity-90">Partly Cloudy</div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                <div>
                  <div className="text-sm opacity-75">Humidity</div>
                  <div className="text-xl font-semibold">65%</div>
                </div>
                <div>
                  <div className="text-sm opacity-75">Rainfall</div>
                  <div className="text-xl font-semibold">2mm</div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div ref={(el) => (sectionsRef.current[5] = el)} className="opacity-0 bg-white rounded-2xl shadow-lg p-8 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
              </div>

              <div className="space-y-4">
                {recentActivity.map((activity, idx) => (
                  <div key={idx} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.crop} • {activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 px-4 py-2 text-primary font-medium hover:bg-primary/5 rounded-lg transition-colors">
                View Full History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
