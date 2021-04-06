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

3. Agregar dependencias
```script
npm install @azure/cosmos
```


