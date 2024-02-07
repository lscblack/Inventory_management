// Include necessary dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
// Initialize Express app
const app = express();
// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173'], methods: ['POST', 'GET'], credentials: true }))
app.use(express.json())
app.use(cookieParser())

/* ===============---------------------- 
            ***************************
             For Authentication
            *****************************

-----------------------------=======*/

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/inventory')
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

// Define MongoDB schema
const schema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    title: { type: String, required: true }
});

//******************** */ Create MongoDB model
const monmodel = mongoose.model('Admin', schema);

//********************  Handle POST request to '/api/v1/Login' endpoint
app.post('/api/v1/login', async (req, res) => {
    const { username, password, role } = req.body;
    try {
        // Find user by username
        const admins = await monmodel.find({ "username": username, "password": password, "title": role });

        // Check if user exists
        if (admins.length > 0) {
            const oneMonth = 30 * 24 * 60 * 60 * 1000; // Calculating milliseconds for one month

            var token = jwt.sign({ username, role }, "jwt-token-unset-hidden");
            res.cookie('InventoryTokenKey', token, {
                expires: new Date(Date.now() + oneMonth), // Set the expiration to one month from now
                httpOnly: true,
                secure: true
            });
            // User exists, send success response with data
            return res.status(200).json({ msg: "success", data: admins });
        } else {
            // User does not exist, send error response
            return res.status(200).json({ error: "User does not exist" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});


// *******************Logout Handel
app.get('/api/v1/logout', (req, res) => {
    res.clearCookie('InventoryTokenKey')
    res.json({ status: 'Logged out' })
})

// ********************************fucntion to check if cookie exists
const checkToken = (req, res, next) => {
    const token = req.cookies.InventoryTokenKey
    if (!token) {
        return res.json({ error: 'Sign First' })
    } else {
        jwt.verify(token, "jwt-token-unset-hidden", (err, decoded) => {
            if (err) {
                res.json({ error: 'Failed To Get Your Username' })
            } else {
                req.username = decoded.username
                req.role = decoded.role
                next()
            }
        })
    }
}
//Check for Token Valididty
app.get('/', checkToken, (req, res) => {
    res.json({ status: "Successfully", username: req.username, role: req.role })
})

// ***************** Get All Users
app.get('/api/v1/allUsers', async (req, res) => {
    monmodel.find().then((result) => {
        //res.send(result)
        return res.status(200).json({ status: "Successfully", data: result });
    }).catch((err) => {
        console.error(err)
    })
});


// **********---------------Delete User By Id-----------******************

app.post("/api/v1/deleteUser/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const result = await monmodel.findByIdAndDelete(id);
        if (result) {
            return res.status(200).json({ status: "Successfully", data: result });
        } else {
            return res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

// ************************************=======================Add NEw User Api *******************=============
app.post('/api/v1/AddNewUser', async (req, res) => {

    try {
        // Find user by username
        const admins = await monmodel.find({ username: req.body.username });

        // Check if user exists
        if (admins.length > 0) {
            // Username is already taken
            return res.status(401).json({ error: "Username Already Taken" });
        }

        // Create new document based on request body
        const data = new monmodel({
            username: req.body.username,
            password: req.body.password,
            title: req.body.role
        });

        // Save the document to the database
        const savedData = await data.save();

        // Respond with the saved data
        res.status(201).json({status: "Successfully", data: savedData});
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});


/* ===============---------------------- 

            *************************
            End Of Authentication
            **************************
             
 -----------------------------=======*/


/* ===============---------------------- 

           *************************
               Start For Items
           **************************
            
-----------------------------=======*/

const itemsSchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    Quantity: { type: String, required: true },
    Price: { type: String, required: true },
    Date: { type: String, required: true }
});

// Create MongoDB model
const modelItems = mongoose.model('Items', itemsSchema);


// add new Items
app.post('/api/v1/items', async (req, res) => {

    try {

        // Create new document based on request body
        const data = new modelItems({
            itemName: req.body.itemName,
            Quantity: req.body.Quantity,
            Price: req.body.Price,
            Date: req.body.Date
        });

        // Save the document to the database
        const savedData = await data.save();

        // Respond with the saved data
        res.status(201).json(savedData);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// get all Items
app.get('/api/v1/allItems', async (req, res) => {
    modelItems.find().then((result) => {
        //res.send(result)
        return res.status(200).json({ status: "Successfully", data: result });
    }).catch((err) => {
        console.error(err)
    })
});

/* ===============---------------------- 

           *************************
               End Of Items
           **************************
            
-----------------------------=======*/

// Start the server Listerning Port
app.listen(3001, () => {
    console.log(`Server is listening on port`);
});
