export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Using Lucide icon names as strings to map later
  imageUrl: string;
  category: 'Catering' | 'Events' | 'Rental' | 'Staffing';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum ServiceCategory {
  CATERING = 'Catering',
  EVENTS = 'Events',
  RENTAL = 'Rental',
  STAFFING = 'Staffing'
}
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  imageUrl: string;
}