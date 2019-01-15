module.exports = { 
    "up" : "CREATE if not exists TABLE commitment (" 
        + "id int(11) NOT NULL auto_increment,"
        + "description varchar(255) NOT NULL,"
        + "effectiveValue decimal(19,2) NOT NULL,"
        + "expectedValue decimal(19,2) NOT NULL,"
        + "expiryDate date NOT NULL,"
        + "movement varchar(255) NOT NULL,"
        + "plot int(11) NOT NULL,"
        + "totalPlots int(11) NOT NULL,"
        + "PRIMARY KEY(id))",

    "down" : "delete table commitment"
}