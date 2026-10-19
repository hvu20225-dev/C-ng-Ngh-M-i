import React, { useState } from 'react';
import { Home, Lightbulb, Thermometer, Wind, ShieldCheck, Power, Sun, Moon, Lock, AlertCircle } from 'lucide-react';
import smartHomeImg from '../../assets/images/smart_home_iot_1791120538895.jpg';

export const SmartHomeSim: React.FC = () => {
  const [lights, setLights] = useState({
    livingRoom: true,
    workRoom: false,
    kitchen: true,
    balcony: false
  });
  const [temperature, setTemperature] = useState(23);
  const [acPower, setAcPower] = useState(true);
  const [airPurifier, setAirPurifier] = useState(true);
  const [smartCurtain, setSmartCurtain] = useState(70); // % open
  const [securityMode, setSecurityMode] = useState<'normal' | 'away' | 'night'>('normal');

  const toggleLight = (room: keyof typeof lights) => {
    setLights((prev) => ({ ...prev, [room]: !prev[room] }));
  };

  // Derived mock power consumption
  const activeLightsCount = Object.values(lights).filter(Boolean).length;
  const powerWatts = (activeLightsCount * 18) + (acPower ? (30 - temperature) * 65 + 400 : 0) + (airPurifier ? 35 : 0) + 45;

  return (
    <div className="space-y-6">
      {/* Simulation Notice Disclaimer (as required by Prompt) */}
      <div className="flex items-center gap-2 p-3 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-300">
        <AlertCircle className="w-4 h-4 shrink-0 text-cyan-400" />
        <span>
          <strong>Mô phỏng IoT Trực quan:</strong> Tương tác và thay đổi các trạng thái cảm biến để quan sát phản hồi năng lượng và môi trường thời gian thực.
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Visual Room Asset & Live Environmental Telemetry */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 group">
            <img
              src={smartHomeImg}
              alt="Không gian nội thất nhà thông minh"
              referrerPolicy="no-referrer"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Hệ sinh thái Matter / Thread v2.1
                </span>
                <span className="text-cyan-300 font-mono">
                  Đang trực tuyến: {activeLightsCount + (acPower ? 1 : 0) + (airPurifier ? 1 : 0) + 4} thiết bị
                </span>
              </div>
            </div>
          </div>

          {/* Quick Realtime Environmental Telemetry */}
          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
              <div className="text-[11px] text-slate-400">Nhiệt độ phòng</div>
              <div className="text-lg font-bold text-white font-mono tabular-nums">{temperature}°C</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
              <div className="text-[11px] text-slate-400">Chất lượng khí AQI</div>
              <div className="text-lg font-bold text-emerald-400 font-mono tabular-nums">
                {airPurifier ? '18 (Tốt)' : '46 (TB)'}
              </div>
            </div>
            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
              <div className="text-[11px] text-slate-400">Công suất tức thời</div>
              <div className="text-lg font-bold text-cyan-400 font-mono tabular-nums">{powerWatts} W</div>
            </div>
          </div>
        </div>

        {/* Interactive Controls Panel */}
        <div className="lg:col-span-7 space-y-5">
          {/* Preset Modes */}
          <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-2">
            <div className="text-xs font-semibold text-slate-400">Chế độ vận hành ngôi nhà:</div>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => {
                  setSecurityMode('normal');
                  setTemperature(23);
                  setAcPower(true);
                  setLights({ livingRoom: true, workRoom: true, kitchen: false, balcony: false });
                }}
                className={`py-2 px-3 rounded-lg text-xs font-medium border transition-colors ${
                  securityMode === 'normal'
                    ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Sinh hoạt gia đình
              </button>

              <button
                type="button"
                onClick={() => {
                  setSecurityMode('away');
                  setAcPower(false);
                  setAirPurifier(false);
                  setLights({ livingRoom: false, workRoom: false, kitchen: false, balcony: false });
                }}
                className={`py-2 px-3 rounded-lg text-xs font-medium border transition-colors ${
                  securityMode === 'away'
                    ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Vắng nhà (Eco)
              </button>

              <button
                type="button"
                onClick={() => {
                  setSecurityMode('night');
                  setTemperature(25);
                  setAcPower(true);
                  setLights({ livingRoom: false, workRoom: false, kitchen: false, balcony: true });
                }}
                className={`py-2 px-3 rounded-lg text-xs font-medium border transition-colors ${
                  securityMode === 'night'
                    ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Chế độ ban đêm
              </button>
            </div>
          </div>

          {/* Interactive Lighting Matrix */}
          <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                Hệ thống đèn thông minh (Adaptive Lighting)
              </span>
              <span className="text-[11px] text-slate-500 font-mono">Bật: {activeLightsCount}/4</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { key: 'livingRoom', label: 'Phòng khách' },
                { key: 'workRoom', label: 'Phòng làm việc' },
                { key: 'kitchen', label: 'Bếp ăn' },
                { key: 'balcony', label: 'Ban công' }
              ].map(({ key, label }) => {
                const isOn = lights[key as keyof typeof lights];
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleLight(key as keyof typeof lights)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      isOn
                        ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold">{label}</span>
                      <Power className={`w-3 h-3 ${isOn ? 'text-amber-400' : 'text-slate-600'}`} />
                    </div>
                    <span className="text-[11px] opacity-80">{isOn ? 'BẬT' : 'TẮT'}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Climate & Purifier Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* AC Slider */}
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <Thermometer className="w-4 h-4 text-cyan-400" />
                  Điều hòa nhiệt độ
                </span>
                <button
                  type="button"
                  onClick={() => setAcPower(!acPower)}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    acPower ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-500'
                  }`}
                >
                  {acPower ? 'BẬT' : 'TẮT'}
                </button>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Cài đặt nhiệt độ</span>
                  <span className="font-mono text-cyan-400 font-bold">{temperature}°C</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="30"
                  disabled={!acPower}
                  value={temperature}
                  onChange={(e) => setTemperature(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 disabled:opacity-40"
                />
              </div>
            </div>

            {/* Air Purifier & Smart Curtain */}
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <Wind className="w-4 h-4 text-emerald-400" />
                  Máy lọc khí HEPA
                </span>
                <button
                  type="button"
                  onClick={() => setAirPurifier(!airPurifier)}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    airPurifier ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-500'
                  }`}
                >
                  {airPurifier ? 'BẬT' : 'TẮT'}
                </button>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Rèm tự động</span>
                  <span className="font-mono text-slate-200">{smartCurtain}% mở</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="10"
                  value={smartCurtain}
                  onChange={(e) => setSmartCurtain(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
