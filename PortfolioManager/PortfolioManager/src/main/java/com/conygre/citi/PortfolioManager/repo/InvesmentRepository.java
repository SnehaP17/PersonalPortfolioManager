package com.conygre.citi.PortfolioManager.repo;

import com.conygre.citi.PortfolioManager.entities.Cash;
import com.conygre.citi.PortfolioManager.entities.Invesment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;

public interface InvesmentRepository extends JpaRepository<Invesment,Integer> {
//    Collection<Invesment> findFromInvesmentByCompanyName(String title);

    //Total Investment
    @Query(value = "SELECT SUM(amount) FROM invesment", nativeQuery = true)
    Integer findInvestmentSum();
}
