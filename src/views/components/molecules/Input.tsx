type Props = {
  labelName: string;
  type: string;
  name: string;
  wrapperStyle?: string;
  labelStyle?: string;
  inputStyle?: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// FIXME: change name LabeledInput
const Input = (props: Props) => {
  const {
    labelName,
    type,
    name,
    wrapperStyle,
    labelStyle,
    inputStyle,
    changeHandler,
  } = props;

  return (
    <div className={`flex flex-col mb-4 ${wrapperStyle}`}>
      <label className={`${labelStyle}`}>{labelName}</label>
      <input
        className={`focus:outline-none border ${inputStyle}`}
        type={type}
        name={name}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Input;
