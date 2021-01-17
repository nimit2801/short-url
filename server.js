const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json({ extended: false}));
app.use(express.static('views'));
app.use(express.urlencoded({extended: false}));

let json_data = {
    name: ['nimit', 'jnvee', 'shreya']
}

function checkJson(req, res, next) {
    console.log(json_data);
}

app.post('/', (req, res, next) => {
    let url_data = req.body;
    if(json_data.name.includes(url_data.short)){
        res.status(200).json({message: 'The sub-url already exists'});
        checkJson();
    }
    else{
        json_data.name.push(url_data.short);
        res.status(200).json({ data: url_data });
        checkJson();
    }
});

app.listen(PORT, () => {
    console.log(`The Server is running on ${PORT}`);
});