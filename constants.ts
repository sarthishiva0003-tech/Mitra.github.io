import { Product } from './types';

export const COMPANY_DETAILS = {
  name: "Signage Mitra",
  tagline: "Trader - Wholesaler / Distributor of Led Display Screen",
  gstin: "09DKEPM6617Q1ZD",
  phone: "9211866535",
  address: "Kh.no- 362 Ram prak ilaichipur road nearby sheedbaba mandir loni Ghaziabad UP- 201102",
  email: "signegnamitra@gmail.com"
};

// NOTE: Yahan apna Google Form ka link daalein (Jise Create karne ke baad 'Send' -> 'Link' se copy karein)
export const GOOGLE_FORM_URL = "https://docs.google.com/forms/"; 

export const PRODUCTS: Product[] = [
  {
    id: '55-inch-l-type-standee',
    name: "55 Inch Digital Standee L Type",
    category: "Digital Standee",
    description: "Elegant L-Type 55-inch digital standee with a sleek design. Perfect for lobbies, showrooms, and exhibitions to display dynamic ads. Price: ₹ 38,000/Piece.",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/12/471054833/GA/LX/EH/225706220/whatsapp-image-2024-12-05-at-1-53-27-pm-500x500.jpeg", 
    features: [
      "Screen Size: 55 inch",
      "Design: L-Type Floor Stand",
      "Resolution: 4K UHD",
      "Touch Screen Optional",
      "Metal Body"
    ],
    specs: {
      panelSize: "55 inch",
      resolution: "3840x2160",
      brightness: "450 nits",
      os: "Android 11",
      power: "AC 110-240V"
    }
  },
  {
    id: 'adv-43-lcd-standee',
    name: "Advertising 43 Inch LCD Display Screen Standee",
    category: "Digital Standee",
    description: "Premium 43-inch LCD display standee for indoor advertising. High quality visual experience for malls, hotels, and shops. Price: ₹ 26,000/Piece.",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/12/471054833/GA/LX/EH/225706220/whatsapp-image-2024-12-05-at-1-53-27-pm-500x500.jpeg", 
    features: [
      "Display Size: 43 inch",
      "Display Type: LCD",
      "Placement: Indoor",
      "High Definition Clarity",
      "Easy to Move"
    ],
    specs: {
      panelSize: "43 inch",
      resolution: "Full HD",
      brightness: "Standard",
      os: "Android/Windows Compatible",
      power: "AC 220V"
    }
  },
  {
    id: 'digital-standee-adv',
    name: "Digital Standee Advertising Display",
    category: "Digital Standee",
    description: "High brightness digital standee designed for maximum engagement. Perfect for displaying video ads and promotions. Price: ₹ 30,000/Piece.",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/12/471054396/RL/VC/VQ/225706220/led-video-wall-500x500.jpeg",
    features: [
      "Screen Size: 43 inch",
      "Resolution: Full HD",
      "Brightness: Above 1000 cd/m²",
      "Robust Body",
      "Plug & Play"
    ],
    specs: {
      panelSize: "43 inch",
      resolution: "1920x1080",
      brightness: ">1000 nits",
      os: "Android",
      connectivity: "USB, WiFi"
    }
  },
  {
    id: '24-inch-signage',
    name: "24 Inch Digital Signage Display",
    category: "Digital Signage",
    description: "Compact digital signage display for wall mounting. Ideal for elevators, corridors, and small spaces. Price: ₹ 13,500/Piece.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/1/478440832/KR/TI/XQ/225706220/metallic-alloy-led-digital-signage-display-rectangle-500x500.jpg",
    features: [
      "Display Type: LCD",
      "Installation: Wall Mount",
      "Sleek Metallic Alloy Body",
      "Energy Efficient",
      "Wide Viewing Angle"
    ],
    specs: {
      panelSize: "24 inch", // Note: Title says 24, dump had conflicting info, sticking to title
      resolution: "HD/Full HD",
      power: "AC 220V",
      connectivity: "HDMI, USB"
    }
  },
  {
    id: 'p4-indoor-wall',
    name: "Advertising Screen Full Color Indoor Display",
    category: "LED Video Wall",
    description: "Large format P4 indoor LED screen for impactful advertising. Customizable size for various venues. Price: ₹ 3,500/sq ft.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/10/549910278/PD/WC/RS/225706220/whatsapp-image-2025-10-02-at-1-04-13-pm-500x500.jpeg",
    features: [
      "Pixel Pitch: P4",
      "Application: Indoor Advertising",
      "High Refresh Rate",
      "Vivid Colors",
      "Seamless Splicing"
    ],
    specs: {
      pixelPitch: "4 mm",
      resolution: "Customizable",
      brightness: "Indoor Standard",
      power: "AC 220V"
    }
  },
  {
    id: 'led-video-wall-supplier',
    name: "LED Video Wall Supplier",
    category: "LED Video Wall",
    description: "Professional grade LED video wall solutions for indoor applications. Full color display. Price: ₹ 3,800/sq ft.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/3/494403779/EY/VO/DW/225706220/led-video-wall-supplier-500x500.jpg",
    features: [
      "Pixel Pitch: 4 mm",
      "Usage: Indoor",
      "Color: Full Color",
      "Long Lifespan",
      "Easy Maintenance"
    ],
    specs: {
      pixelPitch: "4 mm",
      contrastRatio: "High",
      refreshRate: "≥1920Hz"
    }
  },
  {
    id: 'p10-led-module',
    name: "P10 LED Module",
    category: "LED Module",
    description: "High quality P10 LED modules for outdoor and semi-outdoor displays. Cost effective and durable. Price: ₹ 920/Piece.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/3/494403215/RO/JL/HB/225706220/p10-led-module-500x500.jpg",
    features: [
      "Pixel Pitch: 10 mm",
      "Brightness: Low to High Options",
      "Best Viewing Distance: 10 Meter",
      "Easy Assembly",
      "Weather Resistant"
    ],
    specs: {
      pixelPitch: "10 mm",
      brightness: "High",
      power: "5V DC"
    }
  },
  {
    id: 'rental-led-display',
    name: "Rental LED Display For Events",
    category: "Rental Service",
    description: "P2.5 Indoor LED display available for rent. Perfect for weddings, corporate events, and stage shows. Price: ₹ 25,000/Hour.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/3/496157746/GG/LL/WJ/225706220/rental-led-display-for-events-500x500.jpg",
    features: [
      "LED Type: Indoor LED",
      "Pixel Pitch: P2.5",
      "Screen Size: 10x8 ft (Configurable)",
      "High Refresh Rate for Camera",
      "Quick Installation"
    ],
    specs: {
      pixelPitch: "2.5 mm",
      resolution: "High Resolution",
      brightness: "Indoor Adjustable"
    }
  },
  {
    id: '6x4-outdoor-wall',
    name: "6 x 4 Ft P4 Outdoor Wall LED",
    category: "Outdoor LED",
    description: "Rugged outdoor LED wall with P4 pixel pitch. Designed to withstand weather elements while delivering bright visuals. Price: ₹ 19,000/Piece.",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/12/471052116/OB/SY/LE/225706220/led-screen-500x500.jpeg",
    features: [
      "Display Size: 6 x 4 Ft",
      "Pixel Pitch: P4",
      "Usage Environment: Outdoor",
      "Waterproof Cabinet",
      "High Brightness"
    ],
    specs: {
      pixelPitch: "4 mm",
      brightness: ">5000 nits",
      power: "AC 220V"
    }
  },
  {
    id: 'p2-5-module',
    name: "P2.5 Indoor Full Color LED Display Module",
    category: "LED Module",
    description: "Fine pitch P2.5 LED module for high resolution indoor video walls. Excellent color reproduction. Price: ₹ 1,350/Piece.",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/12/474652161/LV/YP/OL/225706220/p2-5-module-500x500.jpg",
    features: [
      "Pixel Pitch: 2.5 mm",
      "Usage: Indoor",
      "Power Source: Electric",
      "High Contrast",
      "Smooth Image"
    ],
    specs: {
      pixelPitch: "2.5 mm",
      power: "5V DC",
      refreshRate: "High"
    }
  },
  {
    id: 'led-display-signage',
    name: "LED Display Signage",
    category: "Signage",
    description: "Versatile LED display signage for shops, malls, and hospitals. Can be used indoors or outdoors. Price: ₹ 17,000/Piece.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/3/498644445/VL/AM/WO/225706220/led-display-signage-500x500.jpeg",
    features: [
      "Sign Type: Light Box",
      "Application: Outdoor, Indoor, Shop Front",
      "Mounting: Wall Mount",
      "Attractive Design",
      "Low Power Consumption"
    ],
    specs: {
      power: "AC 220V",
      connectivity: "Manual/Controller"
    }
  }
];