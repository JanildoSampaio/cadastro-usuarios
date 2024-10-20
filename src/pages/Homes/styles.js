import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
  display: flex;
  flex-direction: column;
  align-items: center;  
  padding: 1.25rem;
  height: 100vh;
`;

// export const BannerTtop = styled.div`
//   background: linear-gradient(to right, #fe7e5d, #7f3841);
//   height: 30vh;
//   width: 50vw;
//   border-radius: 1.875rem;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   img {
//     max-width: 100%;
//     max-height: 100%;
//   }
// `;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width:fit-content;
  gap: 1.25rem;

  h1 {
    color: #ffffff;
    font-size: 2rem;
    font-weight: 700;
    margin-top: 1.25rem;
  }
`;

export const InputUser = styled.input`
    border-radius: 0.625rem;
    border: 0.0625rem solid #ffffff;
    padding: 0.625rem;
    width: 18.75rem;
    outline: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    

`;
export const Label = styled.label`
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: 700;
    

    span {
        color: #fe7e5d;
        font-weight: 700;
    }

`;
