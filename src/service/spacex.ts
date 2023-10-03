import { Launch, Launches } from "@/server/SpaceX/types"

async function fetchRequest<T>(path: string) {
    const response = await fetch(process.env.INTERNAL_API_URL + path, { next: { revalidate: 3600 } })

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json() as Promise<T>
}

export const getUpcomingLaunches = async () => {
    const data = await fetchRequest<Launches>(`launches/upcoming`)

    return data
}

export const getPastLaunches = async () => {
    const data = await fetchRequest<Launches>(`launches/past`)

    return data
}

export const getNextLaunch = async () => {
    const data = await fetchRequest<Launch>(`launches/next`)

    return data
}

export const getLastLaunch = async () => {
    const data = await fetchRequest<Launch>('launches/latest')

    return data
}

export const getLaunchById = async (id: string) => {
    const data = await fetchRequest<Launch>(`launches/${id}`)

    return data
}