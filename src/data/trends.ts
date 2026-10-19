import { TechTrend, TimelineMilestone } from '../types/tech';

export const TRENDING_TECHNOLOGIES: TechTrend[] = [
  {
    id: 'trend-1',
    rank: 1,
    techId: 'generative-ai',
    name: 'AI Tạo sinh & Tác nhân tự chủ (Autonomous Agents)',
    category: 'Trí tuệ nhân tạo',
    growthRate: '+98% y/y',
    impactScore: 98,
    status: 'Bùng nổ',
    description: 'Chuyển đổi từ mô hình trả lời câu hỏi thụ động sang mạng lưới tác nhân AI có khả năng tự động phân rã nhiệm vụ và gọi API điều hành công việc.',
    primaryDrivers: ['Tự động hóa lập trình', 'Tổng hợp truyền thông đa phương thức', 'Sản xuất nội dung doanh nghiệp']
  },
  {
    id: 'trend-2',
    rank: 2,
    techId: 'quantum-computing',
    name: 'Điện toán lượng tử trong Hóa học & Pin thế hệ mới',
    category: 'Vật lý & Tính toán',
    growthRate: '+94% y/y',
    impactScore: 94,
    status: 'Đột phá mới',
    description: 'Ứng dụng mô phỏng phản ứng hóa học chính xác để chế tạo pin thể rắn và tìm kiếm chất xúc tác hấp thụ CO2 từ không khí.',
    primaryDrivers: ['Đầu tư từ các tập đoàn dược phẩm', 'Đua tranh công nghệ quốc gia', 'Nhu cầu pin xe điện hiệu năng cao']
  },
  {
    id: 'trend-3',
    rank: 3,
    techId: 'green-technology',
    name: 'Pin Perovskite Tandem & Hydrogen Xanh',
    category: 'Năng lượng tái tạo',
    growthRate: '+92% y/y',
    impactScore: 95,
    status: 'Tăng tốc',
    description: 'Đột phá hiệu suất tế bào quang điện vượt mốc 33% và giảm giá thành sản xuất hydro phục vụ khử carbon ngành công nghiệp nặng.',
    primaryDrivers: ['Mục tiêu toàn cầu Net Zero 2050', 'Chi phí sản xuất năng lượng giảm sâu', 'Hàng rào thuế carbon quốc tế']
  },
  {
    id: 'trend-4',
    rank: 4,
    techId: 'robotics',
    name: 'Robot hình người hợp tác trong công xưởng',
    category: 'Robot & Tự động hóa',
    growthRate: '+88% y/y',
    impactScore: 91,
    status: 'Bùng nổ',
    description: 'Các tập đoàn sản xuất ô tô và logistics bắt đầu triển khai thử nghiệm hàng loạt robot hai chân với trí thông minh thị giác không gian.',
    primaryDrivers: ['Thiếu hụt lao động tay nghề cao', 'Tiến bộ của mô hình thị giác-ngôn ngữ-hành động (VLA)', 'Tối ưu hóa an toàn lao động']
  },
  {
    id: 'trend-5',
    rank: 5,
    techId: 'cybersecurity',
    name: 'Hệ thống phòng thủ mạng Zero-Trust tăng cường AI',
    category: 'An ninh bảo mật',
    growthRate: '+86% y/y',
    impactScore: 93,
    status: 'Trưởng thành',
    description: 'Đối phó với làn sóng tấn công mã độc biến hình tự sinh bằng AI, các tổ chức chuyển đổi toàn bộ sang giám sát danh tính thời gian thực.',
    primaryDrivers: ['Ransomware ngày càng tinh vi', 'Bảo vệ dữ liệu đám mây lai', 'Yêu cầu tuân thủ an toàn thông tin quốc gia']
  },
  {
    id: 'trend-6',
    rank: 6,
    techId: 'biotechnology',
    name: 'Kỹ thuật gen CRISPR điều trị tại chỗ & Liệu pháp tế bào',
    category: 'Khoa học sự sống',
    growthRate: '+85% y/y',
    impactScore: 92,
    status: 'Tăng tốc',
    description: 'Các liệu pháp chỉnh sửa gen trực tiếp trong cơ thể người (in vivo) mở ra khả năng chữa dứt điểm nhiều bệnh di truyền nan y.',
    primaryDrivers: ['Sự phê duyệt của các cơ quan quản lý dược', 'Kỹ thuật vận chuyển hạt nano lipid', 'Y học cá nhân hóa theo ADN']
  },
  {
    id: 'trend-7',
    rank: 7,
    techId: 'autonomous-vehicles',
    name: 'Mở rộng đội xe Robotaxi & Tự hành thương mại',
    category: 'Giao thông tương lai',
    growthRate: '+82% y/y',
    impactScore: 89,
    status: 'Tăng tốc',
    description: 'Dịch vụ gọi xe không người lái mở rộng phạm vi thương mại ra hàng chục thành phố lớn, chứng minh tỷ lệ an toàn cao hơn người lái.',
    primaryDrivers: ['Kinh tế quy mô hạ giá thành xe', 'Hệ thống cảm biến thế hệ mới giá rẻ', 'Độ tin cậy của thuật toán lái xe AI']
  },
  {
    id: 'trend-8',
    rank: 8,
    techId: '5g-6g-networks',
    name: 'Mạng 5G Advanced & Thử nghiệm truyền dẫn 6G Terahertz',
    category: 'Mạng viễn thông',
    growthRate: '+79% y/y',
    impactScore: 88,
    status: 'Trưởng thành',
    description: 'Hoàn thiện chuẩn 5G-Advanced với khả năng định vị vệ tinh chính xác từng centimet và bước đầu thử nghiệm dải tần số 6G siêu cao.',
    primaryDrivers: ['Nhu cầu băng thông cho video không gian', 'Đồng bộ hóa điều khiển xe tự hành', 'Tích hợp kết nối vệ tinh quỹ đạo thấp']
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: '2025',
    title: 'Kỷ nguyên Tác nhân AI Độc lập & Robot Hình người Tiền thương mại',
    techGroup: 'AI & Robotics',
    summary: 'Sự bùng nổ của các AI Agent có khả năng chủ động lập kế hoạch và điều phối phần mềm không cần can thiệp liên tục của người dùng. Các mẫu robot hình người đầu tiên thử nghiệm trong dây chuyền sản xuất xe hơi.',
    expectedBreakthroughs: [
      'Trợ lý AI đa phương thức phản hồi dưới 150ms với biểu cảm tự nhiên',
      'Thử nghiệm robot hình người vận chuyển linh kiện tại các nhà máy ô tô hàng đầu',
      'Phổ cập chuẩn nhà thông minh Matter 2.0 trên toàn cầu'
    ],
    readinessLevel: 'Đã sẵn sàng triển khai'
  },
  {
    year: '2026',
    title: '5G-Advanced Phổ cập & Đột phá Mô phỏng Lượng tử',
    techGroup: 'Mạng & Hạ tầng / Quantum',
    summary: 'Mạng di động 5G-Advanced tích hợp cảm biến không gian (ISAC). Máy tính lượng tử vượt ngưỡng 1,000 qubit vật lý giúp giải quyết bài toán cấu trúc phân tử đầu tiên có giá trị thương mại cho ngành dược.',
    expectedBreakthroughs: [
      'Tìm ra công thức vật liệu pin thể rắn mới nhờ siêu máy tính lượng tử lai',
      'Đội xe taxi tự hành cấp độ 4 hoạt động thương mại tại hơn 20 đại đô thị',
      'Áp dụng bắt buộc tiêu chuẩn mật mã hậu lượng tử (PQC) trong ngân hàng quốc tế'
    ],
    readinessLevel: 'Đang triển khai thử nghiệm thực địa'
  },
  {
    year: '2027 - 2028',
    title: 'Giao diện Não - Máy Tính Y khoa & Lưới điện Xanh Tự hành',
    techGroup: 'Công nghệ sinh học / Green Tech',
    summary: 'Thiết bị cấy ghép BCI siêu mỏng được cấp phép lâm sàng rộng rãi giúp bệnh nhân liệt giao tiếp tốc độ cao. Lưới điện quốc gia được vận hành bởi AI tự động cân bằng năng lượng tái tạo phân tán.',
    expectedBreakthroughs: [
      'Giao diện não - máy tính đạt tốc độ gõ 120 ký tự/phút thông qua suy nghĩ',
      'Pin năng lượng mặt trời công nghệ Perovskite Tandem đạt hiệu suất 35%',
      'Cánh tay robot phẫu thuật từ xa qua mạng 5G không dây đạt độ trễ dưới 1ms'
    ],
    readinessLevel: 'Giai đoạn thử nghiệm lâm sàng & quy chuẩn'
  },
  {
    year: '2030',
    title: 'Mạng 6G Toàn cầu & Nông nghiệp Tự động hóa Hoàn toàn',
    techGroup: 'Viễn thông & IoT Sinh thái',
    summary: 'Mạng 6G chính thức đi vào hoạt động thương mại kết nối vệ tinh quỹ đạo thấp và trạm mặt đất. Các trang trại thông minh vận hành 100% bằng robot bay drone và máy kéo tự hành cảm biến sinh học.',
    expectedBreakthroughs: [
      'Tốc độ mạng di động đạt 1 Tbps, hỗ trợ truyền hình ba chiều hologram tức thì',
      'Nhà máy sản xuất thịt nuôi cấy từ tế bào đạt giá thành ngang bằng thịt truyền thống',
      'Đại đa số xe hơi mới xuất xưởng đạt tiêu chuẩn tự hành cấp độ 4'
    ],
    readinessLevel: 'Dự báo công nghệ có độ tin cậy cao'
  },
  {
    year: '2035',
    title: 'Năng lượng Nhiệt hạch Thương mại & Vật liệu Siêu dẫn',
    techGroup: 'Năng lượng & Vật lý Tiên tiến',
    summary: 'Lò phản ứng nhiệt hạch hạt nhân (Tokamak) đầu tiên hòa lưới điện thương mại, mang lại nguồn điện sạch không phát thải carbon và không chất thải phóng xạ lâu dài.',
    expectedBreakthroughs: [
      'Nhà máy nhiệt hạch phát điện liên tục với hệ số sinh năng lượng Q > 10',
      'Vật liệu nano siêu dẫn ở nhiệt độ gần môi trường cách mạng hóa truyền tải điện',
      'Kính áp tròng thông minh AR mỏng thay thế hoàn toàn điện thoại di động'
    ],
    readinessLevel: 'Kỳ vọng khoa học trọng điểm'
  },
  {
    year: '2040+',
    title: 'Trí tuệ Nhân tạo Tổng quát (AGI) & Nền văn minh Đa hành tinh',
    techGroup: 'Biên giới Tương lai',
    summary: 'Xuất hiện hệ thống AGI an toàn có năng lực tư duy khoa học độc lập sánh ngang các nhà khoa học lỗi lạc. Trạm nghiên cứu sinh tồn tự chủ đầu tiên của loài người trên Mặt Trăng đi vào hoạt động thường xuyên.',
    expectedBreakthroughs: [
      'AGI giải mã các định luật vật lý mới và thiết kế động cơ ion sâu vào không gian',
      'Căn cứ vĩnh viễn trên Mặt Trăng tự khai thác nước băng và năng lượng mặt trời',
      'Kéo dài tuổi thọ khỏe mạnh của con người vượt mốc 100 tuổi nhờ tái tạo tế bào'
    ],
    readinessLevel: 'Tầm nhìn tương lai dài hạn'
  }
];

export const COMPARISON_PRESETS = [
  {
    label: 'AI vs Điện toán Lượng tử',
    ids: ['artificial-intelligence', 'quantum-computing']
  },
  {
    label: 'Thực tế ảo (VR) vs Thực tế tăng cường (AR)',
    ids: ['virtual-reality', 'augmented-reality']
  },
  {
    label: 'Robot tự động hóa vs Xe tự hành',
    ids: ['robotics', 'autonomous-vehicles']
  },
  {
    label: 'Điện toán đám mây vs IoT vs Chuỗi khối',
    ids: ['cloud-computing', 'internet-of-things', 'blockchain']
  },
  {
    label: 'Công nghệ Xanh vs Công nghệ Sinh học',
    ids: ['green-technology', 'biotechnology']
  }
];
