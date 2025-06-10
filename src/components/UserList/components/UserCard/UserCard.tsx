import type { User } from "../../UserList.types";
import { ReactElement } from "react";
import style from "./UserCard.module.css";
import Link from "next/link";

const UserCard = ({ user }: { user: User }): ReactElement => (
  <div className={style.card}>
    <h3 className={style.card__title}>{user.name}</h3>

    <table className={style.card__table}>
      <tbody>
        <tr>
          <td className={style.card__label}>Username</td>
          <td className={style.card__value}>{user.username}</td>
        </tr>
      </tbody>
    </table>

    <table className={style.card__table}>
      <tbody>
        <tr>
          <td className={style.card__label}>Email</td>
          <td className={style.card__value}>{user.email}</td>
        </tr>
        <tr>
          <td className={style.card__label}>Phone</td>
          <td className={style.card__value}>{user.phone}</td>
        </tr>
        <tr>
          <td className={style.card__label}>Website</td>
          <td className={style.card__value}>{user.website}</td>
        </tr>
      </tbody>
    </table>

    <div className="flex justify-between">
      <h3 className={style.card__title}>Address</h3>
      <a
        href={`https://mapy.cz/turisticka?x=${user.address.geo.lng}&y=${user.address.geo.lat}&z=16`}
        className={style.card__link}
        target="_blank"
      >
        Show on map
      </a>
    </div>
    <table className={style.card__table}>
      <tbody>
        <tr>
          <td className={style.card__label}>Street</td>
          <td className={style.card__value}>{user.address.street}</td>
        </tr>
        <tr>
          <td className={style.card__label}>Suite</td>
          <td className={style.card__value}>{user.address.suite}</td>
        </tr>
        <tr>
          <td className={style.card__label}>City</td>
          <td className={style.card__value}>{user.address.city}</td>
        </tr>
        <tr>
          <td className={style.card__label}>Zipcode</td>
          <td className={style.card__value}>{user.address.zipcode}</td>
        </tr>
      </tbody>
    </table>

    <h3 className={style.card__title}>Company</h3>
    <table className={style.card__table}>
      <tbody>
        <tr>
          <td className={style.card__label}>Name</td>
          <td className={style.card__value}>{user.company.name}</td>
        </tr>
        <tr>
          <td className={style.card__label}>Catch Phrase</td>
          <td className={style.card__value}>{user.company.catchPhrase}</td>
        </tr>
        <tr>
          <td className={style.card__label}>BS</td>
          <td className={style.card__value}>{user.company.bs}</td>
        </tr>
      </tbody>
    </table>

    <Link href={`/articles/${user.id}`} className={style.card__button}>
      Read articles
    </Link>
  </div>
);

export default UserCard;
