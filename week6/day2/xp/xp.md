SELECT amount FROM items 

ORDER BY amount ASC


SELECT amount FROM items 

ORDER BY amount DESC



SELECT customer_name , customer_lastname FROM customers 

 WHERE table_id <4  ORDER BY customer_name , customer_lastname ASC

-- The first 3 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.


SELECT customer_lastname FROM customers 

ORDER BY  customer_lastname DESC

-- All last names (no other columns!), in reverse alphabetical order (Z-A)


ALTER TABLE purchases ADD COLUMN  table_id INTEGER   REFERENCES  items (table_id)


--  SELECT * FROM purchases



INSERT INTO  purchases (customer_id)
  VALUES (1);


--Add a row which references a customer by ID, but does not reference
--an item by ID (leave it blank). Does this work? Why/why not?

-- Use SQL to get the following from the database:
-- All purchases. Is this information useful to us?
  SELECT * FROM purchases 

-- All purchases, joining with the customers table.
SELECT * FROM Purchases,  Customers 

-- Purchases of the customer with the ID equal to 4.
SELECT * FROM customers
WHERE table_id=4

 SELECT * FROM items

 SELECT * FROM purchases, items 
 WHERE  items_name='large desk' AND items_name='small desk'


-- 3.4
	-- Purchases for a large desk AND a small desk


SELECT customer_name,customer_lastname ,items_name ,amount FROM customers,items
WHERE customer_lastname='Scott'
AND items_name ='hard drive'


-- Create a purchase for Scott Scott – he bought a hard drive.

-- Use SQL to show all the customers who 
--have made a purchase. Show the following fields/columns:
-- Customer first name
-- Customer last name
-- Item name

SELECT customer_name, customer_lastname,items_name,amount FROM customers,items

///////////////////////////////////////////////////////////////////////////////////////////

SELECT * FROM customer

-- In the dvdrental database write a 
-- query to select all the columns from the “customer” table.

SELECT (first_name ||' '|| last_name) AS full_name FROM customer

-- Write a query to display the names 
-- (first_name, last_name) using an alias named “full_name”


SELECT DISTINCT create_date FROM customer


-- Lets get all the dates that accounts were created. Write a query to select
--all the 
-- create_date from the “customer” table (there should be no duplicates).


SELECT DISTINCT first_name FROM customer
ORDER BY first_name ASC 

-- Write a query to get all the customer details from the customer table, 
-- it should be displayed in descending order by their first name.


SELECT film_id, title,description, release_year,rental_rate FROM film
ORDER BY rental_rate ASC

-- Write a query to get the film ID, title, description, year of release and 
-- rental rate in ascending order according to their rental rate.


SELECT address,phone FROM address
WHERE district ='Texas'


-- Write a query to get the address, and the phone number of all customers living 
-- in the Texas district, these details can be found in the “address” table.


SELECT * FROM film
WHERE film_id =15 OR film_id =150

-- Write a query to retrieve all movie details 
-- where the movie id is either 15 or 150.

SELECT film_id,title,description,rental_rate,length FROM film
-- Write a query which should check if your favorite movie exists in the database.
-- Have your query get the film ID, title, description, length and the rental 
-- rate, these details can be found in the “film” table.


SELECT film_id,title,description,rental_rate,length FROM film
WHERE title LIKE  'Ai%'

-- No luck finding your movie? Maybe you
-- made a mistake spelling the name. Write a query to get
-- the film ID, title, description, length and the rental rate 
-- of all the movies starting with the two first letters of your favorite movie.

SELECT replacement_cost,title FROM film
ORDER BY replacement_cost ASC
LIMIT 10 
-- Write a query which will find the 10 cheapest movies.

SELECT replacement_cost,title FROM film
ORDER BY replacement_cost ASC
 LIMIT 20
-- Write a query which will find the 10 cheapest movies.

-- Not satisfied with the results.
--Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.

SELECT customer.customer_id ,first_name,last_name,payment_id
FROM customer
INNER JOIN payment
ON customer.customer_id=payment.customer_id
ORDER BY customer_id ASC

-- Write a query which will join the data in the customer table and the payment table. You want to get the amount and the 
-- date of every payment made by a customer, ordered by their id (from 1 


SELECT inventory_id, inventory.film_id, title
FROM film
INNER JOIN inventory
ON NOT film.film_id=inventory.film_id
-- You need to check your inventory. 
-- Write a query to get all the movies which are not in inventory.


SELECT city, country
FROM country
INNER JOIN city
ON  city.country_id=country.country_id