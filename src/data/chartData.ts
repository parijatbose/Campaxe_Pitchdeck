export const marketGrowthData = [
  { year: 2015, value: 0.55, label: "2015: $0.55T" },
  { year: 2018, value: 0.78, label: "2018: $0.78T" },
  { year: 2021, value: 0.95, label: "2021: $0.95T" },
  { year: 2025, value: 1.23, label: "2025: $1.23T (WARC: +10.5%)" },
  { year: 2030, value: 1.80, label: "2030: $1.80T (projected)" },
  { year: 2040, value: 3.20, label: "2040: $3.20T+ (projected)" },
];

export const programmaticData = {
  programmatic: 85,
  nonProgrammatic: 15,
  labels: ["Programmatic", "Non-Programmatic"],
  colors: ["#8221C5", "#E9479C"]
};

export const wasteKPIs = [
  { 
    value: "$26.8B", 
    label: "Wasted in Q2 2025", 
    source: "Internal analysis",
    trend: "+12% vs Q1"
  },
  { 
    value: "37.8%", 
    label: "Programmatic waste", 
    source: "ANA 2025 study",
    trend: "Single quarter"
  },
  { 
    value: "$20B", 
    label: "Open-web annual waste", 
    source: "Industry estimates",
    trend: "Growing 15% YoY"
  },
  { 
    value: ">$100B", 
    label: "Projected ad fraud by 2030", 
    source: "Juniper Research",
    trend: "Critical threshold"
  }
];

export const pilotResults = {
  wasteReduction: { before: 38, after: 20, improvement: 18 },
  roasUplift: { before: 100, after: 122, improvement: 22 }
};

export const fundingAllocation = [
  { label: "AI/Engineering", value: 25, color: "#8221C5" },
  { label: "Marketing", value: 35, color: "#E9479C" },
  { label: "Operations", value: 15, color: "#4D166F" },
  { label: "Sales & Outreach", value: 25, color: "#2DD4BF" }
];

export const teamData = [
  {
    name: "Deevay Rattan Puri",
    title: "Co-Founder & CEO",
    bio: "Performance marketing expert with GroupM background, managed >$12M ad spend",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Aninda Sankar Sukla", 
    title: "Co-Founder & CTO",
    bio: "AI lead and patent holder (US12141185B2), BITS Pilani MS in Computer Science",
    image: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];