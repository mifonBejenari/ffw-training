import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      <h1 data-testid="heading">{'Homepage'}</h1>
    </main>
  )
}
