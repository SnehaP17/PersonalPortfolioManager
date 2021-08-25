package com.conygre.citi.PortfolioManager.rest;


import com.conygre.citi.PortfolioManager.entities.Companies;
import com.conygre.citi.PortfolioManager.service.CompaniesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin
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

    @RequestMapping(method = RequestMethod.GET, value = "/bottomfive")
    public Collection<Companies> getBottomFive() {
        return companiesService.getBottomFive();
    }
}
