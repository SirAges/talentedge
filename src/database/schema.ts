import {
  varchar,
  uuid,
  integer,
  text,
  pgTable,
  date,
  pgEnum,
  timestamp,
  boolean,
  jsonb,
} from "drizzle-orm/pg-core";

export const ROLE_ENUM = pgEnum("role", ["USER", "ADMIN"]);

export const DURATION_ENUM = pgEnum("duration", [
  "3 DAYS",
  "5 DAYS",
  "7 days",
  "15 days",
  "1 MONTH",
  "3 MONTH",
  "6 MONTH",
  "1 YEAR",
  "ABOVE 1 YEAR",
]);
export const LEVEL_ENUM = pgEnum("level", [
  "Advanced",
  "Beginner",
  "Intermediate",
]);
export const ACCESS_ENUM = pgEnum("access", ["Paid", "Free"]);
export const MODE_ENUM = pgEnum("mode", ["In-Person", "Virtual", "Hybrid"]);
export const DAYS_IN_ENUM = pgEnum("daysInWeek", [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]);
export const TYPE_ENUM = pgEnum("type", ["Company", "Individual"]);

export const CATEGORY_ENUM = pgEnum("course_category", [
  "Leadership & Management",
  "Technical Skills",
  "Soft Skills",
  "Finance",
  "HR",
  "Marketing",
]);

export const SOLUTION_CATEGORY_ENUM = pgEnum("solution_category", [
  "Training Solutions",
  "Consulting Services",
  "HR Consulting",
  "Tech & Innovation",
  "Regulatory Support",
  "Leadership Development",
  "Customer Experience",
  "Business Performance",
  "HR Development",
  "Culture & Engagement",
]);

export const users = pgTable("users", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  lastName: varchar("lastName", { length: 255 }).notNull(),
  companyName: varchar("companyName", { length: 255 }).notNull(),
  firstName: varchar("firstName", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  lastLoggedIn: date().defaultNow(),
  password: text("password").notNull(),
  role: ROLE_ENUM("role").default("USER").notNull(),
  createdAt: timestamp("createdAt", {
    withTimezone: true,
  }).defaultNow(),
});

export const schedules = pgTable("schedules", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  userId: uuid("userId")
    .references(() => users.id)
    .notNull(),
  solutionId: uuid("solutionId").references(() => solutions.id),
  type: TYPE_ENUM("type").default("Individual").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  employeeCount: integer("employeeCount").default(1).notNull(),
  frequency: integer("frequency").default(1).notNull(),
  monthCount: integer("monthCount").default(1).notNull(),
  startDate: varchar("startDate", { length: 50 }).notNull(),
  endDate: varchar("endDate", { length: 50 }).notNull(),
  daysInWeek: DAYS_IN_ENUM("daysInWeek").default("Saturday").notNull(),
  timeInDay: varchar("timeInDay").notNull(),
  note: varchar("note", { length: 255 }).notNull(),
  createdAt: timestamp("createdAt", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
});
export const solutions = pgTable("solutions", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  category: SOLUTION_CATEGORY_ENUM("category").default("Business Performance").notNull(),
  description: text("description").notNull(),
  industriesServed: jsonb("industriesServed").$type<string[]>().notNull(),
  createdAt: timestamp("createdAt", {
    withTimezone: true,
  }).defaultNow(),
});

export const courses = pgTable("courses", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  category: CATEGORY_ENUM("category").notNull(), // enum values enforced in app
  level: LEVEL_ENUM("level").notNull(), // enum values enforced in app
  duration: DURATION_ENUM("duration").notNull(),
  price: integer("price").notNull(),
  isFree: boolean("isFree").notNull(),
  description: text("description").notNull(),
  modules: jsonb("modules").$type<string[]>().notNull(),
  createdAt: timestamp("createdAt", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
});

export const events = pgTable("events", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  date: varchar("date", { length: 50 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  mode: MODE_ENUM("mode").default("Virtual").notNull(),
  isFree: boolean("isFree").notNull(),
  price: integer("price").notNull(),
  createdAt: timestamp("createdAt", {
    withTimezone: true,
  }).defaultNow(),
});

export const resources = pgTable("resources", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  type: varchar("type", { length: 100 }).notNull(),
  description: text("description").notNull(),
  format: varchar("format", { length: 50 }).notNull(),
  access: ACCESS_ENUM("access").default("Paid").notNull(),
  createdAt: timestamp("createdAt", {
    withTimezone: true,
  }).defaultNow(),
});

export const consultants = pgTable("consultants", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  bio: text("bio").notNull(),
  qualifications: jsonb("qualifications").$type<string[]>().notNull(),
  expertise: jsonb("expertise").$type<string[]>().notNull(),
  contact: jsonb("contact")
    .$type<{
      phone: string;

      email: string;
      linkedIn: string;
    }>()
    .notNull(),
  createdAt: timestamp("createdAt", {
    withTimezone: true,
  }).defaultNow(),
});

export const reviews = pgTable("reviews", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  clientName: varchar("client_name", { length: 255 }).notNull(),
  position: varchar("position", { length: 255 }).notNull(),
  review: text("review").notNull(),
  rating: integer("rating").notNull(),
  date: date("date", ).notNull(),
  createdAt: timestamp("createdAt", {
    withTimezone: true,
  }).defaultNow(),
});
