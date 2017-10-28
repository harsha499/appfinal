// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiAddress: 'https://myapp-fec96.firebaseio.com/',
  cartName: 'cart',
  paymentGatewayUrl: 'https://test.payu.in/_payment',
  successUrl: 'http://localhost:1300/paymentstatus',
  failedUrl: 'http://localhost:1300/paymentstatus',
  key: 'gtKFFx',
  salt: 'eCwWELxi'
};
