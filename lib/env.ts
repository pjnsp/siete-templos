import { z } from "zod";

const envSchema = z.object({
  ENVIRONMENT: z
    .enum(["production", "development", "test"])
    .default("development"),
});

const parsed = envSchema.safeParse(process.env);

export const env = parsed.success
  ? parsed.data
  : { ENVIRONMENT: "development" as const };
