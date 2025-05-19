const Resource = require('../models/Resource');

exports.getResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addResource = async (req, res) => {
  const resource = new Resource({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    url: req.body.url
  });

  try {
    const newResource = await resource.save();
    res.status(201).json(newResource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};