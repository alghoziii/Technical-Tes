Overview
This is a Node.js backend API for an ecommerce system, built with:



# Ecommerce API - Backend Developer Test!⚽

## Teknologi Kece Bro! 🚀

- **Express.js**
- **Drizzle ORM**
- **PostgreSQL**
- **Swagger UI for documentation**

### Installation!

```bash
# Clone repository
https://github.com/alghoziii/Technical-Tes

# Masuk folder
cd Technical-Tes

# Install dependencies:
npm install

#Set up PostgreSQL database :
CREATE DATABASE ecommerce_db;

-- Run these in ecommerce_db
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

#Create .env file :
DATABASE_URL=postgres://username:password@localhost:5432/ecommerce_db
PORT=3000

**Running the Application**



## Struktur Projek Kita 📂

```
booking-lapangan-bola/
│
├── service-user/           # Ngurusin User
├── service-booking/        # Booking Lapangan
├── service-pembayaran/     # Urus Duit
├── service-notifikasi/     # Kirim Pesan
├── api-gateway/            # Pintu Masuk
└── share/                  # Kode Umum
```

## Wajib Setting! 🔧

Salin `.env.example` terus diubah:
- Login GCP
- Koneksi Database
- Setting Kafka
- Pengamanan

**Selamat Ngoding, Semoga Jadi Developer Kece! 💻🔥**
