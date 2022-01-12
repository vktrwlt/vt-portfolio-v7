import { render, fireEvent } from '@/utils/test-utils';
import { Layout } from './Layout';

describe('<Layout />', () => {
  it('should render without crashing', () => {
    const { container } = render(<Layout>Layout</Layout>);
    expect(container).toBeInTheDocument();
  });
});
