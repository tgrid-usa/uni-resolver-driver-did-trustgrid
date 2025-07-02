TrustGrid DID Resolver Driver

# Universal Resolver Driver: trustgrid

This is an trustgrid [Trustgrid Universal Resolver](https://github.com/tgrid-usa/uni-resolver-driver-did-trustgrid/) driver for fictional **did:tgrid** identifiers.

## Specifications

* [Decentralized Identifiers](https://w3c.github.io/did-core/)

## trustgrid DIDs

```
did:tgrid:trustgrid:dev:QjA1qdXKmxzgK4u8mFoBpF
did:tgrid:trustgrid:QjA1qdXKmxzgK4u8mFoBpF
did:tgrid:QjA1qdXKmxzgK4u8mFoBpF
```

## Build and Run (Docker)

```
docker build -f ./docker/Dockerfile . -t trustgrid01/uni-resolver-driver-did-tgrid
docker run -p 8080:8080 trustgrid01/uni-resolver-driver-did-tgrid
curl -X GET http://localhost:8080/1.0/identifiers/did:tgrid:trustgrid:dev:QjA1qdXKmxzgK4u8mFoBpF
```

## Build and Run (NodeJS)

```
yarn start
```

## Driver Environment Variables

The driver recognizes the following environment variables:

### `uniresolver_driver_did_trustgrid_trustgridSetting`

 * An trustgrid setting for the driver.
 * Default value: (empty string)

## Driver Metadata

The driver returns the following metadata in addition to a DID document:

* `trustgridMetadata`: trustgrid metadata
