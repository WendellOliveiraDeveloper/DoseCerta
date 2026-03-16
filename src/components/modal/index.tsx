import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title?: String;
  visible: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

const ModalComponent = ({
  visible,
  onClose,
  title,
  children,
  ...rest
}: Props) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            {title && <Text style={styles.title}>{title}</Text>}

            <TouchableOpacity onPress={onClose}>
              <AntDesign name="close" size={30} color={"#bb2222"} />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
