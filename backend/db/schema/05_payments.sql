-- Drop and recreate payments table

DROP TABLE IF EXISTS payments CASCADE;
CREATE TABLE payments (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  total INTEGER NOT NULL,
  data TIMESTAMP
);
