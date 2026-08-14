import styled from 'styled-components';

export default styled.div<{
    margintop?: string;
    marginbottom?: string;
    marginleft?: string;
    marginright?: string;
}>`
    margin-top: ${(props) => props.margintop || 0};
    margin-bottom: ${(props) => props.marginbottom || 0};
    margin-left: ${(props) => props.marginleft || 0};
    margin-right: ${(props) => props.marginright || 0};
`;
