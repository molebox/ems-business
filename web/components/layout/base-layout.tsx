import { styled } from "../../stitches.config";
import Header from "./header";
import { Main } from "./main";

const Root = styled('div', {
  backgroundColor: '$white',
  height: '100vh',
  paddingLeft: '2rem',
  paddingRight: '2rem',
});

export function BaseLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <Root>
      <Header/>
      <Main>
        {children}
      </Main>
    </Root>
  );
}