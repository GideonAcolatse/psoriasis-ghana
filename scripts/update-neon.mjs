import { neon } from "@neondatabase/serverless";

const connectionString = "postgresql://neondb_owner:npg_gecorjIk51dQ@ep-icy-poetry-bc5t6j9k-pooler.c-16.us-east-1.aws.neon.tech/neondb?sslmode=require";
const sql = neon(connectionString);

async function update() {
  await sql`UPDATE pag_metrics SET subtext = 'Founded by Miss Ruth Adjowa Abekah' WHERE key = 'year_founded';`;
  await sql`UPDATE pag_posts SET author = 'Miss Ruth Adjowa Abekah' WHERE author LIKE '%Ruth%';`;
  console.log("Neon database successfully updated with official name spelling: Ruth Adjowa Abekah");
}

update().catch(console.error);
