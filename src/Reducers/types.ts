export type State = {
    id: number,
    description: string,
    done: boolean
}

export type Action = {
    type: string,
    payload: State
}