// Company Information
export const COMPANY = {
  name: "PKKR Engineering",
  fullName: "PKKR Engineering & PKR Traders",
  tagline: "Complete Dairy Plant Solutions",
  description:
    "Trusted supplier and erector of dairy equipment, milk processing machinery, lab materials, and turnkey dairy plant solutions based in Pudukkottai, Tamil Nadu.",
  phone: "+91 63826 44316",
  phoneDisplay: "+91 63826 44316",
  whatsapp: "916382644316",
  email: "pkkrengineering@gmail.com",
  address: "Pudukkottai, Tamil Nadu, India",
  addressFull: "PKKR Engineering & PKR Traders, Pudukkottai, Tamil Nadu – 622001, India",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.77041787!2d78.7502!3d10.3797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf4b5b5b5b5b5%3A0x0!2sPudukkottai%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1234567890",
  workingHours: "Mon – Sat: 9:00 AM – 7:00 PM",
  established: "2005",
} as const;

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
] as const;

// Products
export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  features: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "milk-process-plant",
    name: "Milk Process Plant",
    description:
      "Fully automated milk processing plants with pasteurization, homogenization, and filling systems for capacities from 500 LPH to 50,000 LPH.",
    category: "Processing Plants",
    image: "/images/milk-process-plant-01.jpg",
    features: ["500 LPH – 50,000 LPH", "Automatic Grade", "SS 304 / 316 Construction", "PLC Controlled"],
  },
  {
    id: "ghee-boiler",
    name: "Ghee Boiler",
    description:
      "High-efficiency stainless steel ghee boilers available in capacities from 100 to 1000 litres. Ideal for large-scale ghee manufacturing.",
    category: "Ghee Equipment",
    image: "/images/ghee-boiler-500l.jpg",
    features: ["100L – 1000L Capacity", "SS 304 Food Grade", "Steam Jacketed", "Motor Driven Agitator"],
  },
  {
    id: "milk-chilling-tank",
    name: "Milk Chilling & Storage Tank",
    description:
      "Large-capacity insulated stainless steel milk chilling and storage tanks for bulk milk collection centres and dairy plants.",
    category: "Storage Equipment",
    image: "/images/milk-chilling-tank.jpg",
    features: ["1,000L – 50,000L", "Insulated Body", "Agitator Mounted", "CIP Ready"],
  },
  {
    id: "steam-boiler",
    name: "Industrial Steam Boiler",
    description:
      "Heavy-duty industrial steam boilers for dairy plant heating requirements. Reliable, energy-efficient, and built for continuous operation.",
    category: "Boilers",
    image: "/images/industrial-steam-boiler.jpg",
    features: ["Various Capacities", "Coal / Oil / Gas Fired", "IBR Approved", "High Efficiency"],
  },
  {
    id: "paneer-vat",
    name: "Paneer & Curd Making Vat",
    description:
      "Stainless steel processing vats for paneer, curd, and cheese production. Available in multiple sizes with optional heating/cooling jackets.",
    category: "Processing Equipment",
    image: "/images/paneer-processing-vat.jpg",
    features: ["SS 304 Grade", "Jacketed Design", "Easy to Clean", "Custom Sizes"],
  },
  {
    id: "dairy-silos",
    name: "Stainless Steel Silos & Tanks",
    description:
      "Large-capacity vertical stainless steel silos for milk and dairy product storage in modern dairy processing facilities.",
    category: "Storage Equipment",
    image: "/images/stainless-steel-silos.jpg",
    features: ["10,000L – 1,00,000L", "Vertical Design", "Insulated Body", "Level Indicators"],
  },
  {
    id: "dairy-crates",
    name: "Dairy Crates & Containers",
    description:
      "High-quality HDPE milk crates, drums, and containers for milk transportation and storage. Durable, hygienic, and food-grade certified.",
    category: "Dairy Accessories",
    image: "/images/dairy-crates-containers.jpg",
    features: ["Food Grade HDPE", "Stackable Design", "Multiple Sizes", "Easy to Sanitise"],
  },
  {
    id: "dairy-plant",
    name: "Complete Dairy Plant Erection",
    description:
      "End-to-end turnkey dairy plant erection services — from civil work coordination to equipment installation, pipework, and commissioning.",
    category: "Services",
    image: "/images/dairy-processing-plant.jpg",
    features: ["Turnkey Projects", "Design & Layout", "Installation & Testing", "After-Sales Support"],
  },
];

// Product Categories
export const PRODUCT_CATEGORIES = [
  "All",
  "Processing Plants",
  "Ghee Equipment",
  "Storage Equipment",
  "Boilers",
  "Processing Equipment",
  "Dairy Accessories",
  "Services",
] as const;

// Why Choose Us
export const WHY_FEATURES = [
  {
    icon: "🏭",
    title: "20+ Years Experience",
    description:
      "Two decades of expertise in dairy equipment supply, installation, and plant erection across Tamil Nadu.",
  },
  {
    icon: "⚙️",
    title: "Complete Solutions",
    description:
      "From individual machines to complete turnkey dairy plant setups — we handle everything under one roof.",
  },
  {
    icon: "🔬",
    title: "Lab Materials & Culture",
    description:
      "Exclusive supplier of dairy lab materials, SMP powder, and bacterial culture for quality-conscious dairy units.",
  },
  {
    icon: "🛒",
    title: "New & Used Machinery",
    description:
      "Trade in certified pre-owned dairy machinery at competitive prices alongside brand-new equipment supply.",
  },
  {
    icon: "🔧",
    title: "Expert Erection Team",
    description:
      "Skilled engineers and technicians for dairy plant erection, pipework, and equipment commissioning on-site.",
  },
  {
    icon: "📞",
    title: "After-Sales Support",
    description:
      "Dedicated service team for maintenance, spare parts, and emergency support to keep your plant running.",
  },
  {
    icon: "✅",
    title: "Quality Assured",
    description:
      "All equipment sourced from certified manufacturers. SS 304 / 316 food-grade construction standards maintained.",
  },
  {
    icon: "🚚",
    title: "Pan-India Delivery",
    description:
      "Timely supply and delivery of dairy equipment to all major states with logistics coordination support.",
  },
] as const;

// Industries Served
export const INDUSTRIES = [
  { name: "Co-operative Dairies", icon: "🐄" },
  { name: "Private Dairy Plants", icon: "🏭" },
  { name: "Ghee Manufacturers", icon: "🫙" },
  { name: "Paneer & Cheese Units", icon: "🧀" },
  { name: "Ice Cream Factories", icon: "🍦" },
  { name: "Milk Collection Centres", icon: "🥛" },
  { name: "Government Dairy Projects", icon: "🏛️" },
  { name: "Curd & Yogurt Units", icon: "🥣" },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: "R. Murugesan",
    role: "Owner, Sri Murugan Dairy",
    location: "Thanjavur, Tamil Nadu",
    text: "PKKR Engineering set up our entire 5,000 LPH milk processing plant. The work was professional, timely, and within budget. Highly recommend them for any dairy plant erection work.",
    rating: 5,
  },
  {
    id: 2,
    name: "K. Selvaraj",
    role: "Manager, Kaveri Milk Products",
    location: "Tiruchirappalli",
    text: "We purchased a 500-litre ghee boiler and two milk storage tanks from them. The quality is excellent and their after-sales service has been very prompt whenever we needed help.",
    rating: 5,
  },
  {
    id: 3,
    name: "S. Palanivel",
    role: "Director, Annai Dairy Co-op",
    location: "Pudukottai District",
    text: "PKR Traders supplied us with all our lab materials, SMP culture, and dairy accessories for years. Reliable pricing and always on time. Our go-to partner for dairy supplies.",
    rating: 5,
  },
  {
    id: 4,
    name: "V. Subramaniam",
    role: "Owner, Valli Dairy Farm",
    location: "Ariyalur",
    text: "Bought a used milk chilling tank from them. It was refurbished to excellent condition. Saved us significant cost compared to a new unit. Very trustworthy team.",
    rating: 4,
  },
] as const;

// FAQ
export const FAQ_ITEMS = [
  {
    question: "What types of dairy equipment do you supply?",
    answer:
      "We supply a comprehensive range including milk process plants, ghee boilers, milk chilling and storage tanks, pasteurizers, homogenizers, paneer and curd making vats, industrial steam boilers, dairy crates, lab materials, SMP powder and culture, and more.",
  },
  {
    question: "Do you undertake complete dairy plant erection?",
    answer:
      "Yes. We offer turnkey dairy plant erection services covering site planning, equipment selection, civil coordination, mechanical installation, pipework, electrical work, and final commissioning.",
  },
  {
    question: "Do you sell used / second-hand dairy machinery?",
    answer:
      "Yes. Through PKR Traders, we buy and sell certified pre-owned dairy machinery. All used equipment is inspected, refurbished where necessary, and comes with a basic warranty.",
  },
  {
    question: "What is your service area?",
    answer:
      "We are based in Pudukkottai, Tamil Nadu, and primarily serve Tamil Nadu. We also supply equipment and undertake plant erection projects across South India and, on select large projects, pan-India.",
  },
  {
    question: "How do I get a quotation for my dairy plant?",
    answer:
      "You can contact us via WhatsApp or phone at +91 63826 44316, or fill in the enquiry form on this page. Share your plant capacity requirement and product range, and we will provide a detailed quotation.",
  },
  {
    question: "Do you supply lab materials and SMP culture?",
    answer:
      "Yes. PKR Traders is a dedicated supplier of dairy laboratory materials, SMP (Skim Milk Powder), and bacterial cultures (starter cultures) required for curd, yogurt, and cheese production.",
  },
  {
    question: "What after-sales service do you provide?",
    answer:
      "We offer scheduled maintenance contracts, emergency breakdown support, spare parts supply, and technical guidance for all equipment we supply and install.",
  },
] as const;

// Gallery Images
export const GALLERY_IMAGES = [
  { src: "/images/milk-process-plant-01.jpg", caption: "Milk Process Plant – Automatic Grade", category: "Plant" },
  { src: "/images/milk-process-plant-02.jpg", caption: "Milk Process Plant – Side View", category: "Plant" },
  { src: "/images/ghee-boiler-500l.jpg", caption: "500L Ghee Boiler – SS Construction", category: "Ghee" },
  { src: "/images/industrial-steam-boiler.jpg", caption: "Industrial Steam Boiler – VeeSons", category: "Boiler" },
  { src: "/images/milk-chilling-tank.jpg", caption: "Bulk Milk Chilling Tank", category: "Storage" },
  { src: "/images/paneer-processing-vat.jpg", caption: "Paneer / Curd Processing Vat", category: "Processing" },
  { src: "/images/dairy-crates-containers.jpg", caption: "Dairy Crates & Milk Containers", category: "Accessories" },
  { src: "/images/stainless-steel-silos.jpg", caption: "SS Silos – Large Dairy Plant", category: "Storage" },
  { src: "/images/dairy-processing-plant.jpg", caption: "Dairy Processing Plant Interior", category: "Plant" },
  { src: "/images/milk-storage-tanks.jpg", caption: "Stainless Steel Milk Storage Tanks", category: "Storage" },
  { src: "/images/milk-agitator-vat.jpg", caption: "Milk Agitator Processing Vat", category: "Processing" },
] as const;
