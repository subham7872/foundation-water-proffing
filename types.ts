
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  serviceInterest: string;
  timestamp: string;
}

export interface Location {
  name: string;
  address: string;
  phone: string;
  hours: string;
  manager: string;
  managerPhoto: string;
}

export interface Testimonial {
  author: string;
  location: string;
  rating: number;
  text: string;
  role: string;
}
