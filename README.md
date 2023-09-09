## Introduction


VBase offers a service for the Interchain Validators to store their proposal reviews for the Cosmos SDK-based chains in the KYVE data pool. VBase Runtime is a codebase of Kysor that allows you to participate in the VBase storage pool as a validator or uploader. 

## Project Overview

**Common:**

- [@kyvejs/types](https://www.notion.so/chainapsis/common/types/README.md) - holds all types for the KYVE application in typescript
- [@kyvejs/sdk](https://www.notion.so/chainapsis/common/sdk/README.md) - development kit for communicating with the KYVE blockchain
- [@kyvejs/protocol](https://www.notion.so/chainapsis/common/protocol/README.md) - core functionality for running validators on the KYVE network

**Tools:**

- [@kyvejs/kysor](https://www.notion.so/chainapsis/tools/kysor/README.md) - The Cosmovisor of KYVE

**Integrations:**

- [@kyvejs/tendermint](https://www.notion.so/chainapsis/integrations/tendermint/README.md) - The official KYVE Tendermint sync integration
- [@kyvejs/tendermint-bsync](https://www.notion.so/chainapsis/integrations/tendermint-bsync/README.md) - The official KYVE Tendermint block sync integration
- [@HeesungB/vbase-runtime](https://github.com/HeesungB/vbase/tree/main/integrations/vbase) - The integration that allows you to register your proposal review and sync the data

### Tutorials

---

Clone and checkout repository:

```bash
https://github.com/HeesungB/vbase.git
cd vbase
```

Install dependencies and setup project:

```bash
yarn setup
```

Checkout integration and build binaries:

```bash
cd integrations/vbase-runtime
yarn build:binaries
```
