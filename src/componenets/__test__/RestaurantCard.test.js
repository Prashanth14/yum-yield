import { render, screen } from "express/lib/response";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../../utils/mockData.json";


it("Should render Restaurat component with props Data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Bells N Pepper");

    expect(name).toBeInThedocument();
});