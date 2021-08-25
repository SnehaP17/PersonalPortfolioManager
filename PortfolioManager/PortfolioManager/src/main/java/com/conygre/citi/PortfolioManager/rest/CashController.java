package com.conygre.citi.PortfolioManager.rest;


import com.conygre.citi.PortfolioManager.entities.Cash;
import com.conygre.citi.PortfolioManager.entities.Companies;
import com.conygre.citi.PortfolioManager.service.CashService;
import com.conygre.citi.PortfolioManager.service.CompaniesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/cash")
public class CashController {

    @Autowired
    private CashService cashService;

    @GetMapping
    public Collection<Cash> getCash() {
        return cashService.getAllCash();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/sum")
    public Integer getCashSum() {
        return cashService.getCashSum();
    }
}
