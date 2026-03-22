/**
 * Canonical audience keys for docs frontmatter and MDX components.
 * Display order: business-facing → implementation-facing.
 */
export const AUDIENCE_KEYS = [
  'stakeholder',
  'business-analyst',
  'solution-architect',
  'developer',
  'tester',
] as const;

export type AudienceKey = (typeof AUDIENCE_KEYS)[number];

export const audienceLabels: Record<AudienceKey, string> = {
  stakeholder: 'Stakeholders',
  'business-analyst': 'Business analysts',
  'solution-architect': 'Solution architects',
  developer: 'Developers',
  tester: 'Testers',
};

export function sortAudienceKeys(keys: readonly AudienceKey[]): AudienceKey[] {
  const set = new Set(keys);
  return AUDIENCE_KEYS.filter((k) => set.has(k));
}

export function formatAudienceList(keys: readonly AudienceKey[] | undefined): string | null {
  if (!keys?.length) return null;
  return sortAudienceKeys(keys)
    .map((k) => audienceLabels[k])
    .join(', ');
}
