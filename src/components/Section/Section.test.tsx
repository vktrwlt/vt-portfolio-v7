import { render, fireEvent } from '@/utils/test-utils';
import { Section } from './Section';

describe('<Section />', () => {
  const { container } = render(<Section>Section</Section>);
  it('should render without crashing', () => {
    expect(container).toBeInTheDocument();
  });
});
