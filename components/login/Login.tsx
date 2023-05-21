'use client'

import styles from 'styles/App.module.scss'
import { useFirebaseContext } from 'components/context/FirebaseContext'

const Login = () => {
  const { handleSignIn, setPhoneNumber, admin } = useFirebaseContext()

  if (admin) {
    return null
  }
  return (
    <div className={styles.main}>
      {!admin && (
        <div className={styles.title}>
          <div id="recaptcha-container"></div>

          <h2 className={styles.bigText}>Please Sign In</h2>
          <input
            className={styles.input}
            type="text"
            id="phone"
            placeholder="Phone Number"
            onChange={(e) => {
              if (e.target.value.length !== 12) return
              setPhoneNumber(e.target.value)
            }}
          />
          <input
            className={styles.input}
            type="button"
            value="Sign In"
            onClick={handleSignIn}
          />
        </div>
      )}
    </div>
  )
}

export default Login
