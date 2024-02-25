import { z } from "zod";

const envVariablesSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
});

envVariablesSchema.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariablesSchema> {}
  }
}
