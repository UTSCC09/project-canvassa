import { TitleText } from "./TitleText";

export const ErrorText = ({ error }) => {
  return (
    <TitleText
      style={{
        fontSize: "1.5rem",
        color: "#c70e0e",
        marginBottom: "2rem",
      }}
    >
      {error}
    </TitleText>
  );
};
