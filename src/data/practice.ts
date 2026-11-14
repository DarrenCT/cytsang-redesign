import { getCollection, type CollectionEntry } from 'astro:content';

export type PracticeEntry = CollectionEntry<'practice'>;

/** All practice areas in display order. */
export async function getPracticeAreas(): Promise<PracticeEntry[]> {
  const entries = await getCollection('practice');
  return entries.sort((a, b) => a.data.order - b.data.order);
}

/** Default "Our approach" steps, chosen by the entry's `kind`. */
export const approach: Record<PracticeEntry['data']['kind'], { title: string; text: string }[]> = {
  contentious: [
    { title: 'Assess', text: 'We review the facts and give you a frank view of the merits, the risks, and the likely cost.' },
    { title: 'Strategise', text: 'We agree a strategy built around your goals, not just the legal position.' },
    { title: 'Resolve', text: 'We pursue settlement where it serves you, and litigate firmly where it does not.' },
  ],
  advisory: [
    { title: 'Understand', text: 'We start with your circumstances and what you want to achieve, not with a template.' },
    { title: 'Advise', text: 'We set out your options in plain terms, with the cost and timing of each.' },
    { title: 'Complete', text: 'We prepare the documents, deal with the other parties, and see the matter through.' },
  ],
  service: [
    { title: 'Enquire', text: 'Tell us what the document or ceremony is for, and we confirm exactly what is required.' },
    { title: 'Prepare', text: 'We send you a checklist and prepare the paperwork before your appointment.' },
    { title: 'Attend', text: 'You attend our office or the agreed venue, and we complete the formalities.' },
  ],
};
