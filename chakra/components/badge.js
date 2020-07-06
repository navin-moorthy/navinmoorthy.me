function getSubtleStyle(props) {
  const { colorScheme: c } = props;

  return {
    bg: `${c}.100`,
    color: `${c}.800`,
  };
}

const Badge = {
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray",
  },
  baseStyle: {
    paddingX: 1,
    textTransform: "uppercase",
    fontSize: "xs",
    borderRadius: "sm",
    fontWeight: "bold",
  },
  variants: {
    subtle: getSubtleStyle,
  },
};

export const BadgeVariants = {
  subtle: "subtle",
};

export default Badge;
