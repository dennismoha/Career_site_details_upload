-- USE `career`;
-- DROP procedure IF EXISTS `studentRegister`;

-- DELIMITER $$
-- USE `career`$$
-- CREATE PROCEDURE `studentRegister` (	
--      in  first_name VARCHAR(45),  
--      in  last_name VARCHAR(45),  
--      in  Email VARCHAR(45),  
--      in  reg_num VARCHAR(45),  
--       in  campus VARCHAR(45),  
--      in  college VARCHAR(45),  
--      in  course VARCHAR(45),  
--      in  discipline VARCHAR(45),  
--      in  gender VARCHAR(45),  
--      in  age VARCHAR(45), 
--      in  enroll_date VARCHAR(45), 
-- 	 in  finish_date VARCHAR(45), 
--      in  role VARCHAR(45), 
--      in password VARCHAR(255)       
-- )
-- BEGIN
-- 	insert into students(first_name,last_name,Email,reg_num,campus,college,course, discipline,gender,age, enroll_date,finish_date,role,password) values(first_name,last_name,Email,reg_num,campus,college,course, discipline,gender,age, enroll_date,finish_date,role,password);
-- END$$

-- DELIMITER ;


--- ROLES

-- USE `career`;
-- DROP procedure IF EXISTS `roles`;

-- USE `career`;
-- DROP procedure IF EXISTS `career`.`roles`;
-- ;

-- DELIMITER $$
-- USE `career`$$
-- CREATE DEFINER=`root`@`localhost` PROCEDURE `roles`(
--  in type varchar(45),
--  in rolename varchar(45)
-- )
-- BEGIN
-- 	INSERT INTO roles (type, rolename)
--     values(UUID_TO_BIN(UUID()),rolename);
   
-- END$$

-- DELIMITER ;
-- ;

-- ---======================================== create students ======================

-- USE `career`;
-- DROP procedure IF EXISTS `studentRegister`;

-- USE `career`;
-- DROP procedure IF EXISTS `career`.`studentRegister`;
-- ;

-- DELIMITER $$
-- USE `career`$$
-- CREATE DEFINER=`root`@`localhost` PROCEDURE `studentRegister`(	
--      in  first_name VARCHAR(45),  
--      in  last_name VARCHAR(45),  
--      in  Email VARCHAR(45),  
--      in  reg_num VARCHAR(45),  
--       in  campus VARCHAR(45),  
--      in  college VARCHAR(45),  
--      in  course VARCHAR(45),  
--      in  discipline VARCHAR(45),  
--      in  gender VARCHAR(45),  
--      in  age VARCHAR(45), 
--      in  enroll_date date, 
-- 	 in  finish_date date,   
--      in password VARCHAR(255)       
-- )
-- BEGIN
--   DECLARE typeRoles VARCHAR(200); 
--   select type INTO typeRoles from  roles where rolename = 'STUDENT';  
-- 	insert into students(first_name,last_name,Email,reg_num,campus,college,course, discipline,gender,age, enroll_date,finish_date,role,password) values(first_name,last_name,Email,reg_num,campus,college,course, discipline,gender,age, enroll_date,finish_date,typeRoles,password);
-- END$$

-- DELIMITER ;
-- ;



