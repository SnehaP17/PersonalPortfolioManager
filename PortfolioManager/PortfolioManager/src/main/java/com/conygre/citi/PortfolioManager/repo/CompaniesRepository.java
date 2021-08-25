package com.conygre.citi.PortfolioManager.repo;

import com.conygre.citi.PortfolioManager.entities.Companies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface CompaniesRepository extends JpaRepository<Companies,Integer> {
    //Collection<Companies> findByCompanyName(String title);

    /*SELECT percent_change,company_name FROM Companies ORDER BY percent_change ASC LIMIT 5*/
    @Query(value = "SELECT * FROM companies ORDER BY percent_change DESC LIMIT 5  ", nativeQuery = true)
    Collection<Companies> findTopFive();

    //get losers
    @Query(value = "SELECT * FROM companies ORDER BY percent_change ASC LIMIT 5  ", nativeQuery = true)
    Collection<Companies> findBottomFive();



}
