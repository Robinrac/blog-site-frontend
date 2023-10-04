import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import BlogPosts from "./src/components/homePage/components/blogPosts";

jest.mock("axios");
//test

describe("BlogPosts Component", () => {
  const mockData = {
    data: [
      {
        id: 1,
        title: "Test Blog 1",
        date: "2023-10-02",
        description: "Description for Test Blog 1",
      },
      {
        id: 2,
        title: "Test Blog 2",
        date: "2023-10-03",
        description: "Description for Test Blog 2",
      },
    ],
  };

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockData });
  });

  it("renders blog titles and descriptions", async () => {
    render(<BlogPosts />);

    await waitFor(() => {
      expect(screen.getByText("Test Blog 1")).toBeInTheDocument();
      expect(screen.getByText("Test Blog 2")).toBeInTheDocument();
      expect(screen.getByText("Description for Test Blog 1")).toBeInTheDocument();
      expect(screen.getByText("Description for Test Blog 2")).toBeInTheDocument();
    });
  });

  it("displays an error message if fetching data fails", async () => {
    axios.get.mockRejectedValue(new Error("Network error"));

    render(<BlogPosts />);

    await waitFor(() => {
      expect(screen.getByText("Error fetching blog posts: Network error")).toBeInTheDocument();
    });
  });
});
