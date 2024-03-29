import * as images from "../../assets/assets";
import i18n from "../../i18n/i18n";

const translate = (key) => i18n.t(key);

export const fanCardsData = [
  {
    key: "fan60kg",
    imageUrl: images.Fan60kg,
    title: translate("fan60kg"),
    thrust: "60kg",
    diameter: "0.6m",
    speed: "4000rpm",
    power: "15KW",
    detailTitle: translate("productFan60kgDetail"),
    maximumThrust: "60",
    bladeDiamter: "0.6",
    takeoffSpeed: "4000",
    motorPower: "15",
    exitDiameter: "0.72m",
    ductChord: "0.45m",
    hubDiameter: "0.24m",
    bladeNumber: "12",
    stutNumber: "7",
    cruiseSpeed: "2500rpm",
    imgWidth: 547,
    imageHeight: 486,
    subTitle: translate("productFan60kgSubtitle"),
    bannerImage: images.FanBanner60kg,
  },
  {
    key: "fan200kg",
    imageUrl: images.Fan200kg,
    title: translate("fan200kg"),
    thrust: "200kg",
    diameter: "1.2m",
    speed: "2500rpm",
    power: "50KW",
    detailTitle: translate("productFan200kgDetail"),
    maximumThrust: "200",
    bladeDiamter: "1.2",
    takeoffSpeed: "2500",
    motorPower: "50",
    exitDiameter: "0.72m",
    ductChord: "0.45m",
    hubDiameter: "0.24m",
    bladeNumber: "12",
    stutNumber: "7",
    cruiseSpeed: "2500rpm",
    imgWidth: 600,
    imageHeight: 512,
    subTitle: translate("productFan200kgSubtitle"),
    cardImage: images.FanCard200kg,
  },
  {
    key: "fan500kg",
    imageUrl: images.Fan500kg,
    title: translate("fan500kg"),
    thrust: "500kg",
    diameter: "1.9m",
    speed: "1500rpm",
    power: "120KW",
    detailTitle: translate("productFan500kgDetail"),
    maximumThrust: "500",
    bladeDiamter: "1.9",
    takeoffSpeed: "1500",
    motorPower: "120",
    exitDiameter: "0.72m",
    ductChord: "0.45m",
    hubDiameter: "0.24m",
    bladeNumber: "12",
    stutNumber: "7",
    cruiseSpeed: "2500rpm",
    imgWidth: 595,
    imageHeight: 533,
    subTitle: translate("productFan500kgSubtitle"),
    cardImage: images.FanCard500kg,
  },
  {
    key: "fan1000kg",
    imageUrl: images.Fan1000kg,
    title: translate("fan1000kg"),
    thrust: "1000kg",
    diameter: "1.6m",
    speed: "2700rpm",
    power: "60KW",
    detailTitle: translate("productFan1000kgDetail"),
    maximumThrust: "1000",
    bladeDiamter: "1.6",
    takeoffSpeed: "2700",
    motorPower: "60",
    exitDiameter: "0.72m",
    ductChord: "0.45m",
    hubDiameter: "0.24m",
    bladeNumber: "12",
    stutNumber: "7",
    cruiseSpeed: "2500rpm",
    imgWidth: 651,
    imageHeight: 516,
    subTitle: translate("productFan1000kgSubtitle"),
    cardImage: images.FanCard1000kg,
  },
];

export const airCraftsData = [
  {
    key: "aircraft60kg",
    detailTitle: translate("aircraft200kgDetail"),
    subTitle: translate("aircraft200kgSubtitle"),
    cardImage: images.AircraftCard200kg,
  },
  {
    key: "aircraft260kg",
    detailTitle: translate("aircraft260kgDetail"),
    subTitle: translate("aircraft260kgSubtitle"),
    cardImage: images.AircraftCard260kg,
  },
  {
    key: "aircraft500kg",
    detailTitle: translate("aircraft1600kgDetail"),
    subTitle: translate("aircraft1600kgSubtitle"),
    cardImage: images.AircraftCard1000kg,
  },
];
