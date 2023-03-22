import { writable } from 'svelte/store'

const storage = writable([])
const history = writable([])

export { storage, history }
