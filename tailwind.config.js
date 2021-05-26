module.exports = {
    theme: {
        backgroundColor: theme => ({
            ...theme('colors'),
            customYel: {
                100: '#f3e4ab',
                default: '#e4c17f',
            },
            customGray: {
                100: '#f2f2f2',
                200: '#e9e4e1',
                300: '#e9e4e1',
                400: '#969291',
                500: '#767070'
            },
        })
    },
    variants: {},
    plugins: [],
}