import React from 'react';
import { PageView } from '../types';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-extrabold flex items-center justify-center text-lg shadow-sm">
                FA
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight block">
                  FA PriceCheck
                </span>
                <span className="text-xs text-emerald-400 font-semibold">
                  PT Fokus Abadi Mobil
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Sistem prototype perbandingan harga mobil bekas terintegrasi dengan valuasi estimasi AI untuk mendukung transparansi showroom kepada konsumen.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Transparan • Akurat • Terpercaya</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('analysis');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Analisis Harga Mobil
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('vehicles');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Data Kendaraan Showroom
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Tentang FA PriceCheck
                </button>
              </li>
            </ul>
          </div>

          {/* Showroom Location */}
          <div className="space-y-3 text-xs">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Showroom PT Fokus Abadi
            </h4>
            <div className="flex items-start gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>Jl. Raya Jemursari No. 88, Wonocolo, Surabaya, Jawa Timur 60237</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Senin - Minggu: 08.30 - 18.00 WIB</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Hotline Sales: (031) 843-9999 / 0812-3456-7890</span>
            </div>
          </div>

          {/* Prototype Disclaimer */}
          <div className="space-y-3 text-xs bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Status Prototype
            </h4>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Website ini dirancang khusus sebagai alat bantu sales PT Fokus Abadi Mobil untuk mendemonstrasikan keunggulan harga pasar kepada calon pembeli.
            </p>
            <p className="text-[10px] text-slate-400 pt-1">
              Hak Cipta © 2026 PT Fokus Abadi Mobil. Seluruh hak dilindungi.
            </p>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>© 2026 PT Fokus Abadi Mobil - FA PriceCheck Prototype.</p>
          <div className="flex items-center gap-4">
            <span>Standar Evaluasi Kendaraan Jawa Timur</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">Surabaya, Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
