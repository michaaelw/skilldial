import { useObservable } from '@legendapp/state/react';
import { z, ZodSchema } from 'zod';

export function useForm<T extends ZodSchema<any>>(schema: T, initialValues: z.infer<T>) {
  type FormValues = z.infer<T>;
  type FormKeys = keyof FormValues;

  const form$ = useObservable<FormValues>(initialValues);
  const touched$ = useObservable<Partial<Record<FormKeys, boolean>>>({});
  const errors$ = useObservable<Partial<Record<FormKeys, string>>>({});

  const validate = () => {
    const result = schema.safeParse(form$.get());

    if (!result.success) {
      const fieldErrors: Partial<Record<FormKeys, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as FormKeys;
        fieldErrors[field] = issue.message;
      }
      errors$.set(fieldErrors);
      return false;
    }

    errors$.set({});
    return true;
  };

  const handleChange = (field: FormKeys, value: any) => {
    form$[field].set(value);
    if (touched$[field].get()) {
      validate();
    }
  };

  const handleBlur = (field: FormKeys) => {
    touched$[field].set(true);
    validate();
  };

  const resetForm = () => {
    form$.set(initialValues);
    touched$.set({});
    errors$.set({});
  };

  return {
    form$,
    touched$,
    errors$,
    validate,
    resetForm,
    handleChange,
    handleBlur,
  };
}
