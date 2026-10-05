import React from 'react';
import { 
  Scale, 
  Sparkles, 
  Eye, 
  Users, 
  Check, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';

interface FeaturesSectionProps {
  onStartAnalysis: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onStartAnalysis }) => {
  const features = [
    {
      icon: <Scale className="w-6 h-6 text-emerald-600" />,
      title: 'Perbandingan Harga',
      description: 'Bandingkan harga kendaraan sejenis dari berbagai showroom secara langsung dan objektif.',
      highlight: 'Multi-Showroom Realtime',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
      title: 'Analisis AI',
      description: 'Menampilkan estimasi harga wajar pasar berdasarkan data tahun, kilometer, varian, dan kondisi kendaraan.',
      highlight: 'Machine Intelligence',
    },
    {
      icon: <Eye className="w-6 h-6 text-emerald-600" />,
      title: 'Data Transparan',
      description: 'Setiap data pembanding nantinya dapat dilihat sumbernya, tanggal pencatatan, serta lokasi showroom.',
      highlight: 'Bisa Dicek Langsung',
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      title: 'Membantu Sales',
      description: 'Memudahkan sales menunjukkan perbandingan harga kepada customer dengan bukti nyata yang terpercaya.',
      highlight: 'Closing Lebih Cepat',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            STANDAR KEPERCAYAAN PT FOKUS ABADI MOBIL
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kenapa Menggunakan FA PriceCheck?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Didesain khusus untuk showroom mobil modern yang mengedepankan keterbukaan data dan kenyamanan customer saat memilih unit idaman.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-950/5 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center mb-5 group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-colors shadow-xs">
                  {feature.icon}
                </div>
                <div className="inline-block text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-1">
                  {feature.highlight}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-slate-500 group-hover:text-emerald-700 transition-colors">
                <Check className="w-4 h-4 text-emerald-600 mr-1.5 shrink-0" />
                <span>Mendukung transparansi</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sales Presentation Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-lg sm:text-xl font-bold">
              Siap Membuktikan Harga Terbaik untuk Customer Anda?
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Cukup masukkan jenis mobil, varian, dan tahun. Sistem langsung membandingkan dengan puluhan data showroom sekitar.
            </p>
          </div>
          <button
            onClick={onStartAnalysis}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-sm shadow-sm transition-all hover:scale-102 active:scale-98 cursor-pointer"
          >
            <span>Buka Form Analisis</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
