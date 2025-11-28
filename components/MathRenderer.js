import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function MathRenderer({ text }) {
  const parts = [];
  const regex = /\${1,2}([^$]+)\${1,2}/g;

  let last = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const before = text.slice(last, match.index);
    if (before) parts.push(before);

    const math = match[1];
    if (match[0].startsWith("$$")) {
      parts.push(<BlockMath math={math} />);
    } else {
      parts.push(<InlineMath math={math} />);
    }

    last = regex.lastIndex;
  }

  const after = text.slice(last);
  if (after) parts.push(after);

  return <div>{parts}</div>;
}
