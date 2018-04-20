import React from 'react';
import { bounceIn, fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`${bounceIn}`;

const BouncyDiv = styled.div`
	animation: 1s ${bounceAnimation};
`;

const TestAnimation = () => (
	<BouncyDiv>
		<p>hello from test animation</p>
	</BouncyDiv>
);

export default TestAnimation;
