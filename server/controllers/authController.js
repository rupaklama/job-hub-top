/* MVC architecture - Model, View, Controller */

// All these handlers are User Controllers

exports.registerUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'in the controller',
  });
};
