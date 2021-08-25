import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer html={'<h1>Olá mundo</h1>'} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c4 {
        font-size: 2.4rem;
      }

      .c1 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
      }

      .c2 {
        text-align: center;
        border-top: 0.1rem solid #DDDDDD;
      }

      .c2 a {
        -webkit-text-decoration: none;
        text-decoration: none;
        color: inherit;
      }

      .c2 .c3 {
        font-size: 1.6rem;
      }

      .c2 .c0 {
        padding: .8rem;
      }

      <div>
        <div
          class="c0 c1"
        >
          <footer
            class="c2"
          >
            <div
              class="c3 c4"
            >
              <h1>
                Olá mundo
              </h1>
            </div>
          </footer>
        </div>
      </div>
    `);
  });
});
