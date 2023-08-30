import { Pressable, Text } from "react-native";
import styles from "./styles";

export enum ButtonType {
  NUMBER = "number",
  OPERATOR = "operator",
}

interface IButtonProps {
  text: string;
  type: ButtonType;
  buttonColor?: string;
  onPress: () => void;
}

const Button = ({
  text,
  onPress,
  buttonColor = "#2E2F38",
  type,
}: IButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...styles.button,
        backgroundColor: buttonColor,
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;
