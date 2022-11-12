const authMiddleware = (req, res, next) => {
  try {
    const role = req.headers.rol == "admin";
    if (role) {
      next();
      return;
    }
    return res
      .status(403)
      .json({
        error: 403,
        message: `Access Denied 🚫 You don’t have permission to access ${req.baseUrl}`,
      });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

module.exports = authMiddleware;
