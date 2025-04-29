interface AuthCredentials {
  companyName: string;
  email: string;
  lastName: string;
  firstName: string;
  password: string;
}

interface ErrorResponse {
  message: string;
  error: boolean;
}

type Contact = {
  email: string;
  phone: string;
  linkedIn: string;
};

type Roles = "ADMIN" | "USER";

type Duration =
  | "3 DAYS"
  | "5 DAYS"
  | "7 days"
  | "15 days"
  | "1 MONTH"
  | "3 MONTH"
  | "6 MONTH"
  | "1 YEAR"
  | "ABOVE 1 YEAR";

type Level = "Advanced" | "Beginner" | "Intermediate";

type Category =
  | "Leadership & Management"
  | "Technical Skills"
  | "Soft Skills"
  | "Finance"
  | "HR"
  | "Marketing";
type SolutionCategory =
  | "Training Solutions"
  | "Consulting Services"
  | "HR Consulting"
  | "Tech & Innovation"
  | "Regulatory Support"
  | "Leadership Development"
  | "Customer Experience"
  | "Business Performance"
  | "HR Development"
  | "Culture & Engagement";
type Mode = "In-Person" | "Virtual" | "Hybrid";
type Access = "Paid" | "Free";
type UserType = "Company" | "Individual";

type ScheduleDays =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

interface UserFormType {
  id?: string;
  role?: Role;
  companyName: string;
  email: string;
  lastName: string;
  firstName: string;
}

interface ConsultantType {
  id: string;
  title: string;
  name: string;
  bio: string;
  qualifications: string[];
  expertise: string[];
  contact: {
    email: string;
    phone: string;
    linkedIn: string;
  };
}
interface CourseType {
  id: string;
  title: string;
  category: Category;
  level: Level;
  duration: Duration;
  price: number;
  isFree: boolean;
  description: string;
  modules: string[];
  createdAt: Date;
}

interface EventType {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  mode: Mode;
  isFree: boolean;
  price: number;
}

interface ResourceType {
  id: string;
  title: string;
  type: string;
  description: string;
  format: string;
  access: Access;
}

interface Solution {
  title: string;
  category: string;
  description: string;
  industriesServed: string[];
}

interface ScheduleType {
  id: string;
  userId: string;
  daysInWeek: ScheduleDays;
  employeeCount: number;
  endDate: string;
  frequency: number;
  monthCount: number;
  name: string;
  note: string;
  startDate: string;
  timeInDay: string;
  type: UserType;
}

interface SolutionType {
  id: string;
  title: string;
  category: SolutionCategory;
  description: string;
  industriesServed: string[];
}
