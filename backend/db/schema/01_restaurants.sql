-- Drop and recreate restaurants table

DROP TABLE IF EXISTS restaurants CASCADE;
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  tax_percent INT NOT NULL
);
