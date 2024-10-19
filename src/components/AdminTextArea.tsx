const AdminTextArea = ({
  input,
  handleChange,
  label,
}: {
  input: string;
  handleChange: (s: string) => void;
  label: string;
}) => {
  return (
    <div className="w-full mb-3">
      <div className="text-primary font-semibold text-lg mb-2">{label}</div>
      <textarea
        value={input}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
        className="w-full border-2 border-primary rounded-2xl py-3 px-2 text-primary font-semibold focus-visible:outline-none h-[150px]"
      />
    </div>
  );
};

export default AdminTextArea;
