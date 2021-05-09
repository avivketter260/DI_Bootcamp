SELECT  * FROM students


SELECT  last_name, first_name FROM students

 SELECT  last_name, first_name FROM students
 WHERE   students_id =2



 SELECT  last_name, first_name FROM students
 WHERE    last_name = 'Benichou'  AND first_name = 'Marc';


 SELECT  last_name, first_name FROM students
 WHERE    last_name = 'Benichou'  OR first_name = 'Marc';

 SELECT  last_name, first_name FROM students
 WHERE  first_name  LIKE  '%a%';


 SELECT  last_name, first_name FROM students
 WHERE  first_name  LIKE  'a%';

 SELECT  last_name, first_name FROM students
 WHERE  first_name  LIKE  '%a';
 
-- Fetch the students whose first_names end with the letter a.
 
	 SELECT  last_name, first_name FROM students
	 WHERE  first_name  LIKE  '%a_';

 	 SELECT  last_name, first_name FROM students
	 WHERE students_id=1 OR students_id=3 ;

-- Fetch the students whose id’s are equal to 1 AND 3 .

	 SELECT  birth_date,last_name, first_name FROM students
	 
 	 WHERE birth_date >= '01/1/2000'
-- 	 
	 
-- Fetch the students whose birth_dates are equal to or come afte