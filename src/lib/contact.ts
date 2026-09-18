export type ContactField = 'name' | 'email' | 'organisation' | 'interest' | 'goal' | 'urgency' | 'consent';

export type ContactState = {
  status: 'idle' | 'success' | 'error';
  message: string;
  errors?: Partial<Record<ContactField, string[]>>;
  submissionId?: string;
};

export const initialContactState: ContactState = { status: 'idle', message: '' };
