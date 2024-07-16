---
marp: true
theme: gaia
class:
  - invert
#   - lead

---

<style scoped>
table {
  font-size: 28px;
}
p {
  font-size: 28px;
}
</style>

## REST API response codes

|   |   |
|---|---|
| 200 OK | 201 Created |
| 202 Accepted | 204 Success |
| 400 Bad request | 401 Unauthorized |
| 403 Forbidden | 401 Unauthorized |
| 404 Not found | 405 Method not allowed |
| 408 Request timeout | 422 Unprocessable entity - validation error |
| 429 Exceeded limit | 500 Server error |


Refer: https://www.mailersend.com/help/rest-api-response-codes#:~:text=REST%20API%20response%20codes%20can,and%20errors%20on%20their%20apps.

---

## Others
- Authentication (Aproov) 
  - Refer: https://approov.io/blog/approov-integration-in-a-nodejs-express-api 
- Backend Shared
  - Might need to use as node_modules package (?) current backend_shared use composer
  - Refer: https://docs.npmjs.com/creating-node-js-modules


---

