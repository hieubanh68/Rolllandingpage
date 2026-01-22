export type Language = 'en' | 'vi';

export interface Translations {
  // Header
  header: {
    howItWorks: string;
    locations: string;
    forPartners: string;
    forDiners: string;
    download: string;
  };
  // Hero
  hero: {
    subtitle: string;
    mainHeading1: string;
    mainHeading2: string;
    description: string;
    downloadAppStore: string;
    downloadGooglePlay: string;
    flavorHunter: string;
  };
  // Win-Win Section
  winWin: {
    title: string;
    benefit1Title: string;
    benefit1Desc: string;
    benefit2Title: string;
    benefit2Desc: string;
    benefit3Title: string;
    benefit3Desc: string;
  };
  // No Awkwardness Section
  noAwkward: {
    title: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  // Testimonials
  testimonials: {
    title1: string;
    title2: string;
    subtitle: string;
    testimonial1: {
      name: string;
      location: string;
      message: string;
      restaurant: string;
    };
    testimonial2: {
      name: string;
      location: string;
      message: string;
      restaurant: string;
    };
    testimonial3: {
      name: string;
      location: string;
      message: string;
      restaurant: string;
    };
  };
  // Footer
  footer: {
    huntingGrounds: string;
    copyright: string;
  };
  // Partner Section
  partner: {
    badge: string;
    hero1: string;
    hero2: string;
    hero3: string;
    heroDesc: string;
    cta: string;
    problemsTitle: string;
    problem1Title: string;
    problem1Items: string[];
    problem2Title: string;
    problem2Items: string[];
    revenueTitle1: string;
    revenueTitle2: string;
    optimizeWeekly: string;
    optimizeDaily: string;
    normalRevenue: string;
    rollBoost: string;
    weeklyNote: string;
    dailyNote: string;
    revenueImpactTitle: string;
    restaurant: string;
    roll: string;
    monthlyRevenue: string;
    directSales: string;
    revenueIncrease: string;
    monthlyCosts: string;
    fixedCosts: string;
    additionalCosts: string[];
    profit: string;
    totalProfitIncrease: string;
    advantagesTitle: string;
    advantage1: string;
    advantage2: string;
    advantage3: string;
    howItWorksTitle: string;
    step1Title: string;
    step1Desc: string;
    step1Choose: string;
    step1Items: string[];
    step2Title: string;
    step2Desc: string;
    step2Items: string[];
    step3Title: string;
    step3Desc: string;
    step3Process: string;
    step3Items: string[];
    step4Title: string;
    step4Desc: string;
    step4Track: string;
    step4Items: string[];
    step4Note: string;
    ctaTitle1: string;
    ctaTitle2: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    header: {
      howItWorks: 'HOW IT WORKS',
      locations: 'LOCATIONS',
      forPartners: 'FOR PARTNERS',
      forDiners: 'FOR DINERS',
      download: 'DOWNLOAD',
    },
    hero: {
      subtitle: 'RESTAURANT DEALS',
      mainHeading1: 'ROLL IN.',
      mainHeading2: 'DIG IN. SAVE BIG.',
      description: 'Discover exclusive restaurant deals in your area. Save money while exploring the best dining experiences.',
      downloadAppStore: 'App Store',
      downloadGooglePlay: 'Google Play',
      flavorHunter: 'ROLL IN, DINE IN',
    },
    winWin: {
      title: 'WHY IS IT CHEAP?',
      benefit1Title: 'Restaurants Fill Tables',
      benefit1Desc: 'Off-peak hours become profitable. Empty seats turn into revenue.',
      benefit2Title: 'You Save Money',
      benefit2Desc: 'Access premium dining experiences at a fraction of the cost.',
      benefit3Title: 'Everyone Wins',
      benefit3Desc: 'Restaurants get customers, you get deals. Simple economics.',
    },
    noAwkward: {
      title: "IT'S NOT AWKWARD.",
      step1Title: 'Browse Deals',
      step1Desc: 'See real-time restaurant deals in your neighborhood. No commitment required.',
      step2Title: 'Reserve Your Spot',
      step2Desc: 'Claim your deal before heading out. Restaurants know you\'re coming.',
      step3Title: 'Pay in App',
      step3Desc: 'Scan, pay, leave. No awkward conversations about discounts at the counter.',
    },
    testimonials: {
      title1: 'REAL PEOPLE.',
      title2: 'REAL SAVINGS.',
      subtitle: 'Join thousands of food hunters discovering their next favorite restaurant.',
      testimonial1: {
        name: 'Linh Nguyen',
        location: 'District 1',
        message: 'Found an incredible Italian spot with 40% off. The carbonara was amazing!',
        restaurant: 'Pasta Paradise',
      },
      testimonial2: {
        name: 'David Tran',
        location: 'Thao Dien',
        message: "I've saved over 2M VND this month dining at places I wouldn't normally try.",
        restaurant: 'Steakhouse 79',
      },
      testimonial3: {
        name: 'Mai Pham',
        location: 'Binh Thanh',
        message: 'The lunch deals are perfect for my work schedule. Premium food, student prices.',
        restaurant: 'Sushi Master',
      },
    },
    footer: {
      huntingGrounds: 'WHERE TO ROLL',
      copyright: '© 2025 ROLL. All rights reserved.',
    },
    partner: {
      badge: 'FOR RESTAURANT PARTNERS',
      hero1: 'FILL YOUR',
      hero2: 'EMPTY TABLES.',
      hero3: 'BOOST REVENUE.',
      heroDesc: 'Turn off-peak hours into profitable opportunities. ROLL helps restaurants increase monthly revenue by filling tables during slow periods.',
      cta: 'BECOME A PARTNER',
      problemsTitle: 'Restaurant Challenges',
      problem1Title: 'Revenue & Sales Pressure',
      problem1Items: [
        'Struggle to meet weekly/monthly sales targets',
        'Low sales and staff don\'t get preferred benefits',
        'Off-peak hours generate minimal revenue',
      ],
      problem2Title: 'Cost & Efficiency',
      problem2Items: [
        'Traditional marketing is expensive and hard to track',
        "Discounts via marketing don't effectively increase sales during off-peak times",
      ],
      revenueTitle1: 'ROLL Increases Monthly Revenue',
      revenueTitle2: 'By Filling Your Tables During Off-Peak Hours',
      optimizeWeekly: 'Optimize Weekly Timing',
      optimizeDaily: 'Optimize Daily Hours',
      normalRevenue: 'Normal Revenue',
      rollBoost: 'ROLL Revenue Boost',
      weeklyNote: 'For restaurants like yours: ROLL creates vouchers to attract customers during slow weekdays. Those slower days become revenue generators.',
      dailyNote: 'Off-peak opportunity: ROLL provides vouchers for 2-5pm slots. Instead of empty tables during slow hours, your restaurant attracts walk-ins and builds a loyal customer base.',
      revenueImpactTitle: 'Restaurant Revenue Impact',
      restaurant: 'Restaurant',
      roll: 'ROLL',
      monthlyRevenue: 'Monthly Revenue',
      directSales: 'Direct Sales & Takeaway',
      revenueIncrease: 'Revenue Increase',
      monthlyCosts: 'Monthly Costs',
      fixedCosts: 'Fixed (Staff, Rent, Materials...)',
      additionalCosts: ['Avg. platform discount 25%', 'Materials cost 30%', 'Service fee 10%'],
      profit: 'Profit',
      totalProfitIncrease: 'TOTAL PROFIT INCREASE',
      advantagesTitle: 'Competitive Advantages Using ROLL',
      advantage1: 'Increase Revenue During Off-Peak',
      advantage2: 'Increase Customers From App Users',
      advantage3: 'Active Performance Tracking & Control',
      howItWorksTitle: 'How ROLL Works',
      step1Title: 'Restaurant Creates Deal via Partner App',
      step1Desc: 'Restaurants proactively set up deals that align with their business reality and kitchen capacity.',
      step1Choose: 'You can choose:',
      step1Items: [
        'Application date',
        'Time slots',
        'Deal quantity',
        'Discount level that matches kitchen capacity and staff',
      ],
      step2Title: 'Customer Receives Deal on ROLL App',
      step2Desc: "Your restaurant's deals are displayed on the ROLL app to customers who need them.",
      step2Items: [
        'Explore deal information',
        'Receive deals before arriving at restaurant',
        'Come at the right time slot',
      ],
      step3Title: 'Customer Pays via ROLL App',
      step3Desc: 'The deal received on the ROLL app is automatically integrated into the payment system for this bill.',
      step3Process: 'Payment process:',
      step3Items: [
        'Customer scans restaurant QR code',
        'Enter bill amount to pay',
        'Confirm discounted invoice',
      ],
      step4Title: 'Track Revenue & Performance',
      step4Desc: 'After launching deals, restaurants can track and manage all performance data through the ROLL system.',
      step4Track: 'You can track:',
      step4Items: [
        'Number of customers using deals',
        'Revenue generated from ROLL',
        'Performance of each time slot',
        'Customer feedback trends on ROLL',
      ],
      step4Note: 'All information is displayed clearly and transparently. Reports sent weekly to partners.',
      ctaTitle1: 'READY TO FILL',
      ctaTitle2: 'YOUR TABLES?',
      ctaSubtitle: 'Join hundreds of restaurants already maximizing their revenue with ROLL.',
      ctaButton: 'BECOME A PARTNER TODAY',
    },
  },
  vi: {
    header: {
      howItWorks: 'CÁCH HOẠT ĐỘNG',
      locations: 'KHU VỰC',
      forPartners: 'CHO ĐỐI TÁC',
      forDiners: 'CHO THỰC KHÁCH',
      download: 'TẢI APP',
    },
    hero: {
      subtitle: 'ƯU ĐÃI NHÀ HÀNG',
      mainHeading1: 'VÀO ĂN.',
      mainHeading2: 'ĂN NGON. GIẢM SỐC.',
      description: 'Khám phá các ưu đãi độc quyền từ nhà hàng xung quanh bạn. Tiết kiệm chi phí khi trải nghiệm những bữa ăn tuyệt vời nhất.',
      downloadAppStore: 'App Store',
      downloadGooglePlay: 'Google Play',
      flavorHunter: 'CỨ ĂN THÔI',
    },
    winWin: {
      title: 'TẠI SAO LẠI RẺ?',
      benefit1Title: 'Nhà Hàng Lấp Đầy Bàn',
      benefit1Desc: 'Giờ thấp điểm trở nên sinh lời. Ghế trống biến thành doanh thu.',
      benefit2Title: 'Bạn Tiết Kiệm Tiền',
      benefit2Desc: 'Trải nghiệm ẩm thực cao cấp với chi phí chỉ bằng một phần nhỏ.',
      benefit3Title: 'Mọi Người Đều Thắng',
      benefit3Desc: 'Nhà hàng có khách, bạn có ưu đãi. Kinh tế học đơn giản.',
    },
    noAwkward: {
      title: 'KHÔNG HỀ NGƯỢNG NGÙNG.',
      step1Title: 'Duyệt Ưu Đãi',
      step1Desc: 'Xem ưu đãi nhà hàng theo thời gian thực trong khu vực của bạn. Không cần cam kết.',
      step2Title: 'Đặt Chỗ',
      step2Desc: 'Nhận ưu đãi trước khi đến. Nhà hàng biết bạn sắp tới.',
      step3Title: 'Thanh Toán Qua App',
      step3Desc: 'Quét mã, thanh toán, ra về. Không có cuộc trò chuyện ngượng ngùng về giảm giá tại quầy.',
    },
    testimonials: {
      title1: 'NGƯỜI THẬT.',
      title2: 'TIẾT KIỆM THẬT.',
      subtitle: 'Tham gia cùng hàng ngàn thực khách đang khám phá nhà hàng yêu thích tiếp theo.',
      testimonial1: {
        name: 'Linh Nguyễn',
        location: 'Quận 1',
        message: 'Tìm được quán Ý tuyệt vời với 40% giảm giá. Món carbonara ngon xuất sắc!',
        restaurant: 'Pasta Paradise',
      },
      testimonial2: {
        name: 'David Trần',
        location: 'Thảo Điền',
        message: 'Tôi đã tiết kiệm hơn 2 triệu đồng tháng này khi ăn ở những nơi mà bình thường tôi không thử.',
        restaurant: 'Steakhouse 79',
      },
      testimonial3: {
        name: 'Mai Phạm',
        location: 'Bình Thạnh',
        message: 'Ưu đãi bữa trưa hoàn hảo cho lịch làm việc của tôi. Đồ ăn cao cấp, giá sinh viên.',
        restaurant: 'Sushi Master',
      },
    },
    footer: {
      huntingGrounds: 'WHERE TO ROLL',
      copyright: '© 2025 ROLL. Bảo lưu mọi quyền.',
    },
    partner: {
      badge: 'DÀNH CHO ĐỐI TÁC NHÀ HÀNG',
      hero1: 'LẤP ĐẦY',
      hero2: 'BÀN TRỐNG.',
      hero3: 'TĂNG DOANH THU.',
      heroDesc: 'Biến giờ thấp điểm thành cơ hội sinh lời. ROLL giúp nhà hàng tăng doanh thu hàng tháng bằng cách lấp đầy bàn trong giờ vắng khách.',
      cta: 'TRỞ THÀNH ĐỐI TÁC',
      problemsTitle: 'Thách Thức Của Nhà Hàng',
      problem1Title: 'Áp Lực Doanh Thu & Bán Hàng',
      problem1Items: [
        'Khó đạt chỉ tiêu doanh thu hàng tuần/tháng',
        'Doanh số thấp và nhân viên không được hưởng phúc lợi ưu đãi',
        'Giờ thấp điểm tạo ra doanh thu tối thiểu',
      ],
      problem2Title: 'Chi Phí & Hiệu Quả',
      problem2Items: [
        'Marketing truyền thống đắt đỏ và khó theo dõi',
        'Giảm giá qua marketing không tăng doanh số hiệu quả trong giờ thấp điểm',
      ],
      revenueTitle1: 'ROLL Tăng Doanh Thu Hàng Tháng',
      revenueTitle2: 'Bằng Cách Lấp Đầy Bàn Trong Giờ Thấp Điểm',
      optimizeWeekly: 'Tối Ưu Theo Tuần',
      optimizeDaily: 'Tối Ưu Theo Giờ',
      normalRevenue: 'Doanh Thu Thường',
      rollBoost: 'Tăng Trưởng Từ ROLL',
      weeklyNote: 'Với nhà hàng như bạn: ROLL tạo voucher để thu hút khách trong các ngày thấp điểm. Những ngày chậm trở thành nguồn tạo doanh thu.',
      dailyNote: 'Cơ hội giờ thấp điểm: ROLL cung cấp voucher cho khung giờ 2-5 chiều. Thay vì bàn trống trong giờ vắng, nhà hàng của bạn thu hút khách walk-in và xây dựng cơ sở khách hàng trung thành.',
      revenueImpactTitle: 'Tác Động Doanh Thu Nhà Hàng',
      restaurant: 'Nhà Hàng',
      roll: 'ROLL',
      monthlyRevenue: 'Doanh Thu Tháng',
      directSales: 'Bán Trực Tiếp & Mang Đi',
      revenueIncrease: 'Tăng Doanh Thu',
      monthlyCosts: 'Chi Phí Tháng',
      fixedCosts: 'Cố Định (Nhân viên, Thuê mặt bằng, Nguyên liệu...)',
      additionalCosts: [
        'Giảm giá trung bình nền tảng 25%',
        'Chi phí nguyên liệu 30%',
        'Phí dịch vụ 10%',
      ],
      profit: 'Lợi Nhuận',
      totalProfitIncrease: 'TỔNG TĂNG LỢI NHUẬN',
      advantagesTitle: 'Lợi Thế Cạnh Tranh Khi Dùng ROLL',
      advantage1: 'Tăng Doanh Thu Giờ Thấp Điểm',
      advantage2: 'Tăng Khách Hàng Từ Người Dùng App',
      advantage3: 'Theo Dõi Hiệu Suất Chủ Động & Kiểm Soát',
      howItWorksTitle: 'Cách ROLL Hoạt Động',
      step1Title: 'Nhà Hàng Tạo Deal Qua App Đối Tác',
      step1Desc: 'Nhà hàng chủ động thiết lập deal phù hợp với thực tế kinh doanh và công suất bếp.',
      step1Choose: 'Bạn có thể chọn:',
      step1Items: [
        'Ngày áp dụng',
        'Khung giờ',
        'Số lượng deal',
        'Mức giảm giá phù hợp với công suất bếp và nhân viên',
      ],
      step2Title: 'Khách Hàng Nhận Deal Trên App ROLL',
      step2Desc: 'Deal của nhà hàng bạn được hiển thị trên app ROLL cho khách hàng cần.',
      step2Items: [
        'Khám phá thông tin deal',
        'Nhận deal trước khi đến nhà hàng',
        'Đến đúng khung giờ',
      ],
      step3Title: 'Khách Hàng Thanh Toán Qua App ROLL',
      step3Desc: 'Deal nhận được trên app ROLL tự động tích hợp vào hệ thống thanh toán cho hóa đơn này.',
      step3Process: 'Quy trình thanh toán:',
      step3Items: [
        'Khách quét mã QR nhà hàng',
        'Nhập số tiền hóa đơn cần thanh toán',
        'Xác nhận hóa đơn đã giảm giá',
      ],
      step4Title: 'Theo Dõi Doanh Thu & Hiệu Suất',
      step4Desc: 'Sau khi ra mắt deal, nhà hàng có thể theo dõi và quản lý tất cả dữ liệu hiệu suất qua hệ thống ROLL.',
      step4Track: 'Bạn có thể theo dõi:',
      step4Items: [
        'Số lượng khách sử dụng deal',
        'Doanh thu tạo ra từ ROLL',
        'Hiệu suất của từng khung giờ',
        'Xu hướng phản hồi khách hàng trên ROLL',
      ],
      step4Note: 'Tất cả thông tin được hiển thị rõ ràng và minh bạch. Báo cáo gửi hàng tuần cho đối tác.',
      ctaTitle1: 'SẴN SÀNG LẤP ĐẦY',
      ctaTitle2: 'BÀN CỦA BẠN?',
      ctaSubtitle: 'Tham gia cùng hàng trăm nhà hàng đang tối đa hóa doanh thu với ROLL.',
      ctaButton: 'TRỞ THÀNH ĐỐI TÁC NGAY',
    },
  },
};