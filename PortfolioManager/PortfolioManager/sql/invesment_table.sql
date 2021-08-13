CREATE TABLE `conygre`.`invesment` (
                                       `id` INT NOT NULL AUTO_INCREMENT,
                                       `company_name` VARCHAR(150) NOT NULL,
                                       `amount` INT NOT NULL,
                                       `account_type` VARCHAR(150) NOT NULL,
                                       PRIMARY KEY (`id`));

insert into invesment values('Tesla',2000,'IRA 1');
insert into invesment values('Apple',3342,'401K');
insert into invesment values('Citi',4123,'Taxable');
insert into invesment values('Google',4210,'Pandora');