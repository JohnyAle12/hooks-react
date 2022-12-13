export type ContextApp = {
    user?: UserApp
    setUser?: React.Dispatch<React.SetStateAction<any>>
}

type UserApp = {
    id: number,
    name: string,
    email: string
}