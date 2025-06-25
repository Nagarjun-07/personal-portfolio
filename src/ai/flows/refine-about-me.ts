// refine-about-me.ts
'use server';

/**
 * @fileOverview An AI agent to refine the 'About Me' section for a portfolio.
 *
 * - refineAboutMe - A function that refines the 'About Me' section using AI.
 * - RefineAboutMeInput - The input type for the refineAboutMe function.
 * - RefineAboutMeOutput - The return type for the refineAboutMe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefineAboutMeInputSchema = z.object({
  draft: z.string().describe('A draft of the About Me section.'),
});
export type RefineAboutMeInput = z.infer<typeof RefineAboutMeInputSchema>;

const RefineAboutMeOutputSchema = z.object({
  refinedText: z.string().describe('The refined About Me section.'),
});
export type RefineAboutMeOutput = z.infer<typeof RefineAboutMeOutputSchema>;

export async function refineAboutMe(input: RefineAboutMeInput): Promise<RefineAboutMeOutput> {
  return refineAboutMeFlow(input);
}

const refineAboutMePrompt = ai.definePrompt({
  name: 'refineAboutMePrompt',
  input: {schema: RefineAboutMeInputSchema},
  output: {schema: RefineAboutMeOutputSchema},
  prompt: `You are an expert at writing compelling and professional About Me sections for portfolios.

  Please refine the following draft into a more vivid and impactful description:

  {{{draft}}}`,
});

const refineAboutMeFlow = ai.defineFlow(
  {
    name: 'refineAboutMeFlow',
    inputSchema: RefineAboutMeInputSchema,
    outputSchema: RefineAboutMeOutputSchema,
  },
  async input => {
    const {output} = await refineAboutMePrompt(input);
    return output!;
  }
);
