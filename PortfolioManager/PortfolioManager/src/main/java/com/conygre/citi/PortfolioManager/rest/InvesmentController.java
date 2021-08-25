package com.conygre.citi.PortfolioManager.rest;


import com.conygre.citi.PortfolioManager.entities.Companies;
import com.conygre.citi.PortfolioManager.entities.Invesment;
import com.conygre.citi.PortfolioManager.service.CashService;
import com.conygre.citi.PortfolioManager.service.CompaniesService;
import com.conygre.citi.PortfolioManager.service.InvesmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin
@RestController
@RequestMapping("/invesment")
public class InvesmentController {

    @Autowired
    private InvesmentService invesmentService;

    @GetMapping
    public Collection<Invesment> getCompanies() {
        return invesmentService.getAllInvesments();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/sum")
    public Integer getInvestmentSum() {
        return invesmentService.getInvestmentSum();
    }

}
