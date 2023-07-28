const express = require("express");
const fs = require("fs").promises;
const router = express.Router();


const getDb = async() => {
    return await fs.readFile("./db/db.json", "utf-8");
}

const writeDb = async(json) => {
    await fs.writeFile("./db/db.json", JSON.stringify(json));
}

const getNextIdForArray = (array) => {
    let ids = array.map(object =>object.id);
    let max = Math.max(...ids) + 1;

    return max;
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




router.post('/checkout', async (req, res) => {
    const itemsToCheckout = req.body;

  if (!Array.isArray(itemsToCheckout) || itemsToCheckout.length === 0) {
    return res.status(400).json({ message: 'No items to checkout. Please provide a list of items.' });
  }
  const itemsWithInsufficientStock = [];
  let json = await getDb();
    let db = JSON.parse(json);
    
  itemsToCheckout.forEach((itemToCheckout) => {
    const itemInDB = db.items.find((item) => item.id === itemToCheckout.id);

    if (!itemInDB || itemToCheckout.qntBuy > itemInDB.qnt) {
      itemsWithInsufficientStock.push({
        id: itemToCheckout.id,
        name: itemToCheckout.name,
        inStock: itemInDB ? itemInDB.qnt : 0,
      });
    }
  });

  if (itemsWithInsufficientStock.length > 0) {
    return res.status(400).json({
      message: 'Insufficient stock for the following items:',
      items: itemsWithInsufficientStock,
    });
  }

  // Update the quantities in the database (for simplicity, I'm just updating the in-memory JSON object)
  itemsToCheckout.forEach((itemToCheckout) => {
    const itemInDBIndex = db.items.findIndex((item) => item.id === itemToCheckout.id);
    if (itemInDBIndex != -1) {
        itemInDBIndex.qnt -= itemToCheckout.qntBuy;
        db.items[itemInDBIndex].qnt -= itemToCheckout.qntBuy;
    }
  });
    
//    await writeDb(db);
    
  return res.status(200).json({ message: 'Checkout successful!' });
});




module.exports = router;
