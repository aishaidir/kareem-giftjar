import PropTypes from "prop-types";
import { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { Colors } from "../../../theme/colors";
import {
  Button,
  CancelButtonStyle,
  DeleteButtonStyle,
  FabStyle,
} from "./styles";

interface ButtonProps {
  children?: string | ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  style?: CSSProperties;
  ghost?: boolean;
  width?: string;
}
export const SubmitButton = (props: ButtonProps) => {
  const { children, onClick, disabled, ghost, width, style, ...otherProps } =
    props;
  return (
    <Button
      width={width}
      ghost={ghost}
      theme={Colors.primary}
      type="submit"
      onClick={onClick}
      disabled={disabled}
      style={style}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
SubmitButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export const CancelButton = (props: ButtonProps) => {
  const { children, onClick, disabled, style, ...otherProps } = props;
  return (
    <CancelButtonStyle onClick={onClick} style={style} {...otherProps}>
      {children}
    </CancelButtonStyle>
  );
};
CancelButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export const DeleteButton = (props: ButtonProps) => {
  const { children, onClick, disabled, style, ...otherProps } = props;
  return (
    <DeleteButtonStyle
      onClick={onClick}
      style={style}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </DeleteButtonStyle>
  );
};
DeleteButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export const Fab = (props: ButtonProps) => {
  const { children, onClick, style, ...otherProps } = props;
  return (
    <FabStyle
      theme={Colors.primary}
      onClick={onClick}
      style={style}
      {...otherProps}
    >
      {children}
    </FabStyle>
  );
};
Fab.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
