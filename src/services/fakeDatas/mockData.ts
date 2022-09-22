const data = [
    {
      id: 1,
      name: "PhucDn",
      price: 2311.05,
      color: "red",
    },
    {
      id: 2,
      name: "VinhLq",
      price: 534.05,
      color: "white",
    },
    {
      id: 3,
      name: "TramHtk",
      price: 3434.05,
      color: "black",
    },
    {
      id: 4,
      name: "TaiPV",
      price: 45435.05,
      color: "red",
    },
  ];
  
  const arrData = [
    ["id", "name", "price", "color"],
    [1, "Hung", 2311.5, "red"],
    [2, "Phuong", 534.05, "white"],
    [3, "Khang", 3434.05, "black"],
    [4, "Hang", 2311.5, "red"],
  ];
  
  export const getData = () => {
    return data;
  };
  
  export const getArrData = () => {
    return arrData;
  };