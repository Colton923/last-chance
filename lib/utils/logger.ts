/**
 * Production-safe logger utility
 * Disables console logs in production while keeping errors
 */

const isDevelopment = process.env.NODE_ENV === 'development'
const isClient = typeof window !== 'undefined'

export const logger = {
  log: (...args: any[]) => {
    if (isDevelopment && isClient && console.log) {
      console.log(...args)
    }
  },

  warn: (...args: any[]) => {
    if (isDevelopment && console.warn) {
      console.warn(...args)
    }
  },

  error: (...args: any[]) => {
    // Always log errors, even in production
    if (console.error) {
      console.error(...args)
    }
  },

  info: (...args: any[]) => {
    if (isDevelopment && console.info) {
      console.info(...args)
    }
  },

  debug: (...args: any[]) => {
    if (isDevelopment && console.debug) {
      console.debug(...args)
    }
  },
}

