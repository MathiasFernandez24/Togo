import React, { ReactNode, useEffect } from "react";
import { Keyboard, StyleSheet } from "react-native";
import { Modalize, useModalize } from "react-native-modalize";

type ModalDropdownBaseType = {
  visibility: boolean;
  onClose: () => void;
  children: ReactNode;
};
const ModalDropdownBase = (props: ModalDropdownBaseType) => {
  const { onClose, visibility, children } = props;
  const { ref, open, close } = useModalize();

  useEffect(() => {
    if (visibility) {
      open();
      Keyboard.dismiss();
    } else {
      close();
    }
  }, [visibility]);

  return (
    <Modalize
      ref={ref}
      onClosed={onClose}
      adjustToContentHeight
      tapGestureEnabled={true}
    >
      {children}
    </Modalize>
  );
};

export default ModalDropdownBase;

const styles = StyleSheet.create({});
