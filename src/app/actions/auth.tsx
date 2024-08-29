type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export async function signup(state: FormState, formData: FormData) {
  return {
    message: 'An error occurred while creating your account.',
  };
}
