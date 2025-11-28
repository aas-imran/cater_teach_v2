import { ServiceItem, ServiceCategory } from '../../types';

export const servicesData: ServiceItem[] = [
  {
    id: '1',
    title: 'Food Catering',
    description: 'Serving delicious foods for any events and complete cooking arrangements.',
    iconName: 'ChefHat',
    category: ServiceCategory.CATERING,
    imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Event Management',
    description: 'We organize your complete event down to every last-minute detail.',
    iconName: 'Calendar',
    category: ServiceCategory.EVENTS,
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Corporate Events',
    description: 'Turnkey event services helping corporates meet business objectives.',
    iconName: 'Briefcase',
    category: ServiceCategory.EVENTS,
    imageUrl: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Staffing Solutions',
    description: 'Professional team of food catering services staff.',
    iconName: 'Users',
    category: ServiceCategory.STAFFING,
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Seminar Setup',
    description: 'Corporate seminars in star hotels with competitive rates.',
    iconName: 'Presentation',
    category: ServiceCategory.EVENTS,
    imageUrl: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'Furniture Rental',
    description: 'Wide range of event furniture rental services.',
    iconName: 'Armchair',
    category: ServiceCategory.RENTAL,
    imageUrl: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2118&auto=format&fit=crop'
  },
  {
    id: '7',
    title: 'Kitchen Equipment',
    description: 'Cooking indoors or out, we’ve got your kitchen rental needs covered.',
    iconName: 'Microwave',
    category: ServiceCategory.RENTAL,
    imageUrl: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '8',
    title: 'Catering Equipment',
    description: 'Array of catering equipment on rentals for any kind of event.',
    iconName: 'Utensils',
    category: ServiceCategory.RENTAL,
    imageUrl: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=2000&auto=format&fit=crop'
  },
];