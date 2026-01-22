
export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Strength' | 'Cardio' | 'Mindfulness' | 'HIIT';
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface ScheduleItem {
  time: string;
  activity: string;
  trainer: string;
  day: string;
}
