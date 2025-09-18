<div style="line-height:1.5;">
  The webshop's exchange rate function runs automatically and performs the following:
  <br/>
  • Retrieves live data from a third-party API
  <br/>
  • Updates the exchange rate table in the database
  <br/>
  • Returns the appropriate currency rate depending on context (e.g., HUF for *.hu domains)
  <br/><br/>
  <strong>In Scope:</strong>
  <br/>
  • 3 unit tests covering mock responses (valid, invalid, extreme)
  <br/>
  • 1 integration test to check live API availability
  <br/>
  • Validation of API responses (success & error)
  <br/>
  • Verification of database writes (success & failure)
  <br/>
  • Logging behavior and response timing
  <br/>
  • Non-functional testing: stability, fallback mechanism
  <br/><br/>
  <strong>Out of Scope:</strong>
  <br/>
  • Currency formatting on UI
  <br/>
  • Business logic beyond rate fetching (e.g. conversion math, transaction logic)
</div>
