import * as React from "react";
import * as RadixAvatar from '@radix-ui/react-avatar';
import { styled } from "../stitches.config";

const Root = styled(RadixAvatar.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: 45,
  height: 45,
  border: "1px solid black",
  borderRadius: "100%",
});

const Fallback = styled(RadixAvatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "blue",
  color: 'white',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500
});

const Img = styled('span', {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

interface Props {
  children: React.ReactNode;
}

export function Avatar({children}: Props) {
  return (
    <Root>
      <Img>
      {children}
      </Img>
      <Fallback delayMs={600}/>
    </Root>
  );
} 