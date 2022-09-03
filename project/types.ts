export interface IDummyEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export interface Events {
  events: Event[];
}

declare global {
  export interface Event {
    date: Date;
    description: string;
    id: string;
    image: string;
    isFeatured: boolean;
    location: string;
    title: string;
  }
}
