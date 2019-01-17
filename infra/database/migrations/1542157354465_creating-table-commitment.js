module.exports = { 
    "up" : "CREATE TABLE commitment (" 
        + "id int NOT NULL auto_increment,"
        + "description varchar(255) NOT NULL,"
        + "effectiveValue decimal(19,2) NOT NULL,"
        + "expectedValue decimal(19,2) NOT NULL,"
        + "expiryDate date NOT NULL,"
        + "movementIndicator int NOT NULL,"
        + "plotNumber int NOT NULL,"
        + "totalOfPlots int NOT NULL,"
        + "PRIMARY KEY(id))",

    "down" : "delete table commitment"
}