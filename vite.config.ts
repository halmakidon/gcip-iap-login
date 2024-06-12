import { defineConfig } from 'vite'
import * as dns from 'dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
    server: {
        port: 8080,
    }
})
