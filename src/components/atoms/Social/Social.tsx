import styles from "./Social.module.scss";
interface IProps {
  logo: string;
  href: string;
  name: string;
}
const Social = ({ logo, href, name }: IProps) => {
  return (
    <li className={styles.social}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={styles.social_link}
        title={name}
      >
        <i className={logo}></i>
      </a>
    </li>
  );
};

export default Social;
