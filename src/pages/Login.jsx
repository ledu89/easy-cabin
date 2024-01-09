import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

import styled from "styled-components";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <LoginLayout>
      <p>email: posij58152@eazenity.com</p>
      <p>pass: 11111111</p>
      <Logo />
      <Heading as="h4">Login in your acount</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
