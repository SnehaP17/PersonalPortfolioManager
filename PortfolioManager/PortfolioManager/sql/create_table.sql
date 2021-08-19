CREATE TABLE `conygre`.`companies` (
                                       `id` INT NOT NULL AUTO_INCREMENT,
                                       `company_name` VARCHAR(45) NOT NULL,
                                       `percent_change` INT NOT NULL,
                                       PRIMARY KEY (`id`));

insert into companies (company_name, percent_change) values('Tesla',20);
insert into companies (company_name, percent_change) values('Apple',33);
insert into companies (company_name, percent_change) values('Citi',43);
insert into companies (company_name, percent_change) values('Google',10);

-- insert into companies values(1,'Tesla',20);
-- insert into companies values(2,'Apple',33);
-- insert into companies values(3,'Citi',43);
-- insert into companies values(4,'Google',10);