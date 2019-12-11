(function(){
  'use strict';

  angular.module('app')
    .service('alertsService', [
      alertsService
    ]);

  function alertsService(){

    var rawAlerts = getMockData();

    var allAlerts = [
      { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
      { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
      { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
      { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
      { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
      { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
      { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
      { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
      { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
      { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
      { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
      { x: 65.5, y: 126.4, z: 5, name: 'US', country: 'United States' },
      { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
      { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
      { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' }
    ];

    return {
      loadAll : function() {
        return allAlerts;
      }
    };
  }




  function getMockData() {
    const policies = [
      {
        name: "in blabk list",
        description: "source ip in black list"
      },
      {
        name: "sensitive columns",
        description: "query touches sensitive columns"
      },
      {
        name: "too many failed logins",
        description: "a db user who have failed too frequently to login"
      },
      {
        name: "abnormal activity",
        description: "for example, many identical queries"
      },
      {
        name: "sensitive  column1",
        description: "credit card column name for example"
      },
    ];
    const sourceIps = ["131.208.93.8",
      "114.19.128.185",
      "171.213.114.27",
      "93.32.218.74",
      "195.230.40.222",
      "66.164.82.230",
      "253.186.86.38",
      "67.83.254.255",
      "255.252.244.198",
      "112.66.55.66",
      "184.163.221.111",
      "231.47.89.184",
      "55.22.120.232",
      "196.230.253.4"];
    const assetIds = ["00000001-4455-6677-8899-aabbccddeeff",
      "0010be92-7ea2-4250-ba05-eed368fd8c95",
      "015290f5-6539-4d48-abe9-fc1f161c5bc4",
      "0152a78a-82d6-4b64-bd63-d74e4b4c530c",
      "01ea3805-62b7-4ef4-b65e-05ed64e898a4",
      "0255aff6-ebe1-413a-b915-d679b1282ef7",
      "07af89ed-37fc-4914-8944-cc036a459a13",
      "0827e2d4-7849-45fe-bb28-bcda32a1974d",
      "0c9429d5-ccb2-443f-9cf4-fb69deb1b88e",
      "0e1510c0-defd-425c-82fb-d10bc241e038",
      "13536cf4-81fe-4202-9eb3-1af9481c8988",
      "14dce559-1b97-44a3-b5e2-72f0d365f973",
      "15872480-a2ac-496a-b388-16dfa8f76feb",
      "163b94a2-7236-44d0-9ee2-21e3afde4f7b",
      "19f3cc12-b736-400c-80d6-2902aace2d68",
      "1a09fcca-1988-49b7-a0f5-47e8f057a0da",
      "1a38769a-e5fc-4271-92b1-9950d4387b15",
      "1ad8b230-aea1-437c-844b-c1e9202b2a6d",
      "1b3a1d4e-3bff-423f-b411-110f32660f7c",
      "25a3ad42-cb7d-43fa-a87a-5e92181c9d83",
      "26f41709-93a2-4ccf-9e7f-66f4cbe5efc8",
      "2838ce12-7c98-4690-a35f-6f3a5ed77879",
      "28b29bf3-8cad-4d89-bfd6-0723790cb9e4",
      "2ba73f29-8b11-4aeb-a0fc-0f6151bab43e",
      "2e90677b-d05b-402f-9fa4-29cbeb0542ef",
      "315eb9ad-15a6-4c49-951a-9a1c51347770",
      "31d978e9-a19d-4bd8-b38c-0a0c3123f160",
      "32204ed6-1e53-46de-9de6-d7fdff725496",
      "33dd542f-db90-4ab0-b2a5-e6735f132513",
      "3a1d0123-967d-4169-ac80-8167f10cf7a8",
      "3a238228-47f1-42c8-b164-11b4e7ac40ca",
      "3f6ebb25-5c5b-4008-adfc-162e8370d8b2",
      "3ffb1ec4-7fad-420e-9e6e-4c24d314d2ff",
      "438d1885-ee40-40c5-ae08-49f296891338",
      "4413a36f-c424-491f-90f7-6b67c6047046",
      "4752ef67-8da2-4bdd-8f2e-c1a418edc5e7",
      "49bf4639-8790-4c93-979f-4a92494df2cb",
      "4b1b4192-b840-43b9-918b-d3f508f65cdc",
      "4c805ca2-b8d2-43a2-ab8e-3dffdc6d1a12",
      "4ddaab00-59d1-46ef-aecb-86844cc704ab",
      "4f83de84-859e-4b4a-bd01-02bdc626a51c",
      "50e5c0cc-10b5-438d-98b6-f6c5278b50fc"];
    const dbUserNames = ["Errol",
      "Chana",
      "Kimberlie",
      "Antonio",
      "Magdalen",
      "Malia",
      "Rudolf",
      "Samual",
      "Marica",
      "Blanca",
      "Li",
      "Cassandra",
      "Ann",
      "Ethyl",
      "Mack",
      "Willetta",
      "Isa",
      "Adrian",
      "Chae",
      "Elizbeth"];
    const osUserNames = [
      "Eloy",
      "Vertie",
      "Jone",
      "Franklyn",
      "Tamela",
      "Lashanda",
      "Cherie",
      "Eneida",
      "Mara",
      "Lorita",
      "Vilma",
      "Steve",
      "Bo",
      "Jeanetta",
      "Eileen",
      "Celeste",
      "Mayme",
      "Tricia",
      "Brooke",
      "Albert"
    ];

    const schemas = [
      "Austin",
      "Pa",
      "Morris",
      "Usha",
      "Karina",
      "Deetta",
      "Isobel",
      "Marva",
      "Brynn",
      "Stella",
      "Norberto",
      "Winifred",
      "Roy",
      "Humberto",
      "Thresa",
      "Michal",
      "Soledad",
      "Emerson",
      "Adina",
      "Chia"
    ];
    const tableNames = ["dogs", "cats", "rabbits", "creditCards", "buildings", "employees"];
    const columnNames = [
      "color", "race", "id", "flavour", "cardNumber", "description", "size"
    ];
    const operations = ["select", "insert", "update", "delete", "login", "faild_login"];

    const normalizedQueries = [
      "SELECT * FROM My_Schema.Tables;",
      "SELECT Student_ID FROM STUDENT;\n",
      "SELECT * FROM STUDENT;\n",
      "SELECT EMP_ID, NAME FROM EMPLOYEE_TBL WHERE EMP_ID = '';",
      "SELECT EMP_ID, LAST_NAME FROM EMPLOYEE\n" +
      "WHERE CITY = '' ORDER BY EMP_ID;\n",
      "SELECT Name, Age FROM Patients WHERE Age > 40 \n" +
      "GROUP BY Name, Age ORDER BY Name;",
      "SELECT COUNT(price), price FROM orders \n" +
      "WHERE price < 70 GROUP BY price ORDER BY price",
      "SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country;",
      "SELECT SUM(Salary)FROM Employee WHERE Emp_Age < ;",
      "SELECT AVG(Price)FROM Products;",
      "CREATE VIEW Failing_Students AS\n" +
      "SELECT S_NAME, Student_ID\n" +
      "FROM STUDENT\n" +
      "WHERE GPA > ;",
      "SELECT * FROM Failing_Students;",
      "CREATE OR REPLACE VIEW [ Product List] AS\n" +
      "SELECT ProductID, ProductName, Category\n" +
      "FROM Products\n" +
      "WHERE Discontinued = No;",
      "DROP VIEW V1;",
      "SELECT * FROM Sys.objects WHERE Type=''"
    ];
    const numOfIncidents = 100000;
    let res = [];
    var now = new Date();
    for (let i = 0; i < numOfIncidents; i++) {
      let alert = {};
      alert.assetUuid = assetIds[i % assetIds.length];
      let policy = policies[i % policies.length];
      alert.policyName = policy.name;
      alert.policyDescription = policy.description;
      alert.dbUserName = dbUserNames[i % dbUserNames.length];
      alert.osUserName = osUserNames[ i % osUserNames.length];
      alert.schama = schemas[ i % schemas.length];
      alert.table = tableNames[ i % tableNames.length];
      alert.operation = operations[ i % operations.length];
      alert.normalizedQuery = normalizedQueries[ i % normalizedQueries.length];
      alert.sourceIp = sourceIps[ i % sourceIps.length];
      alert.time = now.getMilliseconds() + i * 1000;
      res.push(alert);
    }
    return res;
  }


  /*
  * private long impervaAccountId;
      private String assetUuid;
      private String dbUserName;
      private String osUserName;
      private String clientHost;
      private Set<String> schemas;
      private Set<String> tables;
      private Set<String> operations;
      private String normalizedQuery;
      private String sourceIpAddress;

      */





})();
