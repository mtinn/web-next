Set in docker-compose.override ENV
```bash
API_URI=
```

Install dependencies inside container:
```bash
docker-compose run web-next npm i -q
````

Create and start containers:
```bash
docker-compose up
```

Open a browser:
```bash
open "http://localhost:3000/"
```
