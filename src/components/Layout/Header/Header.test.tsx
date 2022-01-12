import { render, fireEvent } from '@/utils/test-utils';
import { Header } from './Header';

describe('<Header />', () => {
  it('should render without crashing', () => {
    const { container } = render(<Header>Header</Header>);
    expect(container).toBeInTheDocument();
  });
});
