// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    hmr       : false,
    apiUrl    : 'http://localhost:4200',
    firebaseConfig : {
        apiKey: "AIzaSyAAh30ZwLScgb9e9BcdWq8pAxE_MO41Zlc",
        authDomain: "angular-auth-b0635.firebaseapp.com",
        projectId: "angular-auth-b0635",
        storageBucket: "angular-auth-b0635.appspot.com",
        messagingSenderId: "636529684300",
        appId: "1:636529684300:web:790c23159b5651d032e9e9"
      }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
