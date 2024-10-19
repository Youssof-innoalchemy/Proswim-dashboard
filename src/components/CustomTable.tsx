import Button from "./Button";

const CustomTable = <T,>({
  title,
  headers,
  data,
  limtedBy,
}: {
  title: string;
  headers: { label: string; data: (row: T) => React.ReactNode }[];
  data: T[];
  limtedBy?: number;
}) => {
  return (
    <div className="bg-white p-7 rounded-lg h-full flex flex-col">
      <div className="text-xl text-primary font-semibold">{title}</div>
      <table className="w-full rounded-md my-4">
        <thead className="bg-[#edf6ff]">
          <tr>
            {headers.map((header, index) => (
              <td
                key={index}
                className="first:rounded-s-xl last:rounded-e-xl py-2 px-3"
              >
                {header.label}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(0, limtedBy ?? -1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td
                  key={colIndex}
                  className="border-b first:pl-4 border-gray-400 py-2 px-3"
                >
                  {header.data(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-auto">
        <Button title="Details" onClick={() => {}} />
      </div>
    </div>
  );
};

export default CustomTable;
