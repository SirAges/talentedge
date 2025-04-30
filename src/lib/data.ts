import solutionImage from "@/assets/images/solution.jpg";
import courseImage from "@/assets/images/course.jpg";

import eventImage from "@/assets/images/event.png";

import scheduleImage from "@/assets/images/schedule.png";

import resourcesImage from "@/assets/images/resource.png";
import consultantImage from "@/assets/images/consultant.png";

import userImage from "@/assets/images/user.png";

export const navigation = [
  {
    id: "solutions",
    link: "/solutions",
    name: "Solutions",
    image: solutionImage,
  },
  {
    id: "courses",
    link: "/courses",
    name: "Courses",
    image: courseImage,
  },

  {
    id: "consultants",
    link: "/consultants",
    name: "Consultants",
    image: consultantImage,
  },

  {
    id: "resources",
    link: "/resources",
    name: "Resources",
    image: resourcesImage,
  },
  {
    id: "events",
    link: "/events",
    name: "Events",
    image: eventImage,
  },
  {
    id: "about",
    link: "/about",
    name: "About Us",
    image: eventImage,
  },
];
export const adminNavigation = [
  {
    id: "dashboard",
    link: "/admin-panel",
    name: "Dashboard",
  },
  {
    id: "schedules",
    link: "/admin-panel/schedules",
    name: "Schedules",
    image: scheduleImage,
  },
  {
    id: "users",
    link: "/admin-panel/users",
    name: "Users",
    image: userImage,
  },
  {
    id: "solutions",
    link: "/admin-panel/solutions",
    name: "Solutions",
    image: solutionImage,
  },
  {
    id: "courses",
    link: "/admin-panel/courses",
    name: "Courses",
  },
  {
    id: "consultants",
    link: "/admin-panel/consultants",
    name: "Consultants",
    image: consultantImage,
  },
  {
    id: "resources",
    link: "/admin-panel/resources",
    name: "Resources",
    image: resourcesImage,
  },
  {
    id: "events",
    link: "/admin-panel/events",
    name: "Events",
    image: eventImage,
  },
];

export const courses = [
  {
    id: "1",
    title: "Strategic Leadership for Executives",
    category: "Leadership & Management",
    level: "Advanced",
    duration: "3 days",
    price: 85000,
    isFree: false,
    description:
      "This intensive course is tailored for senior executives seeking to enhance their strategic thinking and organizational leadership capabilities. It focuses on the development of long-term business strategies, leadership communication in high-pressure environments, and the cultivation of innovation-driven cultures. Participants will engage in scenario planning, real-life case studies, and simulations that mirror modern business challenges.",
    modules: [
      "Organizational Visioning",
      "Decision-Making Under Pressure",
      "Leading Change and Innovation",
    ],
  },
  {
    id: "2",
    title: "Effective Communication & Presentation Skills",
    category: "Soft Skills",
    level: "Beginner",
    duration: "2 days",
    price: 45000,
    isFree: false,
    description:
      "Clear and confident communication is crucial in any professional setting. This course is designed to help participants improve their verbal, written, and non-verbal communication techniques. Attendees will learn how to craft persuasive messages, structure engaging presentations, and deliver ideas with clarity. The training also includes practical role-play and live feedback sessions to boost confidence and polish delivery.",
    modules: [
      "Communication Fundamentals",
      "Delivering Powerful Presentations",
      "Public Speaking Practice",
    ],
  },
  {
    id: "3",
    title: "Microsoft Excel for Professionals",
    category: "Technical & Compliance",
    level: "Intermediate",
    duration: "3 days",
    price: 60000,
    isFree: false,
    description:
      "Whether you’re handling finance, admin, HR, or operations, Excel is a vital tool for data handling and analysis. This hands-on course covers everything from formulas, data visualization, pivot tables, and financial modeling. By the end, participants will be able to design dynamic dashboards and automate repetitive tasks using macros and functions.",
    modules: [
      "Formulas & Functions",
      "Data Analysis Tools",
      "Dynamic Dashboards",
    ],
  },
  {
    id: "4",
    title: "Conflict Management & Resolution",
    category: "Leadership & Management",
    level: "Intermediate",
    duration: "1 day",
    price: 35000,
    isFree: false,
    description:
      "Workplace conflict can lower morale and productivity if not handled effectively. This course teaches managers how to identify early signs of conflict, understand different conflict styles, and apply the right intervention strategies. Participants will explore real-world case studies and role-play techniques to mediate disputes and foster team cohesion.",
    modules: [
      "Understanding Conflict Styles",
      "Negotiation Techniques",
      "Building Team Harmony",
    ],
  },
  {
    id: "5",
    title: "Time Management & Productivity Mastery",
    category: "Soft Skills",
    level: "All Levels",
    duration: "1 day",
    price: 30000,
    isFree: false,
    description:
      "Time is one of the most valuable assets in the workplace. This course equips professionals with actionable strategies to optimize their time, reduce procrastination, and increase productivity. Participants will learn to set priorities using proven frameworks like the Eisenhower Matrix and Pomodoro Technique. Attendees leave with personalized productivity systems they can implement immediately.",
    modules: [
      "Goal-Oriented Planning",
      "Tools & Techniques",
      "Eliminating Time Wasters",
    ],
  },
  {
    id: "6",
    title: "Cybersecurity Awareness for Employees",
    category: "Technical & Compliance",
    level: "Beginner",
    duration: "1 day",
    price: 0,
    isFree: true,
    description:
      "With the growing threats of cybercrime and data breaches, every employee needs to understand the basics of cybersecurity. This course provides a foundational understanding of cyber threats, phishing, password hygiene, and device security. Participants will engage in interactive exercises that simulate real-world attacks to help them recognize and avoid potential breaches.",
    modules: [
      "Types of Cyber Threats",
      "Safe Internet Practices",
      "Incident Reporting",
    ],
  },
  {
    id: "7",
    title: "Building High-Performing Teams",
    category: "Leadership & Management",
    level: "All Levels",
    duration: "2 days",
    price: 50000,
    isFree: false,
    description:
      "Great teams don’t happen by accident. This course explores the science behind high-performance teams and how to build them. It focuses on trust-building, goal alignment, collaboration, and effective delegation. Participants will gain insights into motivational theory, team development stages, and conflict resolution, with exercises tailored to different team dynamics.",
    modules: [
      "Team Roles & Dynamics",
      "Performance Metrics",
      "Feedback & Coaching",
    ],
  },
  {
    id: "8",
    title: "Emotional Intelligence at Work",
    category: "Soft Skills",
    level: "Intermediate",
    duration: "1 day",
    price: 0,
    isFree: true,
    description:
      "Emotional Intelligence (EQ) is a key predictor of workplace success. This training helps individuals develop self-awareness, empathy, and emotional regulation. Participants will assess their own EQ and learn techniques to improve interpersonal relationships, manage stress, and handle feedback constructively. Ideal for team leads, managers, and customer-facing staff.",
    modules: [
      "Self-Assessment",
      "Managing Emotions",
      "Building Social Capital",
    ],
  },
  {
    id: "9",
    title: "Talent Acquisition & Retention Strategies",
    category: "HR & Talent Development",
    level: "Advanced",
    duration: "2 days",
    price: 70000,
    isFree: false,
    description:
      "Hiring the right talent is only half the battle. This course covers end-to-end talent management strategies — from employer branding to onboarding, employee engagement, and retention. HR professionals will learn modern recruitment techniques, data-driven hiring, performance tracking, and how to build a workplace culture that retains top talent.",
    modules: [
      "Employer Branding",
      "Interviewing Techniques",
      "Retention Frameworks",
    ],
  },
  {
    id: "10",
    title: "Workplace Safety & Compliance",
    category: "Technical & Compliance",
    level: "All Levels",
    duration: "2 days",
    price: 55000,
    isFree: false,
    description:
      "Every organization has a duty to maintain a safe work environment. This course educates staff and managers on workplace safety regulations, hazard identification, and emergency response protocols. With real-life drills, documentation practices, and risk assessments, participants leave fully prepared to support safety compliance in any work environment.",
    modules: [
      "Health & Safety Laws",
      "Risk Identification",
      "Emergency Preparedness",
    ],
  },
];

export const solutions = [
  {
    id: "1",
    title: "Workforce Capacity Development",
    category: "Training Solutions",
    description:
      "We design and deliver competency-based training programs tailored to enhance employee skills, close performance gaps, and align with organizational goals. Our methodology combines workshops, real-world scenarios, and continuous learning strategies to empower your workforce.",
    industriesServed: [
      "Banking",
      "Manufacturing",
      "Healthcare",
      "Public Sector",
    ],
  },
  {
    id: "2",
    title: "Organizational Restructuring & Change Management",
    category: "Consulting Services",
    description:
      "We help businesses navigate change through strategic restructuring, staff alignment, and stakeholder communication. From mergers to departmental redesigns, we ensure smooth transitions with minimal disruption and sustainable cultural transformation.",
    industriesServed: ["Corporate", "Government", "NGOs"],
  },
  {
    id: "3",
    title: "HR Policy & Talent Strategy Development",
    category: "HR Consulting",
    description:
      "We assist companies in developing robust HR policies, performance management frameworks, and talent acquisition strategies. Whether you’re building an HR department or scaling an existing one, our experts guide you to stay compliant and competitive.",
    industriesServed: ["Startups", "SMEs", "Educational Institutions"],
  },
  {
    id: "4",
    title: "Digital Transformation Advisory",
    category: "Tech & Innovation",
    description:
      "We help organizations transition from traditional processes to tech-driven models. Our service includes system integration advice, workflow automation strategies, and employee digital readiness training to ensure seamless tech adoption.",
    industriesServed: ["Retail", "Finance", "Logistics"],
  },
  {
    id: "5",
    title: "Compliance & Risk Management Consulting",
    category: "Regulatory Support",
    description:
      "We provide audit support, regulatory compliance training, and risk assessment frameworks. From ISO standards to workplace safety and data protection, we help you mitigate legal and operational risks effectively.",
    industriesServed: ["Energy", "Construction", "Financial Services"],
  },
  {
    id: "6",
    title: "Leadership Pipeline & Succession Planning",
    category: "Leadership Development",
    description:
      "Our consultants identify and develop future leaders in your organization. Through structured mentorship programs, executive coaching, and skills gap analysis, we ensure leadership continuity and improved organizational performance.",
    industriesServed: ["Large Corporations", "NGOs", "Government"],
  },
  {
    id: "7",
    title: "Customer Service Excellence Programs",
    category: "Customer Experience",
    description:
      "We revamp service delivery frameworks, design experience-enhancing policies, and train frontline staff to exceed customer expectations. Our approach integrates customer journey mapping, feedback analysis, and service standards benchmarking.",
    industriesServed: ["Telecom", "Hospitality", "Retail"],
  },
  {
    id: "8",
    title: "Performance Evaluation & KPI Design",
    category: "Business Performance",
    description:
      "We help organizations design effective Key Performance Indicators (KPIs), build data-driven performance review systems, and implement feedback mechanisms that drive results and foster accountability.",
    industriesServed: ["Corporate", "Education", "Healthcare"],
  },
  {
    id: "9",
    title: "Employee Onboarding & Orientation Design",
    category: "HR Development",
    description:
      "We create engaging, informative, and role-specific onboarding programs that reduce time-to-productivity and improve employee retention. Our service includes handbook design, orientation tools, and cultural integration sessions.",
    industriesServed: ["Startups", "Tech", "Finance"],
  },
  {
    id: "10",
    title: "Corporate Retreat & Team-Building Experiences",
    category: "Culture & Engagement",
    description:
      "We organize custom off-site retreats, leadership bootcamps, and wellness-focused programs aimed at strengthening internal collaboration and reducing burnout. Our retreats blend fun, strategy, and reflection to foster team alignment.",
    industriesServed: ["All Industries"],
  },
];

export const events = [
  {
    id: "1",
    title: "2025 Leadership & Innovation Summit",
    description:
      "A high-level gathering of C-suite executives, HR leaders, and consultants to explore emerging leadership practices, innovation models, and organizational agility.",
    date: "2025-06-15",
    location: "Lagos Continental Hotel, Victoria Island",
    mode: "In-Person",
    isFree: false,
    price: 250,
  },
  {
    id: "2",
    title: "Digital Transformation Bootcamp",
    description:
      "An intensive 3-day workshop designed to guide SMEs through the digitalization of their operations, marketing, and customer engagement strategies.",
    date: "2025-04-28",
    location: "Zoom",
    mode: "Virtual",
    isFree: false,
    price: 0,
  },
  {
    id: "3",
    title: "Workplace Communication Mastery",
    description:
      "This live training event covers advanced communication skills, emotional intelligence, and techniques to resolve conflicts in high-pressure environments.",
    date: "2025-05-10",
    location: "Abuja International Conference Center",
    mode: "In-Person",
    isFree: false,
    price: 100,
  },
  {
    id: "4",
    title: "HR Policy & Compliance Update 2025",
    description:
      "A quarterly briefing for HR professionals on the latest employment laws, labor regulations, and compliance trends across Nigeria and Africa.",
    date: "2025-07-01",
    location: "Webinar",
    mode: "Virtual",
    isFree: true,
    price: 0,
  },
  {
    id: "5",
    title: "Customer Service Week Kickoff",
    description:
      "A celebratory training and award event for organizations that prioritize service excellence. Includes roleplays, games, and panel sessions.",
    date: "2025-10-07",
    location: "Landmark Event Centre, Lagos",
    mode: "In-Person",
    isFree: false,
    price: 75,
  },
  {
    id: "6",
    title: "Annual Employee Wellness Day",
    description:
      "A hybrid event offering mental health workshops, burnout prevention coaching, and fitness classes designed for corporate teams.",
    date: "2025-09-12",
    location: "Hybrid (Lagos & Online)",
    mode: "Hybrid",
    isFree: true,
    price: 0,
  },
  {
    id: "7",
    title: "Performance Management System Clinic",
    description:
      "Bring your existing performance review structure and work with our consultants to refine KPIs, align goals, and drive accountability.",
    date: "2025-08-20",
    location: "Zoom",
    mode: "Virtual",
    isFree: false,
    price: 50,
  },
  {
    id: "8",
    title: "Onboarding Strategy Redesign Workshop",
    description:
      "HR leaders and L&D managers collaborate to co-create onboarding experiences that reduce attrition and increase early-stage productivity.",
    date: "2025-05-25",
    location: "Online",
    mode: "Virtual",
    isFree: true,
    price: 0,
  },
  {
    id: "9",
    title: "Women in Management Roundtable",
    description:
      "A networking and mentoring session dedicated to empowering female professionals in leadership and decision-making roles.",
    date: "2025-06-30",
    location: "Sheraton Hotel, Abuja",
    mode: "In-Person",
    isFree: false,
    price: 120,
  },
  {
    id: "10",
    title: "End-of-Year Strategic Planning Retreat",
    description:
      "An exclusive off-site strategy session for executives and team leads to review the year, set 2026 priorities, and renew team synergy.",
    date: "2025-12-05",
    location: "Whispering Palms Resort, Badagry",
    mode: "In-Person",
    isFree: false,
    price: 300,
  },
];

export const resources = [
  {
    id: "1",
    title: "Employee Onboarding Checklist",
    type: "Checklist",
    description:
      "A comprehensive step-by-step onboarding checklist to help HR managers and team leads integrate new hires efficiently within their first 90 days.",
    format: "PDF",
    access: "Free",
  },
  {
    id: "2",
    title: "2025 Workplace Trends Report",
    type: "Research Report",
    description:
      "This annual report outlines key changes in workforce dynamics, technology, and employee expectations based on surveys and expert forecasts.",
    format: "PDF",
    access: "Free",
  },
  {
    id: "3",
    title: "Performance Appraisal Template (Editable)",
    type: "Template",
    description:
      "An easy-to-use, editable performance review template that can be customized for different departments and evaluation periods.",
    format: "DOCX",
    access: "Paid",
  },
  {
    id: "4",
    title: "Training Needs Assessment Toolkit",
    type: "Toolkit",
    description:
      "A downloadable package including surveys, analysis sheets, and a scoring system to identify and prioritize employee training needs.",
    format: "ZIP",
    access: "Free",
  },
  {
    id: "5",
    title: "Guide to Building a Learning Culture",
    type: "Guide",
    description:
      "This practical guide helps organizations create environments that promote continuous learning, innovation, and skill development.",
    format: "PDF",
    access: "Free",
  },
  {
    id: "6",
    title: "Conflict Resolution Handbook",
    type: "eBook",
    description:
      "An in-depth eBook offering real-life scenarios, case studies, and frameworks for managing workplace conflicts effectively.",
    format: "ePub",
    access: "Paid",
  },
  {
    id: "7",
    title: "HR Compliance Calendar (Nigeria)",
    type: "Calendar",
    description:
      "A printable monthly calendar listing key compliance dates, reporting deadlines, and labor-related updates for Nigerian businesses.",
    format: "PDF",
    access: "Free",
  },
  {
    id: "8",
    title: "Virtual Training Delivery Toolkit",
    type: "Toolkit",
    description:
      "Includes tools, checklists, and engagement tips to help L&D professionals deliver effective online training sessions.",
    format: "ZIP",
    access: "Paid",
  },
  {
    id: "9",
    title: "Sample Job Descriptions Pack",
    type: "Template Pack",
    description:
      "Over 30 job description templates covering various roles across departments to help HR teams streamline hiring processes.",
    format: "DOCX",
    access: "Free",
  },
  {
    id: "10",
    title: "Leadership Development Framework",
    type: "Framework Guide",
    description:
      "A structured framework for developing leadership pipelines, identifying high potentials, and managing succession planning.",
    format: "PDF",
    access: "Paid",
  },
];

export const consultants = [
  {
    id: "1",
    name: "Dr. Chidi Okafor",
    title: "Organizational Development Specialist",
    bio: "Dr. Chidi Okafor is a seasoned organizational development specialist with over 15 years of experience in helping companies build effective structures and align teams for better performance. He has worked with top multinational firms to design change management strategies, improve employee engagement, and build high-performance cultures.",
    qualifications: [
      "Ph.D. in Organizational Psychology, University of Lagos",
      "Certified Change Management Professional (CCMP)",
      "Senior Member, Nigerian Institute of Management",
    ],
    expertise: [
      "Organizational Development",
      "Change Management",
      "Leadership Development",
      "Employee Engagement",
    ],
    contact: {
      email: "chidi.okafor@consulting.com",
      phone: "+234 123 456 7890",
      linkedin: "https://www.linkedin.com/in/chidiokafor",
    },
  },
  {
    id: "2",
    name: "Jane Osei",
    title: "HR Strategy Consultant",
    bio: "Jane Osei is an expert in HR strategy, organizational design, and workforce optimization. With over 10 years of experience in consulting for both SMEs and large corporations, Jane has a unique ability to analyze HR processes, streamline operations, and implement strategies that foster a productive and positive organizational culture.",
    qualifications: [
      "MBA, HR Management, University of Ghana",
      "Certified HR Practitioner (CIPD)",
      "Certified Organizational Development Professional (ODP)",
    ],
    expertise: [
      "HR Strategy",
      "Workforce Planning",
      "Organizational Design",
      "Talent Management",
    ],
    contact: {
      email: "jane.osei@consulting.com",
      phone: "+233 987 654 3210",
      linkedin: "https://www.linkedin.com/in/janeosei",
    },
  },
  {
    id: "3",
    name: "Emeka Nwosu",
    title: "Training and Development Consultant",
    bio: "Emeka Nwosu has been at the forefront of employee training and development for over 12 years. His focus is on building tailored training programs that equip employees with the skills needed to thrive in competitive and fast-paced environments. He specializes in soft skills, leadership, and compliance training.",
    qualifications: [
      "M.Sc. in Human Resource Management, University of Nigeria, Nsukka",
      "Certified Trainer, International Association for Training and Development (IATD)",
      "PMP (Project Management Professional)",
    ],
    expertise: [
      "Training and Development",
      "Leadership Coaching",
      "Employee Engagement Programs",
      "Compliance and Legal Training",
    ],
    contact: {
      email: "emeka.nwosu@consulting.com",
      phone: "+234 908 765 4321",
      linkedin: " https://www.linkedin.com/in/emekanwosu",
    },
  },
  {
    id: "4",
    name: "Sarah Iroanya",
    title: "Employee Wellness Consultant",
    bio: "Sarah Iroanya is an employee wellness consultant with a passion for promoting mental and physical health in the workplace. Over the last 8 years, she has developed wellness programs that focus on stress management, mindfulness, and work-life balance to enhance employee productivity and satisfaction.",
    qualifications: [
      "B.Sc. in Psychology, University of Ibadan",
      "Certified Wellness Coach (Wellness Coach Institute)",
      "Mental Health First Aid Certified",
    ],
    expertise: [
      "Employee Wellness",
      "Stress Management",
      "Mindfulness and Mental Health",
      "Work-Life Balance Strategies",
    ],
    contact: {
      email: "sarah.iroanya@consulting.com",
      phone: "+234 702 123 4567",
      linkedin: " https://www.linkedin.com/in/sarahiroanya",
    },
  },
  {
    id: "5",
    name: "Tunde Adeoye",
    title: "Performance Management Consultant",
    bio: "Tunde Adeoye specializes in performance management systems, helping companies create effective systems for measuring and improving employee performance. With over 10 years of experience, he focuses on aligning individual performance with organizational goals and enhancing team accountability through tailored strategies and feedback mechanisms.",
    qualifications: [
      "B.A. in Business Administration, University of Lagos",
      "Certified Performance Management Consultant (PMC)",
      "Certified Leadership Development Coach (CLDC)",
    ],
    expertise: [
      "Performance Management",
      "Employee Coaching",
      "Goal Setting and Alignment",
      "Employee Feedback Systems",
    ],
    contact: {
      email: "tunde.adeoye@consulting.com",
      phone: "+234 815 678 9012",
      linkedin: " https://www.linkedin.com/in/tundeadeoye",
    },
  },
];

export const reviews = [
  {
    id: "1",
    client_name: "Amina Bello",
    position: "HR Director, Global Tech Solutions",
    review:
      "Dr. Chidi Okafor helped us navigate a major restructuring. His expertise in employee engagement led to noticeable improvements in morale and productivity.",
    rating: 5,
    date: "2024-03-21",
  },
  {
    id: "2",
    client_name: "Kwame Osei",
    position: "CEO, Osei Enterprises",
    review:
      "Jane Osei’s HR strategies streamlined our recruitment and talent management. Her approach to organizational design aligned our workforce with business goals.",
    rating: 4.5,
    date: "2024-04-10",
  },
  {
    id: "3",
    client_name: "Chika Nwokoro",
    position: "Operations Manager, Bright Horizons Ltd.",
    review:
      "Emeka Nwosu’s training programs improved team performance and fostered a more collaborative work culture. We saw positive changes in leadership skills.",
    rating: 5,
    date: "2024-05-02",
  },
  {
    id: "4",
    client_name: "Ngozi Ikenna",
    position: "Head of Operations, SmartTech Innovations",
    review:
      "Sarah Iroanya’s wellness programs reduced absenteeism and burnout. Her stress management and mindfulness techniques made a significant impact.",
    rating: 4,
    date: "2024-06-15",
  },
];

export const achievements = [
  {
    id: "1",
    stat: 50000,
    description: "Individuals completed the Training Program",
  },
  {
    id: "2",
    stat: 5000,
    description: "Companies implemented Organizational Solutions",
  },
  {
    id: "3",
    stat: 30000,
    description: "Individuals adopted the Employee Wellness Program",
  },
  {
    id: "4",
    stat: 2000,
    description:
      "Companies successfully implemented the Performance Management System",
  },
];

export const users = [
  {
    id: "1",
    role: "user",
    lastName: "Samuel",
    firstName: "Johnson",
    email: "samuel.johnson@email.com",
    companyName: "samjo enterprice",
  },
  {
    id: "2",
    role: "admin",
    lastName: "edika",
    firstName: "smart",
    email: "edika.smart@email.com",
    companyName: "edart ltd",
  },
  {
    id: "3",
    role: "consultant",
    lastName: "mark",
    firstName: "silver",
    email: "mark.silver@email.com",
    companyName: "silver trackers",
  },
  {
    id: "4",
    role: "consultant",
    lastName: "Samuel",
    firstName: "Johnson",
    email: "samuel.johnson@email.com",
    companyName: "samjo enterprice",
  },
  {
    id: "5",
    role: "admin",
    lastName: "edika",
    firstName: "smart",
    email: "edika.smart@email.com",
    companyName: "edart ltd",
  },
  {
    id: "6",
    role: "consultant",
    lastName: "mark",
    firstName: "silver",
    email: "mark.silver@email.com",
    companyName: "silver trackers",
  },
  {
    id: "7",
    role: "user",
    lastName: "Samuel",
    firstName: "Johnson",
    email: "samuel.johnson@email.com",
    companyName: "samjo enterprice",
  },
  {
    id: "8",
    role: "user",
    lastName: "edika",
    firstName: "smart",
    email: "edika.smart@email.com",
    companyName: "edart ltd",
  },
  {
    id: "9",
    role: "admin",
    lastName: "mark",
    firstName: "silver",
    email: "mark.silver@email.com",
    companyName: "silver trackers",
  },
  {
    id: "10",
    role: "user",
    lastName: "edika",
    firstName: "smart",
    email: "edika.smart@email.com",
    companyName: "edart ltd",
  },
  {
    id: "11",
    role: "user",
    lastName: "mark",
    firstName: "silver",
    email: "mark.silver@email.com",
    companyName: "silver trackers",
  },
];

export const schedules = [
  {
    id: "1",
    type: "company",
    name: "salaza ltd.",
    employeeCount: 100,
    frequency: 3,
    monthCount: 1,
    startDate: "23/04/2024",
    endDate: "23/05/2024",
    daysInWeek: "saturday,sunday,monday",
    timeInDay: "2:00pm",
    contact: {
      email: "info@salaza.com",
      phone: "+234 807 292 1210",
      linkedin: "https://linkedin.com",
    },

    note: "we need leadership training for our staffs",
  },
  {
    id: "2",
    type: "individual",
    name: "solomon samson ebuka",
    employeeCount: 1,
    frequency: 4,
    monthCount: 2,
    startDate: "03/11/2025",
    endDate: "03/01/2026",
    daysInWeek: "friday,tuesday,monday",
    timeInDay: "10:00am",
    contact: {
      email: "ebuka.sam@gmail.com",
      phone: "+234 807 292 1210",
      linkedin: "https://linkedin.com",
    },

    note: "I need entreprenuerership guide and training for myself",
  },
  {
    id: "3",
    type: "company",
    name: "salaza ltd.",
    employeeCount: 100,
    frequency: 3,
    monthCount: 1,
    startDate: "23/04/2024",
    endDate: "23/05/2024",
    daysInWeek: "saturday,sunday,monday",
    timeInDay: "2:00pm",
    contact: {
      email: "info@salaza.com",
      phone: "+234 807 292 1210",
      linkedin: "https://linkedin.com",
    },

    note: "we need leadership training for our staffs",
  },
  {
    id: "4",
    type: "individual",
    name: "solomon samson ebuka",
    employeeCount: 1,
    frequency: 4,
    monthCount: 2,
    startDate: "03/11/2025",
    endDate: "03/01/2026",
    daysInWeek: "friday,tuesday,monday",
    timeInDay: "10:00am",
    contact: {
      email: "ebuka.sam@gmail.com",
      phone: "+234 807 292 1210",
      linkedin: "https://linkedin.com",
    },

    note: "I need entreprenuerership guide and training for myself",
  },
  {
    id: "5",
    type: "company",
    name: "salaza ltd.",
    employeeCount: 100,
    frequency: 3,
    monthCount: 1,
    startDate: "23/04/2024",
    endDate: "23/05/2024",
    daysInWeek: "saturday,sunday,monday",
    timeInDay: "2:00pm",
    contact: {
      email: "info@salaza.com",
      phone: "+234 807 292 1210",
      linkedin: "https://linkedin.com",
    },

    note: "we need leadership training for our staffs",
  },
  {
    id: "6",
    type: "individual",
    name: "solomon samson ebuka",
    employeeCount: 1,
    frequency: 4,
    monthCount: 2,
    startDate: "03/11/2025",
    endDate: "03/01/2026",
    daysInWeek: "friday,tuesday,monday",
    timeInDay: "10:00am",
    contact: {
      email: "ebuka.sam@gmail.com",
      phone: "+234 807 292 1210",
      linkedin: "https://linkedin.com",
    },

    note: "I need entreprenuerership guide and training for myself",
  },
  {
    id: "7",
    type: "company",
    name: "salaza ltd.",
    employeeCount: 100,
    frequency: 3,
    monthCount: 1,
    startDate: "23/04/2024",
    endDate: "23/05/2024",
    daysInWeek: "saturday,sunday,monday",
    timeInDay: "2:00pm",
    contact: {
      email: "info@salaza.com",
      phone: "+234 807 292 1210",
      linkedin: "https://linkedin.com",
    },

    note: "we need leadership training for our staffs",
  },
  {
    id: "8",
    type: "individual",
    name: "solomon samson ebuka",
    employeeCount: 1,
    frequency: 4,
    monthCount: 2,
    startDate: "03/11/2025",
    endDate: "03/01/2026",
    daysInWeek: "friday,tuesday,monday",
    timeInDay: "10:00am",
    contact: {
      email: "ebuka.sam@gmail.com",
      phone: "+234 807 292 1210",
      linkedin: "https://linkedin.com",
    },

    note: "I need entreprenuerership guide and training for myself",
  },
  {
    id: "9",
    type: "company",
    name: "salaza ltd.",
    employeeCount: 100,
    frequency: 3,
    monthCount: 1,
    startDate: "23/04/2024",
    endDate: "23/05/2024",
    daysInWeek: "saturday,sunday,monday",
    timeInDay: "2:00pm",
    contact: {
      email: "info@salaza.com",
      phone: "+234 807 292 1210",
      linkedin: "https://linkedin.com",
    },

    note: "we need leadership training for our staffs",
  },
  {
    id: "10",
    type: "individual",
    name: "solomon samson ebuka",
    employeeCount: 1,
    frequency: 4,
    monthCount: 2,
    startDate: "03/11/2025",
    endDate: "03/01/2026",
    daysInWeek: "friday,tuesday,monday",
    timeInDay: "10:00am",
    contact: {
      email: "ebuka.sam@gmail.com",
      phone: "+234 807 292 1210",
      linkedin: "https://linkedin.com",
    },

    note: "I need entreprenuerership guide and training for myself",
  },
  {
    id: "11",
    type: "company",
    name: "salaza ltd.",
    employeeCount: 100,
    frequency: 3,
    monthCount: 1,
    startDate: "23/04/2024",
    endDate: "23/05/2024",
    daysInWeek: "saturday,sunday,monday",
    timeInDay: "2:00pm",
    contact: {
      email: "info@salaza.com",
      phone: "+234 807 292 1210",
      linkedin: "https://linkedin.com",
    },

    note: "we need leadership training for our staffs",
  },
  {
    id: "12",
    type: "individual",
    name: "solomon samson ebuka",
    employeeCount: 1,
    frequency: 4,
    monthCount: 2,
    startDate: "03/11/2025",
    endDate: "03/01/2026",
    daysInWeek: "friday,tuesday,monday",
    timeInDay: "10:00am",
    contact: {
      email: "ebuka.sam@gmail.com",
      phone: "+234 807 292 1210",
      linkedin: "https://linkedin.com",
    },

    note: "I need entreprenuerership guide and training for myself",
  },
];
