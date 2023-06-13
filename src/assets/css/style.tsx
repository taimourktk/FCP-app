import { Dimensions, Platform, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

// import { appColors } from "../../utils/colors";
// import { FontBold, FontRegular, FontSemiBold, w } from "../../utils/constants";
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? (IS_IPHONE_X ? 44 : 20) : 0;
export const HEADER_HEIGHT =
  Platform.OS === "ios" ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  // Justify Content
  jcfe: {
    justifyContent: "flex-end",
  },
  jcc: {
    justifyContent: "center",
  },
  jcfs: {
    justifyContent: "flex-start",
  },
  jcsa: {
    justifyContent: "space-around",
  },
  jcsb: {
    justifyContent: "space-between",
  },
  jcse: {
    justifyContent: "space-evenly",
  },
  // Justify Content
  // Text Align
  tac: {
    textAlign: "center",
  },
  // alignitems
  itc: {
    alignItems: "center",
  },
  its: {
    alignItems: "flex-start",
  },
  ite: {
    alignItems: "flex-end",
  },
  ase: {
    alignSelf: "flex-end",
  },
  // Flex
  flex1: { flex: 1 },
  w100: { width: "100%" },
  w164p: { width: 164 },
  w100p: { width: 100 },
  w500p: { width: 500 },
  w80p: { width: 80 },
  w250p: { width: "108%" },
  w90: { width: "90%" },
  w85: { width: "85%" },
  h100: { height: "100%" },
  w40: { width: "40%" },
  w50: { width: "50%" },
  w60: { width: "60%" },
  h50: { height: "50%" },
  w25: { width: "25%" },
  h25: { height: "25%" },
  w75: { width: "75%" },
  h75: { height: "75%" },
  h130p: { height: 130 },
  h160p: { height: 160 },
  h32p: { height: 32 },
  h36p: { height: 36 },
  h42p: { height: 42 },
  h48p: { height: 48 },
  h200p: { height: 200 },
  h250p: { height: 250 },
  h300p: { height: 300 },
  h350p: { height: 350 },
  h380p: { height: 380 },
  h480p: { height: 480 },
  h400p: { height: 400 },
  h100p: { height: 100 },
  h56p: { height: 56 },
  h72p: { height: 72 },
  h70p: { height: 70 },

  // Flex
  // Responsive height width
  rh10: { height: hp(10) },
  rh20: { height: hp(20) },
  rh30: { height: hp(30) },
  rh40: { height: hp(40) },
  rh50: { height: hp(50) },

  // Responsive height width

  // flex direction
  fdrjcsb: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fdrjcse: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  fdrrjcsb: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  fdrac: {
    flexDirection: "row",
    alignItems: "center",
  },
  fdrcc: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  // flex direction
  // Font Sizes
  fs55: {
    fontSize: 55,
  },
  fs45: {
    fontSize: 45,
  },
  fs50: {
    fontSize: 50,
  },
  fs40: {
    fontSize: 40,
  },
  fs35: {
    fontSize: 35,
  },
  fs30: {
    fontSize: 30,
  },
  fs25: {
    fontSize: 25,
  },
  fs26: {
    fontSize: 26,
  },
  fs22: {
    fontSize: 22,
  },
  fs24: {
    fontSize: 24,
  },
  fs20: {
    fontSize: 20,
  },
  fs18: {
    fontSize: 18,
  },
  fs16: {
    fontSize: 16,
  },
  fs14: {
    fontSize: 14,
  },
  fs12: {
    fontSize: 12,
  },
  fs10: {
    fontSize: 10,
  },
  fs11: {
    fontSize: 11,
  },
  // Font Sizes
  // Font Families
  ffcg: {
    fontFamily: "Poppins-Regular",
  },
  ffbl: {
    fontFamily: "Poppins-Black",
  },
  ffbli: {
    fontFamily: "Poppins-BlackItalic",
  },
  ffb: {
    fontFamily: "Poppins-Bold",
  },
  ffsb: {
    fontFamily: "Poppins-SemiBold",
  },
  ffbi: {
    fontFamily: "Poppins-BoldItalic",
  },
  ffi: {
    fontFamily: "Poppins-Italic",
  },
  ffl: {
    fontFamily: "Poppins-Light",
  },
  ffli: {
    fontFamily: "Poppins-LightItalic",
  },
  ffmi: {
    fontFamily: "Poppins-MediumItalic",
  },
  ffr: {
    fontFamily: "Poppins-Regular",
  },
  ffm: {
    fontFamily: "Poppins-Medium",
  },
  ffmt: {
    fontFamily: "Poppins-MediumThin",
  },
  ffmti: {
    fontFamily: "Poppins-MediumThinItalic",
  },
  // Font Families
  // Colors

  colorWhite: {
    color: "#ffffff",
  },
  colorBlack: {
    color: "#37474F",
  },
  colorBlue: {
    color: "#2856A2",
  },
  colorgreen: {
    color: "#1fcc7c",
  },
  colorLightBlue: {
    color: "#A3C7EE",
  },
  colorlightgreen: {
    color: "#a0ffd3",
  },
  colorlightred: {
    color: "#ff9d98",
  },
  colorred: {
    color: "#E85451",
  },
  colorlightpurple: {
    color: "#7471eb",
  },
  colorpurple: {
    color: "#4733da",
  },
  colorgrey: {
    color: "#a3a3a3",
  },
  colorlightgrey: {
    color: "#fefefe",
  },
  colorlightblack: {
    color: "#191919",
  },
  colorlightblack2: {
    color: "#4f4f4f",
  },
  colorextralightpurple: {
    color: "#e9e8fd",
  },
  colorLightWhite: {
    color: "#758692",
  },

  colorgrey2: {
    color: "#7d7d7d",
  },
  colorgrey3: {
    color: "#999999",
  },
  // Colors
  // Background Colors
  bgColorYellow: {
    backgroundColor: "#FFF600",
  },
  bgColorRed: {
    backgroundColor: "#f85951",
  },
  bgLightRed: { backgroundColor: "#E85451" },

  bgColorWhite: {
    backgroundColor: "#ffffff",
  },
  bgColorWhiteTwo: {
    backgroundColor: "#F5F5F5",
  },
  bgColorWhiteWithOpacity: {
    backgroundColor: "#ffffffbf",
  },
  bgcolorblack: {
    backgroundColor: "#37474F",
  },
  bgLightBlue: {
    backgroundColor: "#3766b3",
  },
  bgColorBlue: {
    backgroundColor: "#2856a2",
  },
  bgColorGray: {
    backgroundColor: "#F2F2F2",
  },
  bgcolorlightgrey: {
    backgroundColor: "#fefefe",
  },
  bgcolorlightgrey2: {
    backgroundColor: "#f3f3f3",
  },
  bgcolorlightblack: {
    backgroundColor: "#191919",
  },
  bgcolororange: {
    backgroundColor: "#f4a261",
  },
  bgcolorlightgrey3: {
    backgroundColor: "#F2F2F2",
  },
  bggreyy: { backgroundColor: "#EDEDED" },
  // Background Colors
  // line Height
  lh5: {
    lineHeight: 5,
  },
  lh10: {
    lineHeight: 10,
  },
  lh15: {
    lineHeight: 15,
  },
  lh18: {
    lineHeight: 18,
  },
  lh20: {
    lineHeight: 20,
  },
  lh25: {
    lineHeight: 25,
  },
  lh30: {
    lineHeight: 30,
  },
  // line Height
  // border Radius
  br2: {
    borderRadius: 2,
  },
  br4: {
    borderRadius: 4,
  },
  br5: {
    borderRadius: 5,
  },
  br8: {
    borderRadius: 8,
  },
  br10: {
    borderRadius: 10,
  },
  br12: {
    borderRadius: 12,
  },
  br14: {
    borderRadius: 14,
  },
  br15: {
    borderRadius: 15,
  },
  br16: {
    borderRadius: 16,
  },
  br18: {
    borderRadius: 18,
  },
  br20: {
    borderRadius: 20,
  },
  br25: {
    borderRadius: 25,
  },
  br30: {
    borderRadius: 30,
  },

  br35: {
    borderRadius: 35,
  },
  br40: {
    borderRadius: 40,
  },
  br45: {
    borderRadius: 45,
  },
  br50: {
    borderRadius: 50,
  },
  br55: {
    borderRadius: 55,
  },
  br60: {
    borderRadius: 60,
  },
  btlr8: {
    borderTopLeftRadius: 8,
  },
  bblr8: {
    borderBottomLeftRadius: 8,
  },
  bbrr8: {
    borderBottomRightRadius: 8,
  },
  btrr8: {
    borderTopRightRadius: 8,
  },

  btr16: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  // border Radius

  //borderWidth
  bw0: {
    borderWidth: 0,
  },
  bw1: {
    borderWidth: 1,
  },
  bw2: {
    borderWidth: 2,
  },
  bw3: {
    borderWidth: 3,
  },
  btw1: {
    borderTopWidth: 1,
  },
  //borderWidth

  //borderColor
  bclightgrey: {
    borderColor: "#F2F2F2",
  },
  bclightgreyOne: {
    borderColor: "#DDDDDD",
  },
  bcWhite: {
    borderColor: "#FFFFFF",
  },
  bcPrimary: {
    borderColor: "#E85451",
  },
  bcBlack: {
    borderColor: "#37474F",
  },
  bclightgreyTwo: {
    borderColor: "#BBBBBB",
  },
  //borderColor

  // Padding
  p2: { padding: 2 },
  p3: { padding: 3 },
  p4: { padding: 4 },
  p5: { padding: 5 },
  p8: { padding: 8 },
  p10: { padding: 10 },
  p12: { padding: 12 },
  p15: { padding: 15 },
  p16: { padding: 16 },
  p20: { padding: 20 },
  p25: { padding: 25 },
  p30: { padding: 30 },
  p35: { padding: 35 },
  p40: { padding: 40 },
  p45: { padding: 45 },
  // Padding
  // paddingRight
  pr5: { paddingRight: 5 },
  pr10: { paddingRight: 10 },
  pr15: { paddingRight: 15 },
  pr20: { paddingRight: 20 },
  pr24: { paddingRight: 24 },
  pr25: { paddingRight: 25 },
  pr30: { paddingRight: 30 },
  pr35: { paddingRight: 35 },
  pr40: { paddingRight: 40 },
  pr45: { paddingRight: 45 },
  // paddingRight
  // paddingTop
  pt0: { paddingTop: 0 },
  pt5: { paddingTop: 5 },
  pt8: { paddingTop: 8 },
  pt10: { paddingTop: 10 },
  pt12: { paddingTop: 12 },
  pt15: { paddingTop: 15 },
  pt18: { paddingTop: 18 },
  pt20: { paddingTop: 20 },
  pt24: { paddingTop: 24 },
  pt25: { paddingTop: 25 },
  pt30: { paddingTop: 30 },
  pt35: { paddingTop: 35 },
  pt40: { paddingTop: 40 },
  pt45: { paddingTop: 45 },
  pt76: { paddingTop: 76 },

  // paddingTop
  // paddingBottom
  pb5: { paddingBottom: 5 },
  pb10: { paddingBottom: 10 },
  pb15: { paddingBottom: 15 },
  pb20: { paddingBottom: 20 },
  pb25: { paddingBottom: 25 },
  pb30: { paddingBottom: 30 },
  pb35: { paddingBottom: 35 },
  pb40: { paddingBottom: 40 },
  pb45: { paddingBottom: 45 },
  // paddingBottom
  // paddingLeft
  pl5: { paddingLeft: 5 },
  pl10: { paddingLeft: 10 },
  pl12: { paddingLeft: 12 },
  pl16: { paddingLeft: 16 },
  pl18: { paddingLeft: 18 },
  pl20: { paddingLeft: 20 },
  pl24: { paddingLeft: 24 },
  pl25: { paddingLeft: 25 },
  pl30: { paddingLeft: 30 },
  pl35: { paddingLeft: 35 },
  pl40: { paddingLeft: 40 },
  pl45: { paddingLeft: 45 },
  // paddingLeft
  // paddingHorizontal
  ph0: { paddingHorizontal: 0 },
  ph5: { paddingHorizontal: 5 },
  ph6: { paddingHorizontal: 6 },
  ph8: { paddingHorizontal: 8 },
  ph10: { paddingHorizontal: 10 },
  ph12: { paddingHorizontal: 12 },
  ph15: { paddingHorizontal: 15 },
  ph16: { paddingHorizontal: 16 },
  ph18: { paddingHorizontal: 18 },
  ph20: { paddingHorizontal: 20 },
  ph23: { paddingHorizontal: 23 },
  ph25: { paddingHorizontal: 25 },
  ph30: { paddingHorizontal: 30 },
  ph35: { paddingHorizontal: 35 },
  ph40: { paddingHorizontal: 40 },
  ph45: { paddingHorizontal: 45 },
  // paddingHorizontal
  // paddingVertical
  pv3: { paddingVertical: 3 },
  pv4: { paddingVertical: 4 },
  pv5: { paddingVertical: 5 },
  pv6: { paddingVertical: 6 },
  pv8: { paddingVertical: 8 },
  pv10: { paddingVertical: 10 },
  pv12: { paddingVertical: 12 },
  pv15: { paddingVertical: 15 },
  pv20: { paddingVertical: 20 },
  pv25: { paddingVertical: 25 },
  pv30: { paddingVertical: 30 },
  pv32: { paddingVertical: 32 },
  pv34: { paddingVertical: 34 },
  pv35: { paddingVertical: 35 },
  pv40: { paddingVertical: 40 },
  pv45: { paddingVertical: 45 },
  // paddingVertical
  // margin
  m0: { margin: 0 },
  m5: { margin: 5 },
  m10: { margin: 10 },
  m15: { margin: 15 },
  m20: { margin: 20 },
  m25: { margin: 25 },
  m30: { margin: 30 },
  m35: { margin: 35 },
  m40: { margin: 40 },
  m45: { margin: 45 },
  // margin
  // paddingRight
  mr0: { marginRight: 0 },
  mr5: { marginRight: 5 },
  mr6: { marginRight: 6 },
  mr8: { marginRight: 8 },
  mr10: { marginRight: 10 },
  mr12: { marginRight: 12 },
  mr15: { marginRight: 15 },
  mr16: { marginRight: 16 },
  mr18: { marginRight: 18 },
  mr20: { marginRight: 20 },
  mr25: { marginRight: 25 },
  mr30: { marginRight: 30 },
  mr35: { marginRight: 35 },
  mr40: { marginRight: 40 },
  mr45: { marginRight: 45 },
  // marginRight
  // marginTop
  mt0: { marginTop: 0 },
  mt4: { marginTop: 4 },
  mt5: { marginTop: 5 },
  mt6: { marginTop: 6 },
  mt8: { marginTop: 8 },
  mt10: { marginTop: 10 },
  mt12: { marginTop: 12 },
  mt14: { marginTop: 14 },
  mt15: { marginTop: 15 },
  mt16: { marginTop: 16 },
  mt17: { marginTop: 17 },
  mt18: { marginTop: 18 },
  mt20: { marginTop: 20 },
  mt25: { marginTop: 25 },
  mt28: { marginTop: 28 },
  mt30: { marginTop: 30 },
  mt35: { marginTop: 35 },
  mt40: { marginTop: 40 },
  mt45: { marginTop: 45 },
  mt52: { marginTop: 52 },
  mt72: { marginTop: 72 },

  // marginTop
  // marginBottom
  mb0: { marginBottom: 0 },
  mb2: { marginBottom: 2 },
  mb4: { marginBottom: 4 },
  mb5: { marginBottom: 5 },
  mb6: { marginBottom: 6 },
  mb8: { marginBottom: 8 },
  mb10: { marginBottom: 10 },
  mb12: { marginBottom: 12 },
  mb15: { marginBottom: 15 },
  mb20: { marginBottom: 20 },
  mb25: { marginBottom: 25 },
  mb28: { marginBottom: 28 },
  mb30: { marginBottom: 30 },
  mb35: { marginBottom: 35 },
  mb40: { marginBottom: 40 },
  mb43: { marginBottom: 43 },
  mb45: { marginBottom: 45 },
  mb60: { marginBottom: 60 },
  // marginBottom
  // marginLeft
  ml0: { marginLeft: 0 },
  ml5: { marginLeft: 5 },
  ml10: { marginLeft: 10 },
  ml12: { marginLeft: 12 },
  ml15: { marginLeft: 15 },
  ml16: { marginLeft: 16 },
  ml20: { marginLeft: 20 },
  ml25: { marginLeft: 25 },
  ml30: { marginLeft: 30 },
  ml35: { marginLeft: 35 },
  ml40: { marginLeft: 40 },
  ml45: { marginLeft: 45 },
  // marginLeft

  // marginHorizontal
  mh5: { marginHorizontal: 5 },
  mh10: { marginHorizontal: 10 },
  mh14: { marginHorizontal: 14 },
  mh15: { marginHorizontal: 15 },
  mh16: { marginHorizontal: 16 },
  mh20: { marginHorizontal: 20 },
  mh25: { marginHorizontal: 25 },
  mh30: { marginHorizontal: 30 },
  mh35: { marginHorizontal: 35 },
  mh40: { marginHorizontal: 40 },
  mh45: { marginHorizontal: 45 },
  // marginHorizontal
  // marginVertical
  mv5: { marginVertical: 5 },
  mv8: { marginVertical: 8 },
  mv10: { marginVertical: 10 },
  mv15: { marginVertical: 15 },
  mv20: { marginVertical: 20 },
  mv25: { marginVertical: 25 },
  mv30: { marginVertical: 30 },
  mv35: { marginVertical: 35 },
  mv40: { marginVertical: 40 },
  mv45: { marginVertical: 45 },
  // marginVertical
  // Shadow of box
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.074,
    shadowRadius: 3.84,

    elevation: 4,
  },
  shadow2: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },

  // shadow of box

  //ResizeModes
  rsmc: {
    resizeMode: "contain",
  },
  rsmcr: {
    resizeMode: "center",
  },
  rsmco: {
    resizeMode: "cover",
  },
  rsmr: {
    resizeMode: "repeat",
  },
  rsms: {
    resizeMode: "stretch",
  },
  //ResizeModes

  //Text Transform
  ttuc: {
    textTransform: "uppercase",
  },
  ttc: {
    textTransform: "capitalize",
  },
  ttl: {
    textTransform: "lowercase",
  },
  ttn: {
    textTransform: "none",
  },
  //Text Transform

  Container: {
    flex: 1,
    backgroundColor: "white",
    // padding: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mapcontainer: {
    height: "100%",
    width: "100%",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  fdr: {
    flexDirection: "row",
  },
  fdrjc: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fdc: {
    flexDirection: "column",
  },
  titleText: {
    fontSize: 22,
    fontFamily: "Poppins-Medium",
    lineHeight: 36,
  },
  headingText: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
    lineHeight: 30,
  },
  semiBold18: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    lineHeight: 24,
    color: "#37474F",
  },
  semiBold16: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    lineHeight: 24,
    color: "#37474F",
  },
  semiBold14: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    lineHeight: 24,
    color: "#37474F",
  },
  semiBold12: {
    fontSize: 12,
    fontFamily: "Poppins-SemiBold",
    color: "#37474F",
    lineHeight: 20,
  },
  regular14: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#37474F",
    lineHeight: 24,
  },
  regular12: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#37474F",
    lineHeight: 20,
  },
  regular10: {
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    color: "#37474F",
    lineHeight: 16,
  },
  bodyBoldText: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    lineHeight: 24,
  },
  bodyNormalText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    lineHeight: 24,
  },
  messageText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    lineHeight: 20,
    color: "#394B57",
  },
  bodySmallBoldText: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    lineHeight: 20,
  },
  bodySmallNormalText: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    lineHeight: 20,
    color: "#37474F",
  },
  captionText: {
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    lineHeight: 16,
  },
  headingOne: {
    fontSize: w(0.035),
    color: "#37474F",
    fontFamily: "Poppins-SemiBold",
  },
  paraText: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    color: "#37474F",
  },
  dateText: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#B1B1B1",
  },
  paraRedText: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    color: "#E85451",
  },
  readMoreButton: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#E85451",
  },
  readMoreText: {
    fontSize: 9,
    color: "#E85451",
    fontFamily: "Poppins-Bold",
  },
  suggestionsText: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#737678",
    lineHeight: 18,
    // textAlign:'center'
  },
  bottomNavText: {
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    color: "#737678",
    lineHeight: 16,
  },
  bottomNavTextRed: {
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    color: "#E85451",
    lineHeight: 16,
  },
  suggestionsTitleText: {
    fontSize: 10,
    fontFamily: "Poppins-SemiBold",
    color: "#37474F",
  },
  tabsTitleText: {
    fontSize: 12,
    fontFamily: "Poppins-SemiBold",
    color: "#37474F",
  },
  featureTitleText: {
    fontSize: 13,
    fontFamily: "Poppins-SemiBold",
    color: "#37474F",
  },
  titleTextProfile: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: "#37474F",
  },
  titleTextTwo: {
    color: "#37474F",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
  suggestionsTitleTextRegular: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#37474F",
  },
  areaGuideHeading: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#37474F",
  },
  suggestionsTitleTextWhite: {
    fontSize: 12,
    fontFamily: "Poppins-SemiBold",
    color: "#FFFFFF",
  },
  suggestionsTitleTextBold: {
    fontSize: 12,
    fontFamily: "Poppins-SemiBold",
    color: "#E85451",
  },
  errorMessageText: {
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    color: "#C94444",
  },
  emptyMessageText: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    color: "#394B57",
    lineHeight: 38,
  },
  widthHeight8: {
    width: 8,
    height: 8,
  },
  widthHeight70: {
    width: 70,
    height: 70,
  },

  widthHeight10: {
    width: 10,
    height: 10,
  },
  widthHeight12: {
    width: 12,
    height: 12,
  },
  widthHeight14: {
    width: 14,
    height: 14,
  },
  widthHeight16: {
    width: 16,
    height: 16,
  },
  widthHeight18: {
    width: 18,
    height: 18,
  },
  widthHeight20: {
    width: 20,
    height: 20,
  },
  width24Height28: {
    width: 24,
    height: 28,
  },
  widthHeight24: {
    width: 24,
    height: 24,
  },
  widthHeight32: {
    width: 32,
    height: 32,
  },
  widthHeight48: {
    width: 48,
    height: 48,
  },
  widthHeight60: {
    width: 60,
    height: 60,
  },
  widthHeight90: {
    width: 90,
    height: 90,
  },
  widthHeight96: {
    width: 96,
    height: 96,
  },
  widthHeight154: {
    width: 154,
    height: 154,
  },
  width24: {
    width: 20,
    height: 24,
  },
  blogsImageSize: {
    width: wp("64%"),
    height: hp("17%"),
  },
  happeningsImageSize: {
    width: wp("27%"),
    height: hp("7%"),
  },
  widthOne: {
    width: wp("64%"),
  },
  borderBtm: {
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
  },
  borderButton: {
    borderWidth: 1,
    borderColor: "#37474F",
  },
  borderButton0: {
    borderWidth: 0,
    borderColor: "transparent",
  },
  textShadow: {
    textShadowColor: "#000",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5,
    shadowOpacity: 0.75,
  },
  imarat_image: {
    position: "absolute",
    right: 0,
  },
  propertyTypeContainer: {
    minHeight: hp("30%"),
    flex: 1,
    flexGrow: 1,
    marginVertical: 6,
    marginHorizontal: 16,
  },
  bannerContainer: {
    height: hp("21%"),
    backgroundColor: appColors.primaryColor,
    paddingHorizontal: 18,
    marginTop: hp("5%"),
  },
  bannerMainText: {
    fontFamily: "Poppins-Bold",
    color: appColors.white,
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("1.5%"),
    fontSize: 18,
    fontWeight: "600",
  },
  bannerSecondaryText: {
    fontFamily: "Poppins-Regular",
    color: appColors.white,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
    fontSize: 12,
    fontWeight: "400",
    width: wp("50%"),
  },
  wantToDoContainer: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  heading: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    fontWeight: "600",
    color: appColors.secondaryTextColor,
    letterSpacing: 1,
  },
  smallBtnStyle: {
    backgroundColor: "#FFF",
    paddingVertical: 4,
    width: w(0.25),
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#37474F",
  },

  propertyCategoryButtonContainer: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: appColors.secondaryTextColor,
    borderRadius: 8,
    height: hp("5%"),
    width: wp("25%"),
  },
  propertyCategoryText: {
    fontWeight: "400",
    fontSize: 12,
    color: appColors.secondaryTextColor,
  },
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: "transparent",
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  titleContainerStyle: {
    alignSelf: "flex-start",
    paddingHorizontal: 16,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  divider: {
    paddingVertical: 5,
  },

  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  input: {
    borderColor: appColors.lightGrey,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 16,
    color: appColors.secondaryTextColor,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    color: appColors.secondaryTextColor,
    zIndex: 100,
  },
  city_dropdown: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderRadius: 4,
    color: appColors.secondaryTextColor,
    zIndex: 100,
  },
  dropdownItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  label: {
    color: appColors.secondaryTextColor,
    // fontWeight: 'bold',
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 8,
  },
  propSureVerifiedBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subtitle: {
    color: "#737678",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },
  footer: {
    // paddingVertical: 14,
    // paddingHorizontal: 16,
    // borderTopWidth: 1,
    // borderTopColor: appColors.borderColor,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  threeClicksfooterParent: {
    // borderTopWidth: 1,
    // borderTopColor: appColors.borderColor,
    backgroundColor: "#fff",
    bottom: 10,
    width: "100%",
  },
  threeClickfooter: {
    width: "90%",
    alignSelf: "center",
    paddingVertical: 10,
  },
  submitButton: {
    paddingVertical: 12,
    paddingHorizontal: 23,
    borderRadius: 8,
    backgroundColor: appColors.secondaryTextColor,
  },
  resetButton: {
    paddingVertical: 12,
    backgroundColor: "#ffffff",
  },
  smallDropdown: {
    color: "#37474F",
    zIndex: 100,
    width: 150,
  },
  customSmallDropdown: {
    borderWidth: 1,
    borderColor: appColors.inputBorder,
    zIndex: 100,
    borderRadius: 4,
    width: 150,
    alignItems: "center",
  },
  customSmallDropdownDisabled: {
    borderWidth: 1,
    borderColor: appColors.lightGrey,
    zIndex: 100,
    borderRadius: 4,
    width: 150,
    alignItems: "center",
  },
  smallDropdownItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  rangeBox: {
    flexDirection: "column",
  },
  rangeFields: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filterButton: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F7F7F7",
    borderWidth: 0.8,
    borderColor: "#394B57",
    borderRadius: w(0.02),
    paddingHorizontal: w(0.044),
    paddingVertical: w(0.016),
    marginRight: 10,
  },
  smallInput: {
    borderColor: "#BBBBBB",
    borderWidth: 1,
    borderRadius: 8,
    color: "#37474F",
    width: 124,
    height: 32,
    paddingVertical: 6,
    paddingHorizontal: 9,
  },
  keywordInput: {
    marginTop: 8,
    borderColor: appColors.lightGrey,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: "#37474F",
  },
  //Haris

  bottomSheetContent: {
    color: appColors.secondaryTextColor,
    zIndex: 100,
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
  },

  errorText: {
    alignSelf: "stretch",
    color: "#C94444",
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    fontSize: 12,
    marginVertical: 5,
  },
  filterText: {
    fontFamily: FontRegular,
    fontSize: w(0.032),
    color: "#394B57",
    marginRight: w(0.014),
  },
  customTextInputContainer: {
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
  },

  fontWeight400: {
    fontWeight: "400",
  },

  heightCitiesScroll: {
    height: "40%",
  },

  // map screen styles

  mapBackContainer: {
    width: 48,
    height: 48,
    backgroundColor: "white",
    margin: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  mapBack: {
    width: 14,
    height: 14,
  },
  mapBottomFooter: {
    height: 100,
    backgroundColor: "white",
    position: "absolute",
    bottom: 120,
    padding: 15,
    alignSelf: "center",
    width: "90%",
    zIndex: 100,
    borderRadius: 8,
  },
  selectLocationLabel: {
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    fontSize: 12,
    color: "#37474F",
  },
  modalHeading: {
    fontFamily: "Poppins-Bold",
    fontSize: 15,
    color: "#37474F",
    marginTop: 30,
  },
  modaltxt: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#37474F",
    textAlign: "center",
    marginTop: 11,
    width: "85%",
  },
  feedbackModaltxt: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#37474F",
    marginTop: 4,
    width: "100%",
  },
  footerInnerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  selectedAreaMap: {
    fontFamily: "Poppins-Bold",
    fontWeight: "600",
    fontSize: 14,
    color: "#37474F",
    marginRight: 10,
    width: "75%",
  },
  confirmMapLocation: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: appColors.borderColor,
    width: "100%",
  },

  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  multiChipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 8,
  },
  purposeChip: {
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    marginVertical: 10,
    marginHorizontal: 5,
    height: 40,
  },
  chip: {
    borderWidth: 1,
    borderRadius: 38,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    marginVertical: 5,
    margin: 4,
    height: 40,
  },
  specifyAvailabilityContainer: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 8,
    alignItems: "flex-start",
    backgroundColor: appColors.white,
  },
  toggleSwitchContainer: {
    width: "20%",
    justifyContent: "flex-end",
  },

  //Haris
  //Taimoor

  //Taimoor
  //Muhtasim
  listingHeader: {
    // flex: 1,
    // height:80,
    // paddingHorizontal:16
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    // marginVertical: 4,
    // padding: w(0.038),
    borderWidth: 1,
    borderColor: "#BBB",
    borderRadius: 4,
  },
  searchText: {
    flexGrow: 1,
    paddingTop: 3,
    fontFamily: FontRegular,
    fontSize: w(0.032),
    color: "#737678",
  },
  propertyCount: {
    fontFamily: FontRegular,
    fontSize: w(0.028),
    color: "#737678",
    // marginTop: w(0.026),
  },
  container100: {
    height: "100%",
    width: "100%",
  },
  contentContainerWidth: {
    paddingHorizontal: w(0.038),
  },
  loading: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  noData: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 40,
  },
  retryButton: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: "#E32C2C",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  footerW: {
    width: "100%",
    padding: 30,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  //Muhtasim
  //Hamza Akhtar
  reportThisProperty: {
    marginHorizontal: 10,
    color: "#37474F",
    fontWeight: "500",
    textTransform: "uppercase",
  },
  reportProperyIcon: {
    marginHorizontal: 10,
  },
  reportThisPropertyContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  agencyCardText: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 30,
    color: "#37474F",
    padding: 16,
  },
  flexCenter: { justifyContent: "center", alignItems: "center" },
  locationAndNearBy: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 30,
    color: "#37474F",
    padding: 16,
  },
  moreFeatureContainer: {
    width: "31%",
    height: 100,
    marginVertical: 10,
    marginRight: 5,
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  moreFeatureText: {
    alignSelf: "center",
    color: "#E85451",
  },
  featureContainer: {
    width: "31%",
    height: 100,
    marginVertical: 10,
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    padding: 10,
    justifyContent: "space-between",
  },
  pageHeading: {
    fontSize: 16,
    fontFamily: FontSemiBold,
    color: appColors.secondaryTextColor,
  },
  descriptionText: {
    fontSize: 12,
    fontFamily: FontRegular,
    color: "#737678",
  },
  attributeContainer: { flexDirection: "row" },
  sliderImage: {
    width: width,
    height: 200,
    resizeMode: "cover",
  },
  imageCounter: {
    position: "absolute",
    bottom: 10,
    marginLeft: 24,
    paddingVertical: 5,
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 8,
  },

  // currency: {
  //   fontSize: 14,
  //   color: appColors.secondaryTextColor,
  // },
  currencyText: {
    fontSize: 18,
    color: appColors.secondaryTextColor,
  },
  floorText: {
    color: appColors.grey,
    fontSize: 12,
    paddingHorizontal: 5,
    paddingTop: 5,
    fontFamily: "Poppins-Light",
  },
  floorIcon: {
    height: 10,
    width: 10,
    borderRadius: 2.8,
    backgroundColor: "#E85451",
    paddingHorizontal: 5,
  },
  currencyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerList: {
    borderRadius: 5,
    overflow: "hidden",
    marginTop: w(0.042),
    borderWidth: 1,
    borderColor: "#F2F2F2",
  },
  imageView: {
    position: "relative",
    height: w(0.5),
    width: "100%",
  },
  placeholder: {
    backgroundColor: "#EEE",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  status: {
    position: "absolute",
    top: w(0.036),
    left: w(0.026),
    backgroundColor: "#37474FB0",
    borderRadius: w(0.032),
    paddingHorizontal: w(0.026),
    paddingTop: w(0.006),
  },
  statusText: {
    fontFamily: FontRegular,
    fontSize: w(0.03),
    color: "white",
  },
  verifiedIcon: {
    position: "absolute",
    top: w(0.026),
    right: w(0.026),
  },
  likeIcon: {
    position: "absolute",
    bottom: w(0.026),
    right: w(0.026),
  },
  infoView: {
    padding: w(0.026),
    paddingTop: w(0.018),
  },
  upperInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    flexShrink: 1,
    paddingRight: w(0.026),
    color: "#37474F",
    fontSize: w(0.052),
    fontFamily: FontSemiBold,
  },
  currency: {
    fontSize: w(0.038),
  },
  upperInfoSegment: {
    flexDirection: "row",
    alignItems: "center",
  },
  rect: {
    width: w(0.034),
    height: w(0.034),
    borderRadius: 2,
    marginRight: w(0.026),
    backgroundColor: "#E85451",
  },
  type: {
    fontFamily: FontRegular,
    fontSize: w(0.032),
    color: "#737678",
  },
  amenities: {
    flexDirection: "row",
    paddingVertical: 4,
  },
  amenity: {
    alignItems: "flex-start",
    flexDirection: "row",
  },
  amenityText: {
    fontFamily: FontRegular,
    color: "#37474F",
    fontSize: w(0.032),
    marginHorizontal: w(0.026),
  },
  bottomInfo: {},
  area: {
    fontFamily: FontRegular,
    fontSize: w(0.034),
    color: "#37474F",
  },
  age: {
    fontFamily: FontRegular,
    fontSize: w(0.028),
    color: "#737678",
    marginTop: w(0.014),
  },
  checkView: {
    flexDirection: "row",
    // height: 40,
    width: "100%",
    alignItems: "center",
  },
  checkViewTxt: {
    fontFamily: FontRegular,
    fontSize: 11,
    color: "#37474F",
    marginTop: w(0.014),
    marginLeft: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingBottom: 50,
    // paddingVertical: 50,
    alignItems: "center",
  },
  feedbackModalView: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingBottom: 36,
    paddingHorizontal: 20,
  },
  submitedModalImage: { height: 104, width: 150, alignSelf: "center" },
  modalbtn: {
    width: 134,
    height: 40,
    backgroundColor: "#37474F",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 31,
  },
  modalbtnTxt: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#BBBBBB",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    // marginTop: 20,
  },
  picker: {
    width: 360,
    paddingLeft: 10,
    fontFamily: "Poppins-Regular",
    fontSize: 11,
  },
  pickerPlaceHolder: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
  },
  checkBoxIcon: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
  ProjectListingCardcontainer: {
    backgroundColor: "#fff",
    width: "100%",
    marginTop: 15,
    alignSelf: "center",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  topView: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topText: {
    fontSize: 14,
    color: "#000",
  },
  restText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#E85451",
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: 25,
  },
  btn: {
    backgroundColor: "#37474F",
    width: 150,
    height: 35,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btnView: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 15,
  },
  nameLogoView: {
    flexDirection: "row",
    marginTop: 10,
  },
  nameTxt: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: "#000000",
  },
  addresstxt: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: appColors.grey,
  },
  btnTxt: {
    color: "#fff",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
  pkr: {
    color: "black",
    fontFamily: "Poppins-Medium",
    fontSize: 14,
  },
  verifiedImage: {
    width: 20,
    height: 24,
    resizeMode: "contain",
  },
  inquiryHeading: {
    fontSize: 18,
    fontFamily: FontBold,
    color: appColors.black,
    marginLeft: widthPercentageToDP(5),
    marginTop: heightPercentageToDP(1),
  },
  signupTogleTxt: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    lineHeight: 20,
    color: appColors.grey,
    marginVertical: 2,
    marginLeft: 12,
  },
  //Hamza Akhtar
  //Hamza K

  //Hamza K
});

export const colors = {
  primary: "#E85451",
  secondary: "#37474F",
  success: "#27AE60",
  pending: "#E2B93B",
  removed: "#FF7A00",
  warning: "#E2B93B",
  error: "#C94444",
  grey1: "#737678",
  grey2: "#BBBBBB",
  grey3: "#F2F2F2",
  white: "#FFFFFF",
};

export default styles;
