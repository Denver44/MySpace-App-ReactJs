import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length > 100;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");
      req.userId = decodedData.id;
    } else {
      let id = token;
      req.userId = id;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
