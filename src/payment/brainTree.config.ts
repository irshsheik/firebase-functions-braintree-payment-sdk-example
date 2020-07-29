const braintree = require('braintree');

export const gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: "MERCHANT-ID",
    publicKey: "PUBLIC KEY",
    privateKey: "PRIVATE KEY"
  });
