import CancelIcon from "@mui/icons-material/Cancel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box, styled, Switch, useTheme } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number-2";
import { MuiOtpInput } from "mui-one-time-password-input";
import PropTypes from "prop-types";
import { components } from "react-select";
import makeAnimated from "react-select/animated";
import { NumberProps, StyleProps } from "../../../../features/types";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { AngleDown, SearchIcon } from "../../svgs";
import {
  ClearIcon,
  FormHelper,
  InputElWrapper,
  InputLabel,
  InputLabelLabel,
  InputOriginalEl,
  InputOriginalElCustom,
  InputRadioElCustom,
  OutlinedSearchElement,
  InputTextElement,
  MultiSelect,
  NewSearchIconStyle,
  NumberInputElement,
  PasswordIcon,
  Root,
  SearchIconStyle,
  SearchInputElement,
  SelectInput,
  ShadowedSearchIconStyle,
  TextAreaInput,
} from "./styles";

const Option = (props: any) => {
  return (
    <div>
      <components.Option {...props}>
        <CheckBox
          label={props.label}
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <div className="line" style={{ position: "relative", top: 10 }}></div>
      </components.Option>
    </div>
  );
};
const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <AngleDown />
    </components.DropdownIndicator>
  );
};

const MultiValue = (props: any) => (
  <components.MultiValue {...props}>
    <span>{props.data.label}</span>
  </components.MultiValue>
);
const animatedComponents = makeAnimated();
export const CssTextField = styled(MuiOtpInput)({
  "& .MuiOutlinedInput-root": {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    color: Colors.textColor,
    margin: "20px 0px",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s",
    height: 50,
    width: 50,
    font: `normal normal normal 14px/30px ${Fonts.primary}`,
    borderRadius: 8,
    "& fieldset": {
      border: `1px solid ${Colors.borderColor}`,
    },
    "&:hover fieldset": {
      border: `1px solid ${Colors.secondaryLight}`,
    },
    "&.Mui-focused": {
      background: `rgba(245, 142, 24, 0.37)`,
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${Colors.secondaryLight}`,
    },
    "&.Mui-error fieldset": {
      borderColor: Colors.error,
    },
    "&:hover .Mui-error fieldset": {
      borderColor: Colors.error,
    },
    "&.Mui-disabled": {
      cursor: "not-allowed",
      background: "fcfdfe",
    },
    "&.Mui-disabled fieldset": {
      borderColor: "#e8ebee",
    },
  },
});
const SwitchStyle = styled((props: any) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: Colors.primary,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
const PhoneInputStyle = styled(MuiPhoneNumber)({
  "& .MuiPhoneNumber-flagButton": {
    padding: "6px",
  },
  "& .MuiButtonBase-root": {
    fontSize: 16,
    "& .MuiButtonBase-root": {
      fontSize: 16,
    },
  },
  "& .MuiOutlinedInput-input": {
    boxSizing: "border-box",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 8,
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    color: Colors.textColor,
    height: 40,
    width: "100%",
    margin: "10px 0px",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s",
    font: `normal normal normal 12px/23px ${Fonts.primary}`,
    "& fieldset": {
      border: `1px solid ${Colors.borderColor}`,
    },
    "&:hover fieldset": {
      border: `1px solid ${Colors.secondaryLight}`,
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${Colors.secondaryLight}`,
    },
    "&.Mui-error fieldset": {
      borderColor: Colors.error,
    },
    "&:hover .Mui-error fieldset": {
      borderColor: Colors.error,
    },
    "&.Mui-disabled": {
      cursor: "not-allowed",
      background: "fcfdfe",
    },
    "&.Mui-disabled fieldset": {
      borderColor: "#e8ebee",
    },
  },
});
export function TextField({
  id,
  name,
  htmlFor,
  label,
  value,
  type,
  onChange,
  disabled,
  helper,
  error,
  register,
  onKeyUp,
  onFocus,
  showClearIcon,
  clearField,
  onKeyDown,
  onKeyPress,
  field,
  accept,
  onBlur,
  dialoglabel,
  required,
  ...otherProps
}: StyleProps) {
  const theme = useTheme();
  return (
    <InputElWrapper>
      <InputLabel
        htmlFor={htmlFor}
        color={theme.palette.mode === "dark" ? "#DADADA" : Colors.greyDark}
        style={{ color: dialoglabel ? Colors.greyDark : "" }}
      >
        {label} {required ? <sup style={{ color: "#F43F5E" }}>*</sup> : ""}
      </InputLabel>
      {register ? (
        <InputTextElement
          id={id}
          type={type}
          error={error}
          onChange={onChange}
          onKeyUp={onKeyUp}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onKeyPress={onKeyPress}
          disabled={disabled}
          onBlur={onBlur}
          accept={accept}
          {...field}
          {...otherProps}
          {...register(name)}
        />
      ) : (
        <InputTextElement
          id={id}
          type={type}
          name={name}
          value={value}
          error={error}
          onChange={onChange}
          onKeyUp={onKeyUp}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onKeyPress={onKeyPress}
          disabled={disabled}
          onBlur={onBlur}
          accept={accept}
          {...otherProps}
        />
      )}
      {showClearIcon ? (
        <ClearIcon>
          <CancelIcon
            onClick={clearField}
            sx={{
              fontSize: 18,
              cursor: "pointer",
              color: "rgba(17.0, 24.0, 39.0, 0.5) !important",
            }}
          />
        </ClearIcon>
      ) : null}

      <FormHelper>{helper}</FormHelper>
    </InputElWrapper>
  );
}
export function PhoneInput({
  id,
  htmlFor,
  name,
  value,
  label,
  onChange,
  helper,
  required,
  register,
  dialoglabel,
  ...otherProps
}: StyleProps) {
  const theme = useTheme();
  return (
    <InputElWrapper>
      <InputLabel
        htmlFor={htmlFor}
        color={theme.palette.mode === "dark" ? "#DADADA" : Colors.greyDark}
        style={{ color: dialoglabel ? Colors.greyDark : "" }}
      >
        {label} {required ? <sup style={{ color: "#F43F5E" }}>*</sup> : ""}
      </InputLabel>
      {register ? (
        <PhoneInputStyle
          id={id}
          name={name}
          value={value}
          variant="outlined"
          onChange={onChange}
          defaultCountry={"ng"}
          {...otherProps}
          {...register(name)}
        />
      ) : (
        <PhoneInputStyle
          id={id}
          name={name}
          value={value}
          variant="outlined"
          onChange={onChange}
          defaultCountry={"ng"}
          {...otherProps}
        />
      )}
      <FormHelper>{helper}</FormHelper>
    </InputElWrapper>
  );
}
export function TextArea({
  id,
  htmlFor,
  name,
  value,
  label,
  height,
  onChange,
  register,
  required,
  dialoglabel,
  helper,
  ...otherProps
}: StyleProps) {
  const theme = useTheme();
  return (
    <InputElWrapper>
      <InputLabel
        htmlFor={htmlFor}
        color={theme.palette.mode === "dark" ? "#DADADA" : Colors.greyDark}
        style={{ color: dialoglabel ? Colors.greyDark : "" }}
      >
        {label} {required ? <sup style={{ color: "#F43F5E" }}>*</sup> : ""}
      </InputLabel>
      {register ? (
        <TextAreaInput
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={5}
          cols={50}
          height={height}
          {...otherProps}
          {...register(name)}
        />
      ) : (
        <TextAreaInput
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          height={height}
          rows={5}
          cols={50}
          {...otherProps}
        />
      )}
      <FormHelper>{helper}</FormHelper>
    </InputElWrapper>
  );
}

export function Select({
  id,
  htmlFor,
  children,
  name,
  value,
  label,
  onChange,
  register,
  placeholder,
  helper,
  required,
  multiple,
  dialoglabel,
  defaultText,
  ...otherProps
}: StyleProps) {
  const theme = useTheme();
  return (
    <InputElWrapper>
      <InputLabel
        htmlFor={htmlFor}
        color={theme.palette.mode === "dark" ? "#DADADA" : Colors.greyDark}
        style={{ color: dialoglabel ? Colors.greyDark : "" }}
      >
        {label} {required ? <sup style={{ color: "#F43F5E" }}>*</sup> : ""}
      </InputLabel>
      {register ? (
        <SelectInput
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          multiple={multiple}
          placeholder={placeholder}
          label={label}
          {...otherProps}
          {...register(name)}
        >
          <option value="" hidden>
            {placeholder}
          </option>
          {children}
        </SelectInput>
      ) : (
        <SelectInput
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          multiple={multiple}
          {...otherProps}
        >
          <option
            value=""
            hidden
            style={{
              color: "rgba(17, 24, 39, 0.6)",
              font: " normal normal normal 14px/24px ${Fonts.secondary}",
            }}
          >
            {placeholder}
          </option>
          {children}
        </SelectInput>
      )}
      <FormHelper>{helper}</FormHelper>
    </InputElWrapper>
  );
}

export function SelectR({
  id,
  htmlFor,
  children,
  name,
  value,
  label,
  onChange,
  register,
  helper,
  required,
  ...otherProps
}: StyleProps) {
  const theme = useTheme();
  return (
    <InputElWrapper>
      <InputLabel
        htmlFor={htmlFor}
        color={theme.palette.mode === "dark" ? "#DADADA" : Colors.greyDark}
      >
        {label} {required ? <sup style={{ color: "#F43F5E" }}>*</sup> : ""}
      </InputLabel>
      {register ? (
        <SelectInput
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          {...otherProps}
          {...register(name)}
        >
          {children}
        </SelectInput>
      ) : (
        <SelectInput
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          {...otherProps}
        >
          {children}
        </SelectInput>
      )}
      <FormHelper>{helper}</FormHelper>
    </InputElWrapper>
  );
}

export function PasswordField({
  style,
  id,
  name,
  htmlFor,
  helper,
  label,
  value,
  disabled,
  showPassword,
  onClick,
  onChange,
  required,
  register,
  dialoglabel,
  ...otherProps
}: StyleProps) {
  const theme = useTheme();
  return (
    <Root style={style}>
      <InputElWrapper>
        <InputLabel
          htmlFor={htmlFor}
          color={theme.palette.mode === "dark" ? "#DADADA" : Colors.greyDark}
          style={{ color: dialoglabel ? Colors.greyDark : "" }}
        >
          {label} {required ? <sup style={{ color: "#F43F5E" }}>*</sup> : ""}
        </InputLabel>
        {register ? (
          <>
            <InputTextElement
              id={id}
              name={name}
              type="password"
              value={value}
              onChange={onChange}
              disabled={disabled}
              {...otherProps}
              {...register(name)}
            />
            <PasswordIcon>
              {showPassword ? (
                <Box
                  onClick={onClick}
                  sx={{
                    color: "rgba(17, 24, 39, 0.6)",
                    font: `normal normal normal 14px/18px ${Fonts.secondary}`,
                    cursor: "pointer",
                  }}
                >
                  Hide
                </Box>
              ) : (
                <Box
                  onClick={onClick}
                  sx={{
                    color: "rgba(17, 24, 39, 0.6)",
                    font: `normal normal normal 14px/18px ${Fonts.secondary}`,
                    cursor: "pointer",
                  }}
                >
                  show
                </Box>
              )}
            </PasswordIcon>
            <FormHelper>{helper}</FormHelper>
          </>
        ) : (
          <>
            <InputTextElement
              id={id}
              name={name}
              type="password"
              value={value}
              onChange={onChange}
              {...otherProps}
            />
            <PasswordIcon>
              {showPassword ? (
                <VisibilityOff
                  onClick={onClick}
                  sx={{
                    color: "rgba(0, 0, 0, 0.54)",
                    fontSize: 18,
                    cursor: "pointer",
                  }}
                />
              ) : (
                <Visibility
                  onClick={onClick}
                  sx={{
                    color: "rgba(0, 0, 0, 0.54)",
                    fontSize: 18,
                    cursor: "pointer",
                  }}
                />
              )}
            </PasswordIcon>
            <FormHelper>{helper}</FormHelper>
          </>
        )}
      </InputElWrapper>
    </Root>
  );
}
PasswordField.propTypes = {
  name: PropTypes.string,
};

export function CheckBox({
  id,
  htmlFor,
  label,
  name,
  value,
  onChange,
  register,
  helper,
  required,
  readOnly,
  dialoglabel,
  defaultChecked,
  ...otherProps
}: StyleProps) {
  const theme = useTheme();
  return (
    <InputElWrapper custom>
      <InputLabel htmlFor={htmlFor}>
        {register ? (
          <InputOriginalEl
            id={id}
            name={name}
            type="checkbox"
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            defaultChecked={defaultChecked}
            {...otherProps}
            {...register(name)}
          />
        ) : (
          <InputOriginalEl
            id={id}
            name={name}
            type="checkbox"
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            defaultChecked={defaultChecked}
            {...otherProps}
          />
        )}
        <InputOriginalElCustom />
        <InputLabelLabel>
          <InputLabel
            htmlFor={htmlFor}
            color={theme.palette.mode === "dark" ? "#DADADA" : Colors.greyDark}
            style={{ color: dialoglabel ? Colors.greyDark : "" }}
          >
            {label} {required ? <sup style={{ color: "#F43F5E" }}>*</sup> : ""}
          </InputLabel>
        </InputLabelLabel>
      </InputLabel>
      <FormHelper>{helper}</FormHelper>
    </InputElWrapper>
  );
}

export function SwitchField({
  id,
  name,
  value,
  register,
  onChange,
  helper,
  label,
  ...otherProps
}: StyleProps) {
  return (
    <InputElWrapper>
      {register ? (
        <SwitchStyle
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          {...otherProps}
          {...register(name)}
        />
      ) : (
        <SwitchStyle
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          {...otherProps}
        />
      )}
      <FormHelper>{helper}</FormHelper>
    </InputElWrapper>
  );
}

export function RadioButton({
  checked,
  id,
  htmlFor,
  vmargin,
  hmargin,
  name,
  value,
  label,
  onChange,
  required,
  dialoglabel,
  helper,
  ...otherProps
}: StyleProps) {
  const theme = useTheme();
  return (
    <InputElWrapper custom>
      <InputLabel
        htmlFor={htmlFor}
        pointer
        flex
        vmargin={vmargin}
        hmargin={hmargin}
      >
        <InputOriginalEl
          id={id}
          name={name}
          type="radio"
          value={value}
          onChange={onChange}
          checked={checked}
          {...otherProps}
        />
        <InputRadioElCustom />
        <InputLabel
          htmlFor={htmlFor}
          color={theme.palette.mode === "dark" ? "#DADADA" : Colors.greyDark}
          style={{ color: dialoglabel ? Colors.greyDark : "" }}
        >
          {label} {required ? <sup style={{ color: "#F43F5E" }}>*</sup> : ""}
        </InputLabel>
      </InputLabel>
      <FormHelper>{helper}</FormHelper>
    </InputElWrapper>
  );
}
export function Radio({
  checked,
  id,
  htmlFor,
  vmargin,
  hmargin,
  name,
  value,
  label,
  onChange,
  register,
  required,
  dialoglabel,
  helper,
  ...otherProps
}: StyleProps) {
  const theme = useTheme();
  return (
    <InputElWrapper custom>
      <InputLabel
        htmlFor={htmlFor}
        pointer
        flex
        vmargin={vmargin}
        hmargin={hmargin}
      >
        {register ? (
          <InputOriginalEl
            id={id}
            name={name}
            type="radio"
            value={value}
            onChange={onChange}
            checked={checked}
            {...otherProps}
            {...register(name)}
          />
        ) : (
          <InputOriginalEl
            id={id}
            name={name}
            type="radio"
            value={value}
            onChange={onChange}
            {...otherProps}
          />
        )}
        <InputRadioElCustom />
        <InputLabel
          htmlFor={htmlFor}
          color={theme.palette.mode === "dark" ? "#DADADA" : Colors.greyDark}
          style={{ color: dialoglabel ? Colors.greyDark : "" }}
        >
          {label} {required ? <sup style={{ color: "#F43F5E" }}>*</sup> : ""}
        </InputLabel>
      </InputLabel>
      <FormHelper>{helper}</FormHelper>
    </InputElWrapper>
  );
}
export function MoneyTextField({
  id,
  name,
  htmlFor,
  label,
  type,
  onChange,
  disabled,
  helper,
  error,
  register,
  onKeyUp,
  onFocus,
  value,
  onKeyDown,
  onKeyPress,
  field,
  onBlur,
  dialoglabel,
  required,
  ...otherProps
}: NumberProps) {
  const theme = useTheme();
  return (
    <InputElWrapper>
      <InputLabel
        htmlFor={htmlFor}
        color={theme.palette.mode === "dark" ? "#DADADA" : Colors.greyDark}
        style={{ color: dialoglabel ? Colors.greyDark : "" }}
      >
        {label} {required ? <sup style={{ color: "#F43F5E" }}>*</sup> : ""}
      </InputLabel>
      {register ? (
        <NumberInputElement
          id={id}
          name={name}
          value={value}
          type="text"
          prefix={"₦ "}
          onChange={onChange}
          thousandsGroupStyle="thousand"
          thousandSeparator={true}
          allowEmptyFormatting={true}
          allowNegative={false}
          fixedDecimalScale={true}
          {...otherProps}
          {...register(name)}
        />
      ) : (
        <NumberInputElement
          id={id}
          name={name}
          value={value}
          type="text"
          prefix={"₦ "}
          onChange={onChange}
          thousandsGroupStyle="thousand"
          thousandSeparator={true}
          // allowEmptyFormatting={true}
          allowNegative={false}
          fixedDecimalScale={true}
          {...otherProps}
        />
      )}
    </InputElWrapper>
  );
}
export function OutlinedSearch({
  style,
  id,
  name,
  htmlFor,
  label,
  value,
  borderBottom,
  onChange,
  onClick,
  ghost,
  ...otherProps
}: StyleProps) {
  return (
    <InputElWrapper style={style}>
      <NewSearchIconStyle>
        <SearchIcon onClick={onClick} />
      </NewSearchIconStyle>
      <OutlinedSearchElement
        ghost={ghost}
        id={id}
        name={name}
        borderBottom={borderBottom}
        type="search"
        value={value}
        onChange={onChange}
        {...otherProps}
      />
    </InputElWrapper>
  );
}
export function ShadowedSearch({
  style,
  id,
  name,
  htmlFor,
  label,
  value,
  onClick,
  onChange,
  ...otherProps
}: StyleProps) {
  return (
    <Root style={style}>
      <InputElWrapper>
        <SearchInputElement
          id={id}
          name={name}
          type="search"
          value={value}
          onChange={onChange}
          {...otherProps}
        />
        <ShadowedSearchIconStyle>
          <SearchIcon onClick={onClick} />
        </ShadowedSearchIconStyle>
      </InputElWrapper>
    </Root>
  );
}
export const MultipleSelectField = ({
  id,
  htmlFor,
  name,
  value,
  label,
  required,
  onChange,
  register,
  options,
  isMulti,
  getOptionValue,
  isSearchable,
  closeMenuOnSelect,
  hideSelectedOptions,
  dialoglabel,
  ...otherProps
}: StyleProps) => {
  const theme = useTheme();
  return (
    <InputElWrapper>
      <InputLabel
        htmlFor={htmlFor}
        color={theme.palette.mode === "dark" ? "#DADADA" : Colors.greyDark}
        style={{ color: dialoglabel ? Colors.greyDark : "" }}
      >
        {label} {required ? <sup style={{ color: "#F43F5E" }}>*</sup> : ""}
      </InputLabel>
      {register ? (
        <MultiSelect
          classNamePrefix={"Select"}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          options={options}
          isMulti={isMulti}
          getOptionValue={getOptionValue}
          isSearchable={isSearchable}
          hideSelectedOptions={hideSelectedOptions}
          components={{
            animatedComponents,
            DropdownIndicator,
            IndicatorSeparator: () => null,
          }}
          {...otherProps}
          {...register(name)}
        />
      ) : (
        <MultiSelect
          classNamePrefix={"Select"}
          id={id}
          name={name}
          value={value}
          options={options}
          onChange={onChange}
          isMulti={isMulti}
          getOptionValue={getOptionValue}
          isSearchable={isSearchable}
          hideSelectedOptions={hideSelectedOptions}
          closeMenuOnSelect={closeMenuOnSelect}
          components={{
            animatedComponents,
            DropdownIndicator,
            IndicatorSeparator: () => null,
          }}
          {...otherProps}
        />
      )}
    </InputElWrapper>
  );
};
const MySelect = (props: any) => {
  if (props.allowSelectAll) {
    return (
      <InputElWrapper>
        <MultiSelect
          classNamePrefix={"Select"}
          options={[props?.allOption, ...props?.options]}
          placeholder=""
          hideSelectedOptions={false}
          allowSelectAll={false}
          closeMenuOnSelect={false}
          isMulti
          onChange={(selected: any) => {
            if (
              selected !== null &&
              selected.length > 0 &&
              selected[selected.length - 1].value === props.allOption.value
            ) {
              return props.onChange(props.options);
            }
            return props.onChange(selected);
          }}
          {...props}
        />
      </InputElWrapper>
    );
  }
  return (
    <InputElWrapper>
      <MultiSelect
        hideSelectedOptions={false}
        allowSelectAll={false}
        closeMenuOnSelect={false}
        isMulti
        classNamePrefix={"Select"}
        placeholder=""
        onBlur={props.onBlur}
        components={{
          Option,
          MultiValue,
          animatedComponents,
          DropdownIndicator,
          IndicatorSeparator: () => null,
        }}
        {...props}
      />
    </InputElWrapper>
  );
};

MySelect.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  onChange: PropTypes.func,
  allowSelectAll: PropTypes.bool,
  allOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
};

MySelect.defaultProps = {
  allOption: {
    label: "Select all",
    value: "*",
  },
};

export default MySelect;
