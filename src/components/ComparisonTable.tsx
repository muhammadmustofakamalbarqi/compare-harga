import React from 'react';
import { ShowroomComparison } from '../types';
import { formatNumber, formatRupiah, formatRupiahJuta } from '../utils/formatters';
import { 
  Building2, 
  ExternalLink, 
  CheckCircle2, 
  Award, 
  ShieldCheck,
  TrendingDown,
  Sparkles
} from 'lucide-react';

interface ComparisonTableProps {
  comparisonList: ShowroomComparison[];
  onSelectSource: (item: ShowroomComparison) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  comparisonList,
  onSelectSource,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      
      {/* Table Header Section */}
      <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Data Kendaraan Sejenis
            </h3>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">
              5 Showroom Terdata
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Daftar perbandingan harga langsung dengan parameter tahun, kilometer, dan varian yang seimbang.
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Urutan Peringkat dari Termurah</span>
        </div>
      </div>

      {/* Table Container with Horizontal Scroll for Mobile */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-extrabold text-slate-500 uppercase tracking-wider">
              <th className="py-4 px-4 sm:px-6 text-center w-20">Peringkat</th>
              <th className="py-4 px-4 sm:px-6">Showroom</th>
              <th className="py-4 px-4 sm:px-6">Kendaraan</th>
              <th className="py-4 px-4 sm:px-6 text-center">Tahun</th>
              <th className="py-4 px-4 sm:px-6 text-right">KM</th>
              <th className="py-4 px-4 sm:px-6 text-right">Harga</th>
              <th className="py-4 px-4 sm:px-6 text-center">Sumber</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {comparisonList.map((row) => {
              const isFA = row.isFA;

              return (
                <tr
                  key={row.rank}
                  className={`transition-colors ${
                    isFA
                      ? 'bg-emerald-50/70 hover:bg-emerald-50 font-semibold'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  {/* Peringkat */}
                  <td className="py-4 px-4 sm:px-6 text-center whitespace-nowrap">
                    {isFA ? (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-600 text-white font-extrabold text-xs shadow-xs">
                        1
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-slate-600 font-bold text-xs">
                        {row.rank}
                      </span>
                    )}
                  </td>

                  {/* Showroom */}
                  <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                    <div className="flex items-center gap-2.5">
                      {isFA ? (
                        <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                          FA
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-lg bg-slate-200 text-slate-600 font-bold text-xs flex items-center justify-center shrink-0">
                          <Building2 className="w-3.5 h-3.5" />
                        </div>
                      )}
                      <div>
                        <span className={`block ${isFA ? 'font-extrabold text-emerald-900 text-base' : 'font-semibold text-slate-900'}`}>
                          {row.showroom}
                        </span>
                        {isFA && (
                          <span className="inline-flex items-center text-[10px] font-bold text-emerald-700 uppercase tracking-wide">
                            ★ Unit Kami (Rekomendasi)
                          </span>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Kendaraan */}
                  <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                    <span className={isFA ? 'font-bold text-slate-900' : 'text-slate-700'}>
                      {row.vehicle}
                    </span>
                  </td>

                  {/* Tahun */}
                  <td className="py-4 px-4 sm:px-6 text-center whitespace-nowrap">
                    <span className="text-slate-600 font-medium">
                      {row.year}
                    </span>
                  </td>

                  {/* KM */}
                  <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                    <span className="font-mono text-slate-700 font-medium">
                      {formatNumber(row.mileage)}
                    </span>
                  </td>

                  {/* Harga */}
                  <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                    <div className="flex flex-col items-end">
                      <span className={`text-base font-black ${
                        isFA ? 'text-emerald-700' : 'text-slate-900'
                      }`}>
                        {row.priceFormatted || formatRupiahJuta(row.price)}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        ({formatRupiah(row.price)})
                      </span>
                    </div>
                  </td>

                  {/* Sumber */}
                  <td className="py-4 px-4 sm:px-6 text-center whitespace-nowrap">
                    {isFA ? (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-200/80 text-emerald-900 border border-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                        Internal FA
                      </span>
                    ) : (
                      <button
                        onClick={() => onSelectSource(row)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-300 shadow-2xs hover:border-slate-400 transition-colors cursor-pointer"
                      >
                        <span>Lihat Sumber</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer Info for Table */}
      <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <p>
          * Data diambil secara berkala dari pasar showroom wilayah Jawa Timur.
        </p>
        <p className="font-semibold text-emerald-800">
          PT Fokus Abadi Mobil menjamin keabsahan dokumen dan transparansi harga.
        </p>
      </div>

    </div>
  );
};
