import { render, screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import MOCK_DATA from "../Mocks/ResCardMock";
import "@testing-library/jest-dom";


it("Should Load Restaurant Card with data", () =>{
    render(<ResturantCard resData={MOCK_DATA} />)

    const name = screen.getByText("Salad Days");

    expect(name).toBeInTheDocument();
})