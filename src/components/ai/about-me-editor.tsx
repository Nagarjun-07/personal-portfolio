'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { refineAboutMeAction, type RefineState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Wand2, Copy, Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      <Wand2 className="mr-2 h-4 w-4" />
      {pending ? 'Refining...' : 'Refine with AI'}
    </Button>
  );
}

export function AboutMeEditor() {
  const initialState: RefineState = { message: null, errors: null };
  const [state, dispatch] = useFormState(refineAboutMeAction, initialState);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message === 'Success!') {
      toast({
        title: "Text Refined",
        description: "Your 'About Me' section has been enhanced by AI.",
      });
    } else if (state.message && state.message !== 'Validation failed.') {
       toast({
        title: "An Error Occurred",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  const handleCopy = () => {
    if (state.refinedText) {
      navigator.clipboard.writeText(state.refinedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({ title: "Copied to clipboard!" });
    }
  };

  return (
    <Card className="shadow-lg border-2 border-border/60">
      <CardHeader>
        <CardTitle className="font-headline text-xl flex items-center gap-2">
          <Wand2 className="text-accent" />
          AI Bio Refiner
        </CardTitle>
        <CardDescription>
          Stuck on what to write? Enter a draft, and let AI polish it for you.
        </CardDescription>
      </CardHeader>
      <form action={dispatch}>
        <CardContent className="space-y-4">
          <Textarea
            name="draft"
            placeholder="e.g., I am a software engineer who likes to build apps..."
            rows={4}
            className="bg-background/70"
          />
          {state.errors?.draft && (
            <p className="text-sm text-destructive">{state.errors.draft[0]}</p>
          )}

          {state.refinedText && (
            <div>
              <h4 className="font-semibold mb-2">AI-Generated Version:</h4>
              <div className="relative">
                <p className="text-muted-foreground p-4 bg-secondary/50 rounded-md border border-border">
                  {state.refinedText}
                </p>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 h-7 w-7"
                  onClick={handleCopy}
                >
                  {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
