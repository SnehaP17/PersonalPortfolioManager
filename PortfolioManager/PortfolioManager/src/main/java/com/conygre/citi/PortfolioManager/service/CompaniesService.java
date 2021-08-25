package com.conygre.citi.PortfolioManager.service;

import com.conygre.citi.PortfolioManager.entities.Companies;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public interface CompaniesService {
    Collection<Companies> getAllCompanies();
//    Collection<Companies> getAllCash();

    Collection<Companies> getTopFive();

    Collection<Companies> getBottomFive();

}