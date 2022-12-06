import React, { FC, useState } from "react";
import {
  FormControl,
  Icon,
  Input,
  Select,
  WarningOutlineIcon,
} from "native-base";
import { useField } from "formik";
import { MaterialIcons } from "@expo/vector-icons";
import { CheckIcon } from "native-base";

type options = { label: string; value: string }[];

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  propsLabel?: {
    [x: string]: any;
  };
  options: options;
  isRequired?: boolean;
  ComponentComplement?: JSX.Element | JSX.Element[];

  [x: string]: any;
}

export const SelectInput: FC<Props> = ({
  label,
  isRequired,
  name,
  propsLabel,
  ComponentComplement,
  options,
  ...props
}) => {
  const [field, meta, helper] = useField(name);
  const { error, touched } = meta;
  const { onChange, value } = field;
  return (
    <FormControl isRequired={isRequired} isInvalid={!!(touched && error)}>
      <FormControl.Label {...propsLabel}>{label}</FormControl.Label>
      <Select
        _dark={{
          placeholderTextColor: "white",
          borderColor: "white",
        }}
        size="md"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size={5} />,
        }}
        accessibilityLabel={label}
        onValueChange={onChange(name)}
        onClose={() => {
          helper.setTouched(true);
        }}
        selectedValue={value}
        {...props}
      >
        {options.map((item, index: number) => (
          <Select.Item key={index} label={item.label} value={item.value} />
        ))}
      </Select>
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
