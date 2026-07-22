/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface LegalService {
  id: string;
  title: string;
  description: string;
  iconName: string; // Map to Lucide icon string
  details: string[];
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  id: string;
  value: string;
  numericValue: number;
  label: string;
  suffix: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  details: string;
}

export interface ExperienceArea {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}
