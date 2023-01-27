const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
      // find all categories

    const categoryData = await Category.findAll({
  // be sure to include its associated Products
      include: [
        {model: Product}
      ]
    })
    res.render(200).json(categoryData);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
     // find a single product by its `id`
    const categoryData = await Category.findByPk(req.params.id, {
  // be sure to include its associated Category and Tag data
  include: [
        {
          model: Product,
        },
          ],

//message if that id doesn't exist?

    });
    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500).json(err);
  }
 
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create({
      ...req.body,
    })
    res.status(200).json(newCategory)
  } catch (err) {
    res.status(500).json(err);
  }

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
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
