import React from "react";

const AccountFormContext = React.createContext({} as any);

export interface AccountFormInterface {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

export function AccountFormProvider({ children }: any) {
  const [description, setDescription] = React.useState<string>("");

  return (
    <AccountFormContext.Provider value={{ description, setDescription }}>
      {children}
    </AccountFormContext.Provider>
  );
}

export function AccountForm() {
  return React.useContext(AccountFormContext);
}
