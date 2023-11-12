import { CorsOptions } from "cors";
import { allowedOrigin } from "./allowedOrigin";

const corsOptions: CorsOptions = {
  origin: (requestOrigin, callBack) => {
    if (!requestOrigin) {
      callBack(null, true);
    } else {
      if (allowedOrigin.indexOf(requestOrigin) !== -1) {
        callBack(null, true);
      } else {
        callBack(new Error("Not allowed by CORS"));
      }
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};
export default corsOptions;
