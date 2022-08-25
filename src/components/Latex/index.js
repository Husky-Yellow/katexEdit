import { memo } from 'react';
const Latex = require('react-latex');

const Katex = memo(({ children }) => <Latex> {children}</Latex>);

export default Katex;
