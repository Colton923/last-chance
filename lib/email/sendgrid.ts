import { MailService } from '@sendgrid/mail'

export interface EmailOptions {
  to: string
  from: string
  subject: string
  text?: string
  html: string
}

class EmailService {
  private mailService: MailService | null = null

  constructor() {
    if (process.env.SENDGRID_API_KEY) {
      this.mailService = new MailService()
      this.mailService.setApiKey(process.env.SENDGRID_API_KEY)
    }
  }

  private getRecipient(): string {
    return process.env.NEXT_PUBLIC_ENVIRONMENT === 'development'
      ? 'colton923@gmail.com'
      : 'lastchancebarandgrill@yahoo.com'
  }

  async sendEmail(options: Omit<EmailOptions, 'to' | 'from'>): Promise<void> {
    if (!this.mailService) {
      throw new Error('SendGrid API key is not configured')
    }

    const emailOptions: EmailOptions = {
      ...options,
      to: this.getRecipient(),
      from: 'lastchancewebapp@gmail.com',
    }

    await this.mailService.send(emailOptions)
  }

  formatFieldValue(value: unknown): string {
    return value ? String(value) : ''
  }
}

export const emailService = new EmailService()

