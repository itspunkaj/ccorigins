import React from 'react';

export interface calculatorStep {
  step: number;
  progress: string;
  title: string;
  subtitle?: string;
  infolink?: string;
  component?: React.ReactNode;
}

export enum steps {
  BHKType = 'bhk-type',
  RoomsToDesign = 'rooms-to-design',
  Package = 'package',
  GetQuote = 'get-quote',
}
