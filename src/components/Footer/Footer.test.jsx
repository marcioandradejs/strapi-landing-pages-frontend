import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer html={'<h1>Olá mundo</h1>'} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        text-align: center;
      }

      .c1 a {
        -webkit-text-decoration: none;
        text-decoration: none;
        color: inherit;
        font-size: 1.6rem;
      }

      .c2 {
        font-size: 2.4rem;
      }

      .c0 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
      }

      <div>
        <div
          class="c0"
        >
          <footer
            class="c1"
          >
            <div
              class="c2"
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
