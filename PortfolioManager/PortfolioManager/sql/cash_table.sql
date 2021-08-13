CREATE TABLE `conygre`.`cash` (
                                  `id` INT NOT NULL AUTO_INCREMENT,
                                  `day` DATE NOT NULL,
                                  `account_type` VARCHAR(150) NOT NULL,
                                  `company_name` VARCHAR(150) NOT NULL,
                                  `amount` INT NOT NULL,
                                  PRIMARY KEY (`id`));

insert into cash (day, account_type, company_name, amount) values(STR_TO_DATE('1-01-2012', '%d-%m-%Y'),'checking','Citi',2223);
insert into cash (day, account_type, company_name, amount) values(STR_TO_DATE('14-08-2017', '%d-%m-%Y'),'cash','Fidelity Cash',1000);
insert into cash (day, account_type, company_name, amount) values(STR_TO_DATE('23-10-2019', '%d-%m-%Y'),'saving','Citi',4301);
insert into cash (day, account_type, company_name, amount) values(STR_TO_DATE('30-11-2010', '%d-%m-%Y'),'checking','Wells Fargo',1010);
