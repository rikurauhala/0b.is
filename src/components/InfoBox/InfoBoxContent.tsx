import ReactMarkdown from 'react-markdown';

interface InfoBoxContentProps {
  content: string
}

const InfoBoxContent = ({ content }: InfoBoxContentProps): JSX.Element => (
  <ReactMarkdown>
    {content}
  </ReactMarkdown>
);

export default InfoBoxContent;
