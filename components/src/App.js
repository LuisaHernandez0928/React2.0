import "./App.css";
import Cascader from "./components/cascader";
import ComboBox from "./components/combobox";
import CustomCascader from "./components/customCascader";

const App = () => {
  const opciones = [
    "Toy Story 1",
    "El museo del oro",
    "Cacería en venecia",
    "Como entrenar a tu dragón",
    "Atlas de las nubes",
    "Hotel budapest",
    "Lista de Schilldner",
  ];

  const menusDesplegables = [
    {
      label: "Mazda",
      value: "mazda",
      children: [
        {
          label: "SUV",
          value: "suv",
          children: [
            {
              label: "Mazda CX4",
              value: "mazda_cx4",
            },
            {
              label: "Mazda RX8",
              value: "mazda_rx8",
            },
          ],
        },
        {
          label: "Sedán",
          value: "sedan",
          children: [
            {
              label: "Mazda 2",
              value: "mazda_2",
            },
            {
              label: "Mazda 3",
              value: "mazda_3",
            },
          ],
        },
      ],
    },
    {
      label: "Porsche",
      value: "porsche",
      children: [
        {
          label: "Sedan",
          value: "sedan",
          children: [
            {
              label: "Porsche 911",
              value: "porsche_911",
            },
            {
              label: "Porsche Tucan",
              value: "porsche_tucan",
            },
          ],
        },
        {
          label: "Sports",
          value: "sports",
          children: [
            {
              label: "Porsche Carrera",
              value: "porsche_carrera",
            },
            {
              label: "Porsche Cayenne",
              value: "porsche_cayenne",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="App">
      <h3>ComboBox con Filtro</h3>
      <ComboBox options={opciones} />
      <h3>Cascader</h3>
      <CustomCascader options={menusDesplegables} />
    </div>
  );
};

export default App;
