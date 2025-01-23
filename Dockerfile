# Étape 1 : Utiliser une image de base officielle Node.js
FROM node:18-alpine AS builder

# Étape 2 : Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3 : Copier les fichiers nécessaires
COPY package.json package-lock.json ./

# Étape 4 : Installer les dépendances en mode production
RUN npm install --production

# Étape 5 : Copier le reste des fichiers du projet
COPY . .

# Étape 6 : Construire l'application (si applicable)
# RUN npm run build

# Étape 7 : Utiliser une image légère pour l'exécution
FROM node:18-alpine

# Étape 8 : Copier les fichiers depuis le builder
WORKDIR /app
COPY --from=builder /app /app

# Étape 9 : Exposer le port de l'application (exemple : 3000)
EXPOSE 8080

# Étape 10 : Définir la commande de démarrage
CMD ["npm", "start"]
