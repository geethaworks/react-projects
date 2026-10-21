export const buildUrl = (route, params = {}) => {
    const placeHolders = []
    Object.entries(params).forEach(([key, value]) => {
        if (route.includes(`:${key}`)) {
            placeHolders.push(key)
            route = route.replace(`:${key}`, encodeURIComponent(value))
        }
    })
    const queryParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
        if (!placeHolders.includes(key) && value != null)
            queryParams.append(key, value)
    })
    const queryString = queryParams.toString()
    return queryString ? `${route}?${queryString}` : route
}