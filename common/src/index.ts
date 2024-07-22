import { z } from "zod";

export const SignupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export type Signuptype = z.infer<typeof SignupInput>;

export const SigninInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type Signintype = z.infer<typeof SigninInput>;

export const CreatePostInput = z.object({
  title: z.string(),
  content: z.string(),
});

export type Createposttype = z.infer<typeof CreatePostInput>;

export const UpdatePostInput = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
});

export type Updateposttype = z.infer<typeof UpdatePostInput>;
