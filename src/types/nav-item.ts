export interface NavItem {
  id: string;
  label: string;
  url?: string | undefined;
  dropdown?: {
    label: string;
    name: string;
    company: string;
  }[];
}
