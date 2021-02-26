## Account System Demo

Account System demo built with Django Rest Framework and React for a Technical Test Assignment

## Setup
#### For the backend
```
pipenv install
pipenv shell
cd backend
python manage.py migrate
python manage.py runserver
```
#### For the backend
```
cd frontend
npm install
npm start
```
___
## Backend Endpoints
### GET api/transactions/
#### Gets all the transactions availables
```
[
  {
    "id":1,
    "description":"Salario",
    "amount":"5000.00",
    "created_at":"2020-02-25T19:11:17.213647Z"
  },
  {
    "id":2,
    "description":"Obra Social",
    "amount":"-900.00",
    "created_at":"2020-02-25T19:11:24.533066Z"
  }
] 
```
#### id: id auto generated id once a transaction is created
#### description: description of the transaction
#### amount: amount of the transaction
#### created_at: auto generated timestamp of the transaction

### POST api/transactions/
#### Creates a new transaction and returns the object unless there is an error in which case it returns information about the error
```
{
  "desciption": "Gimnasio",
  "amount": "-40.00"
}
```

### PUT api/transactions/:id/
#### Modifies a transaction and returns the object unless there is an error in which case it returns information about the error.
```
{
  "desciption": "Gimnasio",
  "amount": "-45.00"
}
```

### DELETE api/transactions/:id/
#### Deletes the transaction or returns an error in cases it does not found it.
```
{
  "detail": "Not found."
}
```
