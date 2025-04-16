# Ecommerce API - Backend Developer Test!

## Teknologi 

- **Express.js**
- **Drizzle ORM**
- **PostgreSQL**
- **Swagger UI for documentation**

  ## Instalasi

1. Clone the repository:

   ```bash
   https://github.com/alghoziii/Technical-Tes

2. Install dependencies:
   ```bash
   npm install
3. Create .env file:
   ```bash
   DATABASE_URL=postgres://username:password@localhost:5432/ecommerce_db
    PORT=3000
4. Create table products and orders:
   ```bash
      CREATE TABLE products ( 
      id SERIAL PRIMARY KEY, 
      name VARCHAR(100), 
      description TEXT, 
      price DECIMAL(10, 2) 
      ); 
      CREATE TABLE orders ( 
      id SERIAL PRIMARY KEY, 
      product_id INT REFERENCES products(id) ON DELETE CASCADE, 
      quantity INT, 
      total_price DECIMAL(10, 2), 
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
      ); 
   
5. Running the Application:
   ```bash
   npm run dev
   
## Link Penting :
1. API Dokumentasi :
   
    - Swagger : http://localhost:3000/api-docs
      
3. API Aplikasi : http://localhost:3000/

   




