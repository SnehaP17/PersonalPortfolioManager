package com.conygre.citi.PortfolioManager.service;

import com.conygre.citi.PortfolioManager.entities.Cash;

import java.util.Collection;

public interface CashService {
        Collection<Cash> getAllCash();
        Integer getCashSum();
}
