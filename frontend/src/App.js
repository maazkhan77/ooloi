import TableScreen from "./Screens/TableScreen";
import { config1, config2, config3, config4 } from "./jsonConfig";

import data from "./data";
import TableTitle from "./Components/Heading";

function App() {
  return (
    <div className="App">
      <TableTitle>Table 1</TableTitle>

      <TableScreen data={data} config={config1} />

      <TableTitle>Table 2</TableTitle>
      
      <TableScreen data={data} config={config2} />

      <TableTitle>Table 3</TableTitle>

      <TableScreen data={data} config={config3} />

      <TableTitle>Table 4</TableTitle>

      <TableScreen data={data} config={config4} />
    </div>
  );
}

export default App;
