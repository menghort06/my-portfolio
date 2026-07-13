export interface JourneyEvent {
  id: string;
  year: string;
  type: 'work' | 'education';
  title: string;
  organization: string;
  period: string;
  description: string;
  url?: string;
  icon: string;
  responsibilities: string[];
  achievements: string[];
}
