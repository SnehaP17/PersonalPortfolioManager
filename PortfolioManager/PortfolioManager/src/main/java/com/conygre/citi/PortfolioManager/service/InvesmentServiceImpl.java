package com.conygre.citi.PortfolioManager.service;


import com.conygre.citi.PortfolioManager.entities.Invesment;
import com.conygre.citi.PortfolioManager.repo.InvesmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;

@Service
public class InvesmentServiceImpl implements InvesmentService {

    @Autowired
    private InvesmentRepository invesmentRepository;

    @Override
    @Transactional
    public Collection<Invesment> getAllInvesments() {
        return invesmentRepository.findAll();
    }
}
