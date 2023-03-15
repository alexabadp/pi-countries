import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "../components/Card/Card";

it("renders content", () => {
  const country = {
    name: "Republic of Peru",
    continent: "South America",
  };

  const component = render(
    <Card name={country.name} dietTypes={country.continent} />
  );

  expect(component.container).toHaveTextContent(country.name);
});
