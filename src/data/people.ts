// Team. Source of truth: docs/content-inventory.md (People page).
// Three members are listed on the current site by name only — bios and photos are a known content gap.

export interface Person {
  id: string;
  name: string;
  nameZh: string;
  role: string;
  initial: string;
  /** Short bio used on cards. */
  summary?: string;
  academic?: string[];
  admissions?: string[];
  qualifications?: string[];
  practice?: string;
}

export const people: Person[] = [
  {
    id: 'tsang',
    name: 'Mr. Tsang Chung Yu',
    nameZh: '曾重瑜律師',
    role: 'Principal',
    initial: 'T',
    summary:
      'Admitted in Hong Kong (1995). LLM, University of London. China-Appointed Attesting Officer, Notary Public, and Civil Celebrant of Marriages. Broad litigation and advisory practice.',
    academic: [
      'BSocSc (Hons), The Chinese University of Hong Kong, 1987',
      'LLB (Hons), University of London, 1992',
      'PCLL, The University of Hong Kong, 1993',
      'LLM (Merit), University of London, 2003',
    ],
    admissions: ['Hong Kong, 1995'],
    qualifications: ['China-Appointed Attesting Officer', 'Notary Public', 'Civil Celebrant of Marriages'],
    practice:
      'Mr. Tsang founded the firm in 2007. His litigation practice spans commercial disputes, matrimonial matters, personal injury and employees’ compensation, employment, insurance claims, contentious probate, construction and arbitration, intellectual property, landlord and tenant, land disputes, sale of goods, bankruptcy and winding up, and criminal matters. He also handles commercial and probate work, and provides attesting and notarial services.',
  },
  {
    id: 'kwan',
    name: 'Ms. Christina Kwan',
    nameZh: '關婉儀律師',
    role: 'Senior Associate',
    initial: 'K',
    summary:
      'Admitted in Hong Kong (1995) and the United Kingdom (1997). LLM, University of London. Focus on contentious and non-contentious intellectual property, probate, and conveyancing.',
    academic: [
      'BA, University of Western Ontario, 1987',
      'LLB (Hons), The University of Hong Kong, 1992',
      'PCLL, The University of Hong Kong, 1993',
      'LLM, University of London, 2005',
    ],
    admissions: ['Hong Kong, 1995', 'United Kingdom, 1997'],
    practice:
      'Ms. Kwan’s practice centres on contentious and non-contentious intellectual property. She also advises on probate, litigation, commercial matters, and conveyancing.',
  },
  { id: 'chan', name: 'Ms. Chan Wai Ling', nameZh: '陳維寧律師', role: 'Consultant', initial: 'C' },
  { id: 'lee', name: 'Ms. Lee Pik Kuen Anne', nameZh: '李碧娟律師', role: 'Consultant', initial: 'L' },
  { id: 'kam', name: 'Ms. Kam Ho Ting Tiffany', nameZh: '甘皓婷律師', role: 'Associate', initial: 'K' },
];

export const featuredPeople = people.filter((p) => p.summary);
export const getPerson = (id: string) => people.find((p) => p.id === id);
