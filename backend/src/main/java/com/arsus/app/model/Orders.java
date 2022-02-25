package com.arsus.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int order_number;
    private String current_status;
    private int client_id;
    private int waiter_id;
    private int cook_id;
    private int cost;

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public int getOrder_number() {
        return order_number;
    }

    public void setOrder_number(int order_number) {
        this.order_number = order_number;
    }

    public String getCurrent_status() {
        return current_status;
    }

    public void setCurrent_status(String current_status) {
        this.current_status = current_status;
    }

    public int getClient_id() {
        return client_id;
    }

    public void setClient_id(int client_id) {
        this.client_id = client_id;
    }

    public int getWaiter_id() {
        return waiter_id;
    }

    public void setWaiter_id(int waiter_id) {
        this.waiter_id = waiter_id;
    }

    public int getCook_id() {
        return cook_id;
    }

    public void setCook_id(int cook_id) {
        this.cook_id = cook_id;
    }
}