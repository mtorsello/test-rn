import {
  Pressable,
  Text,
  StyleSheet,
  type ViewStyle,
  type TextStyle,
} from 'react-native';

export type TalkButtonProps = {
  label?: string;
  onPress?: () => void;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  disabled?: boolean;
};

export function TalkButton({
  label = 'Talk Button',
  onPress,
  style,
  labelStyle,
  disabled = false,
}: TalkButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text style={[styles.label, labelStyle]}>
        {disabled ? 'Disabled' : label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#1f6feb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.85,
  },
  disabled: {
    backgroundColor: '#9aa6b2',
  },
  label: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default TalkButton;
