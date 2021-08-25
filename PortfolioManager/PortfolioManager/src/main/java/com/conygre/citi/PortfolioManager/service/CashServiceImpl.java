package com.conygre.citi.PortfolioManager.service;


import com.conygre.citi.PortfolioManager.entities.Cash;
import com.conygre.citi.PortfolioManager.entities.Companies;
import com.conygre.citi.PortfolioManager.repo.CashRepository;
import com.conygre.citi.PortfolioManager.repo.CompaniesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;

@Service
public class CashServiceImpl implements CashService {

    @Autowired
    private CashRepository cashRepository;

    @Override
    @Transactional
    public Collection<Cash> getAllCash() {
        return cashRepository.findAll();
    }

    @Override
    @Transactional
    public Integer getCashSum(){
        return cashRepository.findCashSum();
    }
}
