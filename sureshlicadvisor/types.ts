
// Fix: Add React import to resolve 'React' namespace error in .ts file
import React from 'react';

export interface LICPlan {
  id: string;
  planNumber?: string;
  name: string;
  category: 'Endowment' | 'Money Back' | 'Term' | 'ULIP' | 'Pension' | 'Special';
  description: string;
  benefits: string[];
  entryAge: string;
  term: string;
  minSumAssured?: string;
  highlights?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  content: string;
  rating: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  // Fix: Ensure React namespace is available for ReactNode
  icon: React.ReactNode;
}
