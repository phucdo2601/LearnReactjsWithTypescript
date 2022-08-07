import {
  Button,
  Container,
  IconButton,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import { v4 as uuidv4 } from "uuid";
import {
  childFormulas,
  normalChars,
  numChars,
  options,
  symbolChars,
} from "../mockDatas/listMockData";
import { NormalCharModel } from "../models/NormalCharModel";
import { NumberCharModel } from "../models/NumberCharModel";
import { SymbolCharModel } from "../models/SymbolCharModel";
import { ChildFormulaModel } from "../models/ChildFormulaModel";
import { OptionModel } from "../models/OptionModel";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));
const FormulaDynamicForm = () => {
  const listNumChars: NumberCharModel[] = numChars;
  const listNormalChars: NormalCharModel[] = normalChars;
  const listSymbolChars: SymbolCharModel[] = symbolChars;
  const listChildFormula: ChildFormulaModel[] = childFormulas;
  const listOptions: OptionModel[] = options;

  const listNormalCharChoose: Array<any> = [];

  const listAllCharChoose: Array<any> = [];

  const [isNumberChar, setIsNumberChar] = useState<boolean>(false);
  const [isNormalChar, setIsNormalChar] = useState<boolean>(false);
  const [isSymbolChar, setIsSymbolChar] = useState<boolean>(false);
  const [isChildFormula, setIsChildFormula] = useState<boolean>(false);

  const [formulaMain, setFormulaMain] = useState("");

  const classes = useStyles();

  const [isSendClicked, setIsSendClicked] = useState(false);

  const dataArrInit = [
    {
      id: uuidv4(),
      value: "",
    },
  ];

  const [inputFields, setInputFields] = useState(dataArrInit);

  let letterCharRegx = /^[a-zA-Z]+$/;

  let formualString = "";

  const handleChangeInput = (index: any, e: any) => {
    const values: any = [...inputFields];
    values[index][e.target.name] = e.target.value;
    setInputFields(values);
  };

  const handleChangeInput2 = (index: any, e: any) => {
    const values: any = [...inputFields];
    values[index]["value"] = e.target.value;
    setInputFields(values);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSendClicked(true);
    console.log("InputFields: ", inputFields);
    inputFields.map((e) => {
      let t = e.value + " ";
      console.log("Gia tri phan tu trong mang: ", t);
      formualString += e.value + " ";
      listAllCharChoose.push(e.value);

      if (
        e.value.match(letterCharRegx) &&
        !listNormalCharChoose.includes(e.value)
      ) {
        listNormalCharChoose.push(e.value);
      }
    });
    console.log("List all characters: ", listAllCharChoose);
    console.log("List normal characters: ", listNormalCharChoose);
    console.log(`Formula chain: ${formualString}`);
    setFormulaMain(formualString.trim());
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(), value: "" }]);
  };

  const handleRemoveFields = (id: any) => {
    const values = [...inputFields];
    values.splice(values.findIndex((value) => value.id === id));
    setInputFields(values);
  };

  const handleOptChange = (e: any) => {
    console.clear();
    console.log(e.target.value);

    const optVal = e.target.value;

    if (optVal === "") {
      setIsNormalChar(false);
      setIsSymbolChar(false);
      setIsNumberChar(false);
      setIsChildFormula(false);
    }

    if (optVal === "alphabetChar") {
      setIsNormalChar(true);
      //   setIsSymbolChar(false);
      //   setIsNumberChar(false);
      //   setIsChildFormula(false);
    }
    if (optVal === "symbolChar") {
      setIsSymbolChar(true);
      //   setIsNormalChar(false);
      //   setIsNumberChar(false);
      //   setIsChildFormula(false);
    }
    if (optVal === "numberChar") {
      setIsNumberChar(true);
      //   setIsNormalChar(false);
      //   setIsSymbolChar(false);
      //   setIsChildFormula(false);
    }
    if (optVal === "childFormula") {
      setIsChildFormula(true);
      //   setIsNormalChar(false);
      //   setIsSymbolChar(false);
      //   setIsNumberChar(false);
    }
  };

  const handleNormalCharChange = (index: any, e: any) => {
    const values: Array<any> = [...inputFields];
    values[index]["value"] = e.target.value;
    setInputFields(values);
  };

  const handleSymbolCharChange = (index: any, e: any) => {
    const values: Array<any> = [...inputFields];
    values[index]["value"] = e.target.value;
    setInputFields(values);
  };

  const handleNumCharChange = (index: any, e: any) => {
    const values: Array<any> = [...inputFields];
    values[index]["value"] = e.target.value;
    setInputFields(values);
  };

  const handleChildFormulaChange = (index: any, e: any) => {
    const values: Array<any> = [...inputFields];
    values[index]["value"] = e.target.value;
    setInputFields(values);
  };

  return (
    <>
      <Container>
        <h1>Add new Formula</h1>

        <form className={classes.root} onSubmit={handleSubmit}>
          {inputFields.map((inputField, index) => (
            <>
              <div key={index}>
                {/* <TextField 
                                    name='firstName'
                                    label='First Name'
                                    value={inputField.firstName}
                                    variant="filled"
                                    onChange={(e) => handleChangeInput(index, e)}
                                    />

                                <TextField 
                                    name='lastName'
                                    label='Last Name'
                                    value={inputField.lastName}
                                    variant="filled"
                                    onChange={(e) => handleChangeInput(index, e)}

                                    /> */}
                <label>Choose Type:</label>
                <select onChange={(e: any) => handleOptChange(e)}>
                  <option></option>
                  {listOptions.map((opt: OptionModel) => (
                    <>
                      <option value={opt.value}>{opt.key}</option>
                    </>
                  ))}
                </select>

                {isNormalChar && (
                  <>
                    <label>Choose NormalChar:</label>
                    <select
                      onChange={(e: any) => handleNormalCharChange(index, e)}
                    >
                      <option></option>
                      {listNormalChars.map((opt: NormalCharModel) => (
                        <>
                          <option value={opt.value}>{opt.key}</option>
                        </>
                      ))}
                    </select>
                  </>
                )}

                {isNumberChar && (
                  <>
                    <label>Choose NumberChar:</label>
                    <select
                      onChange={(e: any) => handleNumCharChange(index, e)}
                      name="value"
                    >
                      <option></option>
                      {listNumChars.map((opt: NumberCharModel) => (
                        <>
                          <option value={opt.value}>{opt.key}</option>
                        </>
                      ))}
                    </select>

                    {/* <TextField
                      name="value"
                      label="Number"
                      value={inputField.value}
                      variant="filled"
                      onChange={(e) => handleChangeInput2(index, e)}
                    /> */}
                  </>
                )}

                {isSymbolChar && (
                  <>
                    <label>Choose SymbolChar:</label>
                    <select
                      onChange={(e: any) => handleSymbolCharChange(index, e)}
                    >
                      <option></option>
                      {listSymbolChars.map((opt: SymbolCharModel) => (
                        <>
                          <option value={opt.value}>{opt.key}</option>
                        </>
                      ))}
                    </select>
                  </>
                )}

                {isChildFormula && (
                  <>
                    <label>Choose ChildFormula:</label>
                    <select
                      onChange={(e: any) => handleChildFormulaChange(index, e)}
                    >
                      <option></option>
                      {listChildFormula.map((opt: ChildFormulaModel) => (
                        <>
                          <option value={opt.value}>{opt.key}</option>
                        </>
                      ))}
                    </select>
                  </>
                )}

                <IconButton
                  disabled={inputFields.length === 1}
                  onClick={() => handleRemoveFields(inputField.id)}
                >
                  <RemoveIcon />
                </IconButton>

                <IconButton onClick={handleAddFields}>
                  <AddIcon />
                </IconButton>
              </div>
            </>
          ))}

          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<Icon>send</Icon>}
            onClick={handleSubmit}
          >
            Send
          </Button>
        </form>

        <hr />

        {isSendClicked && (
          <>
            <h1>Cac thanh phan trong chuoi cong thuc: </h1>
            {inputFields.map((model, index) => (
              <div>{model.value}</div>
            ))}

            <h1>{`Chuoi cong thuc dc tao: ${formulaMain}`}</h1>
          </>
        )}
      </Container>
    </>
  );
};

export default FormulaDynamicForm;
