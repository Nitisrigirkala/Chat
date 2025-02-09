// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import Logo from "../assets/logo.svg";

// export default function Register() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert("form");
//   };
//   const handleChange = (event) => {};
//   return (
//     <>
//       <FormContainer>
//         <form onSubmit={(event) => handleSubmit(event)}>
//           <div className="brand">
//             <img src={Logo} alt="Logo" />
//             <h1>snappy</h1>
//           </div>
//           <input
//             type="text"
//             placeholder="Username"
//             name="username"
//             onChange={(e) => handleChange(e)}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             name="email"
//             onChange={(e) => handleChange(e)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             onChange={(e) => handleChange(e)}
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             name="confirmPassword"
//             onChange={(e) => handleChange(e)}
//           />
//           <button type="submit">Create User</button>
//           <span>
//             Already have an account ? <Link to="/login">Login.</Link>
//           </span>
//         </form>
//       </FormContainer>
//     </>
//   );
// }

// const FormContainer = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 1rem;
//   align-items: center;
//   background-color: #131324;
//   .brand {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     justify-content: center;
//     img {
//       height: 5rem;
//     }
//     h1 {
//       color: white;
//       text-transform: uppercase;
//     }
//   }

//   form {
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//     background-color: #00000076;
//     border-radius: 2rem;
//     padding: 3rem 5rem;
//   }
//   input {
//     background-color: transparent;
//     padding: 1rem;
//     border: 0.1rem solid #4e0eff;
//     border-radius: 0.4rem;
//     color: white;
//     width: 100%;
//     font-size: 1rem;
//     &:focus {
//       border: 0.1rem solid #997af0;
//       outline: none;
//     }
//   }
//   button {
//     background-color: #4e0eff;
//     color: white;
//     padding: 1rem 2rem;
//     border: none;
//     font-weight: bold;
//     cursor: pointer;
//     border-radius: 0.4rem;
//     font-size: 1rem;
//     text-transform: uppercase;
//     &:hover {
//       background-color: #4e0eff;
//     }
//   }
//   span {
//     color: white;
//     text-transform: uppercase;
//     a {
//       color: #4e0eff;
//       text-decoration: none;
//       font-weight: bold;
//     }
//   }
// `;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  };

  const handleChange = (event) => {};

  return (
    <Container>
      <FormWrapper>
        <div className="brand">
          <img src={Logo} alt="Logo" />
          <h1>Snappy</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your username"
            name="username"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            onChange={handleChange}
          />
          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </FormWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #ff9966, #ff5e62); /* Sunset Gradient */
`;

const FormWrapper = styled.div`
  background: rgba(54, 33, 89, 0.9); /* Deep Purple Glassmorphism */
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 380px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  .brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;

    img {
      height: 60px;
    }

    h1 {
      color: #ffffff;
      font-size: 2rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  input {
    padding: 14px;
    border-radius: 10px;
    border: none;
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease-in-out;
    text-align: center;

    &:focus {
      background: rgba(255, 255, 255, 0.4);
    }
  }

  button {
    background: #007bff; /* Royal Blue */
    color: white;
    padding: 14px;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 10px;
    transition: background 0.3s ease-in-out;
    box-shadow: 0px 4px 10px rgba(0, 123, 255, 0.5);

    &:hover {
      background: #0056b3; /* Darker Blue */
    }
  }

  p {
    color: #dcdcdc;
    font-size: 0.9rem;
    margin-top: 1rem;

    a {
      color: #ffcc00; /* Golden Yellow */
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
