import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      maxWidth:{
        app: '700px'
      },
     colors:{
      diego:'#8257e6'
     }
    },
  },
  plugins: [],
}
export default config