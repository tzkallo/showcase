| ID       | Topic          | Scope       | Priority | Input                                             | Expected Output                                        | Note                            |
| -------- | -------------- | ----------- | -------- | ------------------------------------------------- | ------------------------------------------------------ | ------------------------------- |
| TC-00001 | Operational    | Functional  | Medium   | fetch_exchange_rate('hu', 'USD', 'HUF', 'Ft', 27) | Returns valid rate, DB write succeeds, logs to app.log | Mocked environment, valid call  |
| TC-00002 | Error handling | Functional  | Medium   | fetch_exchange_rate('hu', 'XXX', 'HUF', 'Ft', 27) | Returns error, no DB write, logs to error.log          | Mocked, invalid currency code   |
| TC-00003 | Operational    | Functional  | Medium   | Empty/invalid input                               | Returns fallback or error message, no DB write         | Tests robustness with bad input |
| TC-00004 | Operational    | Integration | Low      | fetch_exchange_rate('hu', 'USD', 'HUF', 'Ft', 27) | Same as TC-00001, but with real API call               | End-to-end test via live API    |
