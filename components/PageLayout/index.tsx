import { ReactNode } from 'react'
import styles from './styles.module.scss'
import { Container } from '../Container'
import { Text } from '../Text'

interface PageLayoutProps {
  children: ReactNode
  title?: string
  description?: string
  containerSize?: 'sm' | 'md' | 'lg'
  className?: string
  contentClassName?: string
}

export function PageLayout({
  children,
  title,
  description,
  containerSize = 'lg',
  className = '',
  contentClassName = '',
}: PageLayoutProps) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <Container size={containerSize}>
        <div className={`${styles.content} ${contentClassName}`}>
          {title && (
            <Text
              as="h1"
              size="2xl"
              weight="bold"
              align="center"
              className={styles.title}
            >
              {title}
            </Text>
          )}
          {description && (
            <Text
              as="p"
              size="lg"
              align="center"
              color="muted"
              className={styles.description}
            >
              {description}
            </Text>
          )}
          {children}
        </div>
      </Container>
    </div>
  )
}
