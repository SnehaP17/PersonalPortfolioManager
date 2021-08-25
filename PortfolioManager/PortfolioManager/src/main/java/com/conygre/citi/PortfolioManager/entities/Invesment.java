package com.conygre.citi.PortfolioManager.entities;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="invesment")
public class Invesment implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="company_name")
    private String companyName;
    @Column(name="amount")
    private int amount;
    @Column(name="account_type")
    private String accountType;
    @Column(name="day_created")
    private String dayCreated;
    @Column(name="time_created")
    private String time;

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

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }
    public String getTime() {
        return time;
    }

    public void setTimeString (String time) {
        this.time = time;
    }

    public String getDayCreated() {
        return dayCreated;
    }

    public void setDayCreated(String dayCreated) {
        this.dayCreated = dayCreated;
    }
}
