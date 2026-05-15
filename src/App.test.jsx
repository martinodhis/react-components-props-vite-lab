import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders blog name", () => {
  render(<App />);
  const blogName = screen.getByText(/My Personal Blog/i);
  expect(blogName).toBeInTheDocument();
});

test("renders about section", () => {
  render(<App />);
  const aboutText = screen.getByText(/Welcome to my blog/i);
  expect(aboutText).toBeInTheDocument();
});

test("renders article titles", () => {
  render(<App />);
  const articleTitle = screen.getByText(/Getting Started with React/i);
  expect(articleTitle).toBeInTheDocument();
});