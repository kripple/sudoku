CREATE TABLE "solutions" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "solutions_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"value" varchar NOT NULL,
	"date" date DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "solutions_date_unique" UNIQUE("date")
);
--> statement-breakpoint
CREATE UNIQUE INDEX "solution_date_idx" ON "solutions" USING btree ("date");