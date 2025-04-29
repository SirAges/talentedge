ALTER TABLE "schedules" RENAME COLUMN "consultantId" TO "solutionId";--> statement-breakpoint
ALTER TABLE "schedules" DROP CONSTRAINT "schedules_consultantId_consultants_id_fk";
--> statement-breakpoint
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_solutionId_solutions_id_fk" FOREIGN KEY ("solutionId") REFERENCES "public"."solutions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "schedules" DROP COLUMN "contact";