export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateEmail(email: string): ValidationResult {
  const trimmedEmail = email.trim();

  if (!trimmedEmail) {
    return { isValid: false, error: 'Email is required' };
  }

  if (trimmedEmail.length > 254) {
    return { isValid: false, error: 'Email is too long' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  return { isValid: true };
}

export function validateName(name: string): ValidationResult {
  const trimmedName = name.trim();

  if (!trimmedName) {
    return { isValid: false, error: 'Name is required' };
  }

  if (trimmedName.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters' };
  }

  if (trimmedName.length > 100) {
    return { isValid: false, error: 'Name is too long (max 100 characters)' };
  }

  return { isValid: true };
}

export function validateMessage(message: string): ValidationResult {
  const trimmedMessage = message.trim();

  if (!trimmedMessage) {
    return { isValid: false, error: 'Message is required' };
  }

  if (trimmedMessage.length < 10) {
    return { isValid: false, error: 'Message must be at least 10 characters' };
  }

  if (trimmedMessage.length > 5000) {
    return { isValid: false, error: 'Message is too long (max 5000 characters)' };
  }

  return { isValid: true };
}

export function validatePhone(phone: string): ValidationResult {
  if (!phone) {
    return { isValid: true };
  }

  const trimmedPhone = phone.trim();

  if (trimmedPhone.length > 30) {
    return { isValid: false, error: 'Phone number is too long' };
  }

  const phoneRegex = /^[\d\s\-\(\)\+\.]+$/;
  if (!phoneRegex.test(trimmedPhone)) {
    return { isValid: false, error: 'Phone number contains invalid characters' };
  }

  return { isValid: true };
}

export function validateTextField(value: string, maxLength: number = 200): ValidationResult {
  if (!value) {
    return { isValid: true };
  }

  const trimmedValue = value.trim();

  if (trimmedValue.length > maxLength) {
    return { isValid: false, error: `Value is too long (max ${maxLength} characters)` };
  }

  return { isValid: true };
}

export function sanitizeInput(input: string): string {
  return input.trim().slice(0, 5000);
}
