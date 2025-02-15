import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";

export function ScreenContainerNonScroll({
  children,
  style,
  ...props
}: PropTypes.ScreenContainer) {
  const theme = useTheme<Config.Theme>();
  const styles = createStyles({ theme });
  return (
    <View style={[style, styles.container]} {...props}>
      <View style={styles.scrollView}>
        {children}
        {/* <View style={{ height: 30 }}></View> */}
      </View>
    </View>
  );
}

const createStyles = ({ theme }: { theme: Config.Theme }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      position: 'relative'
    },
    scrollView: {
      flex: 1,
      padding: 20,
      rowGap: 30,
    }
  });
};
