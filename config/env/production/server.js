
export default ({ env }) => ({
    proxy: true,
    url: env('APP_URL'), // Sets the public URL of the application.
    app: { 
      keys: process.env.APP_KEYS.split(','),
    },
});