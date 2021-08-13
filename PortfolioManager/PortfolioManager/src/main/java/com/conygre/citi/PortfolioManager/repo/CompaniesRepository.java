package com.conygre.citi.PortfolioManager.repo;

import com.conygre.citi.PortfolioManager.entities.Companies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

public interface CompaniesRepository extends JpaRepository<Companies,Integer> {
    Collection<Companies> findByCompanyName(String title);
}
