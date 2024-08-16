export const RadioGroup = ({ label, children }) => (
    <fieldset className="radio-container">
      <legend>{label}</legend>
      {children}
    </fieldset>
  );