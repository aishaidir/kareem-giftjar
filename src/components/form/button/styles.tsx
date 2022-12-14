// Import dependencies
import styled from "@emotion/styled";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";

interface RootState {
  ghost?: boolean;
  hover?: boolean;
  delete?: boolean;
  cancel?: boolean;
  minWidth?: string;
  minHeight?: string;
  radius?: string;
  width?: string;
  height?: string;
  align?: string;
  disabled?: boolean;
  error?: boolean;
  active?: boolean;
  custom?: boolean;
}

export const ButtonsRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  width: 100%;
  float: right;
  margin-top: 10px;
  flex-wrap: wrap;
  gap: 10px;
  & + & {
    margin-top: 12px;
  }
`;

export const ButtonVariant = styled.div`
  width: 16.6666667%;
  &:nth-of-type(n + 2) {
    text-align: center;
  }
`;
export const Button = styled.button<RootState>`
  width: ${(props) => (props.width ? props.width : "100%")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  text-transform: capitalize;
  font: normal normal 600 14px/20px ${Fonts.primary};
  padding: 12px 16px;
  background: ${(props) =>
    props.disabled
      ? `${Colors.disabled} 0% 0% no-repeat padding-box`
      : props.ghost
      ? Colors.light
      : `linear-gradient(90deg, #F23A13 0%, #F59218 100%) 0% 0% no-repeat padding-box`};
  border-radius: 8px;
  color: ${(props) => (props.ghost ? Colors.greyDark : Colors.light)};
  border: ${(props) =>
    props.disabled
      ? `1px solid ${Colors.disabled}`
      : props.ghost
      ? `1px solid ${Colors.borderColor}`
      : `1px solid transparent`};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  outline: none;
  & + & {
    margin-top: 12px;
  }
  &:hover {
    color: ${(props) =>
      props.ghost ? "rgba(17, 24, 39, 0.5)" : Colors.greyLight};
    transform: scale(0.98);
  }
`;
export const CancelButtonStyle = styled(Button)`
  background: ${Colors.light} 0% 0% no-repeat padding-box;
  color: ${Colors.greyDark};
  border: none;
  &:hover {
    color: rgba(17, 24, 39, 0.5);
  }
`;
export const DeleteButtonStyle = styled(Button)`
  background: ${(props) =>
    props.disabled
      ? `${Colors.greyLight} 0% 0% no-repeat padding-box`
      : `${Colors.deleteButton} 0% 0% no-repeat padding-box;`};
  color: ${(props) =>
    props.disabled ? `${Colors.textColor}` : `${Colors.light}`};
  border: ${(props) =>
    props.disabled
      ? `1px solid ${Colors.greyLight}`
      : `1px solid ${Colors.deleteButton}`};
  &:hover {
    color: ${(props) =>
      props.disabled ? `${Colors.textColor}` : Colors.greyLight};
    transform: scale(1);
  }
`;

export const FabStyle = styled(Button)`
  border-radius: 50%;
  min-width: ${(props) => props.minWidth || "20px"};
  min-height: ${(props) => props.minHeight || "20px"};
  width: ${(props) => props.width || "35px"};
  height: ${(props) => props.height || "35px"};
  padding: 8px 10px;
`;
