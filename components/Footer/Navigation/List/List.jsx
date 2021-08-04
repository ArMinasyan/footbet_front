import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import styles from "./List.module.scss";

export function List({ list_items = [], bordersActive }) {
  const { t } = useTranslation("common"),
    translationPath = "footer.navigation.",
    translate = (key) => t(`${translationPath}${key}`);

  return (
    <div className={`${styles.container} ${bordersActive && styles.borders}`}>
      <ul>
        {list_items.map((el) => (
          <Link href={el.link} key={Math.random()}>
            <li>{translate(el.name)}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
