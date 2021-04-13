# CI/CD - Azure function

1. Crear proyecto 

```script
func init CustomerService --javascript
```

2. Crear functions CustomerGetAll / CustomerCreate
```script
func new --name CustomerGetAll --template "HTTP trigger" --authlevel "anonymous"
func new --name CustomerCreate --template "HTTP trigger" --authlevel "anonymous"
```

3. Agregar dependencias para pruebas
```script
npm install sinon --save-dev 
npm install mocha --save-dev
npm install chai --save-dev
npm install nyc --save-dev 
npm install sinon-chai --save-dev
npm install rewire  --save-dev 
npm install cross-env --save-dev 
```

3. Ejecutar pruebas
```script
cd ./CustomerService
npm install sinon --save-dev 
npm install mocha --save-dev
npm install chai --save-dev
npm install nyc --save-dev 
npm install sinon-chai --save-dev
npm install rewire  --save-dev 
npm install cross-env --save-dev 
```
