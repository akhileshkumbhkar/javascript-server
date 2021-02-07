const config = {
    login: {
    email: {
    required: true,
    regex: /^[a-zA-Z0-9+_.-]+@successive.tech+$/,
    string: true,
    in: ['body'],
    errorMessage: 'Email error'
    },
    password: {
    required: true,
    string: true,
    in: ['body'],
    errorMessage: 'Password is required'
    }
    }
    };
    export default config;
    