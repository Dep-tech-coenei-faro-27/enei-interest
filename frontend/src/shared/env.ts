export function envHostBackend(): string {
    let url: string | undefined = import.meta.env.HOST_URL
    if (url == undefined || url === "") {
        url = "localhost"
    }
    let port: string | undefined = import.meta.env.HOST_PORT_BACKEND
    if (port == undefined || port === "") {
        port = "8000"
    }
    return (url + ":" + port)
}
