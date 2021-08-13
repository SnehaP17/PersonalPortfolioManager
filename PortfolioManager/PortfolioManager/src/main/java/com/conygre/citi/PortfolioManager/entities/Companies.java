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
    private String percentChange;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCompany_name() {
        return companyName;
    }

    public void setCompany_name(String company_name) {
        this.companyName = company_name;
    }

    public String getPercentChange() {
        return percentChange;
    }

    public void setPercentChange(String value) {
        this.percentChange = value;
    }
}
