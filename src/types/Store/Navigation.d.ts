namespace Store {
    type Navigation = {
        goBackFunc: (() => void) | null,
        enabled: boolean
    }
}