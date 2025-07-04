// tailwind.config.mjs
export default {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2E8B57',
                secondary: '#FFD700',
                'text-dark': '#222222',
                'bg-light': '#F8F8F8',

                grey: '#B5A58D',
                brown: '#484439',
                dark: '#211F19',
            },
        },
    },
    plugins: [],
}
