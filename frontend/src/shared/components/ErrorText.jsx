import { CanvassaText } from "./CanvassaText";

export const ErrorText = ({ error }) => {
  return (
    <CanvassaText
      style={{
        fontSize: "1.5rem",
        color: "#c70e0e",
        marginBottom: "2rem",
      }}
    >
      {error}
    </CanvassaText>
  );
};
