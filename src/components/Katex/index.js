import { memo } from 'react';
import katex from 'katex'

const renderkatex = (rawString) => {
  let __html = '';
  if (!rawString) return { __html };
  __html = rawString
    .replace(/\$([^\$]*)\$/gm, (_match, tex) => {
      let katexStr = '';
      try {
        katexStr = katex.renderToString(tex, { displayMode: false });
      } catch (e) {
        console.log(e);
      }
      return katexStr;
    })
    .replace(/(probimg|explimg)/gm, 'img');
  return { __html };
};

const Katex = memo(({ children }) => <div dangerouslySetInnerHTML={renderkatex(children)} />);

export default Katex;
