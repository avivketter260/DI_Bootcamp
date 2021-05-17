-- Get a list of all film languages.

SELECT * FROM language


-- Get a list of all films joined with their languages
-- – select the following details : film title, 
-- description, and language name. Try your 
-- query with different joins:

SELECT  title, description,name
FROM film
JOIN language
ON film.language_id = language.language_id

SELECT * FROM film

-- Get all films, even if they don’t have languages.

SELECT  title, description,name
FROM film
JOIN language
ON film.language_id = language.language_id




-- Get all languages, even if there are no 
-- films in those languages.


SELECT  language.name,title
FROM language
LEFT JOIN film
ON film.language_id = language.language_id



Create a new table called new_film with the following columns : id, name. Add some new films to the table.

CREATE TABLE new_film(
id SERIAL PRIMARY KEY,
name VARCHAR(300)
)

SELECT name FROM  new_film

INSERT INTO new_film (name)
VALUES ('Tom & Jerry')


Create a new table called customer_review, which will contain film reviews that customers will make.
review_id – a primary key, non null, auto-increment.
film_id – references the new_film table. The film that is being reviewed.
language_id – references the language table. What language the review is in.
title – the title of the review.
score – the rating of the review (1-10).
review_text – the text of the review. No limit on the length.
last_update – when the review was last updated.

CREATE TABLE customer_review(
review_id SERIAL PRIMARY KEY NOT null,
film_id INT references new_film(id),
language_id INT references language(language_id),
title VARCHAR(300),
score INT, 
review_text TEXT,
last_update	DATE
)

Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

INSERT INTO  customer_review (film_id, language_id,title,score,review_text)
VALUES 
(1,1,'MOVENAME', 5, 'GOOD'),
(1,1,'MOVENAME2', 5, 'NOT-GOOD')


Delete a film that has a review from the new_film table, what happens to the customer_review table?


ERROR:  update or delete on table "new_film" violates foreign key constraint "customer_review_film_id_fkey" on table "customer_review"
DETAIL:  Key (id)=(2) is still referenced from table "customer_review".
SQL state: 23503


<!-- Exercise 2 : DVD Rental
Instructions -->


Use UPDATE to change the language of some films. Make sure that you use valid languages.


UPDATE language
SET name='French'
WHERE name = 'Japanese'




Which foreign keys (references) are defined for
the customer table? How does this affect the way in which we INSERT into the customer table
SELECT * FROM customer
customer_address_id_fkey

have to be in refrennce 