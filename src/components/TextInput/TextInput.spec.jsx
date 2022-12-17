import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TextInput } from "."


describe('<TextInput', () => {

    const fn = jest.fn()

    test('should have a value of searchValue', () => {
        const { debug } = render(<TextInput handleChange={fn} searchValue={'testando'} />)

        const input = screen.getByPlaceholderText(/type your search/i);
        expect(input).toBeInTheDocument()
        expect(input.value).toBe('testando')

    })
    test('should call handlechange funtion on each key pressed', () => {
        render(<TextInput handleChange={fn}/>)

        const input = screen.getByPlaceholderText(/type your search/i);
        const value = 'o valor'

        userEvent.type(input,value)
        expect(input.value).toBe(value)
        expect(fn).toHaveBeenCalledTimes(value.length)
    })
    test('should match snapshot', () => {
       const {container}= render(<TextInput handleChange={fn}/>)

        expect(container).toMatchSnapshot()
    })
})

