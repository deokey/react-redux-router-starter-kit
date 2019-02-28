import styled from 'styled-components';
import {
  UNISON_PRIMARY_BG,
  UNISON_PRIMARY,
  ERROR_COLOR,
  LINK_COLOR,
} from './variables';

export const StyledAuth = styled.section`
  padding: 10px;
  background: ${props => props.background || UNISON_PRIMARY_BG};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;

  .text-area {
    padding: 10px;
    &:focus {
      outline: none;
    }
  }

  .auth-link {
    color: white;
    display: flex;
    margin-top: 10px;
    justify-content: center;
    font-size: 1em;
    font-weight: lighter;
    :hover {
      color: ${LINK_COLOR};
    }
  }

  .form {
    padding: 10px;
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .input {
    background-color: white;
    display: flex;
    margin-bottom: 30px;
    border-width: 1px;
    border-style: solid;
    border-color: grey;
    border-image: initial;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    input {
      /* font-size: 32px; */
      height: 8vh;
      width: 100%;
      border-width: 0px;
      border-style: initial;
      border-color: initial;
      border-image: initial;
      border-radius: 25px;
    }
  }

  .button {
    background-color: ${UNISON_PRIMARY};
    color: white;
    font-size: 20px;
    height: 6.5vh;
    font-weight: lighter;
    width: 100%;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 25px;
    outline: none;
    cursor: pointer;
  }

  .show-password {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    button {
      background: none !important;
      border: none;
      color: white;
      font-size: 16px;
      padding-top: 8px;
      margin-bottom: 30px;
    }
  }

  .nav-link {
    padding-top: 21px;
  }

  .pass-link {
    color: white;
    margin-bottom: 30px;
    margin-right: 10px;
    font-size: 16px;
    &:hover {
      cursor: pointer;
    }
  }

  .error {
    color: ${ERROR_COLOR};
    font-size: 1em;
    margin-bottom: 20px;
  }

  .input {
    margin-bottom: 5px;
  }
`;
