export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  videoUrl?: string; // New field for product video
  features: string[];
  specs: {
    panelSize?: string;
    resolution?: string;
    os?: string;
    connectivity?: string;
    power?: string;
    brightness?: string;
    pixelPitch?: string;
    refreshRate?: string;
    contrastRatio?: string;
    responseTime?: string;
    storage?: string; // RAM/ROM
  };
}

export interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  productInterest: string;
  message: string;
}