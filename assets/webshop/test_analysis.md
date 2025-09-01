### 🔍 Risks

<br/>

| Risk                               | Priority | Note                                                                      |
| ---------------------------------- | -------- | ------------------------------------------------------------------------- |
| Third-party server unavailable     | Medium   | Fallback to last known rate stored in the database                        |
| Invalid result from API            | High     | If response is clearly invalid (e.g. `9999`), treat as a critical failure |
| Generic system error               | Low      | Handled via standard error-handling flow                                  |
| No scheduled execution (e.g. cron) | Medium   | Requires manual triggering or ad-hoc solutions if not automated           |

<br/>

<br/>

### 🕒 Resources & Time Estimation

<br/>

| Test Type      | Responsible | Tool   | Estimated Time |
| -------------- | ----------- | ------ | -------------- |
| Functional     | System      | Django | ~4h            |
| Non-functional | Owner       | Manual | ~2h            |

<br/>

<br/>

### 🧪 Testing Techniques

<br/>

| Technique                | Description                                     |
| ------------------------ | ----------------------------------------------- |
| Black-box                | Focus only on input/output, ignore internals    |
| Equivalence Partitioning | Grouped by request context (e.g., country code) |

<br/>

<br/>

### 📈 Test Coverage

<br/>

| Area           | Type       | Coverage | Notes                                                  |
| -------------- | ---------- | -------- | ------------------------------------------------------ |
| Operational    | Functional | ~50%     | Includes case with invalid return value (e.g., `9999`) |
| Error handling | Functional | 100%     | All error cases are explicitly tested                  |

<br/>

<br/>

### 📃 Test Specifications

<br/>

| Area        | Type       | Specification                       |
| ----------- | ---------- | ----------------------------------- |
| Operational | Functional | Returns expected value in console, Writes record to DB (historized),  Logs to `app.log`|
| Error Handling | Functional | Returns error message in console Logs to both `app.log` and `error.log`|

