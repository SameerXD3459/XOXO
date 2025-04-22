node app.js

http://localhost:3000/

open another terminal within the same directory
Invoke-WebRequest -Uri http://localhost:3000/data -Method Post -Headers $headers -Body '{"name": "John", "age": 29}' -ContentType "application/json"