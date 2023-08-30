import { View, Text } from "react-native";
import styles from "./styles";
import { useState } from "react";
import Button, { ButtonType } from "../../components/Button";

const Home = () => {
  const [value, setValue] = useState("0");

  const changeValue = (input: string) => {
    let newValue: string;
    if (value === "0") {
      newValue = input;
    } else {
      newValue = value.concat(input);
    }
    setValue(newValue);
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
        <Text style={styles.valueText}>{value}</Text>
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
            onPress={() => {}}
            text="C"
          />
          <Button
            type={ButtonType.OPERATOR}
            buttonColor="#4E505F"
            onPress={() => {}}
            text="%"
          />
          <Button
            type={ButtonType.OPERATOR}
            buttonColor="#4B5EFC"
            onPress={() => {}}
            text="/"
          />
        </View>
        {/* Line two */}
        <View style={styles.lineButtonsContainer}>
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              changeValue("7");
            }}
            text="7"
          />
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              changeValue("8");
            }}
            text="8"
          />
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              changeValue("9");
            }}
            text="9"
          />
          <Button
            type={ButtonType.OPERATOR}
            buttonColor="#4B5EFC"
            onPress={() => {}}
            text="x"
          />
        </View>
        {/* Line three */}
        <View style={styles.lineButtonsContainer}>
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              changeValue("4");
            }}
            text="4"
          />
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              changeValue("5");
            }}
            text="5"
          />
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              changeValue("6");
            }}
            text="6"
          />
          <Button
            type={ButtonType.OPERATOR}
            buttonColor="#4B5EFC"
            onPress={() => {}}
            text="-"
          />
        </View>
        {/* Line four */}
        <View style={styles.lineButtonsContainer}>
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              changeValue("1");
            }}
            text="1"
          />
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              changeValue("2");
            }}
            text="2"
          />
          <Button
            type={ButtonType.NUMBER}
            onPress={() => {
              changeValue("3");
            }}
            text="3"
          />
          <Button
            type={ButtonType.OPERATOR}
            buttonColor="#4B5EFC"
            onPress={() => {}}
            text="+"
          />
        </View>
        {/* Line five */}
        <View style={styles.lineButtonsContainer}>
          <Button type={ButtonType.NUMBER} onPress={() => {}} text="." />
          <Button type={ButtonType.NUMBER} onPress={() => {}} text="0" />
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
            onPress={() => {}}
            text="="
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
