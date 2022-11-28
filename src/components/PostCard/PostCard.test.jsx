import { render, screen } from "@testing-library/react"
import { PostCard } from "."
import { postCardPropsMock } from "./mock"

const props = postCardPropsMock

describe('<PostCard/>', () => {
    test('should render PostCard correctly', () => {
        const { debug } = render(<PostCard {...props} />)

        expect(screen.getByRole('img', { name: 'title1' }))
            .toHaveAttribute('src', 'img/img.png')
        expect(screen.getByRole('heading', { name: 'title1 1' }))
            .toBeInTheDocument()
        expect(screen.getByText('body1'))
            .toBeInTheDocument()

    })
    test('should matc snapshot', () => {
        const { container } = render(<PostCard {...props} />)
        expect(container.firstChild).toMatchSnapshot()
    })
})