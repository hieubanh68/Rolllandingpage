import React from 'react';
import { CreditCard, Shield, Zap, CheckCircle2 } from 'lucide-react';
import { Language } from '../translations/translations';

interface FrictionlessPaymentProps {
  language: Language;
}

export function FrictionlessPayment({ language }: FrictionlessPaymentProps) {
  return (
    <div className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4ADE80] to-[#22C55E] px-6 py-3 rounded-full shadow-md mb-6">
              <Zap className="w-5 h-5 text-white" fill="white" />
              <span className="text-sm font-black text-white tracking-wide" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                {language === 'en' ? 'SEAMLESS EXPERIENCE' : 'TRẢI NGHIỆM LIỀN MẠCH'}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#2D2D2D] leading-tight" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' ? (
                <>Seamless Dining,<br /><span className="text-[#EF8E4C]">Cashless Payment</span></>
              ) : (
                <>Ăn Uống Mượt Mà,<br /><span className="text-[#EF8E4C]">Thanh Toán Không Tiền Mặt</span></>
              )}
            </h2>

            <p className="text-xl mb-8 text-gray-600" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
              {language === 'en' 
                ? 'Don\'t worry about calculating the discount at the counter. Pay securely within the app using your favorite methods.'
                : 'Đừng lo về việc tính giảm giá ở quầy. Thanh toán an toàn trong app bằng phương thức yêu thích của bạn.'}
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#4ADE80] flex-shrink-0 mt-1" strokeWidth={3} />
                <div>
                  <div className="font-black text-lg text-[#2D2D2D] mb-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'No Awkward Math' : 'Không Cần Tính Toán Phức Tạp'}
                  </div>
                  <div className="text-sm text-gray-500" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' 
                      ? 'The app automatically applies your discount'
                      : 'App tự động áp dụng giảm giá của bạn'}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#4ADE80] flex-shrink-0 mt-1" strokeWidth={3} />
                <div>
                  <div className="font-black text-lg text-[#2D2D2D] mb-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Secure & Fast' : 'An Toàn & Nhanh Chóng'}
                  </div>
                  <div className="text-sm text-gray-500" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' 
                      ? 'All transactions are encrypted and verified'
                      : 'Tất cả giao dịch được mã hóa và xác minh'}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#4ADE80] flex-shrink-0 mt-1" strokeWidth={3} />
                <div>
                  <div className="font-black text-lg text-[#2D2D2D] mb-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' ? 'Your Choice of Payment' : 'Lựa Chọn Thanh Toán Của Bạn'}
                  </div>
                  <div className="text-sm text-gray-500" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    {language === 'en' 
                      ? 'Use ZaloPay, MoMo, cards, or Apple Pay'
                      : 'Dùng ZaloPay, MoMo, thẻ, hoặc Apple Pay'}
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods - Trust Signals */}
            <div className="bg-[#FAFAFA] rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-[#4ADE80]" />
                <span className="text-sm font-black text-[#2D2D2D]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                  {language === 'en' ? 'TRUSTED PAYMENT METHODS' : 'PHƯƠNG THỨC THANH TOÁN TIN CẬY'}
                </span>
              </div>
              
              <div className="grid grid-cols-4 gap-3">
                <div className="bg-white rounded-xl p-4 shadow-sm border-2 border-[#0068FF] flex flex-col items-center justify-center hover:shadow-md transition-all">
                  <span className="font-black text-xs text-[#0068FF] text-center" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    ZaloPay
                  </span>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border-2 border-[#A50064] flex flex-col items-center justify-center hover:shadow-md transition-all">
                  <span className="font-black text-xs text-[#A50064] text-center" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    MoMo
                  </span>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border-2 border-black flex flex-col items-center justify-center hover:shadow-md transition-all">
                  <span className="font-black text-xs text-black text-center" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    Apple Pay
                  </span>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border-2 border-[#1A1F71] flex flex-col items-center justify-center hover:shadow-md transition-all">
                  <span className="font-black text-xs text-[#1A1F71] text-center" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                    Visa
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - App Mockup */}
          <div className="relative">
            {/* Phone mockup with payment screen */}
            <div className="relative">
              {/* Phone frame */}
              <div className="bg-gradient-to-br from-[#2D2D2D] to-[#1a1a1a] rounded-[3rem] p-6 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl">
                  {/* Screen content */}
                  <div className="aspect-[9/19.5] relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#2D2D2D] rounded-b-2xl z-10"></div>
                    
                    {/* App screenshot mockup */}
                    <div className="h-full bg-gradient-to-br from-[#FAFAFA] to-white p-6 pt-10">
                      {/* Header */}
                      <div className="text-center mb-6">
                        <div className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                          {language === 'en' ? 'Choose Payment Method' : 'Chọn Phương Thức Thanh Toán'}
                        </div>
                        <div className="text-4xl font-black text-[#4ADE80]" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                          180,000đ
                        </div>
                        <div className="text-xs text-gray-500 mt-1" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                          {language === 'en' ? '40% discount applied' : 'Đã giảm 40%'}
                        </div>
                      </div>

                      {/* Payment options */}
                      <div className="space-y-3">
                        <div className="bg-white rounded-xl p-4 shadow-md border-2 border-[#0068FF] flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#0068FF] rounded-lg flex items-center justify-center">
                            <CreditCard className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-black text-sm" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>ZaloPay</div>
                            <div className="text-xs text-gray-500" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                              {language === 'en' ? 'Balance: 500K' : 'Số dư: 500K'}
                            </div>
                          </div>
                          <div className="w-6 h-6 bg-[#0068FF] rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 opacity-60">
                          <div className="w-10 h-10 bg-[#A50064] rounded-lg flex items-center justify-center">
                            <CreditCard className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-black text-sm" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>MoMo</div>
                            <div className="text-xs text-gray-500" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                              {language === 'en' ? 'Balance: 250K' : 'Số dư: 250K'}
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 opacity-60">
                          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                            <CreditCard className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-black text-sm" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>Apple Pay</div>
                            <div className="text-xs text-gray-500" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>****  4532</div>
                          </div>
                        </div>
                      </div>

                      {/* Pay button */}
                      <div className="mt-6">
                        <button className="w-full bg-gradient-to-r from-[#4ADE80] to-[#22C55E] text-white py-4 rounded-2xl font-black text-lg shadow-lg">
                          {language === 'en' ? 'PAY 180,000đ' : 'THANH TOÁN 180,000đ'}
                        </button>
                      </div>

                      {/* Security badge */}
                      <div className="mt-4 flex items-center justify-center gap-2 text-gray-500">
                        <Shield className="w-4 h-4" />
                        <span className="text-xs font-black" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                          {language === 'en' ? 'Secured by 256-bit encryption' : 'Bảo mật bằng mã hóa 256-bit'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating success indicator */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#4ADE80] to-[#22C55E] text-white px-6 py-4 rounded-2xl shadow-2xl border-4 border-white transform rotate-6 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" strokeWidth={3} />
                  <div>
                    <div className="font-black text-lg" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Instant' : 'Tức Thì'}
                    </div>
                    <div className="text-xs opacity-90" style={{ fontFamily: 'Bahnschrift, Arial, sans-serif' }}>
                      {language === 'en' ? 'Payment' : 'Thanh Toán'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}