import {render, screen, waitFor} from "@testing-library/react";
import App from "./App";

test("renders User Details App header", async () => {
  render(<App />);
  await waitFor(() => {
    const headerElement = screen.getByText((content, element) => {
      const text = content.trim();
      const pattern = /user details app/i;
      return pattern.test(text);
    });
    expect(headerElement).toBeInTheDocument();
  });
});
