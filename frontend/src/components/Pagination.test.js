import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PaginationPage from "./PaginationPage"

test('checking the Props of Pagination ', () => {
    render(
        <PaginationPage data={
            [
                { username: 'praveen', email: 'praveenyara625@gmail.com', contact: '9492115550' },
                { username: 'praveen1', email: 'praveenyara6257@gmail.com', contact: '9492115559' },
                { username: 'praveen2', email: 'praveenyara6257@gmail.com', contact: '9492115559' },
                { username: 'praveen3', email: 'praveenyara6257@gmail.com', contact: '9492115559' },
                { username: 'praveen4', email: 'praveenyara6257@gmail.com', contact: '9492115559' },
                { username: 'praveen5', email: 'praveenyara6257@gmail.com', contact: '9492115559' },
                { username: 'praveen6', email: 'praveenyara6257@gmail.com', contact: '9492115559' }
            ]
        }
            currentPage={1}
        />
    )

    const linklement = screen.getByTestId('index0')
    const linklement2 = screen.getByTestId('index1')

    expect(linklement).toBeInTheDocument()
    expect(linklement2).toBeInTheDocument()



})
