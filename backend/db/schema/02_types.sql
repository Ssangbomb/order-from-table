-- Drop and recreate types table

DROP TABLE IF EXISTS types CASCADE;
CREATE TABLE types (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);
