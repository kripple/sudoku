CREATE TABLE "games" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "games_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"solution_id" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "solutions" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "solutions_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"value" varchar NOT NULL,
	"date" date DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "solutions_value_unique" UNIQUE("value"),
	CONSTRAINT "solutions_date_unique" UNIQUE("date")
);
--> statement-breakpoint
ALTER TABLE "games" ADD CONSTRAINT "games_solution_id_solutions_id_fk" FOREIGN KEY ("solution_id") REFERENCES "public"."solutions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "game_solution_idx" ON "games" USING btree ("solution_id");--> statement-breakpoint
CREATE UNIQUE INDEX "game_solution_date_idx" ON "solutions" USING btree ("date");