"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const Variables = {
  // Colors
  Colors: {
    Black: "rgb(0,0,0)",
    White: "rgb(255,255,255)",
    Gray50: "rgb(248,248,248)",
    Gray100: "rgb(228,228,228)",
    Gray200: "rgb(200,200,200)",
    Gray300: "rgb(173,173,173)",
    Gray400: "rgb(145,145,145)",
    Gray500: "rgb(118,118,118)",
    Gray600: "rgb(94,94,94)",
    Gray700: "rgb(71,71,71)",
    Gray800: "rgb(47,47,47)",
    Gray900: "rgb(24,24,24)",
    Primary50: "rgb(244,246,247)",
    Primary100: "rgb(209,218,225)",
    Primary200: "rgb(164,181,195)",
    Primary300: "rgb(118,143,164)",
    Primary400: "rgb(73,106,134)",
    Primary500: "rgb(27,69,104)",
    Primary600: "rgb(22,55,83)",
    Primary700: "rgb(16,41,62)",
    Primary800: "rgb(11,28,42)",
    Primary900: "rgb(5,14,21)",
    Secondary50: "rgb(244,248,253)",
    Secondary100: "rgb(212,226,246)",
    Secondary200: "rgb(168,197,237)",
    Secondary300: "rgb(125,167,229)",
    Secondary400: "rgb(81,138,220)",
    Secondary500: "rgb(38,109,211)",
    Secondary600: "rgb(30,87,169)",
    Secondary700: "rgb(23,65,127)",
    Secondary800: "rgb(15,44,84)",
    Secondary900: "rgb(8,22,42)",
    Success50: "rgb(243,249,246)",
    Success100: "rgb(206,230,219)",
    Success200: "rgb(157,205,183)",
    Success300: "rgb(107,179,146)",
    Success400: "rgb(58,154,110)",
    Success500: "rgb(9,129,74)",
    Success600: "rgb(7,103,59)",
    Success700: "rgb(5,77,44)",
    Success800: "rgb(4,52,30)",
    Success900: "rgb(2,26,15)",
    Danger50: "rgb(251,242,244)",
    Danger100: "rgb(240,204,209)",
    Danger200: "rgb(225,153,164)",
    Danger300: "rgb(209,102,118)",
    Danger400: "rgb(194,51,73)",
    Danger500: "rgb(179,0,27)",
    Danger600: "rgb(143,0,22)",
    Danger700: "rgb(107,0,16)",
    Danger800: "rgb(72,0,11)",
    Danger900: "rgb(36,0,5)",
    Warning50: "rgb(252,246,242)",
    Warning100: "rgb(243,219,204)",
    Warning200: "rgb(231,182,153)",
    Warning300: "rgb(220,146,102)",
    Warning400: "rgb(208,109,51)",
    Warning500: "rgb(196,73,0)",
    Warning600: "rgb(157,58,0)",
    Warning700: "rgb(118,44,0)",
    Warning800: "rgb(78,29,0)",
    Warning900: "rgb(39,15,0)"
  },
  // Overlays
  Overlays: {
    Plain: {
      Black50: "rgba(0, 0, 0, 0.5)",
      Black80: "rgba(0, 0, 0, 0.8)",
      White50: "rgba(255, 255, 255, 0.5)",
      White80: "rgba(255, 255, 255, 0.8)"
    },
    Gradient: {
      Black: "linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(255, 255, 255, 0) 100%)",
      White: "linear-gradient(0deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%)"
    }
  },
  // Shadows
  Shadows: {
    XXL: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    XL: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    L: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    M: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    S: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    XS: "0 1px 2px 0 rgb(0 0 0 / 0.05)"
  },
  // Margins
  Margins: {
    XXL: "48px",
    XL: "32px",
    L: "24px",
    M: "16px",
    S: "12px",
    XS: "8px",
    XXS: "4px"
  },
  // Font family
  FontFamilies: {
    Body: '"Lato", sans-serif',
    Code: "Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New"
  },
  // Font weights
  FontWeights: {
    Regular: 400,
    Bold: 700,
    Black: 900
  },
  // Font sizes
  FontSizes: {
    Display: {
      H1: "5rem",
      H2: "4rem",
      H3: "3.5rem",
      H4: "3rem",
      H5: "2.5rem"
    },
    Titles: {
      ExtraLarge: "2rem",
      Large: "1.5rem",
      Medium: "1.125rem",
      Small: "1rem"
    },
    Body: "1rem",
    Small: "0.75rem"
  },
  // Line height
  LineHeight: 1.5,
  // Radiuses
  Radiuses: {
    XXL: "24px",
    XL: "16px",
    L: "12px",
    M: "8px",
    S: "4px",
    XS: "8px",
    Round: "99em"
  },
  // Container template
  Container: {
    Template1Col: "1fr 600px 1fr",
    TemplateAsideLeft: "1fr 250px 600px 1fr",
    TemplateAsideRight: "1fr 600px 250px 1fr",
    TemplateForm: "1fr 400px 1fr",
    Column: 2,
    Padding: "48px 0",
    TemplateTablet: "5vw 1fr 5vw"
  },
  // Transitions
  Transitions: {
    Short: "all 0.2s ease",
    Long: "all 0.5s ease",
    Bezier: "all 0.5s cubic-bezier(0.25, 0.75, 0, 0.66)"
  },
  // Breakpoints
  Breakpoints: {
    Mobile: "(max-width: 600px)",
    Tablet: "(max-width: 1024px)"
  }
};
var _default = Variables;
exports.default = _default;