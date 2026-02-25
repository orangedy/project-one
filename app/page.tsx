import { CollectorBeacon } from "./components/collector-beacon";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#ffffff"
      }}
    >
      加载中
      <CollectorBeacon />
    </main>
  );
}
