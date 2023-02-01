import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AboutUs from './AboutUs'

test('should contain H1 tag at top', () => {
    render(<AboutUs />)
    const linklement = screen.getByText(/RWD/i)
    expect(linklement).toBeInTheDocument();
})

test('should contain H3 tag as page Name', () => {
    render(<AboutUs />)
    const linklement = screen.getByRole('heading', { name: "AboutUs" })
    expect(linklement).toBeInTheDocument();
})
//getBy
test('should contain a paragraph ', () => {
    render(<AboutUs />)
    const linklement = screen.getByRole('img')
    expect(linklement).toBeInTheDocument();
})
//Title Sematic tag title='x'
test('checking for the Title ', () => {
    render(<AboutUs />)
    const linklement = screen.getByTitle('AboutUs')
    expect(linklement).toBeInTheDocument();
})
//TestID data-testid
test('checking for the Image Div ', () => {
    render(<AboutUs />)
    const linklement = screen.getByTestId('Img div')
    expect(linklement).toBeInTheDocument();
})
//FindBy Asynchronous
test('checking for the Image Div ===> Async await', async () => {
    render(<AboutUs />)
    const linklement = await screen.findByTestId('Img div')
    expect(linklement).toBeInTheDocument();
})
//QueryBy
test('Absence of Stupid text ', () => {
    render(<AboutUs />)
    const linklement = screen.queryByText(/board-certifid/i)
    expect(linklement).not.toBeInTheDocument();
})

//getAllBy
test('Only 2Headers Required in the Page ', () => {
    render(<AboutUs />)
    const linklement = screen.getAllByRole('heading')
    expect(linklement.length).toBe(2)
})
