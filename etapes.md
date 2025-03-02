 <!--Valable sur W11 -->

# pre-requis
1. installer node (https://nodejs.org/fr)
2. autoriser l'execution de script (https://go.microsoft.com/fwlink/?LinkID=135170)

    executer en administrateur : 
    > Get-ExecutionPolicy 
    => Restricted
    
    Puis autoriser l'éxecution de script : 
    > Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
3. initialiser le projet 
    > npx create-react-app gestion-emploi-du-temps
4. verifier les dependances et les installer 
    > npm install react-router-dom axios redux react-redux @reduxjs/toolkit
    
    > => 12 vulnerabilities (6 moderate, 6 high)
