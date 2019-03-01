Burger React application for creating your own delicious burger :)<br />

This app is based on React, Redux and Redux thunk for async requests.<br />

## Installation

- Run "npm install" in the extracted folder
- Run "npm start" to view the project
- Please bear in mind that this project uses [Firebase](#https://console.firebase.google.com) as its back-end, therefore, you need to create an account in firebase and choose `Realtime Database`.
  - You'll need also to adjust your rules to something like this to protect orders' route: 
  - ```
    {
        "rules": {
            "ingredients": {
            ".read": true,
                ".write": true 
            },
            "orders": {
            ".read": "auth != null",
                ".write": "auth != null",
            ".indexOn": "userId"
            }
        }
    }
   - Please replace url on `/src/axios-order.js` file
   - Please replace keys on `/src/store/actions/auth.js` file