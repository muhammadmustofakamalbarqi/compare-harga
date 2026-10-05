export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  type: string;
  year: number;
  mileage: number;
  transmission: 'Automatic' | 'Manual';
  fuel: 'Bensin' | 'Diesel' | 'Hybrid';
  location: string;
  price: number;
  showroom: string;
  statusBadge?: string;
  image?: string;
  plateRegion?: string;
  color?: string;
}

export interface ShowroomComparison {
  rank: number;
  showroom: string;
  isFA: boolean;
  vehicle: string;
  year: number;
  mileage: number;
  transmission: string;
  price: number;
  priceFormatted: string;
  sourceName: string;
  sourceUrl?: string;
  date: string;
  location: string;
  notes?: string;
}

export interface AnalysisResultData {
  vehicleSummary: {
    brand: string;
    model: string;
    type: string;
    transmission: string;
    year: number;
    mileage: number;
    fuel: string;
    location: string;
  };
  lowestPrice: number;
  highestPrice: number;
  averagePrice: number;
  aiPredictedPrice: number;
  faPrice: number;
  differenceWithAi: number;
  percentageDiffWithAi: number;
  comparisonList: ShowroomComparison[];
}

export type PageView = 'home' | 'analysis' | 'vehicles' | 'about';
