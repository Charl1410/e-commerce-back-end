const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//route will find all the products in the category
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
  //include its associated Products as each category has many products
      include: [{model: Product}],
    })
    //renders all found data
    res.status(200).json(categoryData);
  } catch(err) {
    //shows error if one is caught
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
     // find a single product by its `id`
    const categoryData = await Category.findByPk(req.params.id, {
  // be sure to include its associated Category and Tag data
  include: [
        {model: Product},
          ],


    });
    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500).json(err);
  }
 
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    //creates a new category using the body of data from the request 
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory)
  } catch (err) {
    res.status(500).json(err);
  }

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(categoryData)
 } catch (err) {
    res.status(500).json(err)
 }


});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(categoryData)
 } catch (err) {
    res.status(500).json(err)
 }

});

module.exports = router;
