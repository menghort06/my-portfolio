export interface Project {
  id: string;
  name: string;
  description: string;
  category: 'frontend' | 'fullstack' | 'mobile' | 'ui/ux';
  techStack: string[];
  isFeatured?: boolean;
  photo: string;
  year: number;
  manageStack: string;
  url: string;
}
