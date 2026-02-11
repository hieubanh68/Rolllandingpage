
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
    mainHeading3: string;
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
    hero: {
      headline: string;
      subheadline: string;
      primaryCTA: string;
      secondaryCTA: string;
    };
    revenueImpact: {
      headline: string;
      copy: string;
    };
    featureSuite: {
      title: string;
      cardA: {
        title: string;
        copy: string;
      };
      cardB: {
        title: string;
        copy: string;
      };
      cardC: {
        title: string;
        copy: string;
      };
    };
    intelligentInsights: {
      headline: string;
      feature1: string;
      feature2: string;
      feature3: string;
    };
    socialEvents: {
      headline: string;
      copy: string;
      valueProp1: string;
      valueProp2: string;
    };
    operations: {
      headline: string;
      step1: string;
      step2: string;
      step3: string;
      promise: string;
    };
    footerCTA: {
      headline: string;
      subtext: string;
      ctaButton: string;
    };
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
      mainHeading3: 'DISCOVER YOUR NEXT FAVORITE.',
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
        message: "I've saved over 2M VND this month dining at places I wouldn\'t normally try.",
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
      hero: {
        headline: "Fill Every Table. Keep Every Guest.",
        subheadline: "The only platform that combines Instant Yield Management to fill slow hours with Experience-Driven Loyalty to win the second visit.",
        primaryCTA: "Get Started for Free",
        secondaryCTA: "See the Revenue Impact",
      },
      revenueImpact: {
        headline: "An empty chair is your most expensive asset.",
        copy: "Don't just survive slow hours. Monetize them. ROLL turns 'dead time' into 'data time' by bringing diners in when you need them most."
      },
      featureSuite: {
        title: "The Triple-Threat Feature Suite",
        cardA: {
          title: "The Flash Engine (Immediate Cashflow)",
          copy: "Post instant, time-limited offers in 10 seconds. You control the quantity, the discount, and the time. Perfect for rainy days or quiet afternoons."
        },
        cardB: {
          title: "The Loyalty Loop (The 2nd Visit Winner)",
          copy: "Replace paper cards with a digital experience. Every scan captures a customer profile. Reward them with 'Experience Tiers' like Secret Menus and Chef Cards—not just discounts."
        },
        cardC: {
          title: "The Social Hub (High-Margin Events)",
          copy: "Host Wine Tastings, Secret Menu Nights, or Workshops. Manage RSVPs and ticketing directly in the app. Give your customers a purpose to visit beyond the menu."
        }
      },
      intelligentInsights: {
        headline: "Know Your Diners Like a Regular.",
        feature1: "The Customer Graph: See your 'Top 1% VIPs' and your 'At-Risk' customers.",
        feature2: "Automated Win-Backs: ROLL automatically sends a personalized invite to anyone who hasn't visited in 30 days.",
        feature3: "Direct-to-Phone Marketing: Launch a new dish? Send a notification directly to your most loyal 'Stampers.'"
      },
      socialEvents: {
        headline: "Beyond the Plate: Host Experiences.",
        copy: "Restaurants are more than just food; they are communities. Use ROLL to create 'Member-Only' events. From 'Try the New Menu First' nights to 'Meet the Chef' sessions.",
        valueProp1: "Pre-paid RSVPs: Reduce no-shows with in-app booking.",
        valueProp2: "Exclusivity: Limit events to certain Loyalty Tiers to drive 'Status' among your diners."
      },
      operations: {
        headline: "No POS Integration? No Problem.",
        step1: "Join: Setup your profile in 5 minutes.",
        step2: "Place Your QR: Put your custom ROLL QR code on tables or at the counter.",
        step3: "Scan & Grow: Staff scans the customer\'s phone to apply deals or add loyalty stamps.",
        promise: "If your staff can use Zalo, they can use ROLL. Zero training, zero hardware costs."
      },
      footerCTA: {
        headline: "Ready to turn your restaurant into a neighborhood icon?",
        subtext: "Join the ROLL Partner network in D1, Thao Dien, and D7 today.",
        ctaButton: "Claim My Restaurant Spot"
      }
    }
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
      mainHeading3: 'KHÁM PHÁT NHÀ HÀNG YÊU THÍCH TIẾP THEO.',
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
      hero: {
        headline: "Lấp Đầy Mọi Bàn. Giữ Chân Mọi Khách.",
        subheadline: "Nền tảng duy nhất kết hợp Quản lý Năng suất Tức thì để lấp đầy giờ vắng với Lòng trung thành dựa trên Trải nghiệm để giành được lượt ghé thứ hai.",
        primaryCTA: "Bắt Đầu Miễn Phí",
        secondaryCTA: "Xem Tác Động Doanh Thu"
      },
      revenueImpact: {
        headline: "Một chiếc ghế trống là tài sản đắt giá nhất của bạn.",
        copy: "Đừng chỉ tồn tại qua giờ vắng. Hãy kiếm tiền từ chúng. ROLL biến 'thời gian chết' thành 'thời gian dữ liệu' bằng cách đưa khách đến khi bạn cần họ nhất."
      },
      featureSuite: {
        title: "Bộ Ba Tính Năng Vượt Trội",
        cardA: {
          title: "Công Cụ Flash (Dòng Tiền Tức Thì)",
          copy: "Đăng ưu đãi tức thì, có giới hạn thời gian trong 10 giây. Bạn kiểm soát số lượng, mức giảm giá và thời gian. Hoàn hảo cho những ngày mưa hoặc buổi chiều yên tĩnh."
        },
        cardB: {
          title: "Vòng Lặp Trung Thành (Chiến Thắng Lượt Ghé Thứ 2)",
          copy: "Thay thế thẻ giấy bằng trải nghiệm kỹ thuật số. Mỗi lần quét sẽ ghi lại hồ sơ khách hàng. Thưởng cho họ bằng 'Các Cấp Trải Nghiệm' như Thực Đơn Bí Mật và Thẻ Đầu Bếp—không chỉ là giảm giá."
        },
        cardC: {
          title: "Trung Tâm Xã Hội (Sự Kiện Lợi Nhuận Cao)",
          copy: "Tổ chức các buổi thử rượu, đêm thực đơn bí mật hoặc hội thảo. Quản lý RSVP và bán vé trực tiếp trong ứng dụng. Cho khách hàng của bạn một lý do để ghé thăm ngoài thực đơn."
        }
      },
      intelligentInsights: {
        headline: "Hiểu Khách Hàng Như Khách Quen.",
        feature1: "Biểu Đồ Khách Hàng: Xem '1% VIP hàng đầu' và khách hàng 'có nguy cơ' của bạn.",
        feature2: "Tự Động Giữ Chân: ROLL tự động gửi lời mời cá nhân hóa cho bất kỳ ai không ghé thăm trong 30 ngày.",
        feature3: "Tiếp Thị Trực Tiếp Đến Điện Thoại: Ra mắt món ăn mới? Gửi thông báo trực tiếp đến những 'Người Tích Tem' trung thành nhất của bạn."
      },
      socialEvents: {
        headline: "Hơn Cả Món Ăn: Tổ Chức Trải Nghiệm.",
        copy: "Nhà hàng không chỉ là nơi để ăn; chúng là những cộng đồng. Sử dụng ROLL để tạo ra các sự kiện 'Chỉ dành cho Thành viên'. Từ những đêm 'Thử Thực Đơn Mới Đầu Tiên' đến các buổi 'Gặp gỡ Đầu bếp'.",
        valueProp1: "RSVP trả trước: Giảm tình trạng không đến bằng cách đặt chỗ trong ứng dụng.",
        valueProp2: "Độc quyền: Giới hạn sự kiện cho một số Cấp độ Trung thành nhất định để tạo 'Vị thế' cho thực khách của bạn."
      },
      operations: {
        headline: "Không Tích Hợp POS? Không Vấn Đề Gì.",
        step1: "Tham gia: Thiết lập hồ sơ của bạn trong 5 phút.",
        step2: "Đặt Mã QR của Bạn: Đặt mã QR ROLL tùy chỉnh của bạn trên bàn hoặc tại quầy.",
        step3: "Quét & Phát Triển: Nhân viên quét điện thoại của khách hàng để áp dụng ưu đãi hoặc thêm tem trung thành.",
        promise: "Nếu nhân viên của bạn có thể sử dụng Zalo, họ có thể sử dụng ROLL. Không cần đào tạo, không chi phí phần cứng."
      },
      footerCTA: {
        headline: "Sẵn sàng biến nhà hàng của bạn thành một biểu tượng của khu phố?",
        subtext: "Tham gia mạng lưới Đối tác ROLL tại Q1, Thảo Điền và Q7 ngay hôm nay.",
        ctaButton: "Yêu Cầu Vị Trí Nhà Hàng Của Tôi"
      }
    }
  },
};
