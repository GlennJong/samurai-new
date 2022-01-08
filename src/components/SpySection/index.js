import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import scrollSpy from '../../store/scrollSpy'
import useIntersectionObserver from '../../utils/useIntersectionObserver';

const SpySection = ({ id, children }) => {
  const rootRef = useRef(null);
  const dispatch = useDispatch(scrollSpy);

  useIntersectionObserver(rootRef, handleIntersection, {
    root: null,
    rootMargin: '0px 0px -20% 0px',
    threshold: 0
  })

  function handleIntersection(e) {
    if (e[0].isIntersecting) {
      dispatch(scrollSpy.actions.setSpy(id));
    };
  }

  return (
    <Root ref={rootRef} id={id}>
      { children }
    </Root>
  )
}


const Root = styled.div`
`

export default SpySection