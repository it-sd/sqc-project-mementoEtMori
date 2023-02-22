/encoding UTF8

DROP TABLE IF EXISTS charities;
DROP TABLE IF EXISTS recentSearches;

CREATE TABLE charities (
  id SERIAL PRIMARY KEY,
  charityName TEXT NOT NULL,
  category TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  website TEXT NOT NULL,
  missionStatement TEXT NOT NULL
);

CREATE TABLE recentSearches (
  id SERIAL PRIMARY KEY,
  charityName TEXT NOT NULL,
  category TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  website TEXT NOT NULL,
  missionStatement TEXT NOT NULL
);

INSERT INTO charities (charityName, category, state)
  VALUES 
  ('Honnold Foundation', 'Solar Energy', 'CA');
  
INSERT INTO recentSearches(charityName, category, state)
VALUES
('Make a Wish', 'Cancer', 'AZ');
