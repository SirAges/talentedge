import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { config } from "dotenv";
import { consultants, events, resources, reviews } from "./schema";

config({ path: ".env" });

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });
const eventsSeed = [
  {
    title: "Tech Innovation Summit 2025",
    description: "A summit focused on the latest advancements in technology.",
    date: "2025-06-15",
    location: "New York, NY",
    mode: "In-Person",
    isFree: false,
    price: 500,
  },
  {
    title: "Leadership Development Webinar",
    description: "A virtual webinar on leadership skills for emerging leaders.",
    date: "2025-05-10",
    location: "Online",
    mode: "Virtual",
    isFree: true,
    price: 0,
  },
  {
    title: "Annual HR Conference",
    description:
      "A gathering of HR professionals to discuss the future of work.",
    date: "2025-09-20",
    location: "Los Angeles, CA",
    mode: "Hybrid",
    isFree: false,
    price: 300,
  },
  {
    title: "Marketing Strategy Bootcamp",
    description:
      "An intensive workshop on digital marketing strategies for professionals.",
    date: "2025-07-25",
    location: "Chicago, IL",
    mode: "In-Person",
    isFree: false,
    price: 450,
  },
  {
    title: "Customer Experience Masterclass",
    description:
      "Learn how to enhance customer experience with leading experts.",
    date: "2025-08-05",
    location: "Online",
    mode: "Virtual",
    isFree: true,
    price: 0,
  },
  {
    title: "Business Leadership Forum",
    description:
      "A forum for business leaders to discuss trends and strategies.",
    date: "2025-10-12",
    location: "Miami, FL",
    mode: "Hybrid",
    isFree: false,
    price: 350,
  },
  {
    title: "AI and Machine Learning Workshop",
    description: "Hands-on workshop focused on the applications of AI and ML.",
    date: "2025-06-30",
    location: "San Francisco, CA",
    mode: "In-Person",
    isFree: false,
    price: 600,
  },
  {
    title: "Corporate Wellness Seminar",
    description:
      "Seminar on improving employee wellness and mental health in the workplace.",
    date: "2025-07-12",
    location: "New York, NY",
    mode: "In-Person",
    isFree: false,
    price: 400,
  },
  {
    title: "Startup Founders Meet-up",
    description:
      "A meet-up for startup founders to discuss challenges and opportunities.",
    date: "2025-06-05",
    location: "Los Angeles, CA",
    mode: "Virtual",
    isFree: true,
    price: 0,
  },
  {
    title: "Financial Freedom Webinar",
    description:
      "A webinar discussing strategies for personal financial independence.",
    date: "2025-07-15",
    location: "Online",
    mode: "Virtual",
    isFree: true,
    price: 0,
  },
];
const resourcesSeed = [
  {
    title: "Leadership Development eBook",
    type: "eBook",
    description: "An in-depth guide on leadership skills and strategies.",
    format: "PDF",
    access: "Paid",
  },
  {
    title: "Marketing Strategy Template",
    type: "Template",
    description: "A comprehensive marketing strategy template for businesses.",
    format: "DOCX",
    access: "Free",
  },
  {
    title: "Tech Innovations in 2025 Report",
    type: "Report",
    description: "A detailed report on emerging tech innovations in 2025.",
    format: "PDF",
    access: "Paid",
  },
  {
    title: "HR Best Practices Guide",
    type: "Guide",
    description:
      "A guide on implementing best HR practices in your organization.",
    format: "PDF",
    access: "Free",
  },
  {
    title: "Financial Management Course Video",
    type: "Video",
    description: "A series of videos covering financial management basics.",
    format: "MP4",
    access: "Paid",
  },
  {
    title: "Customer Experience Case Studies",
    type: "Case Study",
    description: "Real-world case studies on customer experience improvement.",
    format: "PDF",
    access: "Free",
  },
  {
    title: "Innovation Toolkit",
    type: "Toolkit",
    description: "A toolkit designed for fostering innovation in businesses.",
    format: "ZIP",
    access: "Paid",
  },
  {
    title: "Corporate Wellness Checklist",
    type: "Checklist",
    description:
      "A checklist for implementing wellness programs in the workplace.",
    format: "PDF",
    access: "Free",
  },
  {
    title: "Startup Funding Guide",
    type: "Guide",
    description: "A guide on how to secure funding for your startup business.",
    format: "PDF",
    access: "Paid",
  },
  {
    title: "Marketing Analytics Dashboard Template",
    type: "Template",
    description: "A ready-to-use marketing analytics dashboard for businesses.",
    format: "EXCEL",
    access: "Free",
  },
];
const consultantsSeed = [
  {
    name: "John Doe",
    title: "Senior HR Consultant",
    bio: "John Doe is an experienced HR consultant with over 15 years of experience helping organizations improve their human resource practices.",
    qualifications: ["MBA in HR", "Certified HR Professional"],
    expertise: [
      "Leadership Development",
      "Employee Engagement",
      "Talent Management",
    ],
    contact: {
      phone: "+1234567890",
      email: "john.doe@example.com",
      linkedIn: "https://www.linkedin.com/in/johndoe",
    },
  },
  {
    name: "Jane Smith",
    title: "Business Strategy Consultant",
    bio: "Jane Smith specializes in creating effective business strategies that drive growth and innovation for companies across various industries.",
    qualifications: ["MBA", "Certified Business Strategy Professional"],
    expertise: [
      "Business Development",
      "Market Research",
      "Strategic Planning",
    ],
    contact: {
      phone: "+0987654321",
      email: "jane.smith@example.com",
      linkedIn: "https://www.linkedin.com/in/janesmith",
    },
  },
  {
    name: "Michael Brown",
    title: "Marketing Consultant",
    bio: "Michael Brown is a marketing expert with a focus on digital transformation and brand development.",
    qualifications: ["MSc in Marketing", "Google Ads Certified"],
    expertise: ["Digital Marketing", "Brand Strategy", "SEO/SEM"],
    contact: {
      phone: "+1122334455",
      email: "michael.brown@example.com",
      linkedIn: "https://www.linkedin.com/in/michaelbrown",
    },
  },
  {
    name: "Emily Johnson",
    title: "Finance Consultant",
    bio: "Emily Johnson offers consulting services on corporate finance, investment strategies, and financial planning.",
    qualifications: ["CFA", "MBA in Finance"],
    expertise: [
      "Corporate Finance",
      "Investment Strategies",
      "Financial Planning",
    ],
    contact: {
      phone: "+2233445566",
      email: "emily.johnson@example.com",
      linkedIn: "https://www.linkedin.com/in/emilyjohnson",
    },
  },
  {
    name: "Chris White",
    title: "Leadership Coach",
    bio: "Chris White helps executives and managers improve their leadership skills and create high-performing teams.",
    qualifications: ["Certified Leadership Coach", "MBA in Leadership"],
    expertise: [
      "Executive Coaching",
      "Team Building",
      "Leadership Development",
    ],
    contact: {
      phone: "+3344556677",
      email: "chris.white@example.com",
      linkedIn: "https://www.linkedin.com/in/chriswhite",
    },
  },
  {
    name: "Sarah Green",
    title: "IT Consultant",
    bio: "Sarah Green brings over a decade of experience in IT solutions, specializing in cloud computing and enterprise solutions.",
    qualifications: [
      "BSc in Computer Science",
      "Certified AWS Solutions Architect",
    ],
    expertise: [
      "Cloud Computing",
      "Enterprise IT Solutions",
      "Software Development",
    ],
    contact: {
      phone: "+4455667788",
      email: "sarah.green@example.com",
      linkedIn: "https://www.linkedin.com/in/sarahgreen",
    },
  },
  {
    name: "David Lee",
    title: "Operations Consultant",
    bio: "David Lee is an operations expert with extensive experience in supply chain optimization and process improvement.",
    qualifications: ["MBA", "Lean Six Sigma Black Belt"],
    expertise: [
      "Supply Chain Optimization",
      "Process Improvement",
      "Operational Efficiency",
    ],
    contact: {
      phone: "+5566778899",
      email: "david.lee@example.com",
      linkedIn: "https://www.linkedin.com/in/davidlee",
    },
  },
  {
    name: "Laura Harris",
    title: "HR Transformation Consultant",
    bio: "Laura Harris specializes in transforming HR departments to be more strategic and data-driven.",
    qualifications: ["SHRM-SCP", "Certified HR Transformation Specialist"],
    expertise: ["HR Transformation", "Change Management", "Data-Driven HR"],
    contact: {
      phone: "+6677889900",
      email: "laura.harris@example.com",
      linkedIn: "https://www.linkedin.com/in/lauraharris",
    },
  },
  {
    name: "Steven King",
    title: "Product Management Consultant",
    bio: "Steven King helps companies manage product portfolios and drive product innovation through agile methodologies.",
    qualifications: ["Certified Scrum Master", "MBA in Product Management"],
    expertise: [
      "Product Strategy",
      "Agile Development",
      "Innovation Management",
    ],
    contact: {
      phone: "+7788990011",
      email: "steven.king@example.com",
      linkedIn: "https://www.linkedin.com/in/stevenking",
    },
  },
  {
    name: "Olivia Taylor",
    title: "Legal Consultant",
    bio: "Olivia Taylor provides expert advice on corporate governance and legal compliance for businesses.",
    qualifications: [
      "JD in Law",
      "Certified Corporate Governance Professional",
    ],
    expertise: ["Corporate Governance", "Legal Compliance", "Business Law"],
    contact: {
      phone: "+8899001122",
      email: "olivia.taylor@example.com",
      linkedIn: "https://www.linkedin.com/in/oliviataylor",
    },
  },
];
const reviewsSeed = [
  {
    clientName: "Anna Scott",
    position: "HR Director",
    review:
      "The leadership training programs provided by TalentEdge were incredibly impactful. Our team learned valuable skills that we still use today.",
    rating: 5,
    date: "2024-04-01",
  },
  {
    clientName: "Mark Evans",
    position: "CEO",
    review:
      "TalentEdge's strategy workshop helped us achieve a 30% increase in market share. Highly recommended for any business looking to grow.",
    rating: 4,
    date: "2024-03-15",
  },
  {
    clientName: "Lucy Martin",
    position: "Marketing Head",
    review:
      "TalentEdge’s digital marketing strategies have significantly improved our online visibility and sales conversion rates. Their insights are invaluable.",
    rating: 5,
    date: "2024-02-20",
  },
  {
    clientName: "Daniel Johnson",
    position: "Finance Manager",
    review:
      "The financial planning advice we received from TalentEdge helped our company streamline our budget process and reduce unnecessary overheads.",
    rating: 4,
    date: "2024-01-10",
  },
  {
    clientName: "Catherine Wright",
    position: "CTO",
    review:
      "TalentEdge's leadership coaching helped our team build trust and improve collaboration. A must-have consultant for any company.",
    rating: 5,
    date: "2024-03-02",
  },
  {
    clientName: "James Clark",
    position: "IT Director",
    review:
      "TalentEdge’s cloud migration advice saved us time and money. The team delivered beyond expectations and was always available for consultation.",
    rating: 5,
    date: "2024-02-15",
  },
  {
    clientName: "Sarah Williams",
    position: "Operations Manager",
    review:
      "TalentEdge's insights on supply chain optimization allowed us to reduce delays by 20%. Their approach was very effective and practical.",
    rating: 4,
    date: "2024-03-22",
  },
  {
    clientName: "Matthew Turner",
    position: "HR Manager",
    review:
      "TalentEdge helped our HR department transition to a more strategic and data-driven approach. Their guidance was invaluable for our transformation.",
    rating: 5,
    date: "2024-02-25",
  },
  {
    clientName: "Rachel Adams",
    position: "Product Manager",
    review:
      "TalentEdge’s product management consultation significantly improved our product launch timeline and overall efficiency. Great value for the investment.",
    rating: 5,
    date: "2024-01-05",
  },
  {
    clientName: "William Miller",
    position: "Legal Counsel",
    review:
      "TalentEdge's legal compliance review helped us avoid costly mistakes in our corporate governance processes. They are knowledgeable and thorough.",
    rating: 4,
    date: "2024-03-10",
  },
];

const seed = async () => {
  eventsSeed.forEach(async (sol) => {
    await db.insert(events).values(sol);
    console.log(`seeded ${sol.title}`);
  });
  resourcesSeed.forEach(async (sol) => {
    await db.insert(resources).values(sol);
    console.log(`seeded ${sol.title}`);
  });
  consultantsSeed.forEach(async (sol) => {
    await db.insert(consultants).values(sol);
    console.log(`seeded ${sol.name}`);
  });
  reviewsSeed.forEach(async (sol) => {
    await db.insert(reviews).values(sol);
    console.log(`seeded ${sol.clientName}`);
  });
};

seed();
