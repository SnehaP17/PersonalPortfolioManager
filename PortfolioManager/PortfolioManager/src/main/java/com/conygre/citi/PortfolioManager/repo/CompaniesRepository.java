package com.conygre.citi.PortfolioManager.repo;

import com.conygre.citi.PortfolioManager.entities.Companies;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface CompaniesRepository extends JpaRepository<Companies,Integer> {
//    Collection<Companies> findBycompany_name(String title);
}
