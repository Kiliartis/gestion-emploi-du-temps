 <!--Valable sur W11 -->

# pre-requis
1. installer node (https://nodejs.org/fr)
* autoriser l'execution de script (https://go.microsoft.com/fwlink/?LinkID=135170)

    executer en administrateur : 
    > Get-ExecutionPolicy 
    => Restricted
    
    Puis autoriser l'éxecution de script : 
    > Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
* initialiser le projet 
    > npx create-react-app gestion-emploi-du-temps
* verifier les dependances et les installer 
    > npm install react-router-dom axios redux react-redux @reduxjs/toolkit
    
    > => 12 vulnerabilities (6 moderate, 6 high)

2. intialiser le depot git
> git config --global user.email "you@example.com"
  
> git config --global user.name "Your Name"

* generer la clé
> ssh-keygen -t ed25519 -C "you@example.com" 

* ajouter la clé dans github.com

PowerShell en admin 
> Set-Service ssh-agent -StartupType Manual

> Start-Service ssh-agent

> ssh-add C:\user....... /.ssh.id_ed25519

> Get-Content ~\.ssh\id_ed25519.pub | Set-Clipboard

> git remote set-url origin git@github.com:Kiliartis/gestion-emploi-du-temps.git


# pre requis backend

1. configurer une base mongo (https://www.mongodb.com/products/platform/atlas-database)
    
2. clusters free pour commencer

# tools 
1. pour les mots de passe en test : https://bcrypt-generator.com/