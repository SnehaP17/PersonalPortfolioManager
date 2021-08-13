package com.conygre.citi.PortfolioManager.service;

import com.conygre.citi.PortfolioManager.entities.Companies;
import com.conygre.citi.PortfolioManager.repo.CompaniesRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Collection;

public class CompaniesServiceImpl implements CompaniesService{

    @Autowired
    private CompaniesRepository companiesRepository;

    @Override
    public Collection<Companies> getAllCompanies() {
        return companiesRepository.findAll();
    }
}
