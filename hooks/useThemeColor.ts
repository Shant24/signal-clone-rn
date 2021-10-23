import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

type ColorNameType = keyof typeof Colors.light & keyof typeof Colors.dark

const useThemeColor = (props: { light?: string; dark?: string }, colorName: ColorNameType) => {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  return colorFromProps || Colors[theme][colorName];
};

export default useThemeColor;
