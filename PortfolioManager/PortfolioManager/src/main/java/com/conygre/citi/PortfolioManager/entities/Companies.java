package com.conygre.citi.PortfolioManager.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="companies")
public class Companies implements Serializable{

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="company_name")
    private String companyName;
    @Column(name="percent_change")
    private Integer percentChange;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public Integer getPercentChange() {
        return percentChange;
    }

    public void setPercentChange(Integer value) {
        this.percentChange = value;
    }
}
