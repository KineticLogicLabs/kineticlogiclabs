
export type Page = 'home' | 'free' | 'paid' | 'about' | 'checkout' | 'privacy' | 'terms';

export interface Resource {
  id: string;
  title: string;
  description: string;
  price?: number;
  type: 'STL' | 'STEP' | 'PDF' | 'KIT' | 'BUNDLE';
  imageUrl: string;
  isPremium?: boolean;
}

export interface CartItem extends Resource {
  quantity: number;
}
