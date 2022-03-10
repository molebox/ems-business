import { styled } from '../../stitches.config';

const MainContent = styled('main', {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridRowGap: "2rem",
  gridTemplateRows: "50vh auto auto auto",
  paddingBottom: "1rem",
  maxWidth: "1440px",
})

export function Main({ children }: React.PropsWithChildren<{}>) {
  return (
    <MainContent>
      {children}
    </MainContent>
  );
}