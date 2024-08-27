
export default ({ env }) => ({
    proxy: true,
    url: env('APP_URL'), // Sets the public URL of the application.
    app: { 
      keys: ['aA2BsedO0v1AgFJESMnxDw==','am6Bv8/DqGHThICRmPuXhg==']
    },
});