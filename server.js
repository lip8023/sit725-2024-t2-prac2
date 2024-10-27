var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

// Endpoint to calculate the sum of two numbers
app.get('/sum', (req, res) => {
    const { num1, num2 } = req.query;

    // Parse query parameters to numbers
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Validate the input
    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ error: 'Both num1 and num2 must be valid numbers' });
    }

    const sum = number1 + number2;
    res.json({ sum });
});

app.listen(port, () => {
    console.log("App listening to: " + port);
});

