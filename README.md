## mockapi.io

### Todo endpoints :

GET /todo = all todos
GET /todo/:id = get todo by id
POST /todo = { task: string, done: boolean }
PUT /todo/:id = { task: string, done: boolean }
DELETE /todo/:id = delete todo by id
FILTER_BY_FIELD todo/:id?<FIELD>=<VALUE>
