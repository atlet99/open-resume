import { render, screen } from '@testing-library/react';
import ResumeBuilder from '../components/ResumeBuilder';

test('renders resume builder component', () => {
    render(<ResumeBuilder />);
    const linkElement = screen.getByText(/Export to JSON/i);
    expect(linkElement).toBeInTheDocument();
});
