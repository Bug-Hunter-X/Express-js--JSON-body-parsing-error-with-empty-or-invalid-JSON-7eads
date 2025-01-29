# Express.js JSON Body Parsing Bug

This repository demonstrates a common issue when using Express.js to parse JSON request bodies: handling empty or invalid JSON data.

## Bug Description
The provided Express.js application attempts to parse the JSON request body using `express.json()`. However, if the request body is empty or contains invalid JSON, the application fails to parse the data correctly, leading to unexpected behavior or errors.

## Bug Reproduction
1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `node bug.js` to start the server.
5. Send a POST request to `http://localhost:3000/data` with an empty body or an invalid JSON payload (e.g., malformed JSON).
6. Observe that the server does not handle the empty or invalid JSON correctly. The console may show an empty object or an error, and the response may not be as expected.

## Solution
The solution involves adding error handling to gracefully handle cases where the request body is empty or contains invalid JSON.

## Solution Code
The `bugSolution.js` file contains the corrected code. This solution checks for the existence of the request body and validates the JSON structure before processing.