import { ProjectCode } from '../types';

const PROJECT_DISPLAY_NAMES: { [key: string]: string } = {
  'PCS_20_297': '20_297 - TAU',
  'PCS_20_304': '20_304 - CHV',
  'PCS_20_305': '20_305 - JUP',
  'PCS_20_307': '20_307 - TAU',
  'PSI.SIS 23_042': '23_042 - RBSU e MSQ',
  'PSI.SIS 23_090': '23_090 - RBG',
  'PSI.SIS_24_064_CPFL': '24_064 - RB14',
  'PSI.SIS 24_065_CPFL': '24_065 - RB14',
  'PSI.SIS 24_098TC': '24_098 - MOM3 e SBO',
  'PSI.SIS 24_139': '24_139 - AGV',
  'PSI.SIS 24_173': '24_173 - SJC',
  'PSI.SIS 24_175': '24_175 - TIE',
  'PSI.SIS 24_177': '24_177 - BRP',
  'PSI.SIS 24_237': '24_237 - SJC',
  'PSI.SIS 24_238': '24_238 - TIE',
  'PSI.SIS 24_239': '24_239 - BRP',
  'PSI.SIS 24_281': '24_281 - SJR e CAT',
  'PSI.SIS 24_332': '24_332 - SJR e CAT'
};

export const extractProjectNumber = (projectCode: string): string => {
  if (!projectCode) return '';
  
  const cleanCode = projectCode.toString().trim();
  
  // First try to find the XX_XXX pattern
  const match = cleanCode.match(/\d+_\d+/);
  if (match) return match[0];
  
  // If not found, try to find just numbers
  const numberMatch = cleanCode.match(/\d+/);
  return numberMatch ? numberMatch[0] : cleanCode;
};

export const compareProjectCodes = (a: string, b: string): number => {
  const numA = extractProjectNumber(a);
  const numB = extractProjectNumber(b);

  const [yearA, seqA] = numA.split('_').map(Number);
  const [yearB, seqB] = numB.split('_').map(Number);

  if (yearA !== yearB) {
    return yearA - yearB;
  }
  
  return seqA - seqB;
};

export const formatProjectCodeDisplay = (codes: string[]): ProjectCode[] => {
  if (!Array.isArray(codes)) {
    console.error('formatProjectCodeDisplay: codes is not an array', codes);
    return [];
  }

  console.log('Received codes:', codes);
  
  const formattedCodes = codes
    .filter(Boolean) // Remove null/undefined/empty values
    .map(code => {
      const original = code.toString().trim();
      const display = PROJECT_DISPLAY_NAMES[original] || original;
      console.log('Formatting code:', { original, display });
      return { original, display };
    })
    .sort((a, b) => compareProjectCodes(a.original, b.original));

  console.log('Formatted codes:', formattedCodes);
  return formattedCodes;
};