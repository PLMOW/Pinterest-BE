const jwt = require('jsonwebtoken');

exports.cookieJwtAuth = (req, res, next) => {
  const token = req.cookies.token;
  try {
    const user = jwt.verify(token, process.env.KEY);
  } catch (err) {
    res.clearCookie('token');
    return res.redirect('/');
  }
};