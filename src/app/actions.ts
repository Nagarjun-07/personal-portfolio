'use server';

import { refineAboutMe } from '@/ai/flows/refine-about-me';
import { z } from 'zod';

const refineSchema = z.object({
  draft: z.string().min(20, { message: "Please write a bit more, at least 20 characters." }),
});

export interface RefineState {
  message?: string | null;
  refinedText?: string | null;
  errors?: {
    draft?: string[];
  } | null;
}

export async function refineAboutMeAction(prevState: RefineState, formData: FormData): Promise<RefineState> {
  const validatedFields = refineSchema.safeParse({
    draft: formData.get('draft'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed.',
    };
  }

  try {
    const { refinedText } = await refineAboutMe({ draft: validatedFields.data.draft });
    return {
      message: 'Success!',
      refinedText,
      errors: null,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      errors: null,
    };
  }
}
