import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import EventPage from './EventPage'

test('contain Heading RWD at top of Page', () => {
    render(<EventPage />)
    const linkelement = screen.getByRole('heading', { name: "RWD" })
    expect(linkelement).toBeInTheDocument()
})

test('sub heading should be the below name attribute ', () => {
    render(<EventPage />)
    const linkelement = screen.getByRole('heading', { name: "Submit your details to get event updates" })
    expect(linkelement).toBeInTheDocument()
})

describe("input change", () => {

    test("change events", async () => {
        render(<EventPage />)
        const inputelement = screen.getByTestId('username')
        fireEvent.change(inputelement, { target: { value: 'PraveenyaraTesting' } })
        expect(inputelement.value).toBe('PraveenyaraTesting')

        fireEvent.blur(inputelement)
        const elment = screen.getByTestId('usererrormsg')
        expect(elment.textContent.length < 2)

        const inputelement2 = screen.getByTestId('email')
        fireEvent.change(inputelement2, { target: { value: 'PraveenyaraTesting@gmail.com' } })
        expect(inputelement2.value).toBe('PraveenyaraTesting@gmail.com')

        fireEvent.blur(inputelement2)
        const elment2 = screen.getByTestId('emailerrormsg')
        expect(elment2.textContent.length < 2)

        const inputelement3 = screen.getByTestId('contact')
        fireEvent.change(inputelement3, { target: { value: '9999999999' } })
        expect(inputelement3.value).toBe('9999999999')

        fireEvent.blur(inputelement3)
        const elment3 = screen.getByTestId('contacterrormsg')
        expect(elment3.textContent.length < 2)

        const submitElement = screen.getByRole('button', { name: 'Submit' })
        fireEvent.click(submitElement)

        // expect(inputelement.value).toBe('')
        // expect(inputelement2.value).toBe('')
        // expect(inputelement3.value).toBe('')



    })

})
