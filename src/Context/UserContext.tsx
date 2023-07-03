import { createContext, useState, Dispatch, ReactNode } from "react";

export type userType = {
  name: string;
  ame: string;
  email: string;
  password: string;
  favorites: string[];
  toWatch: string[];
  recommended: string[];
};

export type userContextType = [
  user: userType | null,
  setUser: Dispatch<React.SetStateAction<userType | null>> | null
];

export const UserContext = createContext<userContextType>([{} as userType, () => {}] );

type Props = {
  children: ReactNode;
}

export const UserProvider = ({children }: Props) => {
  const [user, setUser] = useState<userType | null>(null);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};
