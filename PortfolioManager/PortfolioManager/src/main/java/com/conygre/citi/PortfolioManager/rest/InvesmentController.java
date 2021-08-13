package com.conygre.citi.PortfolioManager.rest;


import com.conygre.citi.PortfolioManager.entities.Companies;
import com.conygre.citi.PortfolioManager.entities.Invesment;
import com.conygre.citi.PortfolioManager.service.CashService;
import com.conygre.citi.PortfolioManager.service.CompaniesService;
import com.conygre.citi.PortfolioManager.service.InvesmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/invesment")
public class InvesmentController {

    @Autowired
    private InvesmentService invesmentService;

    @GetMapping
    public Collection<Invesment> getCompanies() {
        return invesmentService.getAllInvesments();
    }

}
