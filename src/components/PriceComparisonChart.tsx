import React, { useState } from 'react';
import { AnalysisResultData, ShowroomComparison } from '../types';
import { formatRupiah, formatRupiahJuta } from '../utils/formatters';
import { Sparkles, Info, Trophy, CheckCircle2, TrendingDown } from 'lucide-react';

interface PriceComparisonChartProps {
  data: AnalysisResultData;
}

export const PriceComparisonChart: React.FC<PriceComparisonChartProps> = ({ data }) => {
  const { comparisonList, aiPredictedPrice, faPrice } = data;
  const [activeItem, setActiveItem] = useState<ShowroomComparison | null>(null);

  // Find min and max for chart scaling
  const allPrices = [...comparisonList.map((c) => c.price), aiPredictedPrice];
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);

  // Set lower bound slightly below min and upper bound slightly above max
  const chartFloor = Math.floor((minPrice - 10000000) / 10000000) * 10000000;
  const chartCeiling = Math.ceil((maxPrice + 5000000) / 10000000) * 10000000;
  const chartRange = chartCeiling - chartFloor;

  // Calculate percentage height/position for any price
  const getPercent = (price: number) => {
    return Math.max(10, Math.min(100, ((price - chartFloor) / chartRange) * 100));
  };

  const aiPercent = getPercent(aiPredictedPrice);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Perbandingan Harga
            </h3>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-slate-100 text-slate-600">
              Visual Grafik
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Visualisasi komparasi harga showroom di Surabaya terhadap garis estimasi wajar AI.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded bg-emerald-600"></span>
            <span className="text-slate-700">PT Fokus Abadi</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded bg-slate-300"></span>
            <span className="text-slate-500">Showroom Lain</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-0.5 border-t-2 border-dashed border-emerald-600"></span>
            <span className="text-emerald-700 flex items-center gap-1 font-bold">
              <Sparkles className="w-3 h-3" />
              Prediksi AI ({formatRupiahJuta(aiPredictedPrice)})
            </span>
          </div>
        </div>
      </div>

      {/* Main Chart Area */}
      <div className="relative pt-10 pb-4">
        
        {/* Benchmark Horizontal Line: Prediksi AI */}
        <div 
          className="absolute left-0 right-0 z-10 flex items-center pointer-events-none transition-all duration-300"
          style={{ bottom: `${aiPercent}%` }}
        >
          <div className="w-full border-t-2 border-dashed border-emerald-500/80"></div>
          <div className="absolute right-2 -top-3.5 bg-emerald-700 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>Prediksi AI — {formatRupiahJuta(aiPredictedPrice)}</span>
          </div>
        </div>

        {/* Bars Container */}
        <div className="grid grid-cols-5 gap-2 sm:gap-6 h-72 sm:h-80 items-end px-2 sm:px-6 relative">
          
          {comparisonList.map((item, idx) => {
            const heightPercent = getPercent(item.price);
            const isFA = item.isFA;
            const diffWithFa = item.price - faPrice;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveItem(item)}
                onMouseLeave={() => setActiveItem(null)}
                className="h-full flex flex-col justify-end items-center group relative cursor-pointer"
              >
                {/* Floating Tooltip On Hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-12 sm:-top-14 bg-slate-900 text-white text-[11px] font-medium py-1.5 px-2.5 rounded-lg shadow-lg pointer-events-none z-30 whitespace-nowrap text-center">
                  <p className="font-bold">{item.showroom}</p>
                  <p className="text-emerald-300">{formatRupiah(item.price)}</p>
                  {!isFA && diffWithFa > 0 && (
                    <p className="text-[10px] text-slate-300">
                      +{formatRupiahJuta(diffWithFa)} vs FA
                    </p>
                  )}
                </div>

                {/* Price Label on Top of Bar */}
                <div className="mb-2 text-center">
                  {isFA && (
                    <span className="inline-block bg-amber-400 text-slate-950 font-black text-[9px] sm:text-[10px] uppercase px-1.5 py-0.5 rounded shadow-2xs mb-1">
                      Terendah
                    </span>
                  )}
                  <span className={`block font-black text-xs sm:text-sm tracking-tight ${
                    isFA ? 'text-emerald-700' : 'text-slate-700'
                  }`}>
                    {item.priceFormatted || formatRupiahJuta(item.price)}
                  </span>
                </div>

                {/* The Bar Element */}
                <div 
                  className={`w-full max-w-[64px] rounded-t-xl transition-all duration-300 relative ${
                    isFA
                      ? 'bg-gradient-to-t from-emerald-700 via-emerald-600 to-emerald-500 shadow-md shadow-emerald-600/30 ring-2 ring-emerald-500/50 group-hover:brightness-105'
                      : 'bg-slate-200 hover:bg-slate-300'
                  }`}
                  style={{ height: `${heightPercent}%` }}
                >
                  {isFA && (
                    <div className="absolute inset-0 bg-white/10 rounded-t-xl"></div>
                  )}
                </div>

                {/* Bottom Showroom Label */}
                <div className="mt-3 text-center w-full">
                  <p className={`text-xs sm:text-sm font-extrabold truncate ${
                    isFA ? 'text-emerald-800' : 'text-slate-700'
                  }`}>
                    {item.showroom}
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium hidden sm:block">
                    {item.vehicle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Helper Banner for Customer Clarity */}
      <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-600">
          <Info className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            <strong>Garis Hijau Putus-putus</strong> menunjukkan nilai wajar pasar (AI Fair Market Value). Batang hijau PT Fokus Abadi berada di bawah garis pasar, membuktikan harga kami paling hemat.
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center text-xs font-bold text-emerald-800 bg-emerald-100/90 px-3 py-1.5 rounded-lg border border-emerald-300">
            <TrendingDown className="w-3.5 h-3.5 mr-1" />
            Lebih Hemat Rp4 Jt - Rp10 Jt
          </div>
        </div>
      </div>

    </div>
  );
};
