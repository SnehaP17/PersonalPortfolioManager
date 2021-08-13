package com.conygre.citi.PortfolioManager.repo;

import com.conygre.citi.PortfolioManager.entities.Cash;
import com.conygre.citi.PortfolioManager.entities.Companies;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface CashRepository extends JpaRepository<Cash,Integer> {
    Collection<Cash> findFromCashByCompanyName(String title);
}
