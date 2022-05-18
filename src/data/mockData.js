import meliData from "./datasets/meliData.json";
import { datasetGenerator, linearDataParse } from "../helper/dataHelper";
import sortByDate from "../utils/sortByDate";

const parsedMaskData = sortByDate(
  linearDataParse(
    meliData.filter(
      (item) =>
        item.DOMAIN_ID === "MLA-FACE_MASKS" && item.TRAIN_OR_TEST !== "test"
    ),
    "ORD_CLOSED_DT",
    "TOTAL_ORDERS"
  )
);

export const facemaskData = datasetGenerator(
  "Face Masks",
  "#5e4fa2",
  parsedMaskData
);
