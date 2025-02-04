TrustGrid DID Resolver Driver

# Universal Resolver Driver: trustgrid

This is an trustgrid [Universal Resolver](https://github.com/decentralized-identity/universal-resolver/) driver for fictional **did:trustgrid** identifiers.

## Specifications

* [Decentralized Identifiers](https://w3c.github.io/did-core/)

## trustgrid DIDs

```
did:trustgrid:0000000000123456
did:trustgrid:0000000000456789
```

## Build and Run (Docker)

```
docker build -f ./docker/Dockerfile . -t trustgridorg/uni-resolver-driver-did-trustgrid
docker run -p 8080:8080 trustgridorg/uni-resolver-driver-did-trustgrid
curl -X GET http://localhost:8080/1.0/identifiers/did:trustgrid:0000000000123456
```

## Build and Run (NodeJS)

```
npm start
```

## Driver Environment Variables

The driver recognizes the following environment variables:

### `uniresolver_driver_did_trustgrid_trustgridSetting`

 * An trustgrid setting for the driver.
 * Default value: (empty string)

## Driver Metadata

The driver returns the following metadata in addition to a DID document:

* `trustgridMetadata`: trustgrid metadata
