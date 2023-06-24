import React, { useEffect, useRef, useState } from 'react'
import BlinkingCursor from './BlinkingCursor'

const TypeWriterText = ({text}) => {
  const [isTyping, setIsTyping] = useState(true)
  const typewriterRef = useRef()
  useEffect(() => {
    function type(index) {
      typewriterRef.current.innerText = text.slice(0, index);
      if (index < text.length) {
        index += Math.random() * 10;
        setTimeout(
          () => requestAnimationFrame(() => type(index)),
          50
        );
      } else {
        setTimeout(
          () => setIsTyping(false),
          2000
        )
      }
    }
    type(0);
  }, [text])
  return (
    <>
      <span className="text-start" ref={typewriterRef}></span>{isTyping && <BlinkingCursor/>}
    </>
  )
}

export default TypeWriterText
