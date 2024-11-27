import { Button } from "@repo/ui/components/ui/button";
import PageText from "@repo/ui/components/pagetext";
export default function Home() {
  return (
    <>
    <Button alertMessage="button clicked" variant="destructive">Click Me</Button>;
    <PageText />
    </>
  )
}
