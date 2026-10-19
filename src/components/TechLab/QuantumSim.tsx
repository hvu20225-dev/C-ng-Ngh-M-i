import React, { useState } from 'react';
import { Atom, Bot, RotateCcw, Play, CheckCircle, Zap, ShieldAlert, Sliders } from 'lucide-react';
import quantumLabImg from '../../assets/images/quantum_robotics_lab_1791120553204.jpg';

export const QuantumSim: React.FC = () => {
  // Quantum Simulator State
  const [qubitState, setQubitState] = useState<'zero' | 'one' | 'superposition'>('zero');
  const [measurementResult, setMeasurementResult] = useState<string | null>(null);

  // Robotics Simulator State
  const [robotSpeed, setRobotSpeed] = useState<number>(350); // mm/s
  const [jointAngle, setJointAngle] = useState<number>(65); // degrees
  const [payloadKg, setPayloadKg] = useState<number>(5.5);
  const [isRobotRunning, setIsRobotRunning] = useState<boolean>(true);

  // Apply Quantum Gates
  const applyHadamard = () => {
    setQubitState('superposition');
    setMeasurementResult(null);
  };

  const applyPauliX = () => {
    if (qubitState === 'zero') setQubitState('one');
    else if (qubitState === 'one') setQubitState('zero');
    setMeasurementResult(null);
  };

  const measureQubit = () => {
    if (qubitState === 'superposition') {
      const outcome = Math.random() > 0.5 ? '|0⟩' : '|1⟩';
      setMeasurementResult(outcome);
    } else {
      setMeasurementResult(qubitState === 'zero' ? '|0⟩' : '|1⟩');
    }
  };

  const resetQubit = () => {
    setQubitState('zero');
    setMeasurementResult(null);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Quantum Qubit Simulator Card */}
        <div className="lg:col-span-6 p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-violet-400 font-bold text-sm">
              <Atom className="w-5 h-5 text-violet-400 animate-spin [animation-duration:8s]" />
              <span>Mô phỏng Trạng thái Qubit Lượng tử</span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">QPU Simulator</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Thực nghiệm các phép biến đổi cổng lượng tử trên 1 Qubit. Quan sát hiện tượng chồng chập lượng tử (Superposition) và sụp đổ trạng thái (Wavefunction Collapse) khi tiến hành đo đạc.
          </p>

          {/* Visual Bloch Representation Box */}
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-4">
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Véc-tơ Trạng Thái Hiện Tại: $|\psi\rangle$
            </div>

            <div className="py-4 font-mono text-xl sm:text-2xl font-bold text-cyan-300">
              {qubitState === 'zero' && '│ψ⟩ = 1.00│0⟩ + 0.00│1⟩'}
              {qubitState === 'one' && '│ψ⟩ = 0.00│0⟩ + 1.00│1⟩'}
              {qubitState === 'superposition' && '│ψ⟩ = 0.707│0⟩ + 0.707│1⟩'}
            </div>

            {/* Probability Bars */}
            <div className="space-y-2 max-w-xs mx-auto text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Xác suất ra │0⟩</span>
                <span className="font-mono text-cyan-400">
                  {qubitState === 'zero' ? '100%' : qubitState === 'one' ? '0%' : '50%'}
                </span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-500 transition-all duration-300"
                  style={{
                    width: qubitState === 'zero' ? '100%' : qubitState === 'one' ? '0%' : '50%'
                  }}
                />
              </div>

              <div className="flex justify-between text-slate-400 mt-2">
                <span>Xác suất ra │1⟩</span>
                <span className="font-mono text-violet-400">
                  {qubitState === 'one' ? '100%' : qubitState === 'zero' ? '0%' : '50%'}
                </span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-violet-500 transition-all duration-300"
                  style={{
                    width: qubitState === 'one' ? '100%' : qubitState === 'zero' ? '0%' : '50%'
                  }}
                />
              </div>
            </div>

            {/* Measurement Result Announcement */}
            {measurementResult && (
              <div className="p-3 rounded-lg bg-cyan-950/60 border border-cyan-500/50 text-xs text-cyan-200 animate-fadeIn">
                Kết quả đo sụp đổ trạng thái: <strong className="text-sm font-bold text-white ml-1">{measurementResult}</strong>
              </div>
            )}
          </div>

          {/* Interactive Quantum Gates Action Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <button
              type="button"
              onClick={applyHadamard}
              className="py-2.5 px-2 rounded-lg bg-violet-900/40 hover:bg-violet-900/60 border border-violet-700/60 text-violet-200 font-medium transition-colors"
            >
              Cổng Hadamard (H)
            </button>

            <button
              type="button"
              onClick={applyPauliX}
              className="py-2.5 px-2 rounded-lg bg-blue-900/40 hover:bg-blue-900/60 border border-blue-700/60 text-blue-200 font-medium transition-colors"
            >
              Cổng Pauli-X (NOT)
            </button>

            <button
              type="button"
              onClick={measureQubit}
              className="py-2.5 px-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-colors shadow-sm"
            >
              Đo lường (Measure)
            </button>

            <button
              type="button"
              onClick={resetQubit}
              className="py-2.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors flex items-center justify-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Collaborative Robotics Kinematics Card */}
        <div className="lg:col-span-6 p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
              <Bot className="w-5 h-5 text-cyan-400" />
              <span>Điều khiển Cánh tay Robot Cobot</span>
            </div>
            <button
              type="button"
              onClick={() => setIsRobotRunning(!isRobotRunning)}
              className={`px-2.5 py-1 rounded-md text-xs font-bold font-mono ${
                isRobotRunning ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
              }`}
            >
              {isRobotRunning ? 'VẬN HÀNH' : 'TẠM DỪNG'}
            </button>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
            <img
              src={quantumLabImg}
              alt="Cánh tay robot chính xác trong phòng lab"
              referrerPolicy="no-referrer"
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-4">
              <div className="flex justify-between w-full text-xs text-slate-300">
                <span>Dung sai định vị: <strong className="text-cyan-400 font-mono">±0.015 mm</strong></span>
                <span>Tải trọng an toàn: <strong className="text-white font-mono">{payloadKg} kg</strong></span>
              </div>
            </div>
          </div>

          {/* Interactive Parameters */}
          <div className="space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Tốc độ di chuyển cánh tay cơ học</span>
                <span className="font-mono text-cyan-400 font-bold">{robotSpeed} mm/s</span>
              </div>
              <input
                type="range"
                min="50"
                max="800"
                step="25"
                value={robotSpeed}
                onChange={(e) => setRobotSpeed(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Góc quay khớp xoay 6 trục (Joint-4 Rotation)</span>
                <span className="font-mono text-cyan-400 font-bold">{jointAngle}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="180"
                step="5"
                value={jointAngle}
                onChange={(e) => setJointAngle(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Trọng tải phôi gia công</span>
                <span className="font-mono text-cyan-400 font-bold">{payloadKg} kg</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="12.0"
                step="0.5"
                value={payloadKg}
                onChange={(e) => setPayloadKg(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
