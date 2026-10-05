import React, { useState, useEffect } from 'react';
import { SearchForm, CarFormParams } from '../components/SearchForm';
import { ResultCard } from '../components/ResultCard';
import { PriceComparisonChart } from '../components/PriceComparisonChart';
import { ComparisonTable } from '../components/ComparisonTable';
import { SourceModal } from '../components/SourceModal';
import { 
  DEFAULT_AVANZA_ANALYSIS, 
  MOCK_ANALYSIS_DATABASE 
} from '../data/mockData';
import { AnalysisResultData, ShowroomComparison } from '../types';
import { 
  Sparkles, 
  CheckCircle2, 
  Printer, 
  Share2, 
  ArrowLeft,
  FileCheck2
} from 'lucide-react';

interface AnalysisPageProps {
  initialCar?: Partial<CarFormParams>;
  autoRunDemo?: boolean;
}

export const AnalysisPage: React.FC<AnalysisPageProps> = ({
  initialCar,
  autoRunDemo = false,
}) => {
  const [hasResult, setHasResult] = useState<boolean>(autoRunDemo);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingStep, setLoadingStep] = useState<number>(1);
  const [analysisData, setAnalysisData] = useState<AnalysisResultData>(
    DEFAULT_AVANZA_ANALYSIS
  );
  const [selectedSourceModal, setSelectedSourceModal] = useState<ShowroomComparison | null>(
    null
  );
  const [activeFormState, setActiveFormState] = useState<Partial<CarFormParams>>(
    initialCar || {
      brand: 'Toyota',
      model: 'Avanza',
      type: '1.5 G',
      year: 2021,
      mileage: 60000,
      transmission: 'Automatic',
      fuel: 'Bensin',
      location: 'Surabaya',
    }
  );

  // If initialCar changed from outside (e.g., user clicked "Bandingkan" in catalog)
  useEffect(() => {
    if (initialCar) {
      setActiveFormState(initialCar);
      if (autoRunDemo) {
        handleAnalyze(initialCar as CarFormParams);
      }
    }
  }, [initialCar, autoRunDemo]);

  const handleAnalyze = (params: CarFormParams) => {
    setActiveFormState(params);
    setIsLoading(true);
    setLoadingStep(1);

    // Simulate multi-step AI valuation pipeline
    setTimeout(() => setLoadingStep(2), 350);
    setTimeout(() => setLoadingStep(3), 750);
    setTimeout(() => setLoadingStep(4), 1150);

    setTimeout(() => {
      // Find matching mock or build intelligent dynamic mock
      const key = `${params.brand.toLowerCase()}-${params.model.toLowerCase()}`;
      const existingMatch = MOCK_ANALYSIS_DATABASE[key];

      if (existingMatch) {
        setAnalysisData({
          ...existingMatch,
          vehicleSummary: {
            ...existingMatch.vehicleSummary,
            year: params.year,
            mileage: params.mileage,
            transmission: params.transmission,
            fuel: params.fuel,
            location: params.location,
            type: params.type,
          },
        });
      } else {
        // Fallback intelligent calculation based on user input
        const baseEstimate = params.year >= 2022 ? 220000000 : 180000000;
        const faCalculatedPrice = baseEstimate;
        const aiCalculatedPrice = baseEstimate + 4000000;
        const lowest = faCalculatedPrice;
        const highest = baseEstimate + 12000000;
        const avg = baseEstimate + 6000000;

        const dynamicData: AnalysisResultData = {
          vehicleSummary: {
            brand: params.brand,
            model: params.model,
            type: params.type,
            transmission: params.transmission,
            year: params.year,
            mileage: params.mileage,
            fuel: params.fuel,
            location: params.location,
          },
          lowestPrice: lowest,
          highestPrice: highest,
          averagePrice: avg,
          aiPredictedPrice: aiCalculatedPrice,
          faPrice: faCalculatedPrice,
          differenceWithAi: aiCalculatedPrice - faCalculatedPrice,
          percentageDiffWithAi: 2.1,
          comparisonList: [
            {
              rank: 1,
              showroom: 'PT Fokus Abadi',
              isFA: true,
              vehicle: `${params.model} ${params.type} ${params.transmission}`,
              year: params.year,
              mileage: params.mileage,
              transmission: params.transmission,
              price: faCalculatedPrice,
              priceFormatted: `Rp${Math.round(faCalculatedPrice / 1000000)} jt`,
              sourceName: 'Internal FA',
              date: '4 Oktober 2026',
              location: `${params.location} (Showroom FA)`,
              notes: 'Unit terinspeksi 150 titik, garansi mesin 1 tahun.',
            },
            {
              rank: 2,
              showroom: 'Showroom A',
              isFA: false,
              vehicle: `${params.model} ${params.type} ${params.transmission}`,
              year: params.year,
              mileage: params.mileage + 3000,
              transmission: params.transmission,
              price: baseEstimate + 2000000,
              priceFormatted: `Rp${Math.round((baseEstimate + 2000000) / 1000000)} jt`,
              sourceName: 'Website Showroom A',
              date: '4 Oktober 2026',
              location: `${params.location} Timur`,
            },
            {
              rank: 3,
              showroom: 'Showroom B',
              isFA: false,
              vehicle: `${params.model} ${params.type} ${params.transmission}`,
              year: params.year,
              mileage: params.mileage - 2000,
              transmission: params.transmission,
              price: baseEstimate + 5000000,
              priceFormatted: `Rp${Math.round((baseEstimate + 5000000) / 1000000)} jt`,
              sourceName: 'Marketplace Partner B',
              date: '3 Oktober 2026',
              location: `${params.location} Barat`,
            },
            {
              rank: 4,
              showroom: 'Showroom C',
              isFA: false,
              vehicle: `${params.model} ${params.type} ${params.transmission}`,
              year: params.year,
              mileage: params.mileage - 4000,
              transmission: params.transmission,
              price: baseEstimate + 8000000,
              priceFormatted: `Rp${Math.round((baseEstimate + 8000000) / 1000000)} jt`,
              sourceName: 'Listing Otomotif Jatim',
              date: '2 Oktober 2026',
              location: `${params.location} Selatan`,
            },
            {
              rank: 5,
              showroom: 'Showroom D',
              isFA: false,
              vehicle: `${params.model} ${params.type} ${params.transmission}`,
              year: params.year,
              mileage: params.mileage,
              transmission: params.transmission,
              price: highest,
              priceFormatted: `Rp${Math.round(highest / 1000000)} jt`,
              sourceName: 'Portal Mobil Bekas Surabaya',
              date: '1 Oktober 2026',
              location: `${params.location} Pusat`,
            },
          ],
        };
        setAnalysisData(dynamicData);
      }

      setIsLoading(false);
      setHasResult(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const handleModifySearch = () => {
    setHasResult(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-10 sm:py-14 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Loading Overlay Animation */}
        {isLoading && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border border-slate-200 space-y-5 animate-in zoom-in-95 duration-200">
              
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <Sparkles className="w-8 h-8 animate-spin text-emerald-600" />
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Menganalisis Harga Pasar
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Algoritma AI sedang mengompilasi data showroom Jawa Timur
                </p>
              </div>

              {/* Progress Steps Indicator */}
              <div className="space-y-2.5 text-left text-xs font-semibold pt-2">
                <div className={`p-2.5 rounded-xl flex items-center gap-2.5 transition-all ${
                  loadingStep >= 1 ? 'bg-emerald-50 text-emerald-800' : 'text-slate-400'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${loadingStep >= 1 ? 'bg-emerald-600 animate-pulse' : 'bg-slate-300'}`}></div>
                  <span>1. Mengumpulkan data showroom aktif Surabaya</span>
                </div>

                <div className={`p-2.5 rounded-xl flex items-center gap-2.5 transition-all ${
                  loadingStep >= 2 ? 'bg-emerald-50 text-emerald-800' : 'text-slate-400'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${loadingStep >= 2 ? 'bg-emerald-600 animate-pulse' : 'bg-slate-300'}`}></div>
                  <span>2. Normalisasi odometer & tahun kendaraan</span>
                </div>

                <div className={`p-2.5 rounded-xl flex items-center gap-2.5 transition-all ${
                  loadingStep >= 3 ? 'bg-emerald-50 text-emerald-800' : 'text-slate-400'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${loadingStep >= 3 ? 'bg-emerald-600 animate-pulse' : 'bg-slate-300'}`}></div>
                  <span>3. Menghitung valuasi wajar pasar berbasis AI</span>
                </div>

                <div className={`p-2.5 rounded-xl flex items-center gap-2.5 transition-all ${
                  loadingStep >= 4 ? 'bg-emerald-50 text-emerald-800' : 'text-slate-400'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${loadingStep >= 4 ? 'bg-emerald-600' : 'bg-slate-300'}`}></div>
                  <span>4. Menyusun peringkat perbandingan PT Fokus Abadi</span>
                </div>
              </div>

              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-emerald-600 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${(loadingStep / 4) * 100}%` }}
                ></div>
              </div>

            </div>
          </div>
        )}

        {/* View Switcher: Form vs Result */}
        {!hasResult ? (
          <SearchForm
            onAnalyze={handleAnalyze}
            isLoading={isLoading}
            initialParams={activeFormState}
          />
        ) : (
          <div className="space-y-10 animate-in fade-in duration-300">
            
            {/* Sales Bar Actions: Cetak / Simpan Ringkasan (Customer Presentation Mode) */}
            <div className="bg-slate-900 text-white rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center">
                  FA
                </span>
                <div>
                  <h4 className="text-xs font-bold leading-tight">
                    Mode Presentasi Sales PT Fokus Abadi
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Gunakan data ini untuk menunjukkan keunggulan harga kami di hadapan customer
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Cetak / PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard?.writeText(window.location.href);
                    alert('Link perbandingan harga telah disalin! Siap dikirimkan ke customer via WhatsApp.');
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-bold transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Bagikan ke Customer</span>
                </button>
              </div>
            </div>

            {/* SECTION 6, 7 & 8: HEADER + KARTU HASIL UTAMA + HASIL ANALISIS */}
            <ResultCard
              data={analysisData}
              onModifySearch={handleModifySearch}
            />

            {/* SECTION 9: GRAFIK PERBANDINGAN */}
            <PriceComparisonChart data={analysisData} />

            {/* SECTION 10: TABEL DATA PEMBANDING */}
            <ComparisonTable
              comparisonList={analysisData.comparisonList}
              onSelectSource={(item) => setSelectedSourceModal(item)}
            />

            {/* Bottom Return CTA */}
            <div className="text-center pt-6">
              <button
                onClick={handleModifySearch}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-300 shadow-xs transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Analisis Kendaraan Lainnya</span>
              </button>
            </div>

          </div>
        )}

      </div>

      {/* SECTION 11: MODAL DETAIL SUMBER */}
      <SourceModal
        item={selectedSourceModal}
        onClose={() => setSelectedSourceModal(null)}
      />

    </div>
  );
};
