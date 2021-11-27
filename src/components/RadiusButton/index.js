import { colors } from "../../constants/colors";
import styled from "styled-components";
import { respondTo } from "../../utils/responsive";

export const RadiusButton = styled.button`
  border: 1px solid ${colors.white};
  border-radius: 20px;
  padding: 34px 0;
  width: 324px;
  font-size: 24px;
  color: ${colors.white};
  background: ${colors.black};
  ${respondTo.md} {
    border-radius: 10px;
    padding: 24px 0;
    width: 208px;
    font-size: 16px;
  }
`