module.exports = async (req, res) => {
  req.session = null;
  res.send({});
};
