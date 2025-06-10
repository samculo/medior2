"use server";

import type { User } from "./UserList.types";
import publicRuntimeConfig from "@/utils/config";
import { ReactElement } from "react";
import style from "./UserList.module.css";
import UserCard from "./components/UserCard/UserCard";

const UserList = async (): Promise<ReactElement> => {
  const data: User[] = await (await fetch(publicRuntimeConfig.usersUrl)).json();

  return (
    <>
      <h2 className={style.title}>Users</h2>
      <div className={style.list}>
        {data.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </>
  );
};

export default UserList;
