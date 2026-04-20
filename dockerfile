# Use Node base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy files
COPY . .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Run app
CMD ["node", "app.js"]
