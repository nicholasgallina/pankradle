-- \i psql meta-command meaning include
-- psql sends INSERT INTO statement to Postgres server
--     . takes each row of values and writes as new records into events table on disk (inside dockerized volume)
--     . 

-- FIGHTERS
INSERT INTO fighters (first_name, last_name, nickname, country, dob) VALUES

-- UFC 199: Main Card
  ('Michael',       'Bisping',        'The Count',              'GB', '1979-02-28'),
  ('Luke',          'Rockhold',       NULL,                     'US', '1984-10-17'),
  ('Dominick',      'Cruz',           'The Dominator',          'US', '1985-03-09'),
  ('Urijah',        'Faber',          'The California Kid',     'US', '1979-05-14'),
  ('Max',           'Holloway',       'Blessed',                'US', '1991-12-04'),
  ('Ricardo',       'Lamas',          'The Bully',              'US', '1982-06-21'),
  ('Dan',           'Henderson',      'Hendo',                  'US', '1970-08-24'),
  ('Hector',        'Lombard',        NULL,                     'CU', '1978-09-15'),
  ('Dustin',        'Poirier',        'The Diamond',            'US', '1989-01-19'),
  ('Bobby',         'Green',          'King',                   'US', '1987-06-11'),

-- UFC 199: Prelims
  ('Brian',         'Ortega',         'T-City',                 'US', '1991-02-21'),
  ('Clay',          'Guida',          'The Carpenter',          'US', '1981-12-08'),
  ('Beneil',        'Dariush',        'Benny',                  'IR', '1989-04-26'),
  ('James',         'Vick',           'The Texecutioner',       'US', '1987-02-23'),
  ('Jessica',       'Andrade',        'Bate Estaca',            'BR', '1991-09-25'),
  ('Jessica',       'Penne',          NULL,                     'US', '1983-01-30'),
  ('Alex',          'Caceres',        'Bruce Leroy',            'US', '1988-06-20'),
  ('Cole',          'Miller',         NULL,                     'US', '1984-04-26'),

-- UFC 199: Early Prelims
  ('Sean',          'Strickland',     'Tarzan',                 'US', '1991-02-26'),
  ('Tom',           'Breese',         NULL,                     'GB', '1990-01-01'),
  ('Jonathan',      'Wilson',         NULL,                     'US', '1990-01-01'),
  ('Luiz',          'Henrique',       NULL,                     'BR', '1990-01-01'),
  ('Kevin',         'Casey',          NULL,                     'US', '1990-01-01'),
  ('Elvis',         'Mutapcic',       NULL,                     'BA', '1990-01-01'),
  ('Polo',          'Reyes',          NULL,                     'MX', '1990-01-01'),
  ('Dong Hyun',     'Kim',            'Maestro',                'KR', '1990-01-01'),

-- UFC 207: Main Card
  ('Amanda',        'Nunes',          'The Lioness',            'BR', '1988-05-30'),
  ('Ronda',         'Rousey',         'Rowdy',                  'US', '1987-02-01'),
  ('Cody',          'Garbrandt',      'No Love',                'US', '1991-07-07'),
  -- Dominick Cruz: added in UFC 199 Main Card
  ('TJ',            'Dillashaw',      'Killashaw',              'US', '1986-02-07'),
  ('John',          'Lineker',        NULL,                     'BR', '1991-09-04'),
  ('Dong Hyun',     'Kim',            'Stun Gun',               'KR', '1983-03-04'), -- different fighter from UFC 199 "Maestro" Dong Hyun Kim
  ('Tarec',         'Saffiedine',     NULL,                     'BE', '1985-10-17'),
  ('Louis',         'Smolka',         'Creep Show',             'US', '1991-08-05'),
  ('Ray',           'Borg',           'The Tazmexican Devil',   'US', '1993-10-30'),

-- UFC 207: Prelims
  ('Johny',         'Hendricks',      'Bigg Rigg',              'US', '1983-12-05'),
  ('Neil',          'Magny',          NULL,                     'US', '1987-09-15'),
  ('Alex',          'Garcia',         NULL,                     'CU', '1990-01-01'),
  ('Mike',          'Pyle',           'Quicksand',              'US', '1976-05-03'),

-- UFC 207: Early Prelims
  ('Niko',          'Price',          'The Hybrid',             'US', '1991-05-07'),
  ('Brandon',       'Thatch',         'Rukus',                  'US', '1985-09-14'),
  ('Alex',          'Oliveira',       'Cowboy',                 'BR', '1990-01-01'),
  ('Tim',           'Means',          'Dirty Bird',             'US', '1985-03-25'),
  ('Antonio Carlos','Junior',         NULL,                     'BR', '1990-12-24'),
  ('Marvin',        'Vettori',        'The Italian Dream',      'IT', '1993-06-04'),

-- UFC 307: Main Card
  ('Alex',          'Pereira',        'Poatan',                 'BR', '1987-07-07'),
  ('Khalil',        'Rountree',       NULL,                     'US', '1988-02-15'),
  ('Raquel',        'Pennington',     'Rocky',                  'US', '1988-09-30'),
  ('Julianna',      'Pena',           'The Venezuelan Vixen',   'US', '1989-08-19'),
  ('Jose',          'Aldo',           'Junior',                 'BR', '1986-09-09'),
  ('Mario',         'Bautista',       NULL,                     'US', '1994-07-25'),
  ('Kayla',         'Harrison',       NULL,                     'US', '1990-11-02'),
  ('Ketlen',        'Vieira',         NULL,                     'BR', '1991-09-13'),
  ('Roman',         'Dolidze',        NULL,                     'GE', '1988-05-21'),
  ('Kevin',         'Holland',        'Trailblazer',            'US', '1992-08-09'),

-- UFC 307: Prelims
  ('Stephen',       'Thompson',       'Wonderboy',              'US', '1983-02-11'),
  ('Joaquin',       'Buckley',        'New Mansa',              'US', '1994-04-26'),
  ('Marina',        'Rodriguez',      NULL,                     'BR', '1986-08-19'),
  ('Iasmin',        'Lucindo',        NULL,                     'BR', '1995-01-01'),
  ('Cesar',         'Almeida',        NULL,                     'BR', '1997-01-01'),
  ('Ihor',          'Potieria',       NULL,                     'UA', '1995-01-01'),

-- UFC 307: Early Prelims
  ('Ryan',          'Spann',          'Superman',               'US', '1992-09-05'),
  ('Ovince',        'Saint Preux',    'OSP',                    'US', '1983-05-16'),
  ('Carla',         'Esparza',        'Cookie Monster',         'US', '1987-10-31'),
  ('Tecia',         'Pennington',     'The Tiny Tornado',       'US', '1991-07-17'),
  -- Tim Means: added in UFC 207 Early Prelims
  ('Court',         'McGee',          'The Crusher',            'US', '1983-07-22');


-- EVENTS
INSERT INTO events (name, event_date, location, venue, city, state, country, attendance, gate, total_fights) VALUES
  ('UFC 199', '2016-06-04', 'Inglewood, CA', 'The Forum',      'Inglewood',    'CA', 'US', 15587,  2168675.00, 13),
  ('UFC 207', '2016-12-30', 'Las Vegas, NV',  'T-Mobile Arena', 'Las Vegas',    'NV', 'US', 18533,  4750000.00, 11),
  ('UFC 307', '2024-10-05', 'Salt Lake City', 'Delta Center',   'Salt Lake City','UT', 'US', 17487,  5000000.00, 12);

-- BOUTS
-- fighter IDs match insertion order in seed.sql:
-- 1=Bisping 2=Rockhold 3=Cruz 4=Faber 5=Holloway 6=Lamas 7=Henderson 8=Lombard 9=Poirier 10=B.Green
-- 11=Ortega 12=Guida 13=Dariush 14=Vick 15=Andrade 16=Penne 17=Caceres 18=C.Miller
-- 19=Strickland 20=Breese 21=J.Wilson 22=L.Henrique 23=K.Casey 24=Mutapcic 25=Reyes 26=DH.Kim(Maestro)
-- 27=Nunes 28=Rousey 29=Garbrandt 30=Dillashaw 31=Lineker 32=DH.Kim(StunGun) 33=Saffiedine 34=Smolka 35=Borg
-- 36=Hendricks 37=Magny 38=A.Garcia 39=Pyle
-- 40=N.Price 41=Thatch 42=Oliveira 43=Means 44=A.C.Junior 45=Vettori
-- 46=Pereira 47=Rountree 48=R.Pennington 49=Pena 50=Aldo 51=Bautista 52=Harrison 53=Vieira 54=Dolidze 55=Holland
-- 56=Thompson 57=Buckley 58=M.Rodriguez 59=Lucindo 60=C.Almeida 61=Potieria
-- 62=Spann 63=OSP 64=C.Esparza 65=T.Pennington 66=McGee
-- event IDs: 1=UFC199, 2=UFC207, 3=UFC307

INSERT INTO bouts (event_id, fighter1_id, fighter2_id, winner_id, weight_class, card_segment, bout_order, method, round, time, is_title_bout, referee) VALUES

-- UFC 199 Main Card (bout_order 1=main event, ascending toward card opener)
  (1, 1,  2,  1,  'Middleweight',        'main',         1, 'KO/TKO',    1, '3:36', TRUE,  'John McCarthy'),
  (1, 3,  4,  3,  'Bantamweight',        'main',         2, 'Decision',  5, '5:00', TRUE,  'Herb Dean'),
  (1, 5,  6,  5,  'Featherweight',       'main',         3, 'Decision',  3, '5:00', FALSE, 'Jason Herzog'),
  (1, 7,  8,  7,  'Middleweight',        'main',         4, 'KO/TKO',    2, '1:27', FALSE, 'Herb Dean'),
  (1, 9,  10, 9,  'Lightweight',         'main',         5, 'KO/TKO',    1, '2:53', FALSE, 'Mario Yamasaki'),

-- UFC 199 Prelims
  (1, 11, 12, 11, 'Featherweight',       'prelim',       6, 'KO/TKO',    3, '4:40', FALSE, 'Keith Peterson'),
  (1, 13, 14, 13, 'Lightweight',         'prelim',       7, 'KO/TKO',    1, '4:16', FALSE, 'Mike Beltran'),
  (1, 16, 15, 15, 'Strawweight',         'prelim',       8, 'KO/TKO',    2, '2:56', FALSE, 'Jason Herzog'),
  (1, 18, 17, 17, 'Featherweight',       'prelim',       9, 'Decision',  3, '5:00', FALSE, 'Herb Dean'),

-- UFC 199 Early Prelims
  (1, 19, 20, 19, 'Welterweight',        'early_prelim', 10, 'Decision', 3, '5:00', FALSE, 'Steve Mazzagatti'),
  (1, 22, 21, 22, 'Light Heavyweight',   'early_prelim', 11, 'KO/TKO',   2, '4:11', FALSE, 'Keith Peterson'),
  (1, 23, 24, NULL,'Middleweight',       'early_prelim', 12, 'Decision', 3, '5:00', FALSE, 'Mario Yamasaki'),  -- draw
  (1, 25, 26, 25, 'Lightweight',         'early_prelim', 13, 'KO/TKO',   3, '1:52', FALSE, 'Herb Dean'),

-- UFC 207 Main Card
  (2, 27, 28, 27, 'Womens Bantamweight','main',        1, 'KO/TKO',    1, '0:48', TRUE,  'Herb Dean'),
  (2, 29, 3,  29, 'Bantamweight',        'main',         2, 'Decision',  5, '5:00', TRUE,  'John McCarthy'),
  (2, 30, 31, 30, 'Bantamweight',        'main',         3, 'Decision',  3, '5:00', FALSE, 'Jason Herzog'),
  (2, 32, 33, 32, 'Welterweight',        'main',         4, 'Decision',  3, '5:00', FALSE, 'Keith Peterson'),
  (2, 34, 35, 35, 'Flyweight',           'main',         5, 'Decision',  3, '5:00', FALSE, 'Mario Yamasaki'),

-- UFC 207 Prelims
  (2, 36, 37, 37, 'Welterweight',        'prelim',       6, 'Decision',  3, '5:00', FALSE, 'Steve Mazzagatti'),
  (2, 44, 45, 44, 'Middleweight',        'prelim',       7, 'Decision',  3, '5:00', FALSE, 'Herb Dean'),
  (2, 38, 39, 38, 'Welterweight',        'prelim',       8, 'KO/TKO',    1, '3:34', FALSE, 'John McCarthy'),

-- UFC 207 Early Prelims
  (2, 40, 41, 40, 'Welterweight',        'early_prelim', 9,  'Submission', 1, '4:30', FALSE, 'Keith Peterson'),
  (2, 43, 42, NULL,'Welterweight',       'early_prelim', 10, 'No Contest', 1, '3:33', FALSE, 'Mario Yamasaki'),

-- UFC 307 Main Card
  (3, 46, 47, 46, 'Light Heavyweight',   'main',         1, 'KO/TKO',    4, '4:32', TRUE,  'Herb Dean'),
  (3, 48, 49, 49, 'Womens Bantamweight','main',        2, 'Decision',  5, '5:00', TRUE,  'Jason Herzog'),
  (3, 50, 51, 51, 'Bantamweight',        'main',         3, 'Decision',  3, '5:00', FALSE, 'Keith Peterson'),
  (3, 54, 55, 54, 'Middleweight',        'main',         4, 'KO/TKO',    1, '5:00', FALSE, 'Steve Mazzagatti'),
  (3, 52, 53, 52, 'Womens Bantamweight','main',        5, 'Decision',  3, '5:00', FALSE, 'John McCarthy'),

-- UFC 307 Prelims
  (3, 56, 57, 57, 'Welterweight',        'prelim',       6, 'KO/TKO',    3, '2:17', FALSE, 'Herb Dean'),
  (3, 58, 59, 59, 'Strawweight',         'prelim',       7, 'Decision',  3, '5:00', FALSE, 'Mario Yamasaki'),
  (3, 60, 61, 60, 'Middleweight',        'prelim',       8, 'Decision',  3, '5:00', FALSE, 'Jason Herzog'),

-- UFC 307 Early Prelims
  (3, 62, 63, 62, 'Light Heavyweight',   'early_prelim', 9,  'Decision', 3, '5:00', FALSE, 'Keith Peterson'),
  (3, 64, 65, 65, 'Strawweight',         'early_prelim', 10, 'Decision', 3, '5:00', FALSE, 'Herb Dean'),
  (3, 66, 43, 66, 'Welterweight',        'early_prelim', 11, 'Decision', 3, '5:00', FALSE, 'Steve Mazzagatti');