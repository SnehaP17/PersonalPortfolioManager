package com.conygre.citi.PortfolioManager.service;

import com.conygre.citi.PortfolioManager.entities.Companies;
import com.conygre.citi.PortfolioManager.repo.CompaniesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;

@Service
public class CompaniesServiceImpl implements CompaniesService{

    @Autowired
    private CompaniesRepository companiesRepository;

    @Override
    @Transactional
    public Collection<Companies> getAllCompanies() {
        return companiesRepository.findAll();
    }

    @Override
    @Transactional
    public Collection<Companies> getTopFive(){
        return companiesRepository.findTopFive();
    }

    @Override
    @Transactional
    public Collection<Companies> getBottomFive(){
        return companiesRepository.findBottomFive();
    }
}
