import React, { useState } from "react";
import * as XLSX from "xlsx";

const ParseExcelComp = () => {
  const [fileName, setFileName] = useState(null);
  const [columns, setColumns] = useState<any>([]);

  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];

    setFileName(file.name);
    const data = await file.arrayBuffer();
    const workBook = XLSX.readFile(data, { sheetRows: 5 });

    const worksheet = workBook.Sheets[workBook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: 1,
      defval: "",
    });

    setColumns(jsonData[0]);

    console.log(jsonData);
  };

  return (
    <>
      <div>
        <h1>Parse Excel</h1>
        {fileName && (
          <React.Fragment>
            <p>
              FileName: <span>{fileName}</span>
            </p>

            <p>
              Column:
              <select>
                {columns.map((column: any) => (
                  <option value={column}>{column}</option>
                ))}
              </select>
            </p>
          </React.Fragment>
        )}
        <input type="file" onChange={(e) => handleFileChange(e)} />
      </div>
    </>
  );
};

export default ParseExcelComp;
