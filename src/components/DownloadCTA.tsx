import React from 'react';
import { Download, Smartphone, Sparkles, Star, Zap, CheckCircle, MapPin, Utensils, MessageSquare, Mail, Send } from 'lucide-react';
import { Language } from '../translations/translations';
import { motion, useInView } from 'motion/react';

interface DownloadCTAProps {
  language: Language;
}

export function DownloadCTA({ language }: DownloadCTAProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = React.useState({
    restaurantName: '',
    location: '',
    cuisineType: '',
    notes: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        restaurantName: '',
        location: '',
        cuisineType: '',
        notes: '',
        email: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div ref={ref} className="py-24 md:py-32 px-6 bg-[#FFFEF6] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #2D2D2D 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative elements - subtle */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-[10%] w-[300px] h-[300px] bg-gradient-to-br from-[#FCE482] to-[#F9DB4A] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] bg-gradient-to-br from-[#B8D5A0] to-[#738C6B] opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Form Header */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white border-2 border-[#FCE482] rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#FCE482]" fill="#FCE482" />
              <span className="text-sm font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'Help Us Grow' : 'Giúp Chúng Tôi Phát Triển'}
              </span>
            </div>

            {/* Main headline - refined */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#2D2D2D] leading-tight" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? (
                <>
                  Suggest Your<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Favorite Spot</span>
                </>
              ) : (
                <>
                  Gợi Ý<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE482] to-[#F9DB4A]">Nhà Hàng Yêu Thích</span>
                </>
              )}
            </h2>

            {/* Subheadline - professional */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' 
                ? 'Know a great restaurant in Saigon? Share it with us and help build the ultimate dining community.'
                : 'Biết một nhà hàng tuyệt vời ở Sài Gòn? Chia sẻ với chúng tôi và cùng xây dựng cộng đồng ẩm thực tốt nhất.'}
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {[
                { en: 'Exclusive early access to new deals', vi: 'Truy cập sớm vào deal mới' },
                { en: 'Support local restaurants you love', vi: 'Hỗ trợ nhà hàng địa phương bạn yêu thích' },
                { en: 'Shape ROLL\'s restaurant network', vi: 'Định hình mạng lưới nhà hàng của ROLL' }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <CheckCircle className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-base md:text-lg text-[#2D2D2D] font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? item.en : item.vi}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Restaurant Suggestion Form */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FCE482] to-[#F9DB4A] opacity-10 blur-3xl rounded-3xl"></div>
            
            {/* Form Card */}
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-100">
              {isSubmitted ? (
                /* Success State */
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#22C55E] to-[#4ADE80] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl font-black text-[#2D2D2D] mb-4" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Thank You!' : 'Cảm Ơn Bạn!'}
                  </h3>
                  <p className="text-lg text-gray-600" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' 
                      ? 'We\'ll review your suggestion and get back to you soon.'
                      : 'Chúng tôi sẽ xem xét gợi ý của bạn và liên hệ sớm nhất.'}
                  </p>
                </motion.div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Restaurant Name */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-black text-[#2D2D2D] mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      <Utensils className="w-4 h-4 text-[#FCE482]" />
                      {language === 'en' ? 'Restaurant Name' : 'Tên Nhà Hàng'}
                      <span className="text-[#EF4444]">*</span>
                    </label>
                    <input
                      type="text"
                      name="restaurantName"
                      value={formData.restaurantName}
                      onChange={handleChange}
                      required
                      placeholder={language === 'en' ? 'e.g., Phở Lệ' : 'vd: Phở Lệ'}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FCE482] focus:outline-none transition-colors font-black text-[#2D2D2D]"
                      style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-black text-[#2D2D2D] mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      <MapPin className="w-4 h-4 text-[#FCE482]" />
                      {language === 'en' ? 'Location' : 'Vị Trí'}
                      <span className="text-[#EF4444]">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder={language === 'en' ? 'e.g., District 1, HCMC' : 'vd: Quận 1, TPHCM'}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FCE482] focus:outline-none transition-colors font-black text-[#2D2D2D]"
                      style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                    />
                  </div>

                  {/* Cuisine Type */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-black text-[#2D2D2D] mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      <Star className="w-4 h-4 text-[#FCE482]" />
                      {language === 'en' ? 'Cuisine Type' : 'Loại Món Ăn'}
                    </label>
                    <input
                      type="text"
                      name="cuisineType"
                      value={formData.cuisineType}
                      onChange={handleChange}
                      placeholder={language === 'en' ? 'e.g., Vietnamese, Italian, Japanese' : 'vd: Việt Nam, Ý, Nhật Bản'}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FCE482] focus:outline-none transition-colors font-black text-[#2D2D2D]"
                      style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-black text-[#2D2D2D] mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      <MessageSquare className="w-4 h-4 text-[#FCE482]" />
                      {language === 'en' ? 'Why do you love this place?' : 'Tại sao bạn yêu thích nơi này?'}
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder={language === 'en' ? 'Share what makes this restaurant special...' : 'Chia sẻ điều gì làm nhà hàng này đặc biệt...'}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FCE482] focus:outline-none transition-colors font-black text-[#2D2D2D] resize-none"
                      style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                    />
                  </div>

                  {/* Email (Optional) */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-black text-[#2D2D2D] mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      <Mail className="w-4 h-4 text-[#FCE482]" />
                      {language === 'en' ? 'Email (Optional)' : 'Email (Tùy chọn)'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={language === 'en' ? 'Get updates on your suggestion' : 'Nhận cập nhật về gợi ý của bạn'}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FCE482] focus:outline-none transition-colors font-black text-[#2D2D2D]"
                      style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FCE482] to-[#F9DB4A] text-[#2D2D2D] px-8 py-4 rounded-xl font-black text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
                    style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5" />
                    {language === 'en' ? 'Submit Suggestion' : 'Gửi Gợi Ý'}
                  </motion.button>

                  {/* Privacy Note */}
                  <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' 
                      ? 'Your information is safe with us. We\'ll only use it to improve ROLL.'
                      : 'Thông tin của bạn được bảo mật. Chúng tôi chỉ dùng để cải thiện ROLL.'}
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}