import React from "react";
import styles from "../styles/header.module.css";

interface DataUser {
  name: string;
  profileImage: string;
}

export const Header: React.FC = () => {
  const dataUser: DataUser = {
    name: "Lucas Quiroga",
    profileImage:
      "https://res.cloudinary.com/dncmrwppr/image/upload/v1707095702/profile3_wpgvdm.png",
  };
  return (
    <header className={styles.header}>
      <img
        src={dataUser.profileImage}
        alt="Profile img"
        className={styles["header__profile-image"]}
      />
      <div>
        <h1 className={styles["header__profile-name"]}>{dataUser.name}</h1>
        <p className={styles["header__title"]}>Software Engineer</p>
      </div>
    </header>
  );
};
