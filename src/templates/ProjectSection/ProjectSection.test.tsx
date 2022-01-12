import { render, fireEvent } from '@/utils/test-utils';
import { ProjectSection } from './ProjectSection';

describe('<ProjectSection />', () => {
  const { container } = render(<ProjectSection>ProjectSection</ProjectSection>);
  it('should render without crashing', () => {
    expect(container).toBeInTheDocument();
  });
});
