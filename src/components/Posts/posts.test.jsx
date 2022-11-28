import { fireEvent, render, screen } from "@testing-library/react"
import { Posts } from "."

const props = [
    {
        id: 1,
        title: 'title1',
        body: 'body1',
        cover: 'img/img1.png'
    },
    {
        id: 2,
        title: 'title2',
        body: 'body2',
        cover: 'img/img2.png'
    },
    {
        id: 3,
        title: 'title3',
        body: 'body3',
        cover: 'img/img3.png'
    },
]


describe('<Posts/>', () => {
    test('should render posts', () => {
        render(<Posts posts={props} />)
        expect(screen.getAllByRole('heading', { name: /title/i }))
            .toHaveLength(3)
        expect(screen.getAllByRole('img', { name: /title/i }))
            .toHaveLength(3)
        expect(screen.getAllByText(/body/i))
            .toHaveLength(3)
        expect(screen.getByRole('img', { name: /title3/i }))
            .toHaveAttribute('src', 'img/img3.png')
    })
    test('should match snapshot', () => {
        const {container}= render(<Posts posts={props} />)
        expect(container.firstChild).toMatchSnapshot()
  
    })

});

