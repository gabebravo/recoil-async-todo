## mockapi.io

### Todo API endpoints :

- GET /todo = all todos GET /todo/:id = get todo by id
- POST /todo = { task: string, done: boolean }
- PUT /todo/:id = { task: string, done: boolean }
- DELETE /todo/:id = delete todo by id
- FILTER_BY_FIELD = todo/:id?field=value

### UI Async Requirements :

- GET /todo = all todos need to re-render dynamically based on any create/update/delete
- GET /todo/:id = single todo needs fetch and render each time based on page redirect
- POST /todo = all todos need to re-render dynamically based on create && read new todos after
- PUT /todo/:id = all todos need to re-render dynamically based on update && read new todos after
- DELETE /todo/:id = all todos need to re-render dynamically based on delete && read new todos after
- FILTER_BY_FIELD = all todos need to re-render dynamically based on filter criteria && read new todos after
