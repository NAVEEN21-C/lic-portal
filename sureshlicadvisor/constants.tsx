
import React from 'react';
import { LICPlan, Service, Testimonial } from './types';
import {
  ShieldCheck,
  TrendingUp,
  Users,
  LifeBuoy
} from 'lucide-react';

export const AGENT_NAME = "T. SURESH";
export const AGENT_CODE = "1109 73J";
export const AGENT_PHONE = "9908968539";
export const AGENT_EXPERIENCE = "18+";
export const AGENT_WHATSAPP = `https://wa.me/91${AGENT_PHONE}`;
export const AGENT_EMAIL = "suresh.licadvisor@gmail.com";

// New Stats from User Request
export const POLICIES_ISSUED = "1860+";
export const CLAIMS_SETTLED = "500+";
export const CLAIM_RATIO = "98.62%"; // As per screenshot

export const AGENT_ADDRESS_RESI = "1-115, Raja Sri Garlapad (Vi), Yerravalli (Mdl.), Jogulamba Gadwal (Dist.) 509128";
export const AGENT_ADDRESS_OFF = "Sri Sai Printers, Hanuman Complex, Yerravalli X Road, Jogulamba, Gadwal (Dist.) 509125";

export const SERVICES: Service[] = [
  {
    id: 'advisory',
    title: 'Personalized Advisory',
    description: 'Free consultation to understand your financial goals and suggest the best suited LIC plans.',
    icon: <Users className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'claims',
    title: 'Claims Assistance',
    description: 'Empathetic, step-by-step support for smooth maturity or death claim settlements.',
    icon: <LifeBuoy className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'policy-review',
    title: 'Policy Review',
    description: 'Helping you manage premiums, update nominations, and track your current portfolio.',
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'savings',
    title: 'Savings Plans',
    description: 'Tax-saving investments that offer high returns and secure your family\'s future.',
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />
  }
];

export const PLANS: LICPlan[] = [
  {
    id: 'jeevan-anand',
    planNumber: '715',
    name: 'New Jeevan Anand',
    category: 'Endowment',
    description: 'Provides financial protection throughout life with maturity benefits if you survive the term.',
    benefits: ['Bonus additions', 'Double protection', 'Tax benefits under 80C'],
    entryAge: '18-50 years',
    term: '15-35 years',
    minSumAssured: '₹1 Lakh'
  },
  {
    id: 'jeevan-labh',
    planNumber: '736',
    name: 'Jeevan Labh',
    category: 'Endowment',
    description: 'A limited premium payment plan that offers high returns through bonuses.',
    benefits: ['Limited pay', 'High returns', 'Protection coverage'],
    entryAge: '8-59 years',
    term: '16, 21, or 25 years',
    minSumAssured: '₹2 Lakh'
  },
  {
    id: 'amritbaal',
    planNumber: '774',
    name: 'LIC Amritbaal',
    category: 'Endowment',
    description: 'Guaranteed savings for your child\'s future goals like higher education or marriage.',
    benefits: ['Guaranteed Additions', 'Maturity at age 20-25', 'Child protection'],
    entryAge: '30 days - 13 years',
    term: 'Specific to maturity age',
    minSumAssured: '₹2 Lakh'
  },
  {
    id: 'jan-suraksha',
    planNumber: '880',
    name: 'LIC Jan Suraksha',
    category: 'Special',
    description: 'A life micro-insurance plan for lower-income groups with an "auto cover" facility and guaranteed additions.',
    benefits: ['Auto cover facility', 'Guaranteed additions', 'Micro-insurance benefits'],
    entryAge: '18-50 years',
    term: '10-20 years',
    minSumAssured: '₹50,000'
  },
  {
    id: 'bima-lakshmi',
    planNumber: '881',
    name: 'LIC Bima Lakshmi',
    category: 'Money Back',
    description: 'A savings plan designed exclusively for women, offering periodic money-back payouts and maturity benefits.',
    benefits: ['Exclusive for women', 'Periodic money-back payouts', 'Maturity benefits'],
    entryAge: '18-50 years',
    term: '15-25 years',
    minSumAssured: '₹2 Lakh'
  },
  {
    id: 'nav-jeevan-shree',
    planNumber: '912',
    name: 'LIC Nav Jeevan Shree',
    category: 'Endowment',
    description: 'An endowment plan available in single or regular premium modes.',
    benefits: ['Single or regular premium', 'Endowment benefits', 'Tax savings'],
    entryAge: '8-55 years',
    term: '10-25 years',
    minSumAssured: '₹1 Lakh'
  },
  {
    id: 'bima-kavach',
    planNumber: '887',
    name: 'LIC Bima Kavach',
    category: 'Term',
    description: 'A term insurance plan offering pure risk protection.',
    benefits: ['Pure risk protection', 'High coverage', 'Affordable premiums'],
    entryAge: '18-60 years',
    term: '10-40 years',
    minSumAssured: '₹5 Lakh'
  },
  {
    id: 'protection-plus',
    planNumber: '886',
    name: 'LIC Protection Plus',
    category: 'ULIP',
    description: 'A modern unit-linked insurance plan (ULIP) focusing on higher protection.',
    benefits: ['High protection', 'Market-linked returns', 'Flexibility in investment'],
    entryAge: '18-50 years',
    term: '10-25 years',
    minSumAssured: '₹2 Lakh'
  },
  {
    id: 'micro-bachat',
    planNumber: '751',
    name: 'LIC Micro Bachat',
    category: 'Special',
    description: 'A low-premium endowment plan with loan facilities and life cover.',
    benefits: ['Low premium', 'Loan facilities', 'Life cover'],
    entryAge: '18-55 years',
    term: '10-15 years',
    minSumAssured: '₹50,000'
  },
  {
    id: 'new-jeevan-mangal',
    planNumber: '940',
    name: 'LIC New Jeevan Mangal',
    category: 'Special',
    description: 'A protection-oriented micro-insurance plan with a return of premium feature.',
    benefits: ['Return of premium', 'Micro-insurance benefits', 'Protection oriented'],
    entryAge: '18-60 years',
    term: '10-15 years',
    minSumAssured: '₹10,000'
  },
  {
    id: 'bhagya-lakshmi',
    planNumber: '939',
    name: 'LIC Bhagya Lakshmi',
    category: 'Special',
    description: 'A non-par, limited-payment micro-term insurance plan.',
    benefits: ['Limited payment', 'Micro-term insurance', 'Non-participating'],
    entryAge: '18-55 years',
    term: '5-15 years',
    minSumAssured: '₹20,000'
  },
  {
    id: 'jeevan-azad',
    planNumber: '868',
    name: 'LIC Jeevan Azad',
    category: 'Endowment',
    description: 'A basic savings plan for those seeking low-cost entry.',
    benefits: ['Low-cost entry', 'Basic savings', 'Life cover'],
    entryAge: '90 days - 50 years',
    term: '15-20 years',
    minSumAssured: '₹2 Lakh'
  },
  {
    id: 'aadhaar-stambh',
    planNumber: '943',
    name: 'LIC Aadhaar Stambh',
    category: 'Special',
    description: 'Exclusively for male lives with Aadhaar cards, offering protection and savings.',
    benefits: ['Exclusive for males', 'Protection and savings', 'Aadhaar required'],
    entryAge: '8-55 years',
    term: '10-20 years',
    minSumAssured: '₹2 Lakh'
  },
  {
    id: 'aadhaar-shila',
    planNumber: '944',
    name: 'LIC Aadhaar Shila',
    category: 'Special',
    description: 'Exclusively for female lives with Aadhaar cards.',
    benefits: ['Exclusive for females', 'Life cover', 'Aadhaar required'],
    entryAge: '8-55 years',
    term: '10-20 years',
    minSumAssured: '₹2 Lakh'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ramesh Kumar",
    location: "Hyderabad",
    content: "Suresh made the LIC process so easy. He explained Jeevan Labh in detail and helped me calculate the exact returns. Highly recommended!",
    rating: 5
  }
];
