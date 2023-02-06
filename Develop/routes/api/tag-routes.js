const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
      //check this is right
      include: [
        {
          model: Product,
        
        },
        {model: Product,
        through: ProductTag,
        }
      ],

    });
    res.status(200).json(tagData);
  } catch(err) {
    res.status(500).json(err);
  }
  // be sure to include its associated tag data
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  try {
    // find a single tag by its `id`
   const tagData = await Tag.findByPk(req.params.id, {
 // be sure to include its associated Category and Tag data
 include: [
       {model: Product,
       through: ProductTag,
       }
     ],

//message if that id doesn't exist?

   });
   res.status(200).json(tagData);
 } catch(err) {
   res.status(500).json(err);
 }
  // be sure to include its associated tag data
});

router.post('/', async(req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      ...req.body,
    })
    res.status(200).json(newTag)
  } catch (err) {
    res.status(500).json(err);
  }

});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body,{
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(tagData)
 } catch (err) {
    res.status(500).json(err)
 }
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(tagData)
 } catch (err) {
    res.status(500).json(err)
 }

});

module.exports = router;
