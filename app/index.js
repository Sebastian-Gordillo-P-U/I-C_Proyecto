const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.listen(port, ()=>{
	console.log('Server is listening on port',port,'...');
});
app.get('/customers', (req,res)=>{
	res.send(
		{ id: 1, name: "Ramón", },
	);
});

