const styles = {
  global: (props) => ({
    fontFamily: "body",
    color: "gray.800",
    bg: "white",
    lineHeight: "base",
    "*::placeholder": {
      color: "gray.400",
    },
    "*, *::before, &::after": {
      borderColor: "gray.200",
      wordWrap: "break-word",
    },
    fontFeatureSettings: `"pnum"`,
    fontVariantNumeric: "proportional-nums",
  }),
};

export default styles;
