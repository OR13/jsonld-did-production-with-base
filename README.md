# JSON-LD Production

This gist demonstrates that presence and absence of `@base` causes breaking incompatibility with the JSON-only representation of a DID Document that uses `fragment` only identifiers for verification methods.

```
git clone git@gist.github.com:7bd706cd5bd464a07ad74b329cb7ce11.git
npm i 
npm run test
```