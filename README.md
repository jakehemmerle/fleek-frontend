# Fleek Assignment Frontend

This frontend provides a login + password interface used to create API keys to access a private IPFS node.

## Instructions

1. `yarn` - install packages
2. Ensure that .env has proper values (JWT works by default since it uses a dummy payload).
3. `yarn start` - starts the frontend.
4. Go to http://localhost:3000 (or wherever you configured it).
5. Click "Generate New Token" and refresh the page.
6. Copy the new token and put it into Postman's "IPFS HTTP API" entry.
7. Refresh the frontend to get updates on Requests and Keys.

## Improvements

1. Checkboxes at beginning of each API Key entry to enable/disable key instead of a one-way disable.
2. Request Count and Size working for both Requests and Keys tables.
3. Dropdown under each API Key and show Requests there.
4. Upon key generation or delete, reload the page.
5. Websocket could be used to show requests in real-time
6. Byte count could include IPFS Daemon response size instead of just the inbound request size.

## How would you improve this assignment for a production ready solution?

There's obviously a lot.

1. Discuss and finish appropreate improvements listed above.
2. Linting
3. Containerizing the application or configuring CI/CD in a remote Git repo would certainly speed up DevOps.
4. Test and Prod environments
5. Component testing
6. Meaningful Git messages
