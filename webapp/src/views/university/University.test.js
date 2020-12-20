import { render, screen } from "@testing-library/react";
import University from "./University";

test("renders learn react link", () => {
  render(<University />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
