package com.conygre.citi.PortfolioManager.rest;


import com.conygre.citi.PortfolioManager.entities.Companies;
import com.conygre.citi.PortfolioManager.service.CompaniesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/companies")
public class CompaniesController {

    @Autowired
    private CompaniesService companiesService;


    @GetMapping
    public Collection<Companies> getCompanies() {
        return companiesService.getAllCompanies();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/topfive")
    public Collection<Companies> getTopFive() {
        return companiesService.getTopFive();
    }
}
