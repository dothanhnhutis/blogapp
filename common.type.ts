import { User, Session } from "next-auth";

export enum SideBarEnum {
  DEFAULT = "DEFAULT",
  LIST = "LIST",
  NUMBER = "NUMBER",
}

type SibeBarMap<T extends { [index: string]: any }> = {
  [Key in keyof T]: T[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        props: T[Key];
      };
};

type SideBarBase = {
  icon: JSX.Element;
  name: string;
};

export type SideBarParameters = {
  [SideBarEnum.DEFAULT]: SideBarBase & {
    path: string;
  };
  [SideBarEnum.NUMBER]: SideBarBase & {
    path: string;
    count: number;
  };
  [SideBarEnum.LIST]: SideBarBase & {
    list: {
      path: string;
      name: string;
    }[];
  };
};

export type SideBarProps =
  SibeBarMap<SideBarParameters>[keyof SibeBarMap<SideBarParameters>];

export type LoginSubmit = {
  email: string;
  password: string;
};

export type RegisterSubmit = LoginSubmit & {
  otp: string;
};

export type NavBarLink = {
  link: string;
  name: string;
  sublinks?: SubLink[];
};

export type SubLink = {
  link: string;
  name: string;
};

export type UserProfile = {
  id: string;
  username: string;
  email: string;
  role: string;
  avatarUrl: string;
  password?: string;
  updatedAt: string;
  createdAt: string;
};

export type OTPSearch = {
  id: string;
  code: string;
  type: string;
  verified: boolean;
  email: string;
  expireAt: string;
  updatedAt: string;
  createdAt: string;
};

export interface SessionInterface extends Session {
  user: User & {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  };
}
