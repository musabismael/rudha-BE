
export default ({ env }) => ({
    proxy: true,
    url: env('APP_URL'), // Sets the public URL of the application.
    app: { 
      keys: ['24aac9375669caad409098c53f4694e21a9d651de32cf50ef17c3d282df6a730']
    },
});