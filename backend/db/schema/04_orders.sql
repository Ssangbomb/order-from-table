-- Drop and recreate orders table

DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  item_id INTEGER REFERENCES items(id) ON DELETE CASCADE,
  table_number SMALLINT NOT NULL,
  quantity SMALLINT NOT NULL,
  data TIMESTAMP
);
