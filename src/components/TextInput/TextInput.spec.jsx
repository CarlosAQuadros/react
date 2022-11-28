import { fireEvent, render, screen } from "@testing-library/react"
import { TextInput } from "."


describe('<TextInput', () => {

    const fn = jest.fn()

    test('should call handlechange funtion on each key pressed', () => {
        const {debug} = render(<TextInput handleChange={fn} searchValue={'testando'} />)
        debug()
    })
})

