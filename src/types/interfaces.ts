export interface IDropdownElement {
    title: string,
    href: string
};


export interface IAuthenticatedInfo {
    email: string | null,
    first_name: string | null,
    last_name: string | null,
    token: string | null
};

export interface ILoginInfo {
    email: string | null,
    password: string | null,
};

export interface IRegisterInfo {
    email: string | null,
    first_name: string | null,
    last_name: string | null,
    password: string | null,
    repeatPassword: string | null
}
