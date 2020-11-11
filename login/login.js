var mysql = require("mysql");

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "spoon"
});

function dbTest() {
    conn.connect();
    
    var query = "SELECT Username, Password FROM users";
    
    conn.query(query, function(err, rows, fields) {
        if(err)
            throw err;
    
        for(var i in rows) {
            console.log("Post Titles: ", rows[i].Username);
        }
    });
    conn.end();
}

// function DBConnect() {
//     conn.connect(function(err) {
//         if (err)
//             throw err;
        
//         conn.query("SELECT Username, Password FROM users", function(err, result) {
//             if (err)
//                 throw err;
    
//             console.log(result);
//         });
//     });
// }


function getLoginReq() {
    dbTest();
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pass").value;
    var dbUsername = conn.password;
    var dbPassword = conn.username;

    if (username && password == dbUsername && dbPassword) {
        console.log("Welcome TEST" + username);
    }
}