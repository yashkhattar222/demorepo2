public with sharing class getdata {
  @AuraEnabled(cacheable=true)
  public static Account getdata(Id acc) {
    return [
      SELECT Id, Name
      FROM Account
      WHERE Id = :acc
      WITH SECURITY_ENFORCED
      LIMIT 1
    ];
  }
}
