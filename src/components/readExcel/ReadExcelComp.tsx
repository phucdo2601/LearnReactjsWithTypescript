import React, { useState } from "react";
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  Col,
  Table,
  Input,
  Label,
} from "reactstrap";
import ExcelImportTool from "./ExcelImportTool";

const ReadExcelComp = () => {
  const [sheetData, setSheetData] = useState<any>(null);

  /**
   * bien state dat cai trang trong file excel
   */
  const [sheet, setSheet] = useState<any>(null);

  /**
   * bien state lay ten cua cai sheet trong file excel
   */
  const [sheetNames, setSheetNames] = useState<any>(null);

  /**
   * [Headers]
   * {Data}
   */
  const handleFileUploaded = (e: any) => {
    console.log("File Uploaded: ", e);

    if (e) {
      let sheetNames: any = Object.keys(e);
      setSheetNames(sheetNames);

      setSheet(Object.keys(e)[0]);
    } else {
      setSheetNames([]);
    }

    setSheetData(e);
  };

  const handleSheetChange = (e: any) => {
    setSheet(e.target.value);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h5 className="title">Read Excel</h5>
                <p className="category"></p>
              </CardHeader>
              <CardBody className="all-icons">
                <ExcelImportTool
                  onFileUploaded={(e: any) => handleFileUploaded(e)}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        {sheetData && (
          <>
            <Row>
              <Col md={12}>
                {sheetNames.map((s: any) => (
                  <div>
                    <input
                      type="radio"
                      name="sheetName"
                      value={s}
                      checked={s === sheet}
                      onChange={(e) => handleSheetChange(e)}
                    />
                    <label>{s}</label>
                  </div>
                ))}
              </Col>
            </Row>
            <Row>
              <Label>{sheet}</Label>
              <Col md={12}>
                <Table>
                  <thead className="text-primary">
                    <tr>
                      {sheetData[sheet][0].map((h: any) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sheetData[sheet].slice(1).map((row: any) => (
                      <tr>
                        {row.map((c: any) => (
                          <td>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </>
        )}
      </div>
    </>
  );
};

export default ReadExcelComp;
