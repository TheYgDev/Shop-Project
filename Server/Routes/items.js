const express = require("express");
const fs = require("fs").promises;
const router = express.Router();


const getDb = async() => {
    return await fs.readFile("./db/db.json", "utf-8");
}

const writeDb = async(json) => {
    await fs.writeFile("./db/db.json", JSON.stringify(json));
}



router.get("/", async (req, res) => {
    let db = await getDb();
    let json = JSON.parse(db).items;
    
    res.end(JSON.stringify(json));
})

router.get("/categories", async (req, res) => {
    let db = await getDb();
    let json = JSON.parse(db).categories;
    res.end(JSON.stringify(json));
})

router.get("/categories/:id", async (req, res) => {
    let id = Number(req.params.id);
    let db = await getDb();
    let json = JSON.parse(db).items;
    json = json.filter(item => item.category.id == id)
    res.end(JSON.stringify(json));
})

router.get('/:id', async (req, res) => {
    let id = Number(req.params.id);

    let db = await getDb();
    let json = JSON.parse(db).items;

    let index = json.findIndex(p => p.id == id);

    res.end(JSON.stringify(json[index]));

});






module.exports = router;
