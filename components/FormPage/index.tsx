import { ReactNode } from 'react'
import styles from '../shared.module.scss'
import { Container } from '../Container'
import { Text } from '../Text'

interface FormPageProps {
  children: ReactNode
  title: string
  description?: string
  containerSize?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  contentClassName?: string
}

export const FormPage = ({
  children,
  title,
  description,
  containerSize = 'lg',
  className = '',
  contentClassName = '',
}: FormPageProps) => {
  return (
    <Container size={containerSize} className={`${styles.pageWrapper} ${className}`}>
      <div className={`${styles.content} ${contentClassName}`}>
        <Text as="h1" className={styles.title}>
          {title}
        </Text>
        {description && (
          <Text as="p" className={styles.description}>
            {description}
          </Text>
        )}
        {children}
      </div>
    </Container>
  )
}
