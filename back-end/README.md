# WORKOUT APP
    A workout tracker, that will:
    1. Add, edit and remove exercises
    2. Each exercise should have date, reps, and sets
    Using React and Express with Postgres

    
### Data Model

    Exercise
    Name {TEXT}
    Date {TIMESTAMP}
    Reps {INTEGER}
    Sets {INTEGER}

### End Points

|  #  | Action  |      URL       | HTTP Verb |    CRUD    |              Description               |
| :-: | :-----: | :------------: | :-------: | :--------: | :------------------------------------: |
|  1  |  Index  |   /exercises   |    GET    |  **R**ead  | Get a list (or index) of all exercises |
|  2  |  Show   | /exercises/:id |    GET    |  **R**ead  | Get an individual view (show one log)  |
|  3  | Create  |   /exercises   |   POST    | **C**reate |           Create a new exercise        |
|  4  | Destroy | /exercises/:id |  DELETE   | **D**elete |             Delete an exercise         |
|  5  | Update  | /exercises/:id |    PUT    | **U**pdate |             Update an exercise         |

<br />


