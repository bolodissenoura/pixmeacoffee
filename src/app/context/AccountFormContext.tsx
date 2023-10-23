import React from "react";

const AccountFormContext = React.createContext({} as any);

export type SocialLinksType = {
  name: "youtube" | "twitch" | "twitter" | "tabnews";
  value: string;
};

export type FormsStateType = {
  pageStatus: "success" | "error" | "none";
  pixKeyStatus: "success" | "error" | "none";
  socialLinksStatus: "success" | "error" | "none";
  descriptionStatus: "success" | "error" | "none";
};

export interface AccountFormInterface {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  pixKey: string;
  setPixKey: React.Dispatch<React.SetStateAction<string>>;
  socialLinks: SocialLinksType[];
  setSocialLinks: React.Dispatch<React.SetStateAction<SocialLinksType[]>>;
  status: FormsStateType;
  setStatus: React.Dispatch<React.SetStateAction<FormsStateType>>;
}

export function AccountFormProvider({ children }: any) {
  const [description, setDescription] = React.useState<string>("");
  const [page, setPage] = React.useState<string>("");
  const [pixKey, setPixKey] = React.useState<string>("");
  const [socialLinks, setSocialLinks] = React.useState<SocialLinksType[]>([]);
  const [status, setStatus] = React.useState<FormsStateType>({
    pageStatus: "none",
    pixKeyStatus: "none",
    socialLinksStatus: "none",
    descriptionStatus: "none",
  });

  return (
    <AccountFormContext.Provider
      value={{
        description,
        setDescription,
        page,
        setPage,
        pixKey,
        setPixKey,
        socialLinks,
        setSocialLinks,
        setStatus,
        status,
      }}>
      {children}
    </AccountFormContext.Provider>
  );
}

export function AccountForm() {
  return React.useContext(AccountFormContext);
}
