import React from 'react';
import { AnalysisResultData } from '../types';
import { formatRupiah, formatNumber } from '../utils/formatters';
import { 
  TrendingDown, 
  Sparkles, 
  Award, 
  ArrowDownRight, 
  ShieldCheck, 
  CheckCircle,
  TrendingUp,
  BarChart3,
  Check
} from 'lucide-react';

interface ResultCardProps {
  data: AnalysisResultData;
  onModifySearch: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ data, onModifySearch }) => {
  const {
    vehicleSummary,
    lowestPrice,
    highestPrice,
    averagePrice,
    aiPredictedPrice,
    faPrice,
    differenceWithAi,
  } = data;

  const isFaLowest = faPrice <= lowestPrice;
  const isLowerThanAi = faPrice < aiPredictedPrice;

  return (
    <div className="space-y-8">
      
      {/* Top Header of Result */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            HASIL ANALISIS HARGA PASAR
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {vehicleSummary.brand} {vehicleSummary.model} {vehicleSummary.type} {vehicleSummary.transmission}
          </h1>
          <p className="text-sm font-semibold text-slate-500 mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>{vehicleSummary.year}</span>
            <span>•</span>
            <span>{formatNumber(vehicleSummary.mileage)} KM</span>
            <span>•</span>
            <span>{vehicleSummary.fuel}</span>
            <span>•</span>
            <span className="text-emerald-700 bg-emerald-50/70 px-2 py-0.5 rounded">
              Pasar {vehicleSummary.location}
            </span>
          </p>
        </div>

        <button
          onClick={onModifySearch}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer shrink-0"
        >
          <span>← Ubah Pencarian</span>
        </button>
      </div>

      {/* SECTION 7: 5 KARTU HASIL UTAMA */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Ringkasan Valuasi Pasar & Unit FA
          </h2>
          <span className="text-xs text-slate-400">5 Indikator Utama</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* 1. Harga Terendah */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Harga Terendah
              </span>
              <p className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                {formatRupiah(lowestPrice)}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Batas bawah pasar</span>
            </div>
          </div>

          {/* 2. Harga Tertinggi */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Harga Tertinggi
              </span>
              <p className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                {formatRupiah(highestPrice)}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              <span>Batas atas pasar</span>
            </div>
          </div>

          {/* 3. Harga Rata-rata */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Harga Rata-rata
              </span>
              <p className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                {formatRupiah(averagePrice)}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              <span>Rata-rata 5 showroom</span>
            </div>
          </div>

          {/* 4. Prediksi AI */}
          <div className="bg-gradient-to-br from-white to-emerald-50/50 rounded-2xl p-5 border border-emerald-200/90 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-100/40 rounded-full blur-xl -mr-6 -mt-6"></div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  Prediksi AI
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Fair Value
                </span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-emerald-700 mt-2">
                {formatRupiah(aiPredictedPrice)}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
              <Check className="w-3.5 h-3.5" />
              <span>Valuasi wajar terhitung</span>
            </div>
          </div>

          {/* 5. HARGA PT FOKUS ABADI (Paling Menonjol) */}
          <div className="bg-gradient-to-b from-emerald-600 to-emerald-700 text-white rounded-2xl p-5 shadow-lg shadow-emerald-700/25 ring-3 ring-emerald-500/40 transform sm:scale-103 flex flex-col justify-between relative overflow-hidden group">
            {/* Top Spotlight Tag */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-100 flex items-center gap-1">
                <Award className="w-4 h-4 text-amber-300" />
                PT FOKUS ABADI
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-400 text-slate-950 uppercase tracking-tight shadow-xs">
                {isFaLowest ? 'Paling Murah' : 'Kompetitif'}
              </span>
            </div>

            <div className="my-2">
              <p className="text-2xl sm:text-3xl font-black tracking-tight text-white drop-shadow-xs">
                {formatRupiah(faPrice)}
              </p>
            </div>

            <div className="pt-3 border-t border-emerald-500/80 flex items-center justify-between text-xs font-bold text-emerald-100">
              <span>Unit Siap di Showroom</span>
              <span className="bg-white/20 px-2 py-0.5 rounded text-[11px]">
                Garansi FA
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 8: HASIL ANALISIS (Card Besar) */}
      <div className="bg-white rounded-2xl border-2 border-emerald-500/30 p-6 sm:p-8 shadow-sm">
        
        {/* Top Header with green badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Kesimpulan Komparasi
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                HARGA TERENDAH
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Hasil Analisis
            </h3>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Garansi 100% Bebas Tabrak & Banjir</span>
          </div>
        </div>

        {/* Narrative Callout */}
        <div className="py-5">
          <p className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
            Harga PT Fokus Abadi merupakan harga terendah dari data kendaraan sejenis yang dibandingkan.
          </p>
          <p className="text-sm text-slate-500 mt-1">
            Data dikumpulkan dari showroom aktif di wilayah {vehicleSummary.location} untuk tahun {vehicleSummary.year} dengan spesifikasi setara.
          </p>
        </div>

        {/* Key Comparison 3-Column Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          
          {/* Harga FA */}
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Harga PT Fokus Abadi
            </span>
            <div className="text-2xl font-black text-emerald-800 mt-1">
              {formatRupiah(faPrice)}
            </div>
            <div className="text-xs text-emerald-700 font-semibold mt-1">
              Unit resmi PT Fokus Abadi Mobil
            </div>
          </div>

          {/* Prediksi AI */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Prediksi AI
            </span>
            <div className="text-2xl font-black text-slate-800 mt-1">
              {formatRupiah(aiPredictedPrice)}
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              Berdasarkan model valuasi pasar
            </div>
          </div>

          {/* Selisih */}
          <div className="bg-emerald-600 text-white rounded-xl p-4 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-emerald-100 uppercase tracking-wider">
                Selisih Lebih Hemat
              </span>
              <ArrowDownRight className="w-4 h-4 text-emerald-200" />
            </div>
            <div className="text-2xl font-black text-white mt-1">
              {formatRupiah(differenceWithAi)}
            </div>
            <div className="text-xs font-bold text-emerald-100 mt-1 flex items-center gap-1">
              <span>{Math.round(differenceWithAi / 1000000)} juta lebih rendah dari estimasi AI</span>
            </div>
          </div>

        </div>

        {/* Sales Presentation Helper Banner */}
        <div className="mt-6 rounded-xl bg-slate-50 p-4 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold shrink-0">
              FA
            </div>
            <div>
              <p className="font-bold text-slate-800">
                Poin Penjelasan Sales ke Customer:
              </p>
              <p className="text-slate-600">
                Customer mendapatkan keuntungan langsung Rp{Math.round((highestPrice - faPrice) / 1000000)} Juta dibanding harga tertinggi di pasar ({formatRupiah(highestPrice)}).
              </p>
            </div>
          </div>

          <div className="shrink-0 font-extrabold text-emerald-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
            Nilai Terbaik di Surabaya
          </div>
        </div>

      </div>

    </div>
  );
};
