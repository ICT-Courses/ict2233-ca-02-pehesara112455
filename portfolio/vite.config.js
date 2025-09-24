import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
base: '/ict2233-ca-02-pehesara112455/',
plugins: [react(), tailwindcss()]
});