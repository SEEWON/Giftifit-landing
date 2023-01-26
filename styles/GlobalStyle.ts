import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
body {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  min-width: 1280px;
	&::-webkit-scrollbar {
    display: none;
  }
}
`;
export default GlobalStyle;
