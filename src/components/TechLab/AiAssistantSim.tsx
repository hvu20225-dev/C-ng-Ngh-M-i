import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, AlertCircle, RefreshCw, Cpu, Zap } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

export const AiAssistantSim: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: 'Xin chào! Tôi là Trợ lý Mô phỏng AI của FutureTech. Tôi có thể hỗ trợ bạn tìm hiểu về bất kỳ công nghệ mới nào, từ Điện toán lượng tử, Robot tự hành cho đến AI tạo sinh và Năng lượng xanh.',
      timestamp: 'Vừa xong'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeInputNode, setActiveInputNode] = useState<number | null>(0);
  const [learningRate, setLearningRate] = useState<number>(0.05);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const presetPrompts = [
    'Robot và AI sẽ thay đổi việc làm thế nào vào năm 2030?',
    'Khác biệt giữa Siêu máy tính và Máy tính lượng tử?',
    'Công nghệ xanh và IoT giúp giảm kẹt xe đô thị ra sao?'
  ];

  const handleSend = (textToSend?: string) => {
    const q = (textToSend || inputValue).trim();
    if (!q) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: q,
      timestamp: 'Bây giờ'
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    // Knowledge-grounded simulation response
    setTimeout(() => {
      let reply = '';
      const lower = q.toLowerCase();

      if (lower.includes('robot') || lower.includes('việc làm')) {
        reply = 'Đến năm 2030, robot hình người và hệ thống tự động hóa sẽ đảm nhận phần lớn các công việc có tính lặp lại hoặc nguy hiểm (kho vận, lắp ráp cơ khí, nông nghiệp nặng). Con người sẽ chuyển trọng tâm sang các vai trò giám sát chiến lược, sáng tạo, đạo đức công nghệ và chăm sóc thấu cảm. Nhu cầu nhân lực biết phối hợp cùng AI (AI Collaboration) sẽ tăng hơn 40%.';
      } else if (lower.includes('lượng tử') || lower.includes('quantum') || lower.includes('siêu máy tính')) {
        reply = 'Siêu máy tính truyền thống (như Frontier, Fugaku) dù sở hữu hàng triệu lõi tính toán nhưng vẫn vận hành trên bit nhị phân (0 hoặc 1), xử lý bài toán theo cách tuần tự song song. Ngược lại, máy tính lượng tử sử dụng Qubit với nguyên lý chồng chập và vướng víu, có thể khảo sát đồng thời toàn bộ không gian giải pháp của bài toán tổ hợp, giúp giải quyết các mô phỏng phân tử dược phẩm phức tạp trong vài phút thay vì hàng ngàn năm.';
      } else if (lower.includes('xanh') || lower.includes('kẹt xe') || lower.includes('đô thị') || lower.includes('iot')) {
        reply = 'Hệ thống giao thông thông minh kết hợp IoT và AI phân tích luồng di chuyển từ camera và tín hiệu định vị GPS theo thời gian thực. Đèn tín hiệu tự động điều chỉnh chu kỳ xanh/đỏ dựa trên mật độ xe thực tế thay vì bộ đếm cứng nhắc, giúp giảm 25% thời gian chờ ùn ứ và giảm phát thải CO2 tương ứng.';
      } else {
        reply = `Cảm ơn câu hỏi về "${q}". Trong kỷ nguyên công nghệ mới, các giải pháp công nghệ hội tụ (Convergence) như AI kết hợp IoT, dữ liệu lớn và điện toán đám mây đang tạo ra sự chuyển dịch toàn diện, giúp tối ưu hóa nguồn lực và giải phóng tiềm năng sáng tạo của con người.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: reply,
          timestamp: 'Vừa xong'
        }
      ]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="space-y-6">
      {/* Simulation Disclaimer as mandated by Prompt section 18 */}
      <div className="flex items-center justify-between p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Ghi chú kỹ thuật:</strong> Đây là giao diện <em>AI Demo / Mô phỏng Tương tác Frontend</em> được lập trình để minh họa trải nghiệm trợ lý công nghệ thông minh.
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            setMessages([
              {
                id: '1',
                sender: 'ai',
                text: 'Hộp thoại đã được đặt lại. Hãy đặt câu hỏi bất kỳ về các công nghệ tương lai!',
                timestamp: 'Vừa xong'
              }
            ]);
          }}
          className="text-amber-400 hover:text-amber-300 flex items-center gap-1 shrink-0 ml-2"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Làm mới</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chat Interface Column */}
        <div className="lg:col-span-7 flex flex-col h-[500px] rounded-xl bg-slate-950/70 border border-slate-800 overflow-hidden">
          {/* Chat Header */}
          <div className="p-3.5 border-b border-slate-800 bg-slate-900/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">FutureTech AI Explorer</div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Sẵn sàng phản hồi
                </div>
              </div>
            </div>

            <span className="text-[11px] text-slate-500 font-mono">Model: Neural Core v2.6</span>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-lg bg-cyan-600/30 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] p-3.5 rounded-xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-cyan-600 text-white rounded-tr-none'
                      : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="block text-[10px] mt-1.5 opacity-60 text-right font-mono">
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-slate-400 text-xs">
                <div className="w-7 h-7 rounded-lg bg-cyan-600/30 text-cyan-400 flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                  <span className="ml-1 text-[11px] text-slate-400">Đang tổng hợp câu trả lời...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Preset Prompts */}
          <div className="px-4 py-2 bg-slate-900/40 border-t border-slate-800 flex items-center gap-1.5 overflow-x-auto text-[11px]">
            <span className="text-slate-500 shrink-0">Gợi ý:</span>
            {presetPrompts.map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(p)}
                className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 whitespace-nowrap transition-colors"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Chat Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-slate-800 bg-slate-900/60 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Nhập câu hỏi của bạn về bất kỳ công nghệ nào..."
              className="flex-1 px-3.5 py-2 text-xs sm:text-sm bg-slate-950 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="p-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 text-white transition-colors"
              aria-label="Gửi tin nhắn"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Neural Network Visualizer Column */}
        <div className="lg:col-span-5 p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                <Cpu className="w-4 h-4" />
                Mô phỏng Mạng Nơ-ron (Neural Layer Matrix)
              </span>
              <span className="text-[11px] text-slate-400 font-mono">Epoch: 1,420</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Nhấp vào các nút đầu vào (Input Nodes) để kích hoạt xung lan truyền nơ-ron qua các lớp ẩn (Hidden Layers) tới đầu ra.
            </p>

            {/* Neural Graph Canvas Simulation */}
            <div className="relative p-4 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-between text-center min-h-[220px]">
              {/* Layer 1: Inputs */}
              <div className="space-y-3">
                <span className="text-[10px] text-slate-500 font-mono block">Input</span>
                {['Dữ liệu text', 'Hình ảnh 3D', 'Cảm biến'].map((label, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveInputNode(idx)}
                    className={`w-16 py-1.5 px-1 rounded-md text-[10px] font-semibold border transition-all block ${
                      activeInputNode === idx
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 ring-2 ring-cyan-500/30'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Connecting synapsis visual indicator */}
              <div className="text-slate-600 font-mono text-xs flex flex-col items-center">
                <Zap className={`w-4 h-4 transition-colors ${activeInputNode !== null ? 'text-cyan-400 animate-pulse' : 'text-slate-700'}`} />
                <span className="text-[9px] mt-0.5">W: {(0.85 + learningRate).toFixed(2)}</span>
              </div>

              {/* Layer 2: Hidden Layers */}
              <div className="space-y-2">
                <span className="text-[10px] text-slate-500 font-mono block">Hidden</span>
                {[1, 2, 3, 4].map((node) => (
                  <div
                    key={node}
                    className={`w-7 h-7 rounded-full mx-auto flex items-center justify-center text-[10px] font-mono transition-all ${
                      activeInputNode !== null
                        ? 'bg-violet-900/60 border border-violet-500/80 text-violet-300 shadow-sm shadow-violet-500/20'
                        : 'bg-slate-950 border border-slate-800 text-slate-500'
                    }`}
                  >
                    h{node}
                  </div>
                ))}
              </div>

              {/* Connecting synapsis visual indicator */}
              <div className="text-slate-600 font-mono text-xs flex flex-col items-center">
                <Zap className={`w-4 h-4 transition-colors ${activeInputNode !== null ? 'text-violet-400 animate-pulse' : 'text-slate-700'}`} />
                <span className="text-[9px] mt-0.5">W: {(0.92 - learningRate * 0.5).toFixed(2)}</span>
              </div>

              {/* Layer 3: Output Activation */}
              <div className="space-y-3">
                <span className="text-[10px] text-slate-500 font-mono block">Output</span>
                {['Suy luận', 'Hành động', 'Dự báo'].map((label, idx) => (
                  <div
                    key={idx}
                    className={`w-16 py-1.5 px-1 rounded-md text-[10px] font-semibold border transition-all ${
                      activeInputNode !== null
                        ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300'
                        : 'bg-slate-950 border-slate-800 text-slate-500'
                    }`}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Parameter Slider */}
          <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex justify-between text-xs text-slate-300">
              <span>Hệ số học tập (Learning Rate: $\eta$)</span>
              <span className="font-mono text-cyan-400 font-bold">{learningRate}</span>
            </div>
            <input
              type="range"
              min="0.01"
              max="0.2"
              step="0.01"
              value={learningRate}
              onChange={(e) => setLearningRate(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>Hội tụ mịn (0.01)</span>
              <span>Đột phá nhanh (0.20)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
