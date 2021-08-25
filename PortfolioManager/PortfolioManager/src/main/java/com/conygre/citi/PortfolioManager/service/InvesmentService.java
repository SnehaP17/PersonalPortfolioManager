package com.conygre.citi.PortfolioManager.service;

import com.conygre.citi.PortfolioManager.entities.Invesment;

import java.util.Collection;

public interface InvesmentService {
    Collection<Invesment> getAllInvesments();
    Integer getInvestmentSum();
}
