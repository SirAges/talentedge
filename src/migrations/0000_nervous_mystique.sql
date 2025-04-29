CREATE TYPE "public"."access" AS ENUM('Paid', 'Free');--> statement-breakpoint
CREATE TYPE "public"."course_category" AS ENUM('Leadership & Management', 'Technical Skills', 'Soft Skills', 'Finance', 'HR', 'Marketing');--> statement-breakpoint
CREATE TYPE "public"."daysInWeek" AS ENUM('Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday');--> statement-breakpoint
CREATE TYPE "public"."duration" AS ENUM('3 DAYS', '5 DAYS', '7 days', '15 days', '1 MONTH', '3 MONTH', '6 MONTH', '1 YEAR', 'ABOVE 1 YEAR');--> statement-breakpoint
CREATE TYPE "public"."level" AS ENUM('Advanced', 'Beginner', 'Intermediate');--> statement-breakpoint
CREATE TYPE "public"."mode" AS ENUM('In-Person', 'Virtual', 'Hybrid');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('USER', 'ADMIN');--> statement-breakpoint
CREATE TYPE "public"."solution_category" AS ENUM('Training Solutions', 'Consulting Services', 'HR Consulting', 'Tech & Innovation', 'Regulatory Support', 'Leadership Development', 'Customer Experience', 'Business Performance', 'HR Development', 'Culture & Engagement');--> statement-breakpoint
CREATE TYPE "public"."type" AS ENUM('Company', 'Individual');--> statement-breakpoint
CREATE TABLE "consultants" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"title" varchar(255) NOT NULL,
	"bio" text NOT NULL,
	"qualifications" jsonb NOT NULL,
	"expertise" jsonb NOT NULL,
	"contact" jsonb NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now(),
	CONSTRAINT "consultants_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "courses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"category" "course_category" NOT NULL,
	"level" "level" NOT NULL,
	"duration" "duration" NOT NULL,
	"price" integer NOT NULL,
	"isFree" boolean NOT NULL,
	"description" text NOT NULL,
	"modules" jsonb NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "courses_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"date" varchar(50) NOT NULL,
	"location" varchar(255) NOT NULL,
	"mode" "mode" DEFAULT 'Virtual' NOT NULL,
	"isFree" boolean NOT NULL,
	"price" integer NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now(),
	CONSTRAINT "events_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "resources" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"type" varchar(100) NOT NULL,
	"description" text NOT NULL,
	"format" varchar(50) NOT NULL,
	"access" "access" DEFAULT 'Paid' NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now(),
	CONSTRAINT "resources_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "reviews" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"client_name" varchar(255) NOT NULL,
	"position" varchar(255) NOT NULL,
	"review" text NOT NULL,
	"rating" integer NOT NULL,
	"date" date NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now(),
	CONSTRAINT "reviews_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "schedules" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" uuid NOT NULL,
	"consultantId" uuid NOT NULL,
	"type" "type" DEFAULT 'Individual' NOT NULL,
	"name" varchar(255) NOT NULL,
	"employeeCount" integer DEFAULT 1 NOT NULL,
	"frequency" integer DEFAULT 1 NOT NULL,
	"monthCount" integer DEFAULT 1 NOT NULL,
	"startDate" varchar(50) NOT NULL,
	"endDate" varchar(50) NOT NULL,
	"daysInWeek" "daysInWeek" DEFAULT 'Saturday' NOT NULL,
	"timeInDay" varchar NOT NULL,
	"contact" jsonb,
	"note" varchar(255) NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "schedules_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "solutions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"category" "solution_category" DEFAULT 'HR Development' NOT NULL,
	"description" text NOT NULL,
	"industriesServed" jsonb NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now(),
	CONSTRAINT "solutions_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"lastName" varchar(255) NOT NULL,
	"companyName" varchar(255) NOT NULL,
	"firstName" varchar(255) NOT NULL,
	"email" text NOT NULL,
	"lastLoggedIn" date DEFAULT now(),
	"password" text NOT NULL,
	"role" "role" DEFAULT 'USER' NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now(),
	CONSTRAINT "users_id_unique" UNIQUE("id"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_consultantId_consultants_id_fk" FOREIGN KEY ("consultantId") REFERENCES "public"."consultants"("id") ON DELETE no action ON UPDATE no action;