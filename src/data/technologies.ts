import { TechItem } from '../types/tech';

export const TECHNOLOGIES: TechItem[] = [
  {
    id: 'artificial-intelligence',
    name: 'Trí tuệ nhân tạo (AI)',
    englishName: 'Artificial Intelligence',
    category: 'ai_data',
    categoryLabel: 'Trí tuệ & Dữ liệu',
    shortDesc: 'Hệ thống mô phỏng năng lực nhận thức của con người, tự động phân tích dữ liệu, suy luận logic và giải quyết vấn đề phức tạp.',
    iconName: 'BrainCircuit',
    accentColor: '#38bdf8', // Cyan/Sky
    maturityLevel: 'Thương mại hóa',
    maturityPercent: 88,
    trendScore: 96,
    howItWorks: 'AI vận hành dựa trên các giải thuật tính toán nâng cao, xử lý luồng dữ liệu khổng lồ để nhận diện quy luật tiềm ẩn, xây dựng mô hình suy diễn và liên tục tối ưu hóa kết quả đầu ra qua phản hồi.',
    applications: [
      { domain: 'Y tế', title: 'Chẩn đoán sớm bệnh lý', description: 'Phân tích phim chụp CT/MRI phát hiện tế bào ung thư và tổn thương vi mô với độ chính xác trên 95%.' },
      { domain: 'Tài chính', title: 'Phát hiện gian lận giao dịch', description: 'Giám sát hàng triệu giao dịch thời gian thực nhằm phát hiện dấu hiệu bất thường trong mili-giây.' },
      { domain: 'Sản xuất', title: 'Bảo trì dự đoán (Predictive Maintenance)', description: 'Cảnh báo hỏng hóc máy móc thiết bị trước khi xảy ra sự cố ngừng dây chuyền.' }
    ],
    benefits: [
      'Tự động hóa tác vụ lặp đi lặp lại với năng suất vượt trội',
      'Xử lý và tìm ra quy luật trong tập dữ liệu siêu lớn mà con người không thể rà soát thủ công',
      'Hỗ trợ ra quyết định nhanh chóng, giảm thiểu sai sót do yếu tố cảm tính',
      'Vận hành liên tục 24/7 không suy giảm độ chính xác'
    ],
    challenges: [
      'Hiện tượng thiên kiến dữ liệu (Algorithmic Bias) gây mất công bằng',
      'Vấn đề "hộp đen" (Black box) làm hạn chế khả năng giải thích lý do đưa ra quyết định',
      'Tiêu thụ năng lượng khổng lồ tại các trung tâm tính toán hiệu năng cao',
      'Rủi ro chuyển dịch việc làm trong các ngành nghề văn phòng truyền thống'
    ],
    socialImpact: 'Tái định hình toàn diện cơ cấu lực lượng lao động toàn cầu, tạo ra các vai trò chuyên môn mới đồng thời đòi hỏi chính sách tái đào tạo kỹ năng số cho hàng trăm triệu người.',
    futureOutlook: 'Chuyển dịch từ các mô hình đơn nhiệm sang hệ sinh thái tác nhân tự chủ (Autonomous AI Agents) có khả năng tự phối hợp lập kế hoạch và thực thi chuỗi công việc dài hạn.',
    keyStats: [
      { label: 'Quy mô thị trường dự kiến 2030', value: '$1.3 nghìn tỷ' },
      { label: 'Tỷ lệ doanh nghiệp áp dụng', value: '78%' },
      { label: 'Mức tăng năng suất trung bình', value: '+35%' }
    ]
  },
  {
    id: 'machine-learning',
    name: 'Học máy (Machine Learning)',
    englishName: 'Machine Learning',
    category: 'ai_data',
    categoryLabel: 'Trí tuệ & Dữ liệu',
    shortDesc: 'Phương pháp khoa học cho phép máy tính tự cải thiện hiệu suất thông qua kinh nghiệm và dữ liệu mà không cần lập trình quy tắc tường minh.',
    iconName: 'Cpu',
    accentColor: '#3b82f6', // Blue
    maturityLevel: 'Phổ biến rộng rãi',
    maturityPercent: 92,
    trendScore: 89,
    howItWorks: 'Sử dụng các kỹ thuật học có giám sát (Supervised), học không giám sát (Unsupervised) và học tăng cường (Reinforcement Learning) để điều chỉnh trọng số tham số hàm mục tiêu.',
    applications: [
      { domain: 'Thương mại điện tử', title: 'Hệ thống gợi ý cá nhân hóa', description: 'Dự đoán sản phẩm, nội dung và dịch vụ người dùng có nhu cầu cao nhất dựa trên hành vi lịch sử.' },
      { domain: 'Giao thông', title: 'Tối ưu hóa luồng di chuyển', description: 'Dự báo mật độ phương tiện và điều phối thời lượng đèn tín hiệu giao thông đô thị.' },
      { domain: 'Ngân hàng', title: 'Chấm điểm tín dụng tự động', description: 'Đánh giá rủi ro tín dụng của khách hàng vay vốn từ hàng trăm biến số tài chính.' }
    ],
    benefits: [
      'Khả năng thích ứng linh hoạt khi luồng dữ liệu liên tục thay đổi',
      'Phát hiện tương quan phi tuyến tính tinh vi giữa các biến số độc lập',
      'Khả năng mở rộng quy mô xử lý hàng tỷ bản ghi dữ liệu mỗi ngày'
    ],
    challenges: [
      'Phụ thuộc lớn vào chất lượng và tính đại diện của tập dữ liệu huấn luyện',
      'Nguy cơ quá khớp (Overfitting) dẫn đến hiệu năng kém trên dữ liệu thực tế mới',
      'Đòi hỏi kỹ thuật kiểm thử và giám sát trôi dạt dữ liệu (Data Drift) khắt khe'
    ],
    socialImpact: 'Giúp các quyết định định lượng trở nên minh bạch và chuẩn hóa hơn trong khoa học, nghiên cứu khí hậu và quản trị rủi ro vĩ mô.',
    futureOutlook: 'Tích hợp sâu với Edge AI nhằm suy luận tức thời trên các thiết bị cảm biến ngoại vi với mức tiêu thụ điện năng tối thiểu.',
    keyStats: [
      { label: 'Số thuật toán nền tảng cốt lõi', value: '150+' },
      { label: 'Độ trễ suy luận trên thiết bị biên', value: '<5ms' },
      { label: 'Tỷ lệ ứng dụng trong FinTech', value: '91%' }
    ]
  },
  {
    id: 'generative-ai',
    name: 'AI Tạo sinh (Generative AI)',
    englishName: 'Generative AI',
    category: 'ai_data',
    categoryLabel: 'Trí tuệ & Dữ liệu',
    shortDesc: 'Các mô hình nền tảng có khả năng sáng tạo nội dung mới chân thực như văn bản, mã lập trình, âm thanh, hình ảnh và video 3D từ ngữ cảnh tự nhiên.',
    iconName: 'Sparkles',
    accentColor: '#a855f7', // Purple
    maturityLevel: 'Thương mại hóa',
    maturityPercent: 85,
    trendScore: 98,
    howItWorks: 'Dựa trên kiến trúc Transformer và mô hình khuếch tán (Diffusion Models) được tiền huấn luyện trên hàng nghìn tỷ token văn hóa nhân loại, kết hợp tinh chỉnh RLHF (học tăng cường từ phản hồi người).',
    applications: [
      { domain: 'Lập trình', title: 'Trợ lý viết mã & gỡ lỗi tự động', description: 'Tự động tạo boilerplate code, giải thích thuật toán và tìm lỗi bảo mật trong vài giây.' },
      { domain: 'Thiết kế & Điện ảnh', title: 'Sáng tạo tài nguyên thị giác', description: 'Sản xuất concept art, storyboard và dựng hình không gian ảo từ mô tả ý tưởng.' },
      { domain: 'Giáo dục', title: 'Gia sư tương tác 1-kèm-1', description: 'Tạo giáo án cá nhân hóa theo tốc độ tiếp thu của từng học sinh.' }
    ],
    benefits: [
      'Rút ngắn chu kỳ phát triển sản phẩm từ hàng tháng xuống vài ngày',
      'Dân chủ hóa khả năng sáng tạo kỹ thuật số cho mọi người',
      'Mở ra phương thức giao tiếp người-máy hoàn toàn mới bằng ngôn ngữ tự nhiên'
    ],
    challenges: [
      'Hiện tượng ảo giác thông tin (Hallucination) dẫn đến dữ liệu sai lệch',
      'Bản quyền sở hữu trí tuệ đối với dữ liệu huấn luyện và sản phẩm sinh ra',
      'Rủi ro lan truyền deepfake và tin giả mạo quy mô lớn'
    ],
    socialImpact: 'Thúc đẩy sự tái định nghĩa về sự sáng tạo của con người và thiết lập các chuẩn mực mới về đạo đức truyền thông số.',
    futureOutlook: 'Mô hình đa phương thức liền mạch (Native Multimodal) hiểu ngữ cảnh kết hợp giọng nói, cử chỉ, camera thời gian thực với độ trễ cực thấp.',
    keyStats: [
      { label: 'Tốc độ tăng trưởng hàng năm (CAGR)', value: '42%' },
      { label: 'Tiết kiệm thời gian soạn thảo code', value: '55%' },
      { label: 'Số lượng tokens xử lý toàn cầu', value: 'Hàng nghìn tỷ/ngày' }
    ]
  },
  {
    id: 'robotics',
    name: 'Robot & Tự động hóa',
    englishName: 'Robotics & Automation',
    category: 'hardware_robotics',
    categoryLabel: 'Phần cứng & Robot',
    shortDesc: 'Sự kết hợp giữa cơ khí chính xác, cảm biến thị giác và AI tạo ra thế hệ robot tự hành, robot hình người và cobot hợp tác an toàn.',
    iconName: 'Bot',
    accentColor: '#06b6d4', // Cyan
    maturityLevel: 'Đang phát triển nhanh',
    maturityPercent: 75,
    trendScore: 92,
    howItWorks: 'Robot tích hợp hệ thống truyền động cơ điện tử, cảm biến LiDAR/camera RGBD để lập bản đồ môi trường (SLAM), cùng bộ não AI điều khiển khớp nối bằng mạng nơ-ron không gian 3 chiều.',
    applications: [
      { domain: 'Sản xuất & Kho vận', title: 'Robot tự hành trong nhà kho (AMR)', description: 'Tự động phân loại, xếp dỡ và vận chuyển hàng triệu kiện hàng trong các trung tâm logistics khổng lồ.' },
      { domain: 'Phẫu thuật y khoa', title: 'Cánh tay phẫu thuật nội soi siêu tinh vi', description: 'Triệt tiêu rung tay của bác sĩ, thao tác đường rạch milimet giúp vết mổ nhanh lành.' },
      { domain: 'Khám phá cứu nạn', title: 'Robot cứu hộ đa địa hình', description: 'Tiếp cận vùng sạt lở hoặc nhà máy rò rỉ hóa chất độc hại để tìm kiếm nạn nhân.' }
    ],
    benefits: [
      'Thay thế con người trong các môi trường nguy hiểm, độc hại và ô nhiễm',
      'Độ lặp lại và chính xác chuẩn cơ khí đến từng micromet',
      'Giải quyết tình trạng thiếu hụt nhân lực lao động chân tay trong xã hội già hóa'
    ],
    challenges: [
      'Chi phí đầu tư phần cứng và cảm biến ban đầu còn rất lớn',
      'Khả năng khéo léo của bàn tay robot (Dexterous manipulation) vẫn thua con người',
      'Vấn đề an toàn tuyệt đối khi tương tác trực tiếp cạnh con người'
    ],
    socialImpact: 'Tạo bước nhảy vọt trong chuỗi cung ứng sản xuất hàng hóa giá rẻ, song song với việc nâng cao tiêu chuẩn an toàn lao động toàn xã hội.',
    futureOutlook: 'Robot hình người phổ thông (General-purpose Humanoids) tham gia trợ giúp việc gia đình, chăm sóc người cao tuổi và xây dựng công trình.',
    keyStats: [
      { label: 'Số robot công nghiệp lắp đặt mới 2025', value: '620,000+' },
      { label: 'Độ chính xác cánh tay phẫu thuật', value: '0.01 mm' },
      { label: 'Thời lượng pin thế hệ mới', value: '8 - 12 giờ' }
    ]
  },
  {
    id: 'internet-of-things',
    name: 'Vạn vật kết nối (IoT)',
    englishName: 'Internet of Things',
    category: 'hardware_robotics',
    categoryLabel: 'Phần cứng & Robot',
    shortDesc: 'Mạng lưới hàng chục tỷ thiết bị vật lý được tích hợp cảm biến, vi xử lý và kết nối mạng để thu thập dữ liệu và tự động phản hồi môi trường.',
    iconName: 'Network',
    accentColor: '#10b981', // Emerald
    maturityLevel: 'Phổ biến rộng rãi',
    maturityPercent: 90,
    trendScore: 84,
    howItWorks: 'Các vi điều khiển thu thập thông số (nhiệt, ẩm, áp suất, độ rung), chuyển đổi tín hiệu analog sang số, đóng gói truyền qua giao thức nhẹ (MQTT, CoAP, Zigbee, LoRaWAN) lên nền tảng đám mây phân tích.',
    applications: [
      { domain: 'Đô thị thông minh', title: 'Hệ thống cấp thoát nước & đèn đường thông minh', description: 'Tự động giảm độ sáng khi không có người và cảm biến cảnh báo nguy cơ ngập úng đường phố.' },
      { domain: 'Nông nghiệp chính xác', title: 'Cảm biến dinh dưỡng đất & tưới tự động', description: 'Đo lường độ ẩm và độ phì nhiêu từng mét vuông đất canh tác để tối ưu hóa phân bón.' },
      { domain: 'Chăm sóc sức khỏe cá nhân', title: 'Thiết bị đeo y tế theo dõi nhịp tim 24/7', description: 'Cảnh báo rung nhĩ và điện tâm đồ dị thường trực tiếp tới điện thoại bác sĩ.' }
    ],
    benefits: [
      'Số hóa và giám sát trạng thái thế giới thực liên tục',
      'Tiết kiệm tài nguyên điện, nước và năng lượng qua cơ chế điều tiết tự động',
      'Nâng cao chất lượng cuộc sống hàng ngày qua hệ thống tiện ích thông minh'
    ],
    challenges: [
      'Lỗ hổng an ninh mạng do hàng triệu thiết bị giá rẻ thiếu firmware bảo mật',
      'Tính tương thích giữa các chuẩn giao thức phân mảnh của các nhà sản xuất',
      'Vấn đề rác thải điện tử từ hàng tỷ cảm biến dùng một lần'
    ],
    socialImpact: 'Biến không gian sống, làm việc và các thành phố thành các cơ thể kỹ thuật số có khả năng tự cảm nhận và thích ứng.',
    futureOutlook: 'Kỷ nguyên Ambient Intelligence - công nghệ ẩn chìm vào không gian sống, phục vụ con người vô hình mà không cần điều khiển thủ công qua ứng dụng.',
    keyStats: [
      { label: 'Tổng số thiết bị kết nối toàn cầu', value: '32+ tỷ thiết bị' },
      { label: 'Lượng dữ liệu phát sinh hàng năm', value: '80 Zettabytes' },
      { label: 'Mức tiết kiệm năng lượng tòa nhà', value: '25 - 40%' }
    ]
  },
  {
    id: 'virtual-reality',
    name: 'Thực tế ảo (VR)',
    englishName: 'Virtual Reality',
    category: 'hardware_robotics',
    categoryLabel: 'Phần cứng & Robot',
    shortDesc: 'Môi trường 3D giả lập hoàn toàn bằng máy tính, đưa người dùng vào không gian sống động thông qua kính thực tế ảo và thiết bị phản hồi xúc giác.',
    iconName: 'Glasses',
    accentColor: '#ec4899', // Pink
    maturityLevel: 'Thương mại hóa',
    maturityPercent: 78,
    trendScore: 82,
    howItWorks: 'Màn hình độ phân giải Micro-OLED siêu nét kết hợp ống kính pancake hiển thị hình ảnh lập thể riêng cho từng mắt, cảm biến con quay hồi chuyển 6 DoF theo dõi chính xác từng chuyển động đầu.',
    applications: [
      { domain: 'Huấn luyện hàng không & quân sự', title: 'Mô phỏng bay buồng lái thực tế', description: 'Phi công tập luyện xử lý các tình huống động cơ cháy nổ nguy hiểm mà không gặp rủi ro sinh mạng.' },
      { domain: 'Y học', title: 'Trị liệu tâm lý chứng sợ độ cao/chấn thương', description: 'Liệu pháp phơi nhiễm có kiểm soát trong không gian giả lập an toàn.' },
      { domain: 'Thiết kế kiến trúc', title: 'Dạo bước tham quan công trình trước khi xây', description: 'Chủ đầu tư trải nghiệm không gian thực tế quy mô 1:1 ngay từ bản vẽ thiết kế.' }
    ],
    benefits: [
      'Độ nhập vai và tập trung thị giác đạt mức tối đa',
      'Giảm thiểu chi phí vật tư và trang thiết bị thực địa trong đào tạo',
      'Xóa nhòa khoảng cách địa lý trong làm việc nhóm không gian 3 chiều'
    ],
    challenges: [
      'Chứng say chuyển động (Motion sickness) khi độ trễ khung hình chưa hoàn hảo',
      'Khối lượng kính đeo vẫn còn gây mỏi cổ khi dùng liên tục nhiều giờ',
      'Chi phí cho dàn phần cứng kính và trạm đồ họa chuyên dụng còn tương đối cao'
    ],
    socialImpact: 'Thay đổi cách thức đào tạo tay nghề kỹ thuật cao, từ phi công đến bác sĩ phẫu thuật thần kinh, giảm thiểu tai nạn thực địa.',
    futureOutlook: 'Kính thực tế ảo nhẹ như kính cận thông thường, tích hợp cảm biến sóng não (EEG) và găng tay xúc giác truyền cảm giác nóng lạnh và độ cứng vật thể.',
    keyStats: [
      { label: 'Tần số quét màn hình tối ưu', value: '120 Hz' },
      { label: 'Độ trễ truyền động tới mắt (Motion-to-Photon)', value: '<12ms' },
      { label: 'Hiệu quả ghi nhớ trong đào tạo VR', value: '+75% so với sách vở' }
    ]
  },
  {
    id: 'augmented-reality',
    name: 'Thực tế tăng cường (AR)',
    englishName: 'Augmented Reality',
    category: 'hardware_robotics',
    categoryLabel: 'Phần cứng & Robot',
    shortDesc: 'Công nghệ hòa trộn các yếu tố kỹ thuật số (hình ảnh 3D, dữ liệu, bảng chỉ dẫn) vào thế giới thực ngay trước mắt người xem theo thời gian thực.',
    iconName: 'View',
    accentColor: '#f59e0b', // Amber
    maturityLevel: 'Đang phát triển nhanh',
    maturityPercent: 76,
    trendScore: 88,
    howItWorks: 'Sử dụng công nghệ ống dẫn sóng quang học (Waveguide) và cảm biến LiDAR/ToF để phân tích mặt phẳng vật lý xung quanh, neo các vật thể kỹ thuật số với tọa độ không gian chính xác.',
    applications: [
      { domain: 'Sửa chữa công nghiệp', title: 'Hiển thị sơ đồ dây điện nổi trên máy bay', description: 'Kỹ sư đeo kính nhìn thẳng thấy hướng dẫn từng bước và vị trí ốc vít cần vặn.' },
      { domain: 'Thương mại bán lẻ', title: 'Thử đồ nội thất ảo trong phòng khách', description: 'Xem trực tiếp bộ sofa có vừa với kích thước phòng khách và tông màu tường nhà hay không.' },
      { domain: 'Dẫn đường thông minh', title: 'Mũi tên chỉ đường nổi trên mặt đường phố', description: 'Mũi tên 3D xuất hiện ngay trên làn xe hoặc lối đi bộ qua kính chắn gió HUD.' }
    ],
    benefits: [
      'Không tách rời người dùng khỏi thế giới thực xung quanh',
      'Cung cấp thông tin theo ngữ cảnh đúng lúc, đúng vị trí cần thao tác',
      'Giải phóng đôi tay của kỹ sư và bác sĩ trong lúc làm việc'
    ],
    challenges: [
      'Khó khăn trong hiển thị hình ảnh rõ nét dưới ánh sáng mặt trời gay gắt ngoài trời',
      'Thời lượng pin bị giới hạn trong khung kính nhỏ nhẹ thời trang',
      'Quyền riêng tư cá nhân khi kính liên tục quét camera nơi công cộng'
    ],
    socialImpact: 'Biến mọi bề mặt vật lý thành màn hình tương tác, dần thay thế sự thống trị của màn hình smartphone trong tương lai.',
    futureOutlook: 'Kính áp tròng thông minh AR hiển thị tin nhắn, nhịp tim và dữ liệu thời tiết trực tiếp lên võng mạc mắt người dùng.',
    keyStats: [
      { label: 'Độ sáng thấu kính hiển thị ngoài trời', value: '4000 nits' },
      { label: 'Tỷ lệ người dùng smartphone dùng AR mỗi tuần', value: '40%' },
      { label: 'Mức tăng tốc độ sửa chữa của kỹ thuật viên', value: '30 - 45%' }
    ]
  },
  {
    id: 'blockchain',
    name: 'Công nghệ Chuỗi khối (Blockchain)',
    englishName: 'Blockchain & Distributed Ledger',
    category: 'network_cloud',
    categoryLabel: 'Mạng & Hạ tầng',
    shortDesc: 'Cơ sở dữ liệu phi tập trung, mã hóa bảo mật, đảm bảo tính toàn vẹn và bất biến của dữ liệu mà không cần sự can thiệp của bên trung gian.',
    iconName: 'Blocks',
    accentColor: '#f97316', // Orange
    maturityLevel: 'Thương mại hóa',
    maturityPercent: 80,
    trendScore: 78,
    howItWorks: 'Dữ liệu được gom thành từng khối (block), liên kết với nhau bằng hàm băm mật mã (Cryptographic Hash). Các nút trong mạng lưới đạt được đồng thuận qua các thuật toán như Proof of Stake (PoS).',
    applications: [
      { domain: 'Chuỗi cung ứng toàn cầu', title: 'Truy xuất nguồn gốc thực phẩm & dược phẩm', description: 'Theo dõi hành trình từng bao cà phê hoặc liều vắc-xin từ nhà sản xuất tới tận tay người tiêu dùng.' },
      { domain: 'Tài chính phi tập trung (DeFi)', title: 'Hợp đồng thông minh tự thực thi (Smart Contracts)', description: 'Vay mượn, thanh toán xuyên biên giới tức thời với chi phí thấp mà không qua ngân hàng trung gian.' },
      { domain: 'Danh tính số', title: 'Chủ quyền danh tính cá nhân (Self-Sovereign Identity)', description: 'Công dân kiểm soát toàn quyền thông tin hộ chiếu và bằng cấp của mình.' }
    ],
    benefits: [
      'Tính minh bạch tuyệt đối và bất biến: không thể sửa đổi lịch sử dữ liệu đã ghi',
      'Loại bỏ chi phí trung gian và thời gian chờ đợi đối soát thủ công',
      'Khả năng chống chịu sự cố cao: không có điểm chết đơn lẻ (Single point of failure)'
    ],
    challenges: [
      'Khả năng mở rộng số lượng giao dịch mỗi giây (TPS) vẫn cần tiếp tục cải thiện',
      'Trải nghiệm người dùng (UX) quản lý khóa bí mật (Private key) còn phức tạp',
      'Hành lang pháp lý và quy định về tài sản số chưa đồng bộ giữa các quốc gia'
    ],
    socialImpact: 'Kiến tạo niềm tin số (Digital Trust) giữa các bên chưa từng quen biết nhau trên không gian mạng.',
    futureOutlook: 'Mạng lưới chuỗi khối tương tác đa chuỗi (Interoperability) kết hợp công nghệ Zero-Knowledge Proofs bảo vệ quyền riêng tư tuyệt đối.',
    keyStats: [
      { label: 'Tốc độ xử lý mạng Layer 2', value: '10,000+ TPS' },
      { label: 'Mức giảm khí thải sau khi chuyển sang PoS', value: '99.9%' },
      { label: 'Giá trị tài sản mã hóa lưu ký toàn cầu', value: 'Hàng nghìn tỷ $' }
    ]
  },
  {
    id: 'cloud-computing',
    name: 'Điện toán đám mây (Cloud Computing)',
    englishName: 'Cloud & Edge Computing',
    category: 'network_cloud',
    categoryLabel: 'Mạng & Hạ tầng',
    shortDesc: 'Mô hình cung cấp tài nguyên công nghệ thông tin (máy chủ, lưu trữ, mạng, AI) theo nhu cầu qua Internet với khả năng co giãn linh hoạt.',
    iconName: 'Cloud',
    accentColor: '#38bdf8',
    maturityLevel: 'Phổ biến rộng rãi',
    maturityPercent: 95,
    trendScore: 86,
    howItWorks: 'Ảo hóa phần cứng vật lý thành các cụm tài nguyên phần mềm có thể cấp phát trong giây lát thông qua API, kiến trúc vi dịch vụ (Microservices) và hệ thống không máy chủ (Serverless).',
    applications: [
      { domain: 'Hệ thống doanh nghiệp', title: 'Vận hành phần mềm SaaS toàn cầu', description: 'Cho phép hàng triệu nhân viên làm việc từ xa cộng tác mượt mà trên cùng nền tảng.' },
      { domain: 'Dữ liệu lớn', title: 'Lưu trữ hồ dữ liệu (Data Lakes)', description: 'Lưu trữ Petabytes dữ liệu phục vụ huấn luyện các mô hình AI tiên tiến.' },
      { domain: 'Nền tảng Streaming', title: 'Phát video 4K độ trễ cực thấp', description: 'Tự động mở rộng hàng chục nghìn máy chủ khi có các sự kiện thể thao trực tiếp đông người xem.' }
    ],
    benefits: [
      'Chuyển đổi chi phí đầu tư hạ tầng cố định (CapEx) sang chi phí vận hành linh hoạt (OpEx)',
      'Khả năng phục hồi thảm họa và sao lưu dự phòng phân tán toàn cầu',
      'Triển khai ứng dụng ra thị trường quốc tế chỉ với vài cú nhấp chuột'
    ],
    challenges: [
      'Rủi ro phụ thuộc vào một nhà cung cấp duy nhất (Vendor lock-in)',
      'Khó khăn trong việc kiểm soát tối ưu hóa chi phí đám mây tăng vọt',
      'Quy định nghiêm ngặt về vị trí địa lý lưu trữ dữ liệu công dân (Data Sovereignty)'
    ],
    socialImpact: 'Là xương sống vững chắc hỗ trợ cho mọi tiến bộ công nghệ khác như AI, Big Data và IoT vận hành trơn tru.',
    futureOutlook: 'Sự hội tụ giữa Cloud và Edge Computing, đẩy sức mạnh điện toán ra sát thiết bị người dùng để loại bỏ độ trễ vật lý.',
    keyStats: [
      { label: 'Tỷ lệ tải công việc doanh nghiệp chạy trên Cloud', value: '85%' },
      { label: 'Thời gian sẵn sàng hoạt động (SLA)', value: '99.999%' },
      { label: 'Quy mô thị trường toàn cầu', value: '$700+ tỷ' }
    ]
  },
  {
    id: 'big-data',
    name: 'Dữ liệu lớn (Big Data)',
    englishName: 'Big Data & Real-time Analytics',
    category: 'ai_data',
    categoryLabel: 'Trí tuệ & Dữ liệu',
    shortDesc: 'Tập hợp dữ liệu có khối lượng siêu lớn, tốc độ phát sinh liên tục và đa dạng định dạng mà các phần mềm xử lý dữ liệu truyền thống không thể đảm đương.',
    iconName: 'Database',
    accentColor: '#0ea5e9',
    maturityLevel: 'Phổ biến rộng rãi',
    maturityPercent: 91,
    trendScore: 85,
    howItWorks: 'Dựa trên mô hình tính toán phân tán (Distributed Computing) như Spark, Kafka để xử lý luồng dữ liệu thời gian thực (Streaming Analytics) và trích xuất tri thức giá trị kinh doanh.',
    applications: [
      { domain: 'Thời tiết & Khí hậu', title: 'Mô phỏng khí tượng & cảnh báo bão', description: 'Xử lý dữ liệu từ hàng vạn vệ tinh khí tượng để dự báo đường đi bão trước 7-10 ngày.' },
      { domain: 'Y tế cộng đồng', title: 'Truy vết dịch bệnh truyền nhiễm', description: 'Phân tích dữ liệu di chuyển và ca bệnh để khoanh vùng ổ dịch kịp thời.' },
      { domain: 'Quy hoạch đô thị', title: 'Phân tích luồng dân cư', description: 'Tối ưu hóa các tuyến xe buýt và vị trí xây dựng trường học, bệnh viện mới.' }
    ],
    benefits: [
      'Ra quyết định dựa trên bằng chứng thực nghiệm thay vì phỏng đoán cảm tính',
      'Khám phá những xu hướng tiêu dùng tiềm ẩn sớm trước đối thủ',
      'Tối ưu hóa hiệu suất hoạt động trên toàn bộ chuỗi giá trị tổ chức'
    ],
    challenges: [
      'Vấn đề làm sạch dữ liệu nhiễu và chuẩn hóa dữ liệu phi cấu trúc',
      'Nguy cơ rò rỉ dữ liệu cá nhân nhạy cảm của người dùng',
      'Thiếu hụt kỹ sư dữ liệu (Data Engineers) trình độ cao'
    ],
    socialImpact: 'Giúp các chính phủ và tổ chức quốc tế ứng phó thông minh hơn với biến đổi khí hậu, nạn đói và khủng hoảng kinh tế.',
    futureOutlook: 'Tự động hóa luồng phân tích dữ liệu bằng AI (DataOps tự hành) và phân tích đồ thị quan hệ quy mô hàng tỷ liên kết.',
    keyStats: [
      { label: 'Lượng dữ liệu sinh ra mỗi ngày toàn cầu', value: '400+ Exabytes' },
      { label: 'Tỷ lệ dữ liệu phi cấu trúc (video, văn bản)', value: '80%' },
      { label: 'Tốc độ xử lý truy vấn phân tán', value: 'Hàng triệu bản ghi/giây' }
    ]
  },
  {
    id: 'quantum-computing',
    name: 'Điện toán lượng tử',
    englishName: 'Quantum Computing',
    category: 'future_frontier',
    categoryLabel: 'Tương lai & Đột phá',
    shortDesc: 'Khai thác các nguyên lý cơ học lượng tử như chồng chập và vướng víu để giải quyết những bài toán phức tạp mà siêu máy tính truyền thống cần hàng triệu năm.',
    iconName: 'Atom',
    accentColor: '#8b5cf6', // Violet
    maturityLevel: 'Thử nghiệm',
    maturityPercent: 42,
    trendScore: 94,
    howItWorks: 'Sử dụng bit lượng tử (Qubit). Khác với bit nhị phân cổ điển (0 hoặc 1), qubit có thể đồng thời ở trạng thái 0 và 1 (chồng chập lượng tử), xử lý song song hàm mũ không gian giải thuật.',
    applications: [
      { domain: 'Dược phẩm & Hóa học', title: 'Mô phỏng cấu trúc protein & chế tạo thuốc mới', description: 'Mô phỏng tương tác phân tử chính xác ở cấp độ hạ nguyên tử, rút ngắn 90% thời gian nghiên cứu thuốc.' },
      { domain: 'Khoa học vật liệu', title: 'Thiết kế pin xe điện mật độ năng lượng siêu cao', description: 'Phát hiện cấu trúc tinh thể mới cho pin thể rắn không cháy nổ.' },
      { domain: 'Tối ưu hóa logistics', title: 'Giải bài toán đường đi cho hàng triệu phương tiện', description: 'Tính toán tuyến đường tối ưu toàn cầu trong vài giây.' }
    ],
    benefits: [
      'Tốc độ tính toán tăng theo cấp số nhân so với máy tính thông thường',
      'Giải mã các bí ẩn cấu trúc phân tử và phản ứng sinh hóa tự nhiên',
      'Tạo bước nhảy vọt trong tối ưu hóa toán học phức tạp'
    ],
    challenges: [
      'Hiện tượng mất kết hợp lượng tử (Decoherence) do nhiệt độ và nhiễu từ trường',
      'Yêu cầu môi trường làm lạnh siêu sâu gần độ không tuyệt đối (-273.15°C)',
      'Nguy cơ phá vỡ các chuẩn mã hóa bảo mật RSA hiện hành của Internet'
    ],
    socialImpact: 'Mở ra cuộc cách mạng trong y học cá nhân hóa và hóa học xanh, đồng thời đòi hỏi nâng cấp toàn cầu sang mật mã hậu lượng tử (Post-Quantum Cryptography).',
    futureOutlook: 'Đạt mốc máy tính lượng tử chịu lỗi (Fault-Tolerant Quantum Computer) với hơn 1 triệu qubit vật lý vào thập niên 2030.',
    keyStats: [
      { label: 'Nhiệt độ hoạt động của buồng pha loãng', value: '15 Millikelvin' },
      { label: 'Mức tăng tốc độ giải thuật Shor', value: 'Gấp hàng tỷ lần' },
      { label: 'Đầu tư chính phủ & tập đoàn toàn cầu', value: '$45+ tỷ' }
    ]
  },
  {
    id: '5g-6g-networks',
    name: 'Mạng viễn thông 5G & 6G',
    englishName: 'Next-Gen Telecom 5G/6G',
    category: 'network_cloud',
    categoryLabel: 'Mạng & Hạ tầng',
    shortDesc: 'Hạ tầng kết nối không dây thế hệ mới với băng thông cực rộng, mật độ kết nối dày đặc và độ trễ phản hồi tính bằng mili-giây.',
    iconName: 'Radio',
    accentColor: '#0284c7',
    maturityLevel: 'Thương mại hóa',
    maturityPercent: 82,
    trendScore: 87,
    howItWorks: '5G sử dụng dải sóng milimet (mmWave) và ăng-ten đa ngõ Massive MIMO kết hợp phân lát mạng (Network Slicing). 6G sẽ mở rộng lên dải tần số Terahertz (THz) tích hợp mạng vệ tinh quỹ đạo thấp.',
    applications: [
      { domain: 'Y tế từ xa', title: 'Phẫu thuật từ xa qua cánh tay robot', description: 'Bác sĩ tại bệnh viện trung ương mổ cho bệnh nhân ở hải đảo với độ trễ phản hồi xúc giác dưới 2ms.' },
      { domain: 'Giao thông tự hành', title: 'Giao tiếp V2X (Vehicle-to-Everything)', description: 'Xe tự lái liên tục chia sẻ vị trí và thông số cảm biến cho nhau để chống va chạm ở ngã tư.' },
      { domain: 'Công nghiệp thông minh', title: 'Mạng 5G chuyên dụng (Private 5G)', description: 'Thay thế hoàn toàn cáp mạng trong nhà máy tự động hóa cao.' }
    ],
    benefits: [
      'Tốc độ tải xuống vượt 10 Gbps (và hướng tới 1 Tbps trên 6G)',
      'Độ trễ truyền tín hiệu cực thấp (Ultra-reliable low-latency communication - URLLC)',
      'Hỗ trợ kết nối đồng thời 1 triệu thiết bị trên mỗi kilomet vuông'
    ],
    challenges: [
      'Khoảng cách phủ sóng của sóng tần số cao ngắn, cần số lượng trạm gốc (Small cells) rất lớn',
      'Chi phí đầu tư cơ sở hạ tầng mạng viễn thông cực kỳ đắt đỏ',
      'Vấn đề tiêu thụ năng lượng của các trạm thu phát sóng công suất cao'
    ],
    socialImpact: 'Thu hẹp khoảng cách số nông thôn - thành thị và tạo tiền đề hạ tầng cho xe tự lái và xã hội thông minh vận hành trơn tru.',
    futureOutlook: 'Mạng 6G tích hợp cảm nhận môi trường (Integrated Sensing and Communication) biến mạng di động thành một hệ thống radar bao phủ toàn cầu.',
    keyStats: [
      { label: 'Độ trễ mục tiêu 5G URLLC', value: '<1 ms' },
      { label: 'Tốc độ đỉnh dự kiến mạng 6G', value: '1,000 Gbps' },
      { label: 'Mật độ kết nối thiết bị IoT', value: '10 triệu / km²' }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'An ninh mạng & Bảo mật số',
    englishName: 'Cybersecurity & Zero Trust',
    category: 'network_cloud',
    categoryLabel: 'Mạng & Hạ tầng',
    shortDesc: 'Tập hợp các giải pháp, quy trình và công nghệ bảo vệ hệ thống mạng, thiết bị, chương trình và dữ liệu trước các cuộc tấn công số hóa tinh vi.',
    iconName: 'ShieldAlert',
    accentColor: '#14b8a6', // Teal
    maturityLevel: 'Phổ biến rộng rãi',
    maturityPercent: 94,
    trendScore: 91,
    howItWorks: 'Triển khai mô hình kiến trúc Không tin cậy (Zero Trust: "Không tin ai, luôn luôn xác thực"), ứng dụng AI nhận diện bất thường hành vi người dùng (UEBA) và mật mã học đa lớp.',
    applications: [
      { domain: 'Hạ tầng trọng yếu quốc gia', title: 'Bảo vệ lưới điện & nhà máy nước', description: 'Ngăn chặn các cuộc tấn công mạng phá hoại từ các nhóm hacker được nhà nước tài trợ.' },
      { domain: 'Tài chính - Ngân hàng', title: 'Phòng chống mã độc tống tiền (Ransomware)', description: 'Tự động cô lập các máy tính nhiễm mã độc chỉ trong vài giây trước khi lây lan toàn hệ thống.' },
      { domain: 'Bảo vệ danh tính cá nhân', title: 'Xác thực không mật khẩu (Passkeys / FIDO2)', description: 'Loại bỏ hoàn toàn nguy cơ bị lừa đảo chiếm đoạt mật khẩu truyền thống.' }
    ],
    benefits: [
      'Bảo vệ tài sản trí tuệ và bí mật kinh doanh của doanh nghiệp',
      'Đảm bảo sự liên tục trong vận hành kinh tế số quốc gia',
      'Xây dựng niềm tin số để người tiêu dùng an tâm giao dịch trên Internet'
    ],
    challenges: [
      'Hacker cũng ứng dụng AI tạo sinh để tạo mã độc biến hình và email lừa đảo tinh vi',
      'Thiếu hụt trầm trọng nhân lực an ninh mạng chuyên môn sâu trên phạm vi toàn cầu',
      'Sự phức tạp khi quản trị bảo mật trên môi trường đa đám mây hỗn hợp'
    ],
    socialImpact: 'Là lá chắn bảo vệ quyền riêng tư cá nhân và trật tự an ninh của toàn bộ xã hội số hiện đại.',
    futureOutlook: 'Hệ thống phòng thủ tự hành bằng AI (Autonomous Cyber Defense) có khả năng tự động viết bản vá lỗi và phản công ngăn chặn tin tặc theo thời gian thực.',
    keyStats: [
      { label: 'Thiệt hại kinh tế do tội phạm mạng toàn cầu', value: '$10.5 nghìn tỷ/năm' },
      { label: 'Tỷ lệ tấn công dùng kỹ thuật AI tạo sinh', value: '+300%' },
      { label: 'Thời gian phát hiện và ngăn chặn trung bình', value: '<15 phút' }
    ]
  },
  {
    id: 'autonomous-vehicles',
    name: 'Xe tự hành & Giao thông thông minh',
    englishName: 'Autonomous Vehicles',
    category: 'hardware_robotics',
    categoryLabel: 'Phần cứng & Robot',
    shortDesc: 'Phương tiện giao thông có khả năng tự nhận biết môi trường xung quanh và di chuyển an toàn mà không cần sự can thiệp của tài xế con người.',
    iconName: 'Car',
    accentColor: '#3b82f6',
    maturityLevel: 'Đang phát triển nhanh',
    maturityPercent: 73,
    trendScore: 89,
    howItWorks: 'Hợp nhất dữ liệu cảm biến đa tầng (Sensor Fusion) từ LiDAR, Radar và Camera 360 độ đưa vào mạng nơ-ron sâu để dự đoán quỹ đạo các vật thể xung quanh và điều khiển vô-lăng, chân phanh.',
    applications: [
      { domain: 'Giao thông công cộng', title: 'Đội xe Robotaxi thương mại', description: 'Đón trả khách tự động suốt 24/7 không cần tài xế tại San Francisco, Bắc Kinh, Thâm Quyến.' },
      { domain: 'Vận tải hàng hóa đường dài', title: 'Xe tải tự hành chạy đường cao tốc', description: 'Vận chuyển container xuyên đêm an toàn, tiết kiệm 15% nhiên liệu nhờ chạy đều ga.' },
      { domain: 'Giao hàng chặng cuối', title: 'Robot giao đồ ăn vỉa hè', description: 'Tự động mang bưu phẩm và đồ ăn tận cửa nhà người dân trong khu dân cư.' }
    ],
    benefits: [
      'Giảm thiểu trên 90% tai nạn giao thông xuất phát từ lỗi con người (uống rượu bia, mất tập trung)',
      'Tối ưu hóa lưu lượng xe trên đường, giảm ùn tắc và khí thải nhà kính',
      'Đem lại khả năng di chuyển độc lập cho người khuyết tật và người cao tuổi'
    ],
    challenges: [
      'Xử lý các tình huống bất thường hiếm gặp (Corner cases) như thời tiết bão tuyết mù mịt',
      'Vấn đề đạo đức khi xe bắt buộc phải đưa ra quyết định va chạm bất khả kháng',
      'Hành lang pháp lý quy định trách nhiệm bồi thường khi xảy ra sự cố'
    ],
    socialImpact: 'Thay đổi diện mạo quy hoạch đô thị: giảm diện tích bãi đỗ xe để nhường chỗ cho công viên cây xanh và không gian công cộng.',
    futureOutlook: 'Xe tự hành Cấp độ 5 (Level 5 Full Automation) không còn vô lăng hay bàn đạp, trở thành văn phòng làm việc và phòng giải trí di động.',
    keyStats: [
      { label: 'Số dặm tự hành an toàn thử nghiệm', value: '100+ triệu dặm' },
      { label: 'Mức giảm tai nạn so với tài xế con người', value: '-85%' },
      { label: 'Thời gian tiết kiệm cho mỗi người/năm', value: '250 giờ' }
    ]
  },
  {
    id: 'biotechnology',
    name: 'Công nghệ sinh học & Kỹ thuật gen',
    englishName: 'Biotechnology & Gene Editing',
    category: 'bio_green',
    categoryLabel: 'Sinh học & Môi trường',
    shortDesc: 'Ứng dụng các quy trình sinh học và kỹ thuật chỉnh sửa gen (CRISPR) để điều trị bệnh hiểm nghèo, sản xuất vắc-xin và nông nghiệp bền vững.',
    iconName: 'Dna',
    accentColor: '#10b981',
    maturityLevel: 'Đang phát triển nhanh',
    maturityPercent: 77,
    trendScore: 93,
    howItWorks: 'Sử dụng công cụ kéo phân tử CRISPR-Cas9 và công nghệ mRNA để cắt sửa chính xác các đoạn ADN lỗi gây bệnh di truyền, hoặc tổng hợp các enzyme sinh học mới trong phòng lab.',
    applications: [
      { domain: 'Y học chính xác', title: 'Liệu pháp gen chữa bệnh tan máu bẩm sinh', description: 'Sửa lỗi mã gen trong tế bào gốc tủy xương của bệnh nhân giúp phục hồi sản sinh hồng cầu khỏe mạnh.' },
      { domain: 'Nông nghiệp khí hậu', title: 'Cây trồng biến đổi gen chịu hạn mặn', description: 'Tạo ra các giống lúa và ngô vẫn cho năng suất cao trên các cánh đồng bị nhiễm mặn ven biển.' },
      { domain: 'Vật liệu sinh học', title: 'Nhựa tự hủy sinh học từ vi khuẩn', description: 'Sản xuất bao bì tự phân hủy hoàn toàn trong đất chỉ sau 6 tháng không để lại vi nhựa.' }
    ],
    benefits: [
      'Khả năng chữa dứt điểm tận gốc các căn bệnh di truyền mãn tính nguy hiểm',
      'Bảo đảm an ninh lương thực toàn cầu trước áp lực biến đổi khí hậu khắc nghiệt',
      'Giảm sự phụ thuộc vào hóa chất công nghiệp và phân bón gốc dầu mỏ'
    ],
    challenges: [
      'Các câu hỏi đạo đức sinh học về việc chỉnh sửa gen phôi thai người ("thiết kế trẻ em")',
      'Chi phí điều trị các liệu pháp gen thế hệ mới hiện nay vẫn ở mức hàng triệu USD/ca',
      'Tác động tiềm ẩn lâu dài đối với cân bằng đa dạng sinh học tự nhiên'
    ],
    socialImpact: 'Mở rộng tuổi thọ khỏe mạnh của con người và giải bài toán thiếu hụt lương thực cho 10 tỷ người trên Trái Đất.',
    futureOutlook: 'Sinh học tổng hợp (Synthetic Biology) cho phép lập trình tế bào sống như lập trình phần mềm máy tính để tạo ra các loại thuốc và năng lượng sạch.',
    keyStats: [
      { label: 'Thời gian thiết kế vắc-xin mRNA mới', value: '<60 ngày' },
      { label: 'Độ chính xác chỉnh sửa base di truyền', value: '>98%' },
      { label: 'Số liệu pháp gen được cấp phép lâm sàng', value: '45+ liệu pháp' }
    ]
  },
  {
    id: 'smart-home',
    name: 'Nhà thông minh (Smart Home)',
    englishName: 'Smart Home & Ambient Living',
    category: 'hardware_robotics',
    categoryLabel: 'Phần cứng & Robot',
    shortDesc: 'Hệ sinh thái thiết bị gia dụng tự động kết nối, tối ưu hóa năng lượng, ánh sáng, nhiệt độ và an ninh gia đình theo thói quen sinh hoạt của chủ nhà.',
    iconName: 'Home',
    accentColor: '#38bdf8',
    maturityLevel: 'Thương mại hóa',
    maturityPercent: 86,
    trendScore: 81,
    howItWorks: 'Các thiết bị gia dụng (đèn, điều hòa, khóa cửa, rèm) liên lạc qua chuẩn thống nhất Matter và Thread, kết hợp AI cục bộ để học thói quen thức dậy, về nhà và đi ngủ của các thành viên.',
    applications: [
      { domain: 'Quản lý năng lượng', title: 'Điều hòa & máy sưởi học thói quen', description: 'Tự động hạ công suất khi phòng không có người, giúp cắt giảm 30% hóa đơn tiền điện.' },
      { domain: 'An ninh gia đình', title: 'Khóa cửa nhận diện khuôn mặt & phát hiện khói AI', description: 'Cảnh báo rò rỉ khí gas hoặc có người lạ lảng vảng trực tiếp tới điện thoại gia chủ.' },
      { domain: 'Hỗ trợ người cao tuổi', title: 'Cảm biến radar phát hiện té ngã trong nhà', description: 'Gửi thông báo khẩn cấp cho người thân mà không cần dùng camera xâm phạm quyền riêng tư.' }
    ],
    benefits: [
      'Mang lại sự tiện nghi, thoải mái tối đa cho cuộc sống gia đình thường nhật',
      'Tiết kiệm đáng kể điện năng tiêu thụ và giảm phát thải carbon hộ gia đình',
      'Bảo vệ an toàn tính mạng và tài sản trước các nguy cơ cháy nổ, trộm cắp'
    ],
    challenges: [
      'Nguy cơ bị tin tặc xâm nhập vào camera và micro theo dõi đời tư gia đình',
      'Sự phức tạp khi kết hợp thiết bị của nhiều hãng nếu không theo chuẩn mở',
      'Thiết bị ngừng hoạt động thông minh khi mất kết nối Internet'
    ],
    socialImpact: 'Biến ngôi nhà thành tổ ấm chủ động chăm sóc sức khỏe thể chất và tinh thần cho mọi thế hệ gia đình.',
    futureOutlook: 'Nhà thông minh thấu cảm (Empathic Home) tự động điều chỉnh ánh sáng phổ sinh học và hương thơm dịu nhẹ khi phát hiện gia chủ bị căng thẳng sau ngày làm việc.',
    keyStats: [
      { label: 'Số hộ gia đình dùng thiết bị thông minh toàn cầu', value: '400+ triệu hộ' },
      { label: 'Tỷ lệ tiết kiệm điện năng sinh hoạt', value: '20 - 35%' },
      { label: 'Thời gian phản ứng cảnh báo nguy cấp', value: '<2 giây' }
    ]
  },
  {
    id: 'green-technology',
    name: 'Công nghệ Xanh & Năng lượng tái tạo',
    englishName: 'Green Tech & Clean Energy',
    category: 'bio_green',
    categoryLabel: 'Sinh học & Môi trường',
    shortDesc: 'Các sáng kiến khoa học nhằm giảm thiểu tác động tiêu cực đến môi trường: điện mặt trời hiệu suất cao, hydrogen xanh, thu giữ carbon và kinh tế tuần hoàn.',
    iconName: 'Leaf',
    accentColor: '#22c55e', // Green
    maturityLevel: 'Thương mại hóa',
    maturityPercent: 84,
    trendScore: 95,
    howItWorks: 'Ứng dụng vật liệu bán dẫn Perovskite nâng cao hiệu suất pin quang điện, điện phân nước bằng năng lượng tái tạo tạo hydrogen xanh, và màng lọc nano thu giữ trực tiếp khí CO2 từ không khí (DAC).',
    applications: [
      { domain: 'Lưới điện thông minh', title: 'Hệ thống pin lưu trữ năng lượng quy mô lưới (BESS)', description: 'Lưu trữ điện gió và mặt trời ban ngày để xả điện vào giờ cao điểm buổi tối.' },
      { domain: 'Công nghiệp nặng', title: 'Luyện thép xanh bằng hydro', description: 'Thay thế than cốc trong lò cao luyện thép, xả ra hơi nước thay vì hàng triệu tấn khí thải carbon.' },
      { domain: 'Hàng không bền vững', title: 'Nhiên liệu máy bay tổng hợp (SAF)', description: 'Tái tạo nhiên liệu phản lực từ CO2 thu giữ và rác thải nông nghiệp.' }
    ],
    benefits: [
      'Giảm thiểu trực tiếp lượng khí thải nhà kính nhằm ngăn chặn hiện tượng ấm lên toàn cầu',
      'Độc lập về an ninh năng lượng quốc gia, không phụ thuộc vào nhiên liệu hóa thạch nhập khẩu',
      'Tạo ra hàng triệu việc làm kỹ thuật mới trong nền kinh tế xanh tuần hoàn'
    ],
    challenges: [
      'Tính chất gián đoạn của năng lượng tái tạo phụ thuộc vào thời tiết gió và nắng',
      'Chi phí sản xuất hydrogen xanh và công nghệ thu giữ carbon hiện tại còn cao',
      'Nhu cầu lớn về các khoáng sản quý hiếm (lithium, coban, đất hiếm) để chế tạo pin'
    ],
    socialImpact: 'Cứu cánh then chốt để nhân loại đạt mục tiêu Net Zero vào năm 2050 và bảo tồn hành tinh cho các thế hệ tương lai.',
    futureOutlook: 'Năng lượng nhiệt hạch hạt nhân (Nuclear Fusion) cung cấp nguồn điện vô tận, hoàn toàn sạch và an toàn cho toàn nhân loại từ nước biển.',
    keyStats: [
      { label: 'Tỷ trọng năng lượng tái tạo toàn cầu 2025', value: '33%' },
      { label: 'Hiệu suất pin mặt trời Perovskite tandem', value: '>33%' },
      { label: 'Mức giảm giá thành điện mặt trời trong 10 năm qua', value: '-85%' }
    ]
  },
  {
    id: 'future-frontier',
    name: 'Công nghệ Tương lai & Biên giới',
    englishName: 'Frontier & Deep Tech',
    category: 'future_frontier',
    categoryLabel: 'Tương lai & Đột phá',
    shortDesc: 'Giao diện não - máy tính (BCI), siêu vật liệu biến ảo, động cơ đẩy không gian thế hệ mới và các công nghệ mở rộng giới hạn sinh học của con người.',
    iconName: 'Rocket',
    accentColor: '#a855f7',
    maturityLevel: 'Thử nghiệm',
    maturityPercent: 35,
    trendScore: 97,
    howItWorks: 'Các điện cực vi mô siêu mỏng cấy ghép vào vỏ não ghi nhận tín hiệu xung điện thần kinh, giải mã bằng AI thành lệnh điều khiển chuột máy tính hoặc cánh tay cơ học trong mili-giây.',
    applications: [
      { domain: 'Y học phục hồi thần kinh', title: 'Giao diện não - máy tính (BCI) cho người liệt', description: 'Cho phép bệnh nhân bại liệt tứ chi điều khiển máy tính và trò chuyện với gia đình chỉ bằng suy nghĩ.' },
      { domain: 'Khám phá vũ trụ', title: 'Tàu vũ trụ tái sử dụng hoàn toàn & căn cứ Mặt Trăng', description: 'Giảm 99% chi phí phóng hàng hóa lên quỹ đạo để xây dựng trạm nghiên cứu lâu dài trên Mặt Trăng.' },
      { domain: 'Khoa học vật liệu', title: 'Vật liệu Graphene siêu dẫn và siêu nhẹ', description: 'Vật liệu mỏng hơn tóc người 100,000 lần nhưng bền hơn thép gấp 200 lần và dẫn điện hoàn hảo.' }
    ],
    benefits: [
      'Phục hồi năng lực vận động và giao tiếp cho hàng triệu bệnh nhân tổn thương tủy sống',
      'Mở rộng không gian sinh tồn của nhân loại ra ngoài phạm vi Trái Đất',
      'Đột phá giới hạn vật lý về tốc độ truyền dẫn và sức bền cơ học vật liệu'
    ],
    challenges: [
      'Độ an toàn sinh học lâu dài khi cấy ghép thiết bị điện tử trực tiếp vào mô não người',
      'Rủi ro về đạo đức và an ninh tư tưởng nếu sóng não bị giải mã trái phép',
      'Môi trường khắc nghiệt của bức xạ vũ trụ và trọng lực thấp'
    ],
    socialImpact: 'Tái định nghĩa bản chất của con người (Transhumanism) và mở ra kỷ nguyên văn minh đa hành tinh trong thế kỷ 21.',
    futureOutlook: 'Sự cộng sinh trực tiếp giữa trí tuệ sinh học con người và trí tuệ nhân tạo (Synthetic Telepathy), kết nối mạng lưới suy nghĩ tập thể.',
    keyStats: [
      { label: 'Số điện cực ghi nhận tín hiệu não vi mô', value: '3,000+ sợi' },
      { label: 'Tốc độ gõ chữ bằng suy nghĩ đạt được', value: '90 ký tự/phút' },
      { label: 'Chi phí phóng lên quỹ đạo giảm xuống', value: '<$500 / kg' }
    ]
  }
];

export const TECH_CATEGORIES = [
  { id: 'all', label: 'Tất cả công nghệ', count: 18 },
  { id: 'ai_data', label: 'Trí tuệ & Dữ liệu', count: 4 },
  { id: 'hardware_robotics', label: 'Phần cứng & Robot', count: 6 },
  { id: 'network_cloud', label: 'Mạng & Hạ tầng', count: 4 },
  { id: 'bio_green', label: 'Sinh học & Môi trường', count: 2 },
  { id: 'future_frontier', label: 'Tương lai & Đột phá', count: 2 }
];
