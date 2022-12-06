import React, { FC, useState } from "react";
import {
  FormControl,
  Icon,
  IFormControlLabelProps,
  IInputProps,
  Input,
  WarningOutlineIcon,
} from "native-base";
import { useField } from "formik";
import { MaterialIcons } from "@expo/vector-icons";

interface Props extends IInputProps {
  name: string;
  label: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  type: "text" | "password";
  propsLabel?: IFormControlLabelProps;
  isRequired?: boolean;
  ComponentComplement?: JSX.Element | JSX.Element[];

  [x: string]: any;
}

export const InputCustom: FC<Props> = ({
  label,
  isRequired,
  name,
  propsLabel,
  type,
  ComponentComplement,
  ...props
}) => {
  const [field, meta] = useField(name);
  const [show, setShow] = useState(false);
  const { error, touched } = meta;
  const { onChange, onBlur, value } = field;

  return (
    <FormControl isRequired={isRequired} isInvalid={!!(touched && error)}>
      <FormControl.Label {...propsLabel}>{label}</FormControl.Label>
      <Input
        _light={{
          selectionColor: "whiteBlue",
        }}
        _dark={{
          placeholderTextColor: "white",
          borderColor: "white",
          selectionColor: "whiteBlue",
        }}
        accessibilityLabel={label}
        type={type === "password" ? (show ? "text" : "password") : type}
        InputRightElement={
          type === "password" ? (
            <Icon
              as={
                <MaterialIcons name={show ? "visibility" : "visibility-off"} />
              }
              size={6}
              mr="2"
              color="muted.400"
              onPress={() => setShow(!show)}
            />
          ) : (
            <></>
          )
        }
        onChangeText={(text) => onChange(name)(text.trim())}
        onBlur={onBlur(name)}
        value={value}
        {...props}
      />
      {ComponentComplement}
      {touched && error ? (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {error}
        </FormControl.ErrorMessage>
      ) : (
        <></>
      )}
    </FormControl>
  );
};
