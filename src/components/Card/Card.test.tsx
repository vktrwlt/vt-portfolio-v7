import { render, fireEvent } from '@/utils/test-utils';
import { Card } from './Card';

describe('<Card />', () => {
  const { container } = render(
    <Card
      title='NetBase On-Tour'
      body='Migrated event microsite from WordPress to JAMstack and improved page load speeds by 43%'
      bgColor='bg-red-200'
      url='/project/netbase-on-tour'
    />
  );
  it('should render without crashing', () => {
    expect(container).toBeInTheDocument();
  });
});
