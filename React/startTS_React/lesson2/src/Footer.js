import styles from './Footer.module.css'

const footerItems = [
  {
  title: "a",
  link: "a"
  },
  {
  title: "a",
  link: "a"
  },
  {
  title: "a",
  link: "a"
  },
]

export default function Footer() {
  return (
    <ul className={styles.footer}>
        {footerItems.map(({ link, title }) => (
        <li className={styles.item} key={title}>
          <a className={styles.link} href={link}>
          {title}
          </a>
        </li>
        ))}
    </ul>
  )
}