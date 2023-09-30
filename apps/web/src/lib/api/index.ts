import { PUBLIC_API_URL } from "$env/static/public"
import { error } from "@sveltejs/kit"

interface ApiClientOptions {
    auth?: string,
    params?: Record<string, string>
    method?: "GET"|"POST"|"PATCH"|"DELETE"
    body?: any
}

export default async function api<T>(fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>, route: string, options?: ApiClientOptions): Promise<T> {
    let endpoint = PUBLIC_API_URL
    let url = route
    if (route.startsWith("/")) url = url.replace("/", "")
    
    endpoint += url
    if (options?.params) {
        endpoint += "?" + Object.entries(options.params).map(([key, value]) => `${key}=${value}`).join("&")
    }

    let method = "GET"
    if (options?.method) method = options.method

    let headers = new Headers()
    if (options?.body) headers.append("Content-Type", "application/json")

    let resp: any
    try {
        resp = await fetch(endpoint, {
            method: method,
            body: options?.body ? JSON.stringify(options.body) : null,
            headers: headers
        })
    } catch (e: any) {
        throw error(500, ({
            message: e.message
        }))
    }

    const json = await resp.json()
    // @ts-ignore
    if (!resp.ok) throw error(resp.status, ({ message: resp.statusText, body: json }))
    return json
}