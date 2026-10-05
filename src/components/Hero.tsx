import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  TrendingDown, 
  Car, 
  CheckCircle2, 
  Building2,
  BarChart2
} from 'lucide-react';

interface HeroProps {
  onStartAnalysis: () => void;
  onViewDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartAnalysis, onViewDemo }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
      {/* Background Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#059669 0.75px, transparent 0.75px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Sales tool badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/80 text-emerald-800 text-xs font-bold tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Sistem Analisis Harga Terkini PT Fokus Abadi
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Bandingkan Harga Mobil Bekas dengan{' '}
              <span className="text-emerald-600 relative inline-block">
                Data Pasar
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-emerald-300 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              FA PriceCheck membantu melihat posisi harga mobil PT Fokus Abadi dibandingkan kendaraan sejenis dari showroom lain secara transparan dan akurat.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onStartAnalysis}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-sm shadow-emerald-200 transition-all hover:scale-[1.01] active:scale-98 cursor-pointer"
              >
                <span>Mulai Analisis</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-300 shadow-xs transition-all hover:border-slate-400 active:scale-98 cursor-pointer"
              >
                <BarChart2 className="w-4 h-4 text-emerald-600" />
                <span>Lihat Demo (Avanza 2021)</span>
              </button>
            </div>

            {/* Trust points for customer & sales reps */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Data Real Showroom Surabaya</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Sumber Terbuka & Dapat Dicek</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Estimasi Pasar Berbasis AI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Mockup Dashboard Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md">
              <div className="bg-white rounded-2xl border-2 border-emerald-500/30 p-6 shadow-xl shadow-slate-200/60 relative overflow-hidden group">
                
                {/* Top Label & Verified Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
                      FA
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">PT Fokus Abadi Mobil</h4>
                      <p className="text-[10px] text-slate-400">Unit Terinspeksi Siap Pakai</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                    Harga Kompetitif
                  </span>
                </div>

                {/* Car Details Specification */}
                <div className="py-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Toyota Avanza
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      Tahun 2021
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 pt-1">
                    1.5 G Automatic
                  </h3>
                  <p className="text-xs text-slate-500">
                    60.000 KM • Bensin • Plat L Surabaya
                  </p>
                </div>

                {/* Price Display */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 mb-4">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    Harga Penawaran PT Fokus Abadi
                  </div>
                  <div className="flex items-baseline justify-between mt-1">
                    <div className="text-2xl sm:text-3xl font-black text-emerald-600">
                      Rp190.000.000
                    </div>
                    <div className="flex items-center text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                      <TrendingDown className="w-3.5 h-3.5 mr-1" />
                      Hemat Rp4 Jt
                    </div>
                  </div>
                </div>

                {/* Mini Visual Comparison Preview */}
                <div className="space-y-2 pt-1 text-xs">
                  <div className="flex justify-between items-center text-slate-500 font-semibold text-[11px]">
                    <span>Posisi di Pasar Surabaya</span>
                    <span className="text-emerald-700 font-bold">Paling Terjangkau</span>
                  </div>

                  {/* Simple comparison mini-bars */}
                  <div className="space-y-1.5 font-medium">
                    <div>
                      <div className="flex justify-between text-[11px] mb-0.5">
                        <span className="font-bold text-emerald-700 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                          PT Fokus Abadi
                        </span>
                        <span className="font-bold text-slate-900">Rp190 jt</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-600 rounded-full w-[88%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-0.5 text-slate-600">
                        <span>Prediksi Pasar (AI)</span>
                        <span className="font-semibold">Rp194 jt</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-400 rounded-full w-[94%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-0.5 text-slate-500">
                        <span>Showroom Lain (Rata-rata)</span>
                        <span className="font-semibold">Rp195 jt</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-300 rounded-full w-[97%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action in Mockup */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    Berdasarkan 5 showroom terverifikasi
                  </span>
                  <button 
                    onClick={onViewDemo}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                  >
                    Buka Detail
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
