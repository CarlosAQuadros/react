import { fireEvent,render, screen } from "@testing-library/react"
import Button from "."

describe('<Button/>', () => {
    test('should render the button with text', () => {
        render(<Button text='load more' />);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument()

    });
    test('should call a function on button click', () => {
        const fn = jest.fn()
        render(<Button text='load more' onClick={fn} />);


        const button = screen.getByRole('button', { name: /load more/i });
        fireEvent.click(button)
        expect(fn).toBeCalledTimes(1)

    });
    test('should be disabled when disabled is true', () => {
        render(<Button text='load more' disabled={true} />);
        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeDisabled()

    });
    test('should match snapshot', () => {
        const {container}= render(<Button text='load more' disabled={true} />);
        const button = screen.getByRole('button', { name: /load more/i });
        expect(button.firstChild).toMatchSnapshot()

    });
})