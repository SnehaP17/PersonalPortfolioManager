CREATE TABLE `conygre`.`companies` (
                                       `id` INT NOT NULL AUTO_INCREMENT,
                                       `company_name` VARCHAR(45) NOT NULL,
                                       `value` INT NOT NULL,
                                       PRIMARY KEY (`id`));

insert into companies (company_name, value) values('Tesla',20);
insert into companies (company_name, value) values('Apple',33);
insert into companies (company_name, value) values('Citi',43);
insert into companies (company_name, value) values('Google',10);

-- insert into companies values(1,'Tesla',20);
-- insert into companies values(2,'Apple',33);
-- insert into companies values(3,'Citi',43);
-- insert into companies values(4,'Google',10);