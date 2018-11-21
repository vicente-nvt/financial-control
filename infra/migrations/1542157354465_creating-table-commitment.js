module.exports = { 
    "up" : "CREATE TABLE commitment (" 
        + "id int(11) NOT NULL auto_increment,"
        + "description varchar(255) DEFAULT NULL,"
        + "effectiveValue decimal(19,2) DEFAULT NULL,"
        + "expectedValue decimal(19,2) DEFAULT NULL,"
        + "expiryDate date DEFAULT NULL,"
        + "movement varchar(255) DEFAULT NULL,"
        + "plot int(11) NOT NULL,"
        + "totalPlots int(11) NOT NULL,"
        + "PRIMARY KEY(id))",

    "down" : "delete table commitment"
}