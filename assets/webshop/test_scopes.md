The webshop's exchange rate function runs automatically and performs the following:

- Retrieves live data from a third-party API

- Updates the exchange rate table in the database

- Returns the appropriate currency rate depending on context (e.g., HUF for *.hu domains)

<br/>

#### In Scope:

- 3 unit tests covering mock responses (valid, invalid, extreme)

- 1 integration test to check live API availability

- Validation of API responses (success & error)

- Verification of database writes (success & failure)

- Logging behavior and response timing

- Non-functional testing: stability, fallback mechanism

<br/>

#### Out of Scope:

- Currency formatting on UI

- Business logic beyond rate fetching (e.g. conversion math, transaction logic)
