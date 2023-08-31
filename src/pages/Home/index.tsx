import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import { useState } from "react";
import Button, { ButtonType } from "../../components/Button";

const Home = () => {
  const [value, setValue] = useState("0");
  const [firstValue, setFirstValue] = useState("0");
  const [secondValue, setSecondValue] = useState("0");
  const [isSecond, setIsSecond] = useState(false);
  const [operator, setOperator] = useState("");

  const computeInput = (input: string) => {
    if (input === "+/-") {
      setValue(returnOposite(value));
      return;
    }
    if (input === ".") {
      if (value.includes(".")) {
        return;
      } else {
        let newValue = value.concat(input);
        setValue(newValue);
        return;
      }
    }
    if (value === "0") {
      setValue(input);
      return;
    }
    if (isOperator(input)) {
      setOperator(input);
      setIsSecond(true);
      setFirstValue(value);
      return;
    } else if (isSecond) {
      if (secondValue === "0") {
        setValue(input);
        setSecondValue(input);
      } else {
        let newValue = value.concat(input);
        setSecondValue(newValue);
        setValue(newValue);
      }
    } else {
      let newValue = value.concat(input);
      setValue(newValue);
      setFirstValue(newValue);
    }
  };

  const isOperator = (input: string) => {
    return (
      input === "+" ||
      input === "-" ||
      input === "*" ||
      input === "/" ||
      input === "%"
    );
  };

  const returnOposite = (input: string) => {
    if (input.includes("-")) {
      let newValue = input.replace("-", "");
      return newValue;
    } else {
      let newValue = "-".concat(input);
      return newValue;
    }
  };

  const calculate = () => {
    let result: number;
    switch (operator) {
      case "+":
        result = parseFloat(firstValue) + parseFloat(secondValue);
        break;
      case "-":
        result = parseFloat(firstValue) - parseFloat(secondValue);
        break;
      case "*":
        result = parseFloat(firstValue) * parseFloat(secondValue);
        break;
      case "/":
        result = parseFloat(firstValue) / parseFloat(secondValue);
        break;
      case "%":
        result = (parseFloat(firstValue) / 100) * parseFloat(secondValue);
        break;
      default:
        result = 0;
        break;
    }
    setValue(result.toString());
    setIsSecond(false);
    setFirstValue(result.toString());
    setSecondValue("0");
  };

  const deleteInput = () => {
    let newValue: string;
    if (value === "0") {
      return;
    } else if (value.length === 1) {
      newValue = "0";
    } else {
      newValue = value.slice(0, -1);
    }
    setValue(newValue);
  };

  return (
    <View style={styles.container}>
      {/* Calculed value div */}
      <View style={styles.valueContainer}>
        <ScrollView horizontal>
          <Text style={styles.valueText}>{value}</Text>
        </ScrollView>
      </View>
      {/* Buttons div */}
      <View style={styles.buttonsContainer}>
        {/* Line one */}
        <View style={styles.lineButtonsContainer}>
          <Button
            type={ButtonType.OPERATOR}
            buttonColor="#4E505F"
            onPress={() => {
              setValue("0");
            }}
            text="C"
          />
          <Button
            type={ButtonType.OPERATOR}
            buttonColor="#4E505F"
            onPress={() => {
              computeInput("+/-");
            }}
            text="+/-"
          />
          <Button
            type={ButtonType.OPERATOR}
            buttonColor="#4E505F"
            onPress={() => {
              computeInput("%");
            }}
            text="%"
          />
          <Button
            type={ButtonType.OPERATOR}
            buttonColor="#4B5EFC"
            onPress={() => {
              computeInput("/");
            }}
            text="/"
          />
        </View>
        {/* Line two */}
        <View style={styles.lineButtonsContainer}>
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              computeInput("7");
            }}
            text="7"
          />
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              computeInput("8");
            }}
            text="8"
          />
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              computeInput("9");
            }}
            text="9"
          />
          <Button
            type={ButtonType.OPERATOR}
            buttonColor="#4B5EFC"
            onPress={() => {
              computeInput("*");
            }}
            text="x"
          />
        </View>
        {/* Line three */}
        <View style={styles.lineButtonsContainer}>
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              computeInput("4");
            }}
            text="4"
          />
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              computeInput("5");
            }}
            text="5"
          />
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              computeInput("6");
            }}
            text="6"
          />
          <Button
            type={ButtonType.OPERATOR}
            buttonColor="#4B5EFC"
            onPress={() => {
              computeInput("-");
            }}
            text="-"
          />
        </View>
        {/* Line four */}
        <View style={styles.lineButtonsContainer}>
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              computeInput("1");
            }}
            text="1"
          />
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              computeInput("2");
            }}
            text="2"
          />
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              computeInput("3");
            }}
            text="3"
          />
          <Button
            type={ButtonType.OPERATOR}
            buttonColor="#4B5EFC"
            onPress={() => {
              computeInput("+");
            }}
            text="+"
          />
        </View>
        {/* Line five */}
        <View style={styles.lineButtonsContainer}>
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              computeInput(".");
            }}
            text="."
          />
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              computeInput("0");
            }}
            text="0"
          />
          <Button
            type={ButtonType.OPERATOR}
            onPress={() => {
              deleteInput();
            }}
            text="del"
          />
          <Button
            type={ButtonType.OPERATOR}
            buttonColor="#4B5EFC"
            onPress={() => {
              calculate();
            }}
            text="="
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
