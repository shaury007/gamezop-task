
var db = require('../routes/pool');


module.exports = {
  //function to add a new user
addUser: (userData) => {
    return new Promise((resolve) => {
      try {
        console.log(userData);
        //condition to check if userid is null or empty string value
        if (userData.userId !== null && userData.userId !== '') {
          //query to insert values into the table
          db.none(`INSERT INTO gamezop_users (user_id, email_id, phone_no) VALUES ('${userData.userId}','${userData.emailId}','${userData.phoneNo}')`)
          .then(() => {
            //when the query is executed successfully without any error
            console.log('User added successfully');
            resolve({ status: 'OK', message: 'User added successfully' });
          }).catch((error) => {
            //when postgres returns an error on query execution
            console.log('User addition failed', error.code);
            resolve({ status: 'Failed', message: 'User could not be added!' ,errorCode : error.code});
          });
        } else {
          resolve({ status: 'User Id not found', message: 'Please provide a User Id' });
        }
      } catch (ex) {
        console.log(ex.message);
      }
    });
},
//function to fetch user data from database
getUserList: () => {
  return new Promise((resolve) => {
    try {
      //query to fetch data from table 
      db.any('SELECT * from gamezop_users')
      .then((data) => {
        // success
        console.log('Data recieved');        
        //fetched data returned in json format
        resolve({ status: 'OK', message: 'Data fetched successfully', records: data });
      })
      .catch((error) => {
        // error
        console.log(error);
        resolve({ status: 'Failed', message: 'User list could not be fetched due to some error' });
      });
    } catch (ex) {
      console.log(ex.message);
    }
  });
}

}

