\encoding UTF8

DROP TABLE IF EXISTS charities;
DROP TABLE IF EXISTS recentSearches;

CREATE TABLE charities (
  id SERIAL PRIMARY KEY,
  charityName TEXT NOT NULL,
  category TEXT NOT NULL,
  city TEXT NOT NULL,
  st TEXT NOT NULL,
  website TEXT NOT NULL,
  missionStatement TEXT NOT NULL
);

CREATE TABLE recentSearches (
  id SERIAL PRIMARY KEY,
  charityName TEXT NOT NULL,
  category TEXT NOT NULL,
  city TEXT NOT NULL,
  st TEXT NOT NULL,
  website TEXT NOT NULL,
  missionStatement TEXT NOT NULL
);

INSERT INTO charities (charityName, category, city, st, website, missionStatement)
  VALUES 
  ('Honnold Foundation', 'Solar Energy', 'Sacramento', 'CA', 'honnoldfoundation.com', 'Raising standard of living by providing clean energy solar projects around the world');
  
INSERT INTO recentSearches(charityName, category, city, st, website, missionStatement)
VALUES
('Make a Wish', 'Cancer', 'Phoenix', 'AZ', 'makeawish.com', 'Bringing joy');
