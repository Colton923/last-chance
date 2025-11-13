// Shared validation patterns and rules
export const VALIDATION_PATTERNS = {
  email: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email address',
  },
  zipCode: {
    value: /^\d{5}(-\d{4})?$/,
    message: 'Invalid ZIP code',
  },
  phone: {
    value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    message: 'Invalid phone number',
  },
} as const

export const VALIDATION_RULES = {
  required: (fieldName: string) => `${fieldName} is required`,
  min: (fieldName: string, value: number) => `${fieldName} must be at least ${value}`,
  max: (fieldName: string, value: number) => `${fieldName} must not exceed ${value}`,
} as const

