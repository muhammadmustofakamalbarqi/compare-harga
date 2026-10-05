import React from 'react';
import { 
  Scale, 
  Sparkles, 
  Eye, 
  ShieldCheck, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Award,
  Users,
  Clock,
  Car
} from 'lucide-react';
import { PageView } from '../types';

interface AboutPageProps {
  setCurrentPage: (page: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => {
  const corePillars = [
    {
      icon: <Scale className="w-7 h-7 text-emerald-600" />,
      title: 'Perbandingan Data',
      description: 'Membandingkan kendaraan sejenis dari berbagai showroom secara objektif berdasarkan tahun, kilometer, varian, dan lokasi pasar.',
      badge: 'Multi-Sumber Pasar',
    },
    {
      icon: <Sparkles className="w-7 h-7 text-emerald-600" />,
      title: 'Analisis AI',
      description: 'Memberikan estimasi harga wajar (fair market value) berdasarkan kalkulasi data yang tersedia di pasar saat ini.',
      badge: 'Valuasi Cerdas',
    },
    {
      icon: <Eye className="w-7 h-7 text-emerald-600" />,
      title: 'Transparansi Sumber',
      description: 'Menampilkan sumber data pembanding secara terbuka sehingga customer maupun sales dapat memverifikasi keabsahannya.',
      badge: 'Dapat Diverifikasi',
    },
  ];

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Header & Overview */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
            <Building2 className="w-4 h-4 text-emerald-600" />
            PT FOKUS ABADI MOBIL • SURABAYA
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tentang FA PriceCheck
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            FA PriceCheck adalah prototype sistem analisis dan perbandingan harga mobil bekas yang dirancang untuk membantu PT Fokus Abadi memberikan informasi harga yang lebih transparan kepada customer.
          </p>
        </div>

        {/* 3 Core Points (Section 13) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded">
                  {pillar.badge}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-2 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 mr-1.5" />
                <span>Standar Keterbukaan FA</span>
              </div>
            </div>
          ))}
        </div>

        {/* Profile Showroom PT Fokus Abadi Mobil */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white font-black text-xl flex items-center justify-center shadow-xs">
              FA
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900">
                Profil PT Fokus Abadi Mobil
              </h2>
              <p className="text-xs text-slate-500">
                Pusat Mobil Bekas Berkualitas & Terpercaya di Surabaya
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-sm text-slate-600 space-y-4">
            <p>
              PT Fokus Abadi Mobil didirikan dengan satu komitmen utama: menghadirkan mobil bekas siap pakai dengan standar inspeksi tertinggi serta penawaran harga yang rasional dan bersaing di pasar Jawa Timur.
            </p>
            <p>
              Melalui platform <strong>FA PriceCheck</strong>, tim sales PT Fokus Abadi Mobil dapat secara langsung menunjukkan fakta pasar kepada konsumen. Tidak ada mark-up harga yang tidak wajar, tidak ada informasi tersembunyi—setiap unit yang kami tawarkan telah melewati perbandingan ketat dengan puluhan listing showroom sejenis.
            </p>
          </div>

          {/* 3 Pillars of Quality */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
              <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2" />
              <h4 className="text-xs font-bold text-slate-900">150 Titik Inspeksi</h4>
              <p className="text-[11px] text-slate-500 mt-1">
                Pemeriksaan ketat rangka bebas tabrak besar dan mesin bebas rendaman banjir.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
              <Award className="w-5 h-5 text-emerald-600 mb-2" />
              <h4 className="text-xs font-bold text-slate-900">Garansi 1 Tahun</h4>
              <p className="text-[11px] text-slate-500 mt-1">
                Jaminan perlindungan purna jual untuk komponen mesin dan sistem transmisi.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
              <Users className="w-5 h-5 text-emerald-600 mb-2" />
              <h4 className="text-xs font-bold text-slate-900">Sales Konsultatif</h4>
              <p className="text-[11px] text-slate-500 mt-1">
                Konsultan mobil yang membantu customer menemukan unit terbaik sesuai anggaran.
              </p>
            </div>
          </div>

          {/* Location & Contact Bar */}
          <div className="bg-emerald-50/70 rounded-xl p-4 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-emerald-950">
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>Showroom Utama: Jl. Raya Jemursari No. 88, Wonocolo, Surabaya</span>
              </div>
              <p className="text-emerald-800">
                Buka setiap hari (08.30 - 18.00 WIB) • Melayani Tukar Tambah, Cash, & Kredit Syariah
              </p>
            </div>

            <button
              onClick={() => {
                setCurrentPage('analysis');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="shrink-0 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors cursor-pointer"
            >
              Coba Analisis Sekarang
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
