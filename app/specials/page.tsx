'use client'

import styles from './Specials.module.scss'

export default function Specials() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Specials</h2>
      <p>loading...</p>
    </div>
  )
}
// return (
//   <div className={styles.wrapper}>
//     <h2 className={styles.header}>Specials</h2>
//     <iframe
//       src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F271350786209066%2Fposts%2F${postId}%2F&width=500&show_text=true&appId=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}&height=589`}
//       width="500"
//       height="589"
//       allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
//     ></iframe>
//   </div>
// )
