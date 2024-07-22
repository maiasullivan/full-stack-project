const functions = require("firebase-functions");
const admin = require("firebase-admin");

const cors = require("cors")({ origin : true});

// initialise admin, db instance
admin.initializeApp();
const db = admin.firestore();

// function to validate the user JW Token
exports.validateUserJWToken = functions.https.onRequest(async(request, response) =>{
    // enable the cors
    cors(request, response, async () => {
        // get the Authorisation header from the request
        const authorisationHeader = request.get("Authorisation");

        // check that Authorisation header is present
        if (!authorisationHeader|| !authorisationHeader.startsWith("Bearer ")) {
            return response.status(401).json({ error: "Unauthorised"});
        }

        // extract token from Authorisation header
        const token = authorisationHeader.split('Bearer ')[1];

        try {
            const decodedToken = await admin.auth().verifyIdToken(token);
            if (decodedToken) {
                console.log("Token: ", token);
                return response.status(200).json({success : true, user : decodedToken});
            }
        }catch(error) {
            console.log("Error on validating: ", error);
            return response.status(402).json({ error : error.message, status : "un-Authorised"});
        }
    })
})