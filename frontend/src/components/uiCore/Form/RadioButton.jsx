import { RadioButton as RadioButtons } from 'primereact/radiobutton';

const RadioButton = (props) => {
  const { label, inputId, ...prop } = props;
  return (
    <div className="flex align-items-center">
      <RadioButtons {...prop} inputId={inputId} />
      <label htmlFor={inputId} className="ml-2 text-[var(--primary-blue)] font-[600]">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
