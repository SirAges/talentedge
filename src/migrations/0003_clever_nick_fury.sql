ALTER TABLE "schedules" ALTER COLUMN "daysInWeek" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "schedules" ALTER COLUMN "daysInWeek" SET DEFAULT 'Saturday'::text;--> statement-breakpoint
DROP TYPE "public"."daysInWeek";--> statement-breakpoint
CREATE TYPE "public"."daysInWeek" AS ENUM('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');--> statement-breakpoint
ALTER TABLE "schedules" ALTER COLUMN "daysInWeek" SET DEFAULT 'Saturday'::"public"."daysInWeek";--> statement-breakpoint
ALTER TABLE "schedules" ALTER COLUMN "daysInWeek" SET DATA TYPE "public"."daysInWeek" USING "daysInWeek"::"public"."daysInWeek";